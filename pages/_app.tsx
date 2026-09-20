import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import ChatWidget from '../components/ChatWidget'
import { SUPPORT } from '../lib/support.config'

export default function App({ Component, pageProps }: AppProps) {
  return       <><Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Changelog" />
        <meta property="og:description" content="Connect your repo and generate clear, professional release notes from commits and PRs — no manual changelog maintenance." />
        <meta property="og:url" content="https://ai-changelog.lxsaihub.com/" />
        <meta property="og:image" content="https://ai-changelog.lxsaihub.com/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Changelog" />
        <meta name="twitter:description" content="Connect your repo and generate clear, professional release notes from commits and PRs — no manual changelog maintenance." />
        <meta name="twitter:image" content="https://ai-changelog.lxsaihub.com/og.png" />
                                        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"SoftwareApplication","name":"AI Changelog","url":"https://ai-changelog.lxsaihub.com/","description":"Connect your repo and generate clear, professional release notes from commits and PRs — no manual changelog maintenance.","applicationCategory":"BusinessApplication","operatingSystem":"Web"}' }} />
      </Head>
      <Component {...pageProps} />
      <ChatWidget productName={SUPPORT.productName} brandColor={SUPPORT.brandColor} sessionKeyPrefix={SUPPORT.productSlug} /></>
}
