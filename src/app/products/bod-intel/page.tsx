import Link from 'next/link'
import { PageHeader, Rule, Eyebrow } from '@/components/ui'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'BOD Intelligence Tool', description: 'Board compensation analytics for institutional investors. CVI-based governance quality assessment.' }

export default function BODPage() {
  return (
    <>
      <PageHeader eyebrow="Products · BOD Intelligence" title="Board Compensation Intelligence"
        sub="CVI-based analytics for institutional investors evaluating governance quality and executive pay alignment in Vietnamese listed companies." />
      <Rule />
      <section style={{ padding: '80px 32px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--border)', borderLeft: '4px solid var(--gold)', padding: '24px 28px', marginBottom: 32 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--gold)', marginBottom: 10 }}>ACCESS</div>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.75, margin: '0 0 14px' }}>
              The BOD Intelligence Tool is available to institutional investors on request. Contact us to discuss access and coverage.
            </p>
            <Link href="/contact?ref=bod-intel" style={{ fontSize: 13, color: 'var(--gold)', fontWeight: 700 }}>Request access →</Link>
          </div>
          <Eyebrow>What it measures</Eyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {['Executive pay vs CVI-predicted AI-era human value — identifying overpriced or underpriced C-suite positions', 'Board human capital quality score — composition analysis against CVI axes for strategic judgment and accountability', 'Peer benchmarking — executive compensation vs comparable Vietnamese listed companies, adjusted for CVI', 'Governance red flags — pay structures that incentivise short-term extraction over long-term value creation', 'ESG-ready reporting — standardised output compatible with institutional ESG reporting frameworks'].map(item => (
              <div key={item} style={{ display: 'flex', gap: 14, padding: '14px 0', borderBottom: '1px solid var(--border)', alignItems: 'flex-start' }}>
                <span style={{ fontSize: 10, color: 'var(--gold)', fontWeight: 700, flexShrink: 0, paddingTop: 2 }}>→</span>
                <span style={{ fontSize: 13, color: 'var(--ink)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
