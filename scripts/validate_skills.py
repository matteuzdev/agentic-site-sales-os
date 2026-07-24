from __future__ import annotations

import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SKILLS = ROOT / "skills"
NAME_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
LINK_RE = re.compile(r"\[[^\]]+\]\((?!https?://|mailto:|#)([^)]+)\)")


def frontmatter(text: str) -> dict[str, str]:
    if not text.startswith("---\n"):
        raise ValueError("missing YAML frontmatter")
    closing = text.find("\n---\n", 4)
    if closing < 0:
        raise ValueError("unclosed YAML frontmatter")

    result: dict[str, str] = {}
    for line in text[4:closing].splitlines():
        if ":" not in line:
            raise ValueError(f"invalid frontmatter line: {line!r}")
        key, value = line.split(":", 1)
        result[key.strip()] = value.strip()
    return result


def validate_skill(skill_dir: Path) -> list[str]:
    errors: list[str] = []
    skill_file = skill_dir / "SKILL.md"

    if not skill_file.exists():
        return [f"{skill_dir}: missing SKILL.md"]

    text = skill_file.read_text(encoding="utf-8")
    try:
        metadata = frontmatter(text)
    except ValueError as exc:
        return [f"{skill_file}: {exc}"]

    if set(metadata) != {"name", "description"}:
        errors.append(f"{skill_file}: frontmatter must contain only name and description")

    name = metadata.get("name", "")
    if not NAME_RE.fullmatch(name):
        errors.append(f"{skill_file}: invalid skill name {name!r}")
    if name != skill_dir.name:
        errors.append(f"{skill_file}: name {name!r} does not match folder {skill_dir.name!r}")
    if not metadata.get("description"):
        errors.append(f"{skill_file}: description is empty")
    if "[TODO" in text or "TODO:" in text:
        errors.append(f"{skill_file}: unresolved TODO")

    for markdown_file in skill_dir.rglob("*.md"):
        markdown = markdown_file.read_text(encoding="utf-8")
        for raw_target in LINK_RE.findall(markdown):
            target = raw_target.split("#", 1)[0].replace("%20", " ")
            if target and not (markdown_file.parent / target).resolve().exists():
                errors.append(f"{markdown_file}: broken local link {raw_target!r}")

    return errors


def main() -> int:
    if not SKILLS.exists():
        print(f"Skills directory not found: {SKILLS}", file=sys.stderr)
        return 1

    skill_dirs = sorted(path for path in SKILLS.iterdir() if path.is_dir())
    errors = [error for skill in skill_dirs for error in validate_skill(skill)]

    if errors:
        print("Validation failed:")
        for error in errors:
            print(f" - {error}")
        return 1

    print(f"Validated {len(skill_dirs)} skills successfully.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
