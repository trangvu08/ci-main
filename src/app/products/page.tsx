import Link from 'next/link'
import { PageHeader, Rule, Eyebrow } from '@/components/ui'
import { SUBDOMAINS } from '@/lib/constants'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Products', description: 'Salary Check VN, BOD Intelligence, and Rewards Engine — Clarity Intelligence product suite.' }

export default function ProductsPage() {
  return (
    <>
      <PageHeader eyebrow="Products" title="Built for specific audiences." sub="Each product serves a distinct use case. Independently deployable, independently shareable — no one-size-fits-all." />
      <Rule />
      <section style={{ padding: '80px 32px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[
            { title: 'Salary Check VN', href: 'https://salary.clarityintelligence.co', ext: true, audience: 'VN professionals', domain: 'salary.clarityintelligence.co', desc: 'Tell Vietnam professionals exactly where their salary sits (percentile), what skills they\'re missing, and what to do next — using real market data, not vague ranges. Free tier available. No CI branding in Vietnamese UX.', features: ['Salary P25/P50/P75/P90', '8 skill assessments', 'Career pathing', '2-year salary forecast', 'Shareable result card'] },
            { title: 'BOD Intelligence Tool', href: '/products/bod-intel', ext: false, audience: 'Institutional investors', domain: 'Gated · Request access', desc: 'Board compensation analytics for institutional investors evaluating governance quality and executive pay alignment in Vietnamese listed companies. CVI-based assessment of board human capital quality.', features: ['Executive pay vs CVI alignment', 'Governance quality score', 'Peer benchmarking', 'ESG-ready reporting'] },
            { title: 'Rewards Engine', href: 'https://rewards.clarityintelligence.co', ext: true, audience: 'B2B / HR teams', domain: 'rewards.clarityintelligence.co', desc: 'Full Dynamic Pay Engine implementation suite for clients with active Clarity Intelligence engagements. Job evaluation, pay structure design, market benchmarking, and reporting — all formula-driven and employee-verifiable.', features: ['CVI-based job evaluation', 'Pay structure design', 'Market benchmarking', 'Reporting & export', 'Employee self-service'] },
          ].map(prod => (
            <div key={prod.title} style={{ background: 'var(--paper)', border: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ padding: '36px 32px', borderRight: '1px solid var(--border)' }}>
                <div style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 700, letterSpacing: '0.14em', marginBottom: 10 }}>{prod.audience.toUpperCase()}</div>
                <h2 style={{ fontSize: 22, fontFamily: 'var(--serif)', fontWeight: 400, color: 'var(--ink)', marginBottom: 8 }}>{prod.title}</h2>
                <div style={{ fontSize: 11, color: 'var(--gold)', fontFamily: 'var(--mono)', marginBottom: 16 }}>{prod.domain}</div>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75, marginBottom: 20 }}>{prod.desc}</p>
                <Link href={prod.href} target={prod.ext ? '_blank' : undefined} rel={prod.ext ? 'noopener noreferrer' : undefined}
                  style={{ padding: '9px 20px', background: 'var(--gold)', color: 'var(--paper)', fontSize: 12, fontWeight: 700, display: 'inline-block' }}>
                  {prod.ext ? 'Open product ↗' : 'Learn more →'}
                </Link>
              </div>
              <div style={{ padding: '36px 32px' }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--muted)', marginBottom: 16 }}>KEY FEATURES</div>
                {prod.features.map(f => (
                  <div key={f} style={{ display: 'flex', gap: 10, padding: '10px 0', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
                    <span style={{ fontSize: 10, color: 'var(--gold)', fontWeight: 700 }}>→</span>
                    <span style={{ fontSize: 13, color: 'var(--ink)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
