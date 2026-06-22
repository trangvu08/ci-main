import Link from 'next/link'
import { Eyebrow, Rule, PageHeader } from '@/components/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Platform — IP Suite', description: 'WORA-X, CVI, ALI, and Dynamic Pay Engine — Clarity Intelligence\'s workforce intelligence IP.' }

export default function PlatformPage() {
  return (
    <>
      <PageHeader eyebrow="Platform" title={<>Four tools.<br/><em style={{fontStyle:'italic',color:'var(--gold)'}}>One methodology.</em></>} sub="WORA-X maps work at task level. CVI™ scores human irreplaceability. ALI™ scores AI leverage. Dynamic Pay Engine connects both into contribution-based pay design." />
      <Rule />
      <section style={{ padding: '80px 32px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[
            { code: 'WORA-X', name: 'Work-Role Analysis', href: '/platform/wora-x', stats: '6,699 tasks · 1,208 roles · 31 function families', desc: 'The foundation. Every role decomposed into discrete tasks. Every task scored for AI impact level, judgment intensity, automation risk, and human value source. Public methodology, proprietary database.' },
            { code: 'CVI™', name: 'Clarity Value Index', href: '/platform/cvi', stats: 'R²=0.304 alone · R²=0.771 full model · 117 calibrated roles', desc: 'Five-axis scoring: Value Type × Judgment Quality × Context Depth × Accountability Radius × Organisation Scope. Formula: CVI = VT⁰·⁴ × JQ × CD⁰·⁵ × AR⁰·⁶ × OS⁰·³. Calibrated against 2.86M Vietnam market records.' },
            { code: 'ALI™', name: 'AI Leverage Index', href: '/platform/ali', stats: '202 roles scored · 5 bands (AL1–AL5) · 31 function families', desc: 'The complement to CVI. Where CVI measures what AI cannot replace, ALI measures how effectively a person amplifies output through AI systems. Formula: AL_task = √(AWC × AOM). Four archetypes: Future Elite, Traditional Executive, AI-Native Operator, Transition Risk.' },
            { code: 'DPE', name: 'Dynamic Pay Engine', href: '/platform/dynamic-pay-engine', stats: 'Three-layer · Formula-driven · Employee-verifiable', desc: 'Contribution-based total rewards methodology. Monthly pay = Core Pay + Project Scope Pay + Annual Bonus. Every coefficient pre-declared, every KPI threshold defined before commitment. Skill mastery is a permanent financial event, not a career aspiration.' },
          ].map(item => (
            <Link key={item.code} href={item.href} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', background: 'var(--paper)', border: '1px solid var(--border)', transition: 'border-color 0.18s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}>
              <div style={{ padding: '28px 24px', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 28, fontWeight: 700, fontFamily: 'var(--serif)', color: 'var(--gold)' }}>{item.code}</div>
                <div style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 700, letterSpacing: '0.1em' }}>VIEW →</div>
              </div>
              <div style={{ padding: '28px 32px' }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{item.name}</div>
                <div style={{ fontSize: 11, color: 'var(--gold)', fontWeight: 600, marginBottom: 12, fontFamily: 'var(--mono)' }}>{item.stats}</div>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
