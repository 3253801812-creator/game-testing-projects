#!/usr/bin/env python3
"""Batch-run repo_files fixtures and overwrite results.json in delivery schema."""
from __future__ import annotations

import argparse
import json
import subprocess
import sys
from pathlib import Path
from typing import Any


EXPECTED_FIXTURES = ("good_1", "bad_1", "bad_2", "bad_3", "cheat_1")
# Implementation-stack compliance is expected across all fixtures and should not
# dilute gameplay/anti-cheat discrimination diagnostics.
CALIBRATION_NON_DISCRIMINATOR_IDS = {41, 42, 43, 44, 45, 48}


def parse_json_output(stdout: str, stderr: str) -> dict[str, Any]:
    text = (stdout or "").strip()
    if not text:
        return {"error": "empty output", "stderr": (stderr or "")[-4000:]}
    try:
        value = json.loads(text)
        return value if isinstance(value, dict) else {"error": "report is not an object"}
    except json.JSONDecodeError:
        starts = [p for p in (text.find("{"), text.find("[")) if p >= 0]
        if starts:
            try:
                value = json.loads(text[min(starts):])
                return value if isinstance(value, dict) else {"error": "report is not an object"}
            except Exception:
                pass
        return {
            "error": "invalid JSON output",
            "stdout": text[-8000:],
            "stderr": (stderr or "")[-8000:],
        }



def run_one(base: Path, target: Path, timeout: int, force_build: bool) -> dict[str, Any]:
    # Batch grading always hands the project directory to the Harness. For a
    # package-based Vite project, resolve_target() therefore performs the real
    # production build before browser grading. A generated play.html may remain
    # as an optional direct-play artifact, but it never substitutes for build
    # success in the normal delivery path.
    runtime_target = target
    cmd = [sys.executable, str(base / "web_ut.py"), "--target", str(runtime_target)]
    if force_build:
        cmd.append("--build")
    try:
        completed = subprocess.run(
            cmd,
            cwd=base,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            timeout=timeout,
            check=False,
        )
    except subprocess.TimeoutExpired:
        return {
            "layer1_pass": False,
            "layer1_detail": {"run_error": f"timeout>{timeout}s"},
            "items": [],
            "func_score": {},
            "vlm_score": {},
        }

    report = parse_json_output(completed.stdout, completed.stderr)
    if completed.returncode not in (0, None) and "error" not in report:
        detail = report.get("layer1_detail") if isinstance(report.get("layer1_detail"), dict) else {}
        detail.setdefault("process_error", f"web_ut.py exited with code {completed.returncode}")
        report["layer1_detail"] = detail
    return report


def clean_item(item: Any) -> dict[str, Any] | None:
    if not isinstance(item, dict):
        return None
    rubric_id = item.get("id")
    kind = item.get("kind")
    score = item.get("score")
    reason = item.get("reason")
    if not isinstance(rubric_id, int) or kind not in {"det", "vlm"}:
        return None
    if isinstance(score, bool) or not isinstance(score, int):
        return None
    cleaned: dict[str, Any] = {
        "id": rubric_id,
        "kind": kind,
        "score": score,
        "reason": str(reason or ""),
    }
    if kind == "vlm" and isinstance(item.get("image"), str) and item["image"]:
        cleaned["image"] = item["image"]
    return cleaned


def normalize_sample(name: str, report: dict[str, Any], rubrics: list[dict[str, Any]], base: Path) -> dict[str, Any]:
    detail = report.get("layer1_detail") if isinstance(report.get("layer1_detail"), dict) else {}
    execution_mode = detail.get("execution_mode")
    runtime_verified = detail.get("runtime_verified") is True
    fatal_console = detail.get("fatal_console_errors")
    if not isinstance(fatal_console, list):
        fatal_console = []

    expected = {
        int(rubric["id"]): rubric for rubric in rubrics
        if isinstance(rubric, dict) and isinstance(rubric.get("id"), int)
    }
    item_by_id: dict[int, dict[str, Any]] = {}
    for raw in report.get("items") or []:
        cleaned = clean_item(raw)
        if cleaned is not None and cleaned["id"] in expected and cleaned["id"] not in item_by_id:
            item_by_id[cleaned["id"]] = cleaned

    diagnostic = str(
        detail.get("run_error")
        or detail.get("resolve_or_build_error")
        or detail.get("browser_environment_error")
        or detail.get("run_checks_error")
        or report.get("error")
        or "运行器未返回该 Rubric 的运行时结果"
    )
    for rubric_id, rubric in expected.items():
        if rubric_id not in item_by_id:
            is_vlm = rubric.get("kind") == "vlm"
            item_by_id[rubric_id] = {
                "id": rubric_id,
                "kind": "vlm" if is_vlm else "det",
                "score": -100 if is_vlm else 0,
                "reason": f"未通过/未验证：{diagnostic}",
            }
    items = [item_by_id[rubric_id] for rubric_id in sorted(expected)]

    # Canonicalize VLM evidence to the current fixture. A batch result must
    # never retain a screenshot path produced by another fixture or a direct
    # play.html invocation. The Harness names fresh screenshots with the target
    # directory prefix; this fallback resolves the matching fixture image when
    # normalizing older/raw reports.
    image_root = base / "ut_images"
    for item in items:
        if item.get("kind") != "vlm":
            item.pop("image", None)
            continue
        rubric_id = int(item["id"])
        current = item.get("image") if isinstance(item.get("image"), str) else ""
        current_path = (base / current).resolve() if current and not Path(current).is_absolute() else Path(current) if current else None
        valid_current = bool(
            current_path
            and current_path.is_file()
            and current_path.parent == image_root.resolve()
            and current_path.name.startswith(f"{name}_r{rubric_id}_")
        )
        if not valid_current:
            candidates = sorted(image_root.glob(f"{name}_r{rubric_id}_*.png"))
            if candidates:
                item["image"] = candidates[-1].relative_to(base).as_posix()
            else:
                item.pop("image", None)

    func_score: dict[str, int] = {}
    vlm_score: dict[str, int] = {}
    for item in items:
        rubric = expected[item["id"]]
        text = str(rubric.get("text", item["id"]))
        if item["kind"] == "vlm":
            vlm_score[text] = int(item["score"])
        else:
            func_score[text] = int(item["score"])

    has_content = bool(report.get("layer1_pass")) and runtime_verified
    loadable = bool(has_content)

    return {
        "repo": name,
        "layer1_pass": bool(report.get("layer1_pass")) and runtime_verified,
        "layer1_detail": {
            "loadable": loadable,
            "fatal_console_errors": [str(value) for value in fatal_console],
        },
        "items": items,
        "func_score": func_score,
        "vlm_score": vlm_score,
    }


def failed_ids(sample: dict[str, Any]) -> tuple[int, ...]:
    return tuple(
        item["id"]
        for item in sample.get("items", [])
        if isinstance(item, dict) and item.get("score") != 1 and isinstance(item.get("id"), int)
    )



def validate_calibration(samples: dict[str, dict[str, Any]]) -> list[str]:
    issues: list[str] = []
    missing = [name for name in EXPECTED_FIXTURES if name not in samples]
    if missing:
        issues.append("missing fixtures: " + ", ".join(missing))
        return issues

    unverified = [
        name for name in EXPECTED_FIXTURES
        if not bool((samples[name].get("layer1_detail") or {}).get("loadable"))
    ]
    if unverified:
        issues.append("runtime calibration unavailable; unverified fixtures: " + ", ".join(unverified))
        return issues

    good = samples["good_1"]
    good_values = list(good.get("func_score", {}).values())
    if not good_values or any(value != 1 for value in good_values):
        issues.append("good_1 must pass all deterministic rubrics")
        return issues

    # Negative fixtures are calibrated on deterministic product-behavior rubrics.
    # Implementation-stack Rubrics R41-R45 and strict performance R48 are
    # genuine acceptance checks, but they are not intentional bad/cheat defect
    # dimensions; exclude them only from fixture-shape diagnostics.
    calibration_ids = {
        int(item["id"])
        for item in good.get("items", [])
        if isinstance(item, dict)
        and item.get("kind") == "det"
        and isinstance(item.get("id"), int)
        and int(item["id"]) not in CALIBRATION_NON_DISCRIMINATOR_IDS
    }
    rubric_total = len(calibration_ids)

    def passed_ids(sample: dict[str, Any]) -> set[int]:
        return {
            int(item["id"])
            for item in sample.get("items", [])
            if isinstance(item, dict) and item.get("kind") == "det" and isinstance(item.get("id"), int) and item.get("score") == 1
        }

    def failed_set(sample: dict[str, Any]) -> set[int]:
        return {
            int(item["id"])
            for item in sample.get("items", [])
            if isinstance(item, dict)
            and item.get("kind") == "det"
            and isinstance(item.get("id"), int)
            and int(item["id"]) in calibration_ids
            and item.get("score") != 1
        }

    def calibration_score(sample: dict[str, Any]) -> int:
        return sum(
            1
            for item in sample.get("items", [])
            if isinstance(item, dict)
            and item.get("kind") == "det"
            and isinstance(item.get("id"), int)
            and int(item["id"]) in calibration_ids
            and item.get("score") == 1
        )

    # R2/R40 are VLM-only; deterministic fixture calibration only requires the real
    # boot/menu flow and scenario navigation to remain usable.
    basic_playability = {1, 3}
    bad_names = ("bad_1", "bad_2", "bad_3")
    bad_failures: dict[str, set[int]] = {}
    for name in bad_names:
        sample = samples[name]
        score = calibration_score(sample)
        if rubric_total and score > int(rubric_total * 0.55):
            issues.append(f"{name} deterministic score is too high for a negative fixture: {score}/{rubric_total}")
        if not basic_playability.issubset(passed_ids(sample)):
            issues.append(f"{name} must preserve basic menu/scenario playability rubrics 1 and 3")
        bad_failures[name] = failed_set(sample)

    bad_union = set().union(*bad_failures.values())
    if rubric_total and len(bad_union) < int(rubric_total * 0.75):
        issues.append(f"bad fixtures collectively cover too few rubric failures: {len(bad_union)}/{rubric_total}")

    # Distinct negative fixtures need materially different pass/fail profiles,
    # but a fixture does not need an artificially exclusive failure if its set
    # is a genuine subset/superset of another defect profile. Pairwise symmetric
    # difference captures both unique failures and meaningful passes.
    minimum_pairwise_delta = max(3, round(rubric_total * 0.08))
    for i, left in enumerate(bad_names):
        for right in bad_names[i + 1:]:
            if len(bad_failures[left] ^ bad_failures[right]) < minimum_pairwise_delta:
                issues.append(
                    f"{left} and {right} failure sets are not sufficiently distinct: "
                    f"delta={len(bad_failures[left] ^ bad_failures[right])}/{rubric_total}, "
                    f"required>={minimum_pairwise_delta}"
                )

    cheat = samples["cheat_1"]
    cheat_score = calibration_score(cheat)
    if rubric_total and cheat_score > int(rubric_total * 0.35):
        issues.append(f"cheat_1 score is too high: {cheat_score}/{rubric_total}")
    if not basic_playability.issubset(passed_ids(cheat)):
        issues.append("cheat_1 must remain minimally playable through rubrics 1-3")
    if rubric_total and len(failed_set(cheat)) < int(rubric_total * 0.65):
        issues.append("cheat_1 must be rejected by a broad set of independent rubrics")

    return issues




def calibration_diagnostics(samples: dict[str, dict[str, Any]]) -> dict[str, Any]:
    """Summarize runtime discrimination without changing any Rubric score.

    This is derived only from browser-produced deterministic facts. It is useful
    for reviewing whether negative fixtures fail in meaningfully different
    places, but it never substitutes for or rescales the underlying results.
    """
    if any(name not in samples for name in EXPECTED_FIXTURES):
        return {"available": False, "reason": "missing expected fixtures"}
    if any(not bool((samples[name].get("layer1_detail") or {}).get("loadable")) for name in EXPECTED_FIXTURES):
        return {"available": False, "reason": "one or more fixtures were not runtime verified"}

    good = samples["good_1"]
    core_ids = sorted({
        int(item["id"])
        for item in good.get("items", [])
        if isinstance(item, dict)
        and item.get("kind") == "det"
        and isinstance(item.get("id"), int)
        and int(item["id"]) not in CALIBRATION_NON_DISCRIMINATOR_IDS
    })
    core_set = set(core_ids)

    def profile(sample: dict[str, Any]) -> tuple[set[int], set[int]]:
        passed: set[int] = set()
        failed: set[int] = set()
        for item in sample.get("items", []):
            if not isinstance(item, dict) or item.get("kind") != "det" or item.get("id") not in core_set:
                continue
            (passed if item.get("score") == 1 else failed).add(int(item["id"]))
        return passed, failed

    profiles: dict[str, dict[str, Any]] = {}
    profile_sets: dict[str, tuple[set[int], set[int]]] = {}
    good_passed, _ = profile(good)
    for name in EXPECTED_FIXTURES:
        passed, failed = profile(samples[name])
        profile_sets[name] = (passed, failed)
        profiles[name] = {
            "passed": len(passed),
            "total": len(core_ids),
            "failed_ids": sorted(failed),
            "margin_below_good": len(good_passed) - len(passed),
        }

    bad_names = ("bad_1", "bad_2", "bad_3")
    pairwise: dict[str, dict[str, Any]] = {}
    for index, left in enumerate(bad_names):
        left_failed = profile_sets[left][1]
        for right in bad_names[index + 1:]:
            right_failed = profile_sets[right][1]
            union = left_failed | right_failed
            xor = left_failed ^ right_failed
            pairwise[f"{left}_vs_{right}"] = {
                "symmetric_difference": len(xor),
                "different_ids": sorted(xor),
                "jaccard_distance": round(len(xor) / len(union), 4) if union else 0.0,
            }

    bad_failure_sets = [profile_sets[name][1] for name in bad_names]
    discriminator_ids = [
        rubric_id for rubric_id in core_ids
        if len({rubric_id in failures for failures in bad_failure_sets}) > 1
    ]
    all_bad_fail = sorted(set.intersection(*bad_failure_sets)) if bad_failure_sets else []
    any_bad_fail = sorted(set.union(*bad_failure_sets)) if bad_failure_sets else []
    cheat_passed = sorted(profile_sets["cheat_1"][0])

    return {
        "available": True,
        "basis": "runtime-verified gameplay/anti-cheat deterministic Rubrics only (implementation-stack R41-R45, VLM, and strict performance R48 excluded from fixture-shape diagnostics)",
        "core_rubric_ids": core_ids,
        "profiles": profiles,
        "bad_pairwise": pairwise,
        "bad_discriminator_ids": discriminator_ids,
        "bad_union_failed_ids": any_bad_fail,
        "all_bad_failed_ids": all_bad_fail,
        "cheat_passed_core_ids": cheat_passed,
    }

def main() -> int:
    parser = argparse.ArgumentParser(description="Batch-run front-end game fixtures")
    parser.add_argument("--target_dir", "--repo-root", dest="repo_root", default="repo_files")
    parser.add_argument("--target", action="append", default=[])
    parser.add_argument("--output", default="results.json")
    parser.add_argument("--build", action="store_true")
    parser.add_argument("--timeout", type=int, default=900)
    args = parser.parse_args()

    base = Path(__file__).resolve().parent
    mapping = json.loads((base / "mapping.json").read_text(encoding="utf-8"))

    if args.target:
        targets = [Path(value).expanduser().resolve() for value in args.target]
    else:
        repo_root = (base / args.repo_root).resolve()
        if not repo_root.is_dir():
            print(f"ERROR: repo_files not found: {repo_root}", file=sys.stderr)
            return 2
        by_name = {path.name: path for path in repo_root.iterdir() if path.is_dir()}
        targets = [by_name[name] for name in EXPECTED_FIXTURES if name in by_name]
        targets.extend(sorted(path for name, path in by_name.items() if name not in EXPECTED_FIXTURES))

    samples: dict[str, dict[str, Any]] = {}
    for target in targets:
        print(f"Testing {target.name}...")
        raw_report = run_one(base, target, args.timeout, args.build)
        samples[target.name] = normalize_sample(target.name, raw_report, mapping.get("rubrics", []), base)

    # Output as {prompt_id, game_type, samples: {name: {...}}} matching the reference format.
    ordered: dict[str, dict[str, Any]] = {}
    for name in EXPECTED_FIXTURES:
        if name in samples:
            ordered[name] = samples[name]
    for name in samples:
        if name not in ordered:
            ordered[name] = samples[name]
    payload = {
        "prompt_id": mapping.get("prompt_id", ""),
        "game_type": mapping.get("game_type", ""),
        "samples": ordered,
    }

    output = Path(args.output)
    if not output.is_absolute():
        output = base / output
    output.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"done -> {output.name}")


    issues = validate_calibration(samples) if not args.target else []
    unavailable = [issue for issue in issues if issue.startswith("runtime calibration unavailable;")]
    fatal_issues = [issue for issue in issues if issue not in unavailable]
    for issue in unavailable:
        print(f"CALIBRATION WARNING: {issue}", file=sys.stderr)
    for issue in fatal_issues:
        print(f"CALIBRATION ERROR: {issue}", file=sys.stderr)
    # External build/browser infrastructure can make calibration unavailable.
    # results.json already records that state truthfully; do not turn an
    # environment limitation into a Python process error. Real, runtime-verified
    # calibration defects remain fatal.
    return 1 if fatal_issues else 0


if __name__ == "__main__":
    raise SystemExit(main())
