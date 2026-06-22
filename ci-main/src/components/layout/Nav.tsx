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
          <div style={{ width: 30, height: 30, background: 'linear-gradient(135deg, #0d0d0d 0%, #3a3028 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h4M6 8V4M6 8v4M8.5 8H11m0 0l2.5-2M11 8l2.5 2" stroke="#b8892a" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', color: '#0d0d0d', lineHeight: 1 }}>CLARITY</div>
            <div style={{ fontSize: 8, fontWeight: 500, letterSpacing: '0.28em', color: '#6b6560', lineHeight: 1.4 }}>INTELLIGENCE</div>
          </div>
        </Link>

        <div style={{ flex: 1 }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          {NAV.map((item) => (
            <div key={item.href} style={{ position: 'relative' }}
              onMouseEnter={() => setOpen(item.href)}
              onMouseLeave={() => setOpen(null)}>
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
