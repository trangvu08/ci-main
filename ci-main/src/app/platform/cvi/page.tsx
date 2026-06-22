import { Eyebrow, Rule, PageHeader, StatRow } from '@/components/ui'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'CVI™ — Clarity Value Index', description: 'Five-axis human value scoring calibrated against 2.86M Vietnam market records. R²=0.304 CVI alone, R²=0.771 full model.' }

export default function CVIPage() {
  return (
    <>
      <PageHeader eyebrow="Platform · CVI™" title={<>Clarity Value Index</>}
        sub="Five dimensions of human irreplaceability in AI-augmented organisations. Calibrated against 2.86M Vietnam market records. The primary contribution: within-level differentiation hierarchy cannot see." />
      <StatRow items={[
        { value: '0.304', label: 'CVI alone R²', sub: 'Calibrated tier · no hierarchy input' },
        { value: '0.771', label: 'Full model R²', sub: 'CVI + level + year + industry + location' },
        { value: '+0.011', label: 'CVI ΔR²', sub: 'Incremental over controls-only · calibrated tier' },
        { value: '0.778', label: 'Test R² 2023–24', sub: 'Held-out · MAPE 29.6% · model generalises' },
      ]} />
      <Rule />
      <section style={{ padding: '80px 32px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <Eyebrow>The Formula</Eyebrow>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--border)', padding: '32px', marginBottom: 48, textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(18px,3vw,32px)', fontFamily: 'var(--mono)', color: 'var(--ink)', letterSpacing: '0.04em', lineHeight: 2.2 }}>
              <span style={{ color: 'var(--gold)' }}>CVI</span> = VT<sup>0.4</sup> × JQ × CD<sup>0.5</sup> × AR<sup>0.6</sup> × OS<sup>0.3</sup>
            </div>
            <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 16, lineHeight: 1.7, maxWidth: 560, margin: '16px auto 0' }}>
              Intentionally non-linear and concave across all axes except JQ. Moving from AR=1 to AR=5 is not a 5× increase — it is a 5⁰·⁶ = 2.63× increase. Sub-linear exponents produce diminishing returns; each additional unit adds less than the previous one.
            </p>
          </div>
          <Eyebrow>Exponent Rationale</Eyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 56 }}>
            {[
              { term: 'VT⁰·⁴', exp: '0.4', name: 'Value Type', rationale: 'Type multiplier, not magnitude. Connection/Creation amplify value but do not dominate the other axes. Connection (VT=3) is now more AI-resilient than Creation (VT=4) — a key methodology shift.' },
              { term: 'JQ', exp: '1.0', name: 'Judgment Quality', rationale: 'Primary driver in AI-augmented work. Judgment quality scales linearly with value creation. The ability to direct and evaluate AI output is the scarcest human skill as AI capability grows.' },
              { term: 'CD⁰·⁵', exp: '0.5', name: 'Context Depth', rationale: 'Diminishing returns (square root / concave). The 1→2 step adds proportionally more than the 4→5 step. Deep relational context is irreplaceable but subject to concavity.' },
              { term: 'AR⁰·⁶', exp: '0.6', name: 'Accountability Radius', rationale: 'Accountability has diminishing returns. The most defensible CVI axis as AI capability grows — AI cannot be held accountable for consequences the way human professionals can.' },
              { term: 'OS⁰·³', exp: '0.3', name: 'Organisation Scope', rationale: 'Scope amplifies reach but scope without substance does not create value. Smallest exponent by design. Bridges AI-era measurement with traditional hierarchy signal.' },
            ].map(row => (
              <div key={row.term} style={{ display: 'grid', gridTemplateColumns: '80px 60px 1fr', background: 'var(--paper)', border: '1px solid var(--border)', padding: '18px 22px', gap: 20, alignItems: 'start' }}>
                <div style={{ fontSize: 20, fontFamily: 'var(--mono)', color: 'var(--gold)', fontWeight: 700 }}>{row.term}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--mono)', paddingTop: 4 }}>exp={row.exp}</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{row.name}</div>
                  <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{row.rationale}</p>
                </div>
              </div>
            ))}
          </div>
          <Eyebrow>Sample Scores</Eyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              { role: 'CFO', band: 'Executive', cvi: 80.32 },
              { role: 'C&B Lead', band: 'Executive', cvi: 71.0 },
              { role: 'Customer Success Manager', band: 'Manager / Senior IC', cvi: 56.92 },
              { role: 'HRBP', band: 'Manager / Senior IC', cvi: 44.88 },
              { role: 'Data Scientist', band: 'Manager / Senior IC', cvi: 29.70 },
              { role: 'TA Specialist', band: 'Professional 1–2', cvi: 11.11 },
              { role: 'Support Agent T1', band: 'Para-professional', cvi: 2.50 },
            ].map(r => (
              <div key={r.role} style={{ display: 'grid', gridTemplateColumns: '1fr 200px 80px', background: 'var(--paper)', border: '1px solid var(--border)', padding: '12px 18px', alignItems: 'center', gap: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{r.role}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)' }}>{r.band}</div>
                <div style={{ fontSize: 20, fontWeight: 300, fontFamily: 'var(--serif)', color: 'var(--gold)', textAlign: 'right' }}>{r.cvi}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: 'var(--dim)', marginTop: 12 }}>
            Observation: Customer Success Manager (56.92) scores higher than Data Scientist (29.70) despite similar seniority. Reflects higher CD (institutional client knowledge) and AR (personal accountability for retention) in AI-era organisations.
          </p>
        </div>
      </section>
    </>
  )
}
