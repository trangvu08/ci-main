import { PageHeader, Rule, Eyebrow } from '@/components/ui'
import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'About', description: 'Clarity Intelligence — the research problem, not the people. Anonymous by design.' }

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="The research problem, not the people."
        sub="Anonymous by design. No team photos, no founder bios. The work is the signal." />
      <Rule />
      <section style={{ padding: '80px 32px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--border)', borderLeft: '4px solid var(--gold)', padding: '28px 32px', marginBottom: 40 }}>
            <p style={{ fontSize: 17, fontFamily: 'var(--serif)', fontWeight: 400, lineHeight: 1.75, color: 'var(--ink)', fontStyle: 'italic', margin: 0 }}>
              "Companies kept asking 'which jobs will AI replace?' when the right question is 'how does AI change the task mix in our workflows?' That shift in framing changes everything — from vague automation scores to specific, defensible redesign roadmaps."
            </p>
          </div>
          <Eyebrow>The problem we're solving</Eyebrow>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.85, marginBottom: 22 }}>
            Traditional job evaluation frameworks — Mercer IPE, Hay/Korn Ferry — measure job size: how many people report to you, how large is your budget. This worked when human value was determined by information access and resource control.
          </p>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.85, marginBottom: 22 }}>
            In AI-augmented organisations, AI has access to more information than any individual — making information access a weak differentiator. What remains scarce and valuable is not what you know, but what you can do with what you know that AI cannot.
          </p>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.85, marginBottom: 48 }}>
            Clarity Intelligence built WORA-X to measure this. The result is a task-level database covering 6,699 tasks and 1,208 roles across 31 function families — and the CVI™ framework for scoring human irreplaceability against market compensation data.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginBottom: 40 }}>
            {[
              { t: 'Methodology-first', b: 'Every engagement starts from real workflow data — practitioner interviews, actual workflows, every task scored against a published rubric. Not JDs, not generic surveys.' },
              { t: 'Vietnam-calibrated', b: 'Built for Vietnam\'s specific context: labour law, SBV/MOF regulation, GCC dynamics, and AI adoption pace meaningfully different from global benchmarks.' },
              { t: 'Judgment-informed', b: 'Fully documented rubric, calibrated against 2.86M Mercer TRS records. Transparent about what is expert judgment versus what is algorithmic output.' },
              { t: 'Falsifiable', b: 'Validation is designed to be falsifiable. If deployment data contradicts the framework\'s predictions after 24 months, the scoring rubric will be revised.' },
            ].map(({ t, b }) => (
              <div key={t} style={{ background: 'var(--paper)', border: '1px solid var(--border)', padding: '24px 26px' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--gold)', marginBottom: 10 }}>{t}</div>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>{b}</p>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--border)', padding: '22px 26px', marginBottom: 32 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--gold)', marginBottom: 10 }}>INTELLECTUAL PROPERTY</div>
            <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
              WORA™, CVI™, and ALI™ are trademarks of Clarity Intelligence. The WORA methodology is publicly available for learning and non-commercial use. The CVI™ scoring engine, WORA-X Master Database, and ALI™ formula are proprietary and require a licensing agreement for commercial use.
            </p>
          </div>
          <Link href="/contact" style={{ padding: '10px 24px', background: 'var(--gold)', color: 'var(--paper)', fontSize: 13, fontWeight: 700, display: 'inline-block' }}>
            Work with us →
          </Link>
        </div>
      </section>
    </>
  )
}
