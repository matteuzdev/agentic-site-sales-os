# Contributing

Thank you for helping improve Agentic Site Sales OS.

## Principles

- Keep the orchestrator progressive: one stage and few questions at a time.
- Preserve facts from the prospect. Never invent proof, credentials or results.
- Keep the workflow tool-agnostic unless a capability is genuinely exclusive.
- Prefer measured funnel evidence over motivational sales claims.
- Put specialist detail in references or specialist skills, not in the orchestrator.

## Workflow

1. Create a focused branch.
2. Change the smallest relevant skill or reference.
3. Run `python scripts/validate_skills.py`.
4. Test the changed behavior with a realistic user request.
5. Open a pull request describing the behavior before and after.

## Pull request checklist

- [ ] Skill metadata still describes all valid trigger contexts.
- [ ] No unresolved placeholders or invented business facts were introduced.
- [ ] Local Markdown links resolve.
- [ ] The change does not create an unnecessary provider dependency.
- [ ] The user receives fewer or clearer decisions, not more cognitive load.
- [ ] Validation passes.

Do not commit real lead data, private messages, credentials, contracts or payment information.
