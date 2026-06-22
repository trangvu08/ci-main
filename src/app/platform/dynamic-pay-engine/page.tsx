import Link from 'next/link'
import { PageHeader, StatRow, Rule, Eyebrow } from '@/components/ui'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Dynamic Pay Engine', description: 'Contribution-based total rewards methodology. Formula-driven, employee-verifiable, skill-linked.' }

export default function DPEPage() {
  return (
    <>
      <PageHeader eyebrow="Platform · DPE" title="Dynamic Pay Engine"
        sub="Contribution-based total rewards methodology. Every coefficient pre-declared. Every KPI threshold defined before commitment. Skill mastery is a computable, permanent financial event." />
      <StatRow items={[
        { value: '3', label: 'Pay layers', sub: 'Core Pay + Project Scope + Annual Bonus' },
        { value: '3', label: 'Segments', sub: 'Operational · Professional · Capital' },
        { value: '6', label: 'Sections', sub: 'Architecture through implementation playbook' },
        { value: 'NDA', label: 'Distribution', sub: 'Full methodology under NDA' },
      ]} />
      <Rule />
      <section style={{ padding: '80px 32px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <Eyebrow>Three-Layer Pay Structure</Eyebrow>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--border)', padding: '28px', marginBottom: 40, textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(14px,2vw,20px)', fontFamily: 'var(--mono)', color: 'var(--ink)', lineHeight: 2.5 }}>
              <span style={{ color: 'var(--gold)' }}>Monthly Pay</span> = Core Pay + Project Scope + Annual Bonus<br/>
              <span style={{ color: 'var(--ink)' }}>Core Pay</span> = CS × alloc% × KPI%<br/>
              <span style={{ color: 'var(--ink)' }}>Project Scope</span> = market_rate × alloc% × <span style={{ color: 'var(--gold)' }}>gap_multiplier</span>
            </div>
          </div>
          <Eyebrow>Six Methodology Layers</Eyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 48 }}>
            {[
              { n: '01', title: 'WORA-X Task Analysis', badge: 'AI Layer', desc: 'Map every task to its AI impact level. Identify what is human-irreplaceable and what is at risk of automation. 6,699 tasks · 1,208 roles · 117 calibrated-tier.' },
              { n: '02', title: 'CVI v7 — Human Value Scoring', badge: 'Valuation', desc: 'Five axes: Value Type, Judgment Quality, Context Depth, Accountability Radius, Output Scope. CVI = VT⁰·⁴ × JQ × CD⁰·⁵ × AR⁰·⁶ × OS⁰·³' },
              { n: '03', title: 'Mercer IPE Bridge', badge: 'Market Data', desc: 'Bidirectional CVI ↔ PC_LEVEL conversion. r = 0.946 across 2.86M records. Works with your existing Mercer data — no re-evaluation required.' },
              { n: '04', title: 'KPI Engine — BSC × Parmenter', badge: 'Measurement', desc: 'CVI axes drive KPI selection. Balanced Scorecard structure. Parmenter 10/80/10 framework: true KPIs are nonfinancial, daily/weekly, and action-forcing.' },
              { n: '05', title: 'Dynamic Pay Calculation', badge: 'Calculation', desc: 'Monthly: Core Pay + Project Scope. Annual: Performance Bonus via must-have gates + weighted KPI achievement. Option C logic — gate fail = bonus zero.' },
              { n: '06', title: 'Employee Self-Service', badge: 'Transparency', desc: 'Every employee models their own pay at 90%, 100%, or 120% achievement before committing. Annual total compensation statement.' },
            ].map(layer => (
              <div key={layer.n} style={{ display: 'grid', gridTemplateColumns: '48px 1fr auto', background: 'var(--paper)', border: '1px solid var(--border)', padding: '20px 24px', gap: 20, alignItems: 'center' }}>
                <div style={{ fontSize: 26, fontWeight: 300, fontFamily: 'var(--serif)', color: 'var(--border)' }}>{layer.n}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{layer.title}</div>
                  <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{layer.desc}</p>
                </div>
                <span style={{ fontSize: 10, padding: '3px 10px', background: 'var(--gold-bg)', color: 'var(--gold)', fontWeight: 700, border: '1px solid var(--gold)', whiteSpace: 'nowrap' }}>{layer.badge}</span>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--border)', borderLeft: '4px solid var(--gold)', padding: '22px 28px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--gold)', marginBottom: 10 }}>DISTRIBUTION</div>
            <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75, margin: '0 0 14px' }}>
              The full DPE methodology — calibration mathematics, segment governance, skill verification, and implementation playbook — is available under NDA to qualified consulting partners and enterprise clients in active evaluation.
            </p>
            <Link href="/contact" style={{ fontSize: 13, color: 'var(--gold)', fontWeight: 700 }}>Request methodology brief →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
