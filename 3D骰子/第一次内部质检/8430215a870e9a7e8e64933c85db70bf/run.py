#!/usr/bin/env python3
from __future__ import annotations

import json
import os
import signal
import subprocess
import sys
import tempfile
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path


def parse_json_output(stdout: str, stderr: str) -> dict:
    text = (stdout or "").strip()
    if not text:
        return {"error": "Empty output", "stderr": (stderr or "").strip()}
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        # Accept a final JSON report after optional diagnostic lines.
        marker = text.rfind('\n{')
        candidates = [text[marker + 1 :]] if marker >= 0 else []
        first_obj = text.find('{')
        if first_obj >= 0:
            candidates.append(text[first_obj:])
        for candidate in candidates:
            try:
                return json.loads(candidate)
            except Exception:
                continue
    return {
        "error": "Invalid JSON output",
        "stdout": text[-4000:],
        "stderr": (stderr or "").strip()[-4000:],
    }


def evaluate(base_dir: Path, repo_name: str, timeout_s: int) -> tuple[str, dict]:
    target = base_dir / "repo_files" / repo_name
    cmd = [sys.executable, str(base_dir / "web_ut.py"), "--target", str(target)]
    env = os.environ.copy()
    env["PYTHONIOENCODING"] = "utf-8"
    with tempfile.TemporaryDirectory(prefix=f"3d-dice-{repo_name}-", ignore_cleanup_errors=True) as tmp:
        out_path = Path(tmp) / "stdout.json"
        err_path = Path(tmp) / "stderr.log"
        with out_path.open("w", encoding="utf-8") as out, err_path.open("w", encoding="utf-8") as err:
            proc = subprocess.Popen(
                cmd,
                cwd=base_dir,
                stdout=out,
                stderr=err,
                text=True,
                encoding="utf-8",
                env=env,
                start_new_session=True,
            )
            timed_out = False
            try:
                proc.wait(timeout=timeout_s)
            except subprocess.TimeoutExpired:
                timed_out = True
                try:
                    os.killpg(proc.pid, signal.SIGTERM)
                    proc.wait(timeout=5)
                except Exception:
                    try:
                        os.killpg(proc.pid, signal.SIGKILL)
                    except Exception:
                        pass
        stdout = out_path.read_text(encoding="utf-8", errors="replace")
        stderr = err_path.read_text(encoding="utf-8", errors="replace")

    report = parse_json_output(stdout, stderr)
    if timed_out and "error" in report:
        report["error"] = f"Evaluator timeout after {timeout_s}s before a complete JSON report"
    elif proc.returncode not in (0, None) and "error" in report:
        report.setdefault("exit_code", proc.returncode)
    return repo_name, report


def main() -> int:
    base_dir = Path(__file__).resolve().parent
    repo_root = base_dir / "repo_files"
    if not repo_root.is_dir():
        print(f"ERROR: repo_files not found: {repo_root}", file=sys.stderr)
        return 1

    names = sorted(p.name for p in repo_root.iterdir() if p.is_dir() and not p.name.startswith('.'))
    selected = [x.strip() for x in os.getenv("SAMPLES", "").split(',') if x.strip()]
    if selected:
        unknown = sorted(set(selected) - set(names))
        if unknown:
            print(f"ERROR: unknown sample(s): {', '.join(unknown)}", file=sys.stderr)
            return 2
        names = [n for n in names if n in set(selected)]

    timeout_s = max(30, int(os.getenv("SAMPLE_TIMEOUT", "100")))
    workers = max(1, min(int(os.getenv("MAX_WORKERS", "1")), max(1, len(names))))
    reports: dict[str, dict] = {}

    if workers == 1:
        for name in names:
            print(f"Testing {name}...", flush=True)
            repo_name, report = evaluate(base_dir, name, timeout_s)
            reports[repo_name] = report
    else:
        with ThreadPoolExecutor(max_workers=workers) as pool:
            future_map = {}
            for name in names:
                print(f"Testing {name}...", flush=True)
                future_map[pool.submit(evaluate, base_dir, name, timeout_s)] = name
            for future in as_completed(future_map):
                repo_name, report = future.result()
                reports[repo_name] = report

    results = [{"repo": name, "report": reports[name]} for name in names]
    output_file = base_dir / "results.json"
    output_file.write_text(json.dumps(results, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"done -> {output_file}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
