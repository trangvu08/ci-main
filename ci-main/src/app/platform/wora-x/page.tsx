import { Eyebrow, Rule, PageHeader, StatRow } from '@/components/ui'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'WORA-X — Task Taxonomy', description: '6,699 tasks, 1,208 roles, 31 function families. AI impact mapped at task level.' }

export default function WORAPage() {
  const axes = [
    { code: 'VT', name: 'Value Type', scale: '1–4', desc: 'What kind of value is created. Execution (AI replaces) → Judgment (AI assists) → Connection (AI cannot replicate) → Creation (AI drafts, human curates). Key finding: Connection (VT=3) is more AI-resilient than Creation (VT=4).' },
    { code: 'JQ', name: 'Judgment Quality', scale: '1–5', desc: 'Ability to direct and evaluate AI output. The scarce human skill becomes knowing when AI is right, when it is wrong, and how to frame problems AI should not solve alone.' },
    { code: 'CD', name: 'Context Depth', scale: '1–5', desc: 'Irreplaceable context AI cannot access from any data source: relationship history, political context, unwritten rules, tacit knowledge accumulated over years of specific experience.' },
    { code: 'AR', name: 'Accountability Radius', scale: '1–5', desc: 'Personal consequences when outcomes fail. The most defensible CVI axis as AI capability grows. The most direct proxy for hierarchy in a flat organisation.' },
    { code: 'OS', name: 'Organisation Scope', scale: '1–5', desc: 'Where the impact of a person\'s work lands — individual task to market/external. Bridges AI-era value measurement with traditional hierarchy.' },
  ]
  return (
    <>
      <PageHeader eyebrow="Platform · WORA-X" title="Work-Role Analysis" sub="6,699 tasks decomposed across 31 function families. Every task scored for AI impact, judgment intensity, and human value source. The foundation everything else builds on." />
      <StatRow items={[
        { value: '6,699', label: 'Tasks scored', sub: 'Wave 1 + Wave 2 combined' },
        { value: '1,208', label: 'Roles analysed', sub: '117 calibrated · expert-estimated' },
        { value: '31', label: 'Function families', sub: 'Cross-industry Vietnam coverage' },
        { value: '117', label: 'Calibrated-tier', sub: 'Interview-derived · r=0.97' },
      ]} />
      <Rule />
      <section style={{ padding: '80px 32px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <Eyebrow>AI Impact Classification</Eyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 56 }}>
            {[
              { l: 'Automate', pct: '18%', color: '#b85a2a', d: 'AI performs task end-to-end without routine human review.', ex: 'Data entry, form processing, report generation, email routing' },
              { l: 'Augment', pct: '47%', color: '#8a7a3a', d: 'AI generates output; human reviews and makes final decision.', ex: 'Credit scoring, resume screening, policy drafting, claim assessment' },
              { l: 'Accelerate', pct: '28%', color: '#3a7a5a', d: 'AI speeds task significantly but does not change decision logic.', ex: 'Report writing, research, code generation, contract drafting' },
              { l: 'Human-Only', pct: '5%', color: 'var(--gold)', d: 'Requires physical presence, fiduciary accountability, or irreducible trust.', ex: 'Board negotiation, clinical diagnosis, crisis management, M&A' },
              { l: 'High-Risk if Automated', pct: '2%', color: 'var(--ink)', d: 'AI technically capable but automation creates unacceptable risk.', ex: 'SBV-regulated credit approval, MOH clinical decisions, labour disputes' },
            ].map(row => (
              <div key={row.l} style={{ display: 'grid', gridTemplateColumns: '100px 1fr 1fr', padding: '18px 22px', background: 'var(--paper)', border: '1px solid var(--border)', borderLeft: `4px solid ${row.color}`, gap: 20, alignItems: 'start' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: row.color }}>{row.l}</div>
                  <div style={{ fontSize: 24, fontWeight: 300, color: row.color, fontFamily: 'var(--serif)', opacity: 0.7 }}>{row.pct}</div>
                </div>
                <p style={{ fontSize: 12, color: 'var(--ink)', lineHeight: 1.7, margin: 0 }}>{row.d}</p>
                <p style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}><strong style={{ color: 'var(--dim)' }}>Examples: </strong>{row.ex}</p>
              </div>
            ))}
          </div>
          <Eyebrow>Five CVI™ Axes</Eyebrow>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--border)', padding: '24px 28px', marginBottom: 24, textAlign: 'center' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--muted)', marginBottom: 12 }}>CVI™ FORMULA</div>
            <div style={{ fontSize: 'clamp(16px,2.5vw,26px)', fontFamily: 'var(--mono)', color: 'var(--ink)', letterSpacing: '0.04em', lineHeight: 2 }}>
              <span style={{ color: 'var(--gold)' }}>CVI</span> = VT<sup>0.4</sup> × JQ × CD<sup>0.5</sup> × AR<sup>0.6</sup> × OS<sup>0.3</sup>
            </div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 12 }}>Score range: 1.13 (CS Ops) → 80.32 (CFO) · Spread ratio 1:71.1</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {axes.map(ax => (
              <div key={ax.code} style={{ display: 'grid', gridTemplateColumns: '80px 80px 1fr', background: 'var(--paper)', border: '1px solid var(--border)', padding: '18px 22px', gap: 20, alignItems: 'start' }}>
                <div style={{ fontSize: 24, fontWeight: 700, fontFamily: 'var(--serif)', color: 'var(--gold)' }}>{ax.code}</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>{ax.name}</div>
                  <div style={{ fontSize: 10, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>{ax.scale}</div>
                </div>
                <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{ax.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
