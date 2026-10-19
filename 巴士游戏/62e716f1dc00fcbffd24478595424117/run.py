#!/usr/bin/env python3
from __future__ import annotations

import json
import os
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from typing import Any

BASE_DIR = Path(__file__).resolve().parent
MAPPING_PATH = BASE_DIR / 'mapping.json'
PROJECT_ID = '62e716f1dc00fcbffd24478595424117'
BUILD_WORKERS = max(1, min(3, int(os.getenv('BUS_BUILD_WORKERS', '3'))))
EVAL_WORKERS = max(1, min(3, int(os.getenv('BUS_EVAL_WORKERS', '2'))))


def parse_json_output(stdout: str, stderr: str) -> dict[str, Any]:
    content = stdout.strip()
    if not content:
        return {'error': 'Empty output', 'stderr': stderr.strip()}
    try:
        parsed = json.loads(content)
        return parsed if isinstance(parsed, dict) else {'error': 'Unexpected JSON root'}
    except json.JSONDecodeError:
        start = content.find('{')
        if start >= 0:
            try:
                parsed, _ = json.JSONDecoder().raw_decode(content[start:])
                if isinstance(parsed, dict):
                    return parsed
            except json.JSONDecodeError:
                pass
        return {'error': 'Invalid JSON output', 'stdout': content[-4000:], 'stderr': stderr.strip()[-2000:]}


def metadata():
    raw = json.loads(MAPPING_PATH.read_text(encoding='utf-8'))
    texts = {str(r['id']): str(r['text']) for r in raw['rubrics']}
    kinds = {str(r['id']): str(r['kind']) for r in raw['rubrics']}
    return PROJECT_ID, str(raw['game_type']), texts, kinds


def concise_reason(kind: str, score: int, text: str, detail: str = '') -> str:
    if kind == 'vlm' and score == -100:
        detail = ' '.join(detail.split())[:280]
        return f'未完成：VLM 调用失败或超时，无法判定「{text}」。' + (f' 原因：{detail}' if detail else '')
    if score == 1:
        return f'通过：{"VLM 截图确认" if kind == "vlm" else "自动化断言确认"}「{text}」。'
    return f'未通过：{"VLM 截图未确认" if kind == "vlm" else "自动化断言未满足"}「{text}」。'


def normalized_scores(raw, texts, kinds):
    sf = raw.get('func_score') if isinstance(raw.get('func_score'), dict) else {}
    sv = raw.get('vlm_score') if isinstance(raw.get('vlm_score'), dict) else {}
    func, vlm = {}, {}
    for rid, text in texts.items():
        if kinds[rid] == 'vlm':
            v = sv.get(text, -100)
            vlm[text] = v if type(v) is int and v in {-100,0,1} else -100
        else:
            v = sf.get(text, 0)
            func[text] = v if type(v) is int and v in {0,1} else 0
    return func, vlm


def normalize_report(raw, texts, kinds, build_ok: bool, rc: int):
    func, vlm = normalized_scores(raw, texts, kinds)
    detail = raw.get('layer1_detail') if isinstance(raw.get('layer1_detail'), dict) else {}
    out = {
        'layer1_pass': bool(raw.get('layer1_pass')) if 'error' not in raw else False,
        'layer1_detail': {
            'loadable': bool(raw.get('layer1_pass')) if 'error' not in raw else False,
            'fatal_console_errors': list(detail.get('fatal_console_errors', [])) if 'error' not in raw else [str(raw.get('error'))],
        },
        'items': [], 'build_ok': build_ok, 'evaluator_return_code': rc,
        'func_score': func, 'vlm_score': vlm,
        'func_passed': sum(func.values()), 'vlm_passed': sum(vlm.values()),
    }
    for src in raw.get('items', []) if isinstance(raw.get('items'), list) else []:
        if not isinstance(src, dict):
            continue
        try: rid = int(src.get('id'))
        except Exception: rid = src.get('id')
        kind = str(src.get('kind','det'))
        score = src.get('score',0)
        text = texts.get(str(rid), f'规则 {rid}')
        item = {'id': rid, 'kind': kind, 'score': score, 'reason': concise_reason(kind, score, text, str(src.get('reason','')))}
        if kind == 'vlm' and src.get('image'):
            item['image'] = str(src['image']).replace('\\','/')
        out['items'].append(item)
    out['items'].sort(key=lambda x: (isinstance(x['id'], str), x['id']))
    return out


def build_repo(repo: Path) -> tuple[bool, str]:
    env = dict(os.environ)
    npm = 'npm.cmd' if os.name == 'nt' else 'npm'
    try:
        if not (repo/'node_modules').is_dir():
            subprocess.run([npm,'install','--include=dev','--no-audit','--no-fund'], cwd=repo, env=env, check=True, timeout=600, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, errors='ignore')
        completed = subprocess.run([npm,'run','build'], cwd=repo, env=env, check=True, timeout=300, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, errors='ignore')
        ok = (repo/'dist'/'index.html').is_file()
        return ok, completed.stdout[-1500:]
    except Exception as exc:
        return False, repr(exc)


def evaluate(repo: Path) -> tuple[int, dict[str, Any]]:
    target = repo/'dist' if (repo/'dist'/'index.html').is_file() else repo
    try:
        cp = subprocess.run([sys.executable,'web_ut.py','--target',str(target)], cwd=BASE_DIR, capture_output=True, text=True, encoding='utf-8', errors='ignore')
        return cp.returncode, parse_json_output(cp.stdout, cp.stderr)
    except Exception as exc:
        return 1, {'error': repr(exc)}


def main():
    os.chdir(BASE_DIR)
    repo_root = BASE_DIR/'repo_files'
    repos = [p for p in sorted(repo_root.iterdir(), key=lambda p:p.name) if p.is_dir()]
    prompt_id, game_type, texts, kinds = metadata()

    print(f'Building {len(repos)} repos with up to {BUILD_WORKERS} workers...')
    build_status: dict[str, tuple[bool,str]] = {}
    with ThreadPoolExecutor(max_workers=BUILD_WORKERS) as ex:
        futs = {ex.submit(build_repo,r): r for r in repos}
        for fut in as_completed(futs):
            repo=futs[fut]; build_status[repo.name]=fut.result(); print(f'  build {repo.name}: {"ok" if build_status[repo.name][0] else "FAILED"}')

    samples: dict[str, dict[str, Any]] = {}
    print(f'Evaluating with up to {EVAL_WORKERS} workers...')
    eval_repos=[r for r in repos if build_status.get(r.name,(False,''))[0]]
    eval_results: dict[str, tuple[int,dict[str,Any]]] = {}
    with ThreadPoolExecutor(max_workers=EVAL_WORKERS) as ex:
        futs={ex.submit(evaluate,r):r for r in eval_repos}
        for fut in as_completed(futs):
            r=futs[fut];eval_results[r.name]=fut.result();print(f'  eval {r.name}: rc={eval_results[r.name][0]}')

    for repo in repos:
        build_ok, build_log = build_status.get(repo.name,(False,'not built'))
        if build_ok:
            rc, raw = eval_results.get(repo.name,(1,{'error':'evaluator did not run'}))
        else:
            rc, raw = 1, {'error':'build failed: '+build_log}
        samples[repo.name]={'repo':repo.name, **normalize_report(raw,texts,kinds,build_ok,rc)}

    output={'id':PROJECT_ID,'prompt_id':PROJECT_ID,'game_type':game_type,'samples':samples}
    (BASE_DIR/'results.json').write_text(json.dumps(output,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print('done -> results.json')

if __name__=='__main__':
    main()
