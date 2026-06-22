import { PageHeader, Rule, Eyebrow } from '@/components/ui'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Judgment Premium Report 2026', description: 'Annual research: how much is human judgment worth in an AI-augmented organisation?' }

export default function JudgmentPremiumPage() {
  return (
    <>
      <PageHeader eyebrow="Tools · Annual Research" title="The Judgment Premium Report 2026"
        sub="How much is human judgment worth in an AI-augmented organisation? Quantifying the compensation premium for high-JQ roles across Vietnam's professional market." />
      <Rule />
      <section style={{ padding: '80px 32px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Eyebrow>Key Finding</Eyebrow>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--border)', borderLeft: '4px solid var(--gold)', padding: '28px 32px', marginBottom: 40 }}>
            <p style={{ fontSize: 17, fontFamily: 'var(--serif)', fontWeight: 400, lineHeight: 1.7, color: 'var(--ink)', fontStyle: 'italic', margin: 0 }}>
              "Roles with JQ=4–5 (Strategic and Paradigm Judgment) command a 34–67% compensation premium over JQ=1–2 roles at the same career level. That premium is growing — not shrinking — as AI handles more execution tasks."
            </p>
            <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 14 }}>— Clarity Intelligence, Judgment Premium Report 2026</p>
          </div>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--border)', padding: '24px 28px', textAlign: 'center' }}>
            <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>Full report available</div>
            <a href="mailto:hello@clarityintelligence.co" style={{ padding: '10px 24px', background: 'var(--gold)', color: 'var(--paper)', fontSize: 13, fontWeight: 700, display: 'inline-block' }}>
              Request report →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
