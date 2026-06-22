import Link from 'next/link'
import { PageHeader, Rule, Eyebrow } from '@/components/ui'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Writing', description: 'Research notes, data dispatches, and WORA Working Group updates from Clarity Intelligence.' }

export default function WritingPage() {
  return (
    <>
      <PageHeader eyebrow="Writing" title="Research notes & data dispatches."
        sub="Two formats: long-form Research Notes (monthly or less) and short Data Dispatches (can be weekly). WORA Working Group for community updates." />
      <Rule />
      <section style={{ padding: '80px 32px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}>
          {[
            { tag: 'Research Notes', href: '/writing/research', desc: 'Long-form, by topic. Deep analysis of AI-era workforce dynamics, methodology explainers, and original research. Monthly or less.' },
            { tag: 'Data Dispatches', href: '/writing/data-dispatches', desc: 'Short, recurring. Quick quantitative observations from the WORA-X database. Things that surprised us. Can be weekly.' },
            { tag: 'WORA Working Group', href: '/writing/wora-working-group', desc: 'Community updates. Methodology notes, database changes, and discussions with practitioners who are building alongside the framework.' },
          ].map(col => (
            <Link key={col.tag} href={col.href} style={{ background: 'var(--paper)', border: '1px solid var(--border)', borderTop: '3px solid var(--gold)', padding: '32px 28px', display: 'block', transition: 'background 0.18s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-bg)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--paper)')}>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 14 }}>{col.tag}</div>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 20 }}>{col.desc}</p>
              <span style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 700 }}>Browse →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
