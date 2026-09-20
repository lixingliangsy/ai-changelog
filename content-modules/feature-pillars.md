# AI Changelog — Feature pillars

## Core engine
- Turn commits and PRs into human-readable release notes (Keep a Changelog style).
- Group notable changes; avoid shipping raw `git log` noise.
- Version-aware drafts aligned with Semantic Versioning labels.

## Workflow ownership
- 3-step pipeline: collect → curate → publish-ready entry.
- Deterministic rule checks (CL-01…CL-06) with rulesetVersion on every run.
- Run history via `/api/runs` + feedback loop.

## Trust & honesty
- Decision-support only — you review before publish.
- No claim of 100% commit coverage or automatic SemVer correctness.
