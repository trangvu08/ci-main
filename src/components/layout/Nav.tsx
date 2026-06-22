'use client'
import { useState } from 'react'
import Link from 'next/link'
import { NAV, SUBDOMAINS } from '@/lib/constants'

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
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, userSelect: 'none' }}>
          <div style={{
            width: 30, height: 30,
            background: 'linear-gradient(135deg, var(--ink) 0%, #3a3028 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h4M6 8V4M6 8v4M8.5 8H11m0 0l2.5-2M11 8l2.5 2"
                stroke="var(--gold)" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', color: 'var(--ink)', lineHeight: 1 }}>CLARITY</div>
            <div style={{ fontSize: 8, fontWeight: 500, letterSpacing: '0.28em', color: 'var(--muted)', lineHeight: 1.4 }}>INTELLIGENCE</div>
          </div>
        </Link>

        <div style={{ flex: 1 }} />

        {/* Nav items */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          {NAV.map((item) => (
            <div key={item.href} style={{ position: 'relative' }}
              onMouseEnter={() => setOpen(item.href)}
              onMouseLeave={() => setOpen(null)}>
              <Link href={item.href} style={{
                display: 'block', padding: '6px 14px',
                fontSize: 12, fontWeight: 600, letterSpacing: '0.04em',
                color: open === item.href ? 'var(--gold)' : 'var(--muted)',
                borderBottom: open === item.href ? '2px solid var(--gold)' : '2px solid transparent',
                transition: 'color 0.15s',
              }}>{item.label}</Link>

              {/* Dropdown */}
              {'children' in item && open === item.href && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0,
                  background: 'var(--paper)', border: '1px solid var(--border)',
                  borderTop: '2px solid var(--gold)',
                  minWidth: 240, zIndex: 300, boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                }}>
                  {(item as any).children.map((child: any) => (
                    <Link key={child.href} href={child.href}
                      target={child.external ? '_blank' : undefined}
                      rel={child.external ? 'noopener noreferrer' : undefined}
                      style={{
                        display: 'block', padding: '12px 16px',
                        borderBottom: '1px solid var(--border)',
                        transition: 'background 0.12s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'var(--cream)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 2 }}>
                        {child.label}{child.external ? ' ↗' : ''}
                      </div>
                      {child.description && (
                        <div style={{ fontSize: 11, color: 'var(--muted)' }}>{child.description}</div>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div style={{ width: 16 }} />
          <Link href="/contact" style={{
            padding: '8px 18px',
            background: 'var(--gold)', color: 'var(--paper)',
            fontSize: 12, fontWeight: 700, letterSpacing: '0.06em',
            display: 'inline-block', transition: 'background 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--ink)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}>
            Book a call
          </Link>
        </div>
      </div>
    </nav>
  )
}
