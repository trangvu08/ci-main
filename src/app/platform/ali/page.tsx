import { PageHeader, StatRow, Rule, Eyebrow } from '@/components/ui'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'ALI™ — AI Leverage Index', description: '202 roles scored across 5 bands. Measures how effectively a person amplifies output through AI systems.' }

export default function ALIPage() {
  return (
    <>
      <PageHeader eyebrow="Platform · ALI™" title="AI Leverage Index"
        sub="The complement to CVI™. Where CVI measures what AI cannot replace, ALI measures how effectively a person amplifies output through AI systems, orchestration, and automation." />
      <StatRow items={[
        { value: '202', label: 'Roles scored', sub: 'Fully scored and client-ready' },
        { value: '5', label: 'AL bands', sub: 'AL1 (minimal) → AL5 (transformative)' },
        { value: '31', label: 'Function families', sub: 'Cross-industry coverage' },
        { value: '4', label: 'Archetypes', sub: 'Future Elite, Transition Risk, and more' },
      ]} />
      <Rule />
      <section style={{ padding: '80px 32px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <Eyebrow>ALI Formula</Eyebrow>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--border)', padding: '28px', marginBottom: 40, textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(16px,2.5vw,24px)', fontFamily: 'var(--mono)', color: 'var(--ink)', lineHeight: 2.2 }}>
              <span style={{ color: 'var(--gold)' }}>AL_task</span> = √(AWC × AOM)
            </div>
            <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 12 }}>
              AWC = AI Work Coverage (% of tasks AI can perform) · AOM = AI Output Multiplier (quality amplification)
            </p>
          </div>
          <Eyebrow>Four Archetypes</Eyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {[
              { name: 'Future Elite', cvi: 'High CVI', ali: 'High ALI', color: 'var(--gold)', desc: 'Irreplaceable human value + strong AI leverage. The most valuable profile in an AI-augmented organisation. Protect and develop.' },
              { name: 'Traditional Executive', cvi: 'High CVI', ali: 'Low ALI', color: '#3a7a5a', desc: 'High human value but limited AI amplification. High retention priority — strong judgment, context, and accountability — but upskilling opportunity.' },
              { name: 'AI-Native Operator', cvi: 'Low CVI', ali: 'High ALI', color: '#8a7a3a', desc: 'Low irreplaceability but high AI amplification. Productivity contributor in the short term; structurally exposed as AI capabilities expand further.' },
              { name: 'Transition Risk', cvi: 'Low CVI', ali: 'Low ALI', color: '#b85a2a', desc: 'Low human value + low AI leverage. High compression risk. Priority for role redesign, reskilling, or transition planning. Cannot be ignored.' },
            ].map(a => (
              <div key={a.name} style={{ background: 'var(--paper)', border: '1px solid var(--border)', borderTop: `3px solid ${a.color}`, padding: '24px 26px' }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: a.color, marginBottom: 8 }}>{a.name}</div>
                <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 10, padding: '2px 8px', background: 'var(--cream)', color: 'var(--ink)', fontWeight: 700 }}>{a.cvi}</span>
                  <span style={{ fontSize: 10, padding: '2px 8px', background: 'var(--cream)', color: 'var(--ink)', fontWeight: 700 }}>{a.ali}</span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
