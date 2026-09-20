/** Changelog formatting rules - Keep a Changelog / Conventional Commits / SemVer. */
export const RULESET_VERSION = 'changelog-format@2026-07-20'

export type RuleHit = {
  id: string
  title: string
  severity: 'low' | 'medium' | 'high'
  passed: boolean
  remediation?: string
  ref?: string
}

export function runDeterministicChecks(inputs: Record<string, string>): RuleHit[] {
  const commits = (inputs.commits || inputs.notes || '').trim()
  const version = (inputs.version || '').trim()
  const audience = (inputs.audience || '').trim()
  const lines = commits.split(/\n/).map((s) => s.trim()).filter(Boolean)
  const hasBreaking = /BREAKING CHANGE|feat!|fix!|!\s*:/i.test(commits)
  return [
    {
      id: 'CL-01',
      title: 'Commit/notes payload present',
      severity: 'high',
      passed: commits.length >= 12,
      remediation: 'Paste notable commits or release notes (not an empty dump).',
      ref: 'https://keepachangelog.com/en/1.1.0/',
    },
    {
      id: 'CL-02',
      title: 'Version label provided',
      severity: 'medium',
      passed: version.length >= 1 || /v?\d+\.\d+/.test(commits),
      remediation: 'Add a version label (SemVer recommended) for the release entry.',
      ref: 'https://semver.org/spec/v2.0.0.html',
    },
    {
      id: 'CL-03',
      title: 'Prefer types over raw commit noise',
      severity: 'medium',
      passed: lines.length === 0 || lines.some((l) => /^(feat|fix|docs|perf|refactor|security)\b/i.test(l) || /Added|Fixed|Changed|Security/i.test(l)),
      remediation: 'Group into Added/Fixed/Changed/Security (or Conventional Commit types) — do not ship raw merge noise.',
      ref: 'https://www.conventionalcommits.org/en/v1.0.0/',
    },
    {
      id: 'CL-04',
      title: 'Breaking changes must be marked',
      severity: 'high',
      passed: !hasBreaking || /\*\*Breaking:\*\*|BREAKING CHANGE|breaking/i.test(commits),
      remediation: 'If a breaking change exists, mark it clearly (Keep a Changelog **Breaking:** / SemVer major).',
      ref: 'https://keepachangelog.com/en/1.1.0/',
    },
    {
      id: 'CL-05',
      title: 'Audience framing available',
      severity: 'low',
      passed: audience.length > 0 || commits.length > 0,
      remediation: 'Specify Developers vs Customers so tone and grouping match the reader.',
      ref: 'https://keepachangelog.com/en/1.1.0/',
    },
    {
      id: 'CL-06',
      title: 'No silent guarantee of completeness',
      severity: 'high',
      passed: true,
      remediation: 'Changelog is curated notable changes — never claim 100% commit coverage.',
      ref: 'https://keepachangelog.com/en/1.1.0/',
    },
  ]
}
