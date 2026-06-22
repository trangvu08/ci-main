import Link from 'next/link'

export function Eyebrow({ children, color = 'var(--gold)' }: { children: string; color?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
      <div style={{ height: 1, width: 24, background: color, flexShrink: 0 }} />
      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', color, fontFamily: 'var(--sans)' }}>
        {children.toUpperCase()}
      </span>
    </div>
  )
}

export function Rule() {
  return <div style={{ height: 1, background: 'var(--border)' }} />
}

export function PageHeader({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <section style={{ background: 'var(--paper)', padding: '80px 32px 64px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 style={{ fontSize: 'clamp(32px,5vw,60px)', fontFamily: 'var(--serif)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-1px', color: 'var(--ink)', marginBottom: 20 }}>
          {title}
        </h1>
        {sub && <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 640, fontFamily: 'var(--sans)' }}>{sub}</p>}
      </div>
    </section>
  )
}

export function StatRow({ items }: { items: { value: string; label: string; sub?: string }[] }) {
  return (
    <section style={{ background: 'var(--cream)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: `repeat(${items.length},1fr)` }}>
        {items.map((it, i) => (
          <div key={it.label} style={{ padding: '28px 24px', borderRight: i < items.length - 1 ? '1px solid var(--border)' : 'none' }}>
            <div style={{ fontSize: 'clamp(24px,3vw,38px)', fontWeight: 300, fontFamily: 'var(--serif)', color: 'var(--ink)', lineHeight: 1, marginBottom: 6 }}>{it.value}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--gold)', marginBottom: 3, letterSpacing: '0.04em' }}>{it.label}</div>
            {it.sub && <div style={{ fontSize: 11, color: 'var(--muted)' }}>{it.sub}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}
