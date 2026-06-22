import Link from 'next/link'
import { PageHeader, Rule, Eyebrow } from '@/components/ui'
import { SUBDOMAINS } from '@/lib/constants'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Tools — Free Public Tools', description: 'Free public tools powered by WORA-X data. No account required.' }

export default function ToolsPage() {
  const externalBase = 'https://tools.clarityintelligence.co'
  return (
    <>
      <PageHeader eyebrow="Tools" title="Free intelligence tools, powered by WORA data."
        sub="All tools are grounded in WORA-X Master Database — 6,699 tasks, 1,208 roles, 31 function families. No account required." />
      <Rule />
      <section style={{ padding: '80px 32px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[
            { title: 'Homemaker Value Index', href: `${externalBase}/homemaker-value-index`, ext: true, tag: 'Free · Public', desc: 'What is the economic value of unpaid household labour? The HVI applies WORA-X task analysis and CVI scoring to domestic work — producing a defensible market-rate estimate. Used by researchers, journalists, and policy advocates.' },
            { title: 'Job Pricing Calculator', href: `${externalBase}/job-pricing`, ext: true, tag: 'Free · WORA-X demo', desc: 'Input a role description or job title → get a CVI-based human value score, AI exposure assessment, and market pay positioning. Powered by the WORA-X Master Database. Future product: full WORA Diagnostic.' },
            { title: 'Judgment Premium Report', href: '/tools/judgment-premium', ext: false, tag: 'Annual · Public research', desc: 'Annual research publication: how much is human judgment worth in an AI-augmented organisation? Quantifies the compensation premium associated with high-JQ roles across Vietnam\'s professional market.' },
          ].map(tool => (
            <Link key={tool.title} href={tool.href}
              target={tool.ext ? '_blank' : undefined}
              rel={tool.ext ? 'noopener noreferrer' : undefined}
              style={{ display: 'grid', gridTemplateColumns: '1fr auto', background: 'var(--paper)', border: '1px solid var(--border)', padding: '28px 30px', gap: 24, alignItems: 'center', transition: 'border-color 0.18s' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <h2 style={{ fontSize: 16, fontFamily: 'var(--sans)', fontWeight: 700, color: 'var(--ink)' }}>{tool.title}{tool.ext ? ' ↗' : ''}</h2>
                  <span style={{ fontSize: 10, padding: '2px 8px', background: 'var(--gold-bg)', color: 'var(--gold)', border: '1px solid var(--gold)', fontWeight: 700 }}>{tool.tag}</span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{tool.desc}</p>
              </div>
              <span style={{ fontSize: 13, color: 'var(--gold)', fontWeight: 700, whiteSpace: 'nowrap' }}>Open →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
