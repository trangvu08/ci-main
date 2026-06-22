import { PageHeader, Rule } from '@/components/ui'
import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Research' }
export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Writing · Research" title="Research" sub="Content forthcoming. Subscribe for updates." />
      <Rule />
      <section style={{ padding: '80px 32px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--border)', padding: '48px 32px' }}>
            <div style={{ fontSize: 36, color: 'var(--border)', marginBottom: 20 }}>◻</div>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 24 }}>No posts yet. The first piece is in progress.</p>
            <Link href="/contact" style={{ padding: '9px 20px', background: 'var(--gold)', color: 'var(--paper)', fontSize: 12, fontWeight: 700, display: 'inline-block' }}>Get notified →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
