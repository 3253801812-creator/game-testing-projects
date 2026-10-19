#!/usr/bin/env python3
import os
import json
import signal
import subprocess
import sys
import tempfile
import time


def parse_json_output(stdout, stderr):
    """从 web_ut.py 输出中提取 JSON，允许前面带少量日志。"""
    stdout = stdout.strip()
    if not stdout:
        return {"error": "Empty output", "stderr": stderr}
    try:
        return json.loads(stdout)
    except json.JSONDecodeError:
        positions = [p for p in (stdout.find("{"), stdout.find("[")) if p != -1]
        if positions:
            try:
                return json.loads(stdout[min(positions):])
            except Exception:
                pass
        return {"error": "Invalid JSON output", "stdout": stdout, "stderr": stderr}


def _kill_stale_chromium():
    """清理上一套 Playwright 样本遗留的无头 Chromium，不影响当前 Python。"""
    try:
        result = subprocess.run(
            ["pgrep", "-f", "^/usr/lib/chromium/chromium"],
            capture_output=True, text=True, timeout=3,
        )
        for token in result.stdout.split():
            try:
                os.kill(int(token), signal.SIGKILL)
            except (ProcessLookupError, ValueError, PermissionError):
                pass
    except Exception:
        pass


def _run_one(cmd, timeout_s=180):
    """输出落盘 + 系统 timeout；避免大 JSON/Playwright 子进程占满管道。"""
    # 使用 Python 原生 timeout，避免 Windows 上 timeout.exe 语法不兼容
    with tempfile.TemporaryFile(mode="w+", encoding="utf-8", errors="ignore") as out_f, \
         tempfile.TemporaryFile(mode="w+", encoding="utf-8", errors="ignore") as err_f:
        try:
            proc = subprocess.run(cmd, stdout=out_f, stderr=err_f, timeout=timeout_s)
            out_f.seek(0); err_f.seek(0)
            return proc.returncode, out_f.read(), err_f.read()
        except subprocess.TimeoutExpired:
            out_f.seek(0); err_f.seek(0)
            stdout, stderr = out_f.read(), err_f.read()
            raise subprocess.TimeoutExpired(cmd, timeout_s, output=stdout, stderr=stderr)


def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(base_dir)
    repo_root = os.path.join(base_dir, "repo_files")
    if not os.path.exists(repo_root):
        print(f"ERROR: repo_files not found: {repo_root}")
        sys.exit(1)

    results = []
    for repo_name in sorted(os.listdir(repo_root)):
        target_dir = os.path.join(repo_root, repo_name)
        if not os.path.isdir(target_dir):
            continue
        print(f"Testing {repo_name}...", flush=True)
        # 当前交付以 repo/<name>/play.html 作为正式单文件入口。
        # 优先直接评测该入口，避免外部 npm registry/localhost 策略把整款样本在 Layer 1 之前清零。
        play_entry = os.path.join(target_dir, "play.html")
        if os.path.isfile(play_entry):
            cmd = [sys.executable, "web_ut.py", "--target_dir", play_entry]
        else:
            cmd = [sys.executable, "web_ut.py", "--target_dir", target_dir, "--build"]
        report = None
        for attempt in range(2):
            time.sleep(0.05)
            try:
                code, stdout, stderr = _run_one(cmd, timeout_s=180)
                report = parse_json_output(stdout, stderr)
                if code != 0 and "error" not in report:
                    report.setdefault("runner_returncode", code)
                break
            except subprocess.TimeoutExpired:
                if attempt == 1:
                    report = {"error": "web_ut timeout after retry"}
            except Exception as exc:
                if attempt == 1:
                    report = {"error": str(exc)}
        results.append({"repo": repo_name, "report": report or {"error": "unknown runner error"}})

    output_file = os.path.join(base_dir, "results.json")
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print("done -> results.json", flush=True)


if __name__ == "__main__":
    main()
