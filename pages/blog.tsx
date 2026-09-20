import Head from 'next/head'

import { buildFaqJsonLd, buildHowToJsonLd } from '../lib/schema'

const NAME = "AI Changelog"

const faqs = [
  {
    "question": "What is AI Changelog?",
    "answer": "AI Changelog turns recent commits and pull-request notes into human-readable release notes. It groups notable changes by type and orders them latest-first, following the structure of the Keep a Changelog convention, so you stop formatting CHANGELOG.md by hand."
  },
  {
    "question": "How is this different from dumping the git log?",
    "answer": "A raw commit log is a build artifact, not a changelog: it is noisy, ungrouped, and full of internal churn. AI Changelog curates the notable changes and groups them so a reader can see what actually shipped and what it means for them."
  },
  {
    "question": "Does it follow Keep a Changelog and Semantic Versioning?",
    "answer": "The output structure follows Keep a Changelog — latest first, grouped change types, version labels. Semantic Versioning still decides what major, minor, and patch mean for your public API; the tool drafts the notes, it does not invent your versioning contract."
  },
  {
    "question": "What do I need to provide?",
    "answer": "Three inputs: your recent commits or notes, the version label you are shipping, and the audience (for example developers, or end users). The audience changes the wording, not the facts."
  },
  {
    "question": "Does it publish the release for me?",
    "answer": "No. It drafts the notes text. You review, edit, and publish it wherever you keep releases. Keeping a human in the last step is deliberate — release notes are a public commitment."
  },
  {
    "question": "What are the limits?",
    "answer": "It summarizes only what you paste. If commit messages are vague, the notes will be vague. It does not verify that a change is actually complete, and it is not a substitute for release testing."
  }
] as { question: string; answer: string }[]

const howToBlocks = [
  {
    "name": "Draft release notes with AI Changelog",
    "steps": [
      {
        "name": "Collect the changes",
        "text": "Paste your recent commits or pull-request titles for the range you are shipping."
      },
      {
        "name": "Set version and audience",
        "text": "Give the version label you are releasing and pick the audience the notes should speak to."
      },
      {
        "name": "Review the grouped draft",
        "text": "Read the grouped notes, fix wording, drop internal-only changes, then publish."
      }
    ]
  }
] as { name: string; steps: { name: string; text: string }[] }[]

const posts = [
  { title: "What is AI Changelog — and when to use it", type: "HowTo", desc: "Plain terms: what it does, the problem it removes, and the three signs you need it." },
  { title: "How to draft release notes in 10 minutes", type: "HowTo", desc: "A first pass end to end: collect commits, pick a version, review the grouped draft." },
  { title: "What is Common changelog mistakes (and how to avoid them)?", type: "FAQPage", desc: "Grouping everything as 'Fixed', shipping raw commit spam, and forgetting the audience." },
  { title: "How does AI Changelog compare to writing release notes by hand?", type: "Article", desc: "Where the draft saves time, what still needs a human, and how the two fit together." },
] as { title: string; type: string; desc: string }[]

const glance = [
  "Input: recent commits or PR notes, a version label, and the audience",
  "Output: grouped release notes (Added / Changed / Fixed) in Keep a Changelog order",
  "Best for: teams shipping on a cadence who maintain a CHANGELOG.md by hand",
  "Limits: it can only summarize what you paste — vague commits give vague notes",
]

const articlesJsonLd = posts
  .filter((p) => p.type === 'Article')
  .map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.desc,
    inLanguage: 'en',
    author: { '@type': 'Organization', name: NAME },
    publisher: { '@type': 'Organization', name: NAME },
    about: NAME,
  }))

export default function Page() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://ai-changelog.lxsaihub.com/blog" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(faqs)) }}
        />
        {howToBlocks.map((block, i) => (
          <script
            key={`howto-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(buildHowToJsonLd(block.name, block.steps)),
            }}
          />
        ))}
        {articlesJsonLd.map((a, i) => (
          <script
            key={`article-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(a) }}
          />
        ))}

        <title>{NAME} — Blog</title>
        <meta name="description" content={{NAME} + ' — definitional and how-to posts, with the honest limits.'} />
      </Head>
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <header className="border-b border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="font-bold text-slate-900">{NAME}</a>
            <nav className="hidden md:flex gap-6 text-sm font-semibold text-slate-500">
              <a href="/use-cases" className="hover:text-slate-900">Use cases</a>
              <a href="/integrations" className="hover:text-slate-900">Integrations</a>
              <a href="/how-it-works" className="hover:text-slate-900">How it works</a>
              <a href="/security" className="hover:text-slate-900">Security</a>
              <a href="/blog" className="hover:text-slate-900">Blog</a>
            </nav>
          </div>
        </header>
        <main className="max-w-3xl mx-auto px-6 py-14">
          <h1 className="text-3xl font-bold text-slate-900">Blog</h1>
          <p className="mt-3 text-slate-600">Turn commits and pull requests into release notes people can actually read.</p>

          <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">What does {NAME} include at a glance?</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc pl-5">
              {glance.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </section>

          <h2 className="text-2xl font-bold mt-12 text-slate-900">What do people ask about {NAME}?</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((f) => (
              <details key={f.question} className="rounded-xl border border-slate-200 bg-white p-4">
                <summary className="font-semibold cursor-pointer text-slate-900">{f.question}</summary>
                <p className="mt-2 text-sm text-slate-600">{f.answer}</p>
              </details>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-2 text-slate-900">Which deep-dives should you read first?</h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            {posts.map((p) => (
              <article key={p.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="text-xs font-semibold text-indigo-600 mb-1">{p.type}</div>
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              </article>
            ))}
          </div>
        </main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-slate-500 flex flex-wrap gap-6">
            <a href="/security" className="hover:text-slate-900">Security</a>
            <a href="/use-cases" className="hover:text-slate-900">Use cases</a>
            <a href="/integrations" className="hover:text-slate-900">Integrations</a>
            <a href="/how-it-works" className="hover:text-slate-900">How it works</a>
            <a href="/blog" className="hover:text-slate-900">Blog</a>
          </div>
        </footer>
      </div>
    </>
  )
}
