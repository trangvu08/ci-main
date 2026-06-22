'use client'
import { useState } from 'react'
import Link from 'next/link'
import { NAV } from '@/lib/constants'

export default function Nav() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 200,
      background: 'rgba(245,243,238,0.96)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 32px',
        display: 'flex', alignItems: 'center', height: 58,
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, userSelect: 'none', textDecoration: 'none' }}>
          <img src="/clarity.png" alt="Clarity Intelligence" style={{ height: 32 }} />
        </Link>

        <div style={{ flex: 1 }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          {NAV.map((item) => (
            <div key={item.href} style={{ position: 'relative' }}>
              <Link href={item.href} style={{
                display: 'block', padding: '6px 14px',
                fontSize: 12, fontWeight: 600, letterSpacing: '0.04em',
                color: open === item.href ? '#b8892a' : '#6b6560',
                borderBottom: open === item.href ? '2px solid #b8892a' : '2px solid transparent',
                textDecoration: 'none',
              }}>
                {item.label}
              </Link>

              {'children' in item && open === item.href && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0,
                  background: '#f5f3ee', border: '1px solid #d8d3cb',
                  borderTop: '2px solid #b8892a',
                  minWidth: 240, zIndex: 300, boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                }}>
                  {(item as any).children.map((child: any) => (
                    <Link key={child.href} href={child.href}
                      target={child.external ? '_blank' : undefined}
                      rel={child.external ? 'noopener noreferrer' : undefined}
                      style={{ display: 'block', padding: '12px 16px', borderBottom: '1px solid #d8d3cb', textDecoration: 'none', background: 'transparent' }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#0d0d0d', marginBottom: 2 }}>
                        {child.label}{child.external ? ' ↗' : ''}
                      </div>
                      {child.description && (
                        <div style={{ fontSize: 11, color: '#6b6560' }}>{child.description}</div>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div style={{ width: 16 }} />
          <Link href="/contact" style={{
            padding: '8px 18px', background: '#b8892a', color: '#f5f3ee',
            fontSize: 12, fontWeight: 700, letterSpacing: '0.06em',
            display: 'inline-block', textDecoration: 'none',
          }}>
            Book a call
          </Link>
        </div>
      </div>
    </nav>
  )
}
