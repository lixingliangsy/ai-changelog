export const PRODUCT = {
  toolTitle: "Try ai-changelog",
  ctaLabel: "Generate",
  resultLabel: "Result",
  priceMonthly: 29,
  priceYearly: 290,
  "name": "AI Changelog",
  "slug": "ai-changelog",
  "tagline": "Beautiful changelogs from git commits, automatically",
  "description": "Connect your repo and generate clear, professional release notes from commits and PRs — no manual changelog maintenance.",
  "features": [
    "Auto-track commits and PRs",
    "AI-written release notes",
    "Publish-ready changelog pages",
    "GitHub integration"
  ],
  inputs: [
    { key: "commits", label: "Recent commits or notes", type: "textarea", placeholder: "e.g. feat: add dark mode; fix: login crash" },
    { key: "version", label: "Version label", type: "input", placeholder: "e.g. 1.2.0" },
    { key: "audience", label: "Audience", type: "select", options: ["Developers", "Customers", "Internal"] }
  ] as { key: string; label: string; type: string; placeholder?: string; options?: string[] }[],
  definitionLead: "AI Changelog turns git commits and pull requests into human-readable release notes aligned with Keep a Changelog principles (curated notable changes for humans, not raw commit dumps) and Semantic Versioning signaling — so teams stop maintaining CHANGELOG.md by hand.",
  geoFaq: [
    { q: "How is this different from dumping git log?", a: "Keep a Changelog states changelogs are for humans and that commit-log diffs are noisy. AI Changelog curates notable changes across commits into grouped release notes." },
    { q: "Does it follow Keep a Changelog?", a: "Output is structured for humans (latest first, grouped change types, version labels). Official guide: keepachangelog.com/en/1.1.0/." },
    { q: "What about Semantic Versioning?", a: "You supply a version label; SemVer (semver.org) still decides major/minor/patch meaning. The tool drafts notes — it does not invent your public API contract." },
    { q: "Can Conventional Commits help?", a: "Conventional Commits / conventional-changelog can draft categories from commit types. Keep a Changelog still expects a human to choose what is notable." },
    { q: "Is this a GitHub Releases replacement?", a: "No. Hosted release notes are vendor-tied. Keep a Changelog recommends a portable file in the repo; this tool drafts that content for you to own." },
    { q: "Does it guarantee correctness?", a: "No. It is decision-support. You review before publish. See Security honesty note." },
  ],
  systemPrompt: "You are the AI engine for ai-changelog. AI Changelog turns git commits and pull requests into human-readable release notes aligned with Keep a Changelog principles (curated notable changes for humans, not raw commit dumps) and Semantic Versioning signaling \u2014 so teams stop maintaining CHANGELOG.md by hand. Follow the product inputs carefully. Output clear, structured English suitable to paste into the product UI. Do not invent user counts, guarantees, or medical/compliance certifications.",
  mock: (inputs: Record<string, string>): string => {
    const lines = Object.entries(inputs || {}).map(([k, v]) => k + ': ' + v)
    return 'ai-changelog DEMO\n\n' + (lines.join('\n') || 'No inputs') + '\n\n---\nPreview result. Add OPENAI_API_KEY for live AI.'
  },
}
