'use client'
import { useState } from 'react'
import { Eyebrow, Rule } from '@/components/ui'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', interest: 'risk-score', message: '' })
  const [sent, setSent] = useState(false)
  const upd = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '11px 14px',
    background: 'var(--paper)', border: '1px solid var(--border)',
    color: 'var(--ink)', fontSize: 13, fontFamily: 'var(--sans)',
    outline: 'none', boxSizing: 'border-box',
  }

  return (
    <>
      <section style={{ background: 'var(--paper)', padding: '80px 32px 64px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <Eyebrow>Contact</Eyebrow>
          <h1 style={{ fontSize: 'clamp(26px,3.5vw,46px)', fontFamily: 'var(--serif)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.5px', color: 'var(--ink)', marginBottom: 14 }}>
            Let's talk about your workforce.
          </h1>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 40 }}>
            Whether you want a free diagnostic, a pilot proposal, or just to understand whether WORA fits your context — reach out. We respond within 1 business day.
          </p>
          {sent ? (
            <div style={{ background: 'var(--cream)', border: '1px solid var(--border)', padding: '48px', textAlign: 'center' }}>
              <div style={{ fontSize: 40, color: 'var(--gold)', marginBottom: 16 }}>✓</div>
              <h3 style={{ fontSize: 22, fontFamily: 'var(--serif)', fontWeight: 400, color: 'var(--ink)', marginBottom: 12 }}>Message received.</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>
                Thank you, {form.name}. We'll follow up at {form.email} within 1 business day.
              </p>
            </div>
          ) : (
            <div style={{ background: 'var(--cream)', border: '1px solid var(--border)', padding: '36px 40px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                {[{ l: 'YOUR NAME', k: 'name', ph: 'Full name', t: 'text' }, { l: 'WORK EMAIL', k: 'email', ph: 'your@company.com', t: 'email' }].map(f => (
                  <div key={f.k}>
                    <label style={{ fontSize: 11, color: 'var(--muted)', display: 'block', marginBottom: 6, fontWeight: 700, letterSpacing: '0.08em' }}>{f.l}</label>
                    <input type={f.t} value={(form as any)[f.k]} onChange={e => upd(f.k, e.target.value)} placeholder={f.ph} style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'var(--gold)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 11, color: 'var(--muted)', display: 'block', marginBottom: 6, fontWeight: 700, letterSpacing: '0.08em' }}>COMPANY</label>
                <input value={form.company} onChange={e => upd('company', e.target.value)} placeholder="Company name" style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--gold)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 11, color: 'var(--muted)', display: 'block', marginBottom: 6, fontWeight: 700, letterSpacing: '0.08em' }}>I'M INTERESTED IN</label>
                <select value={form.interest} onChange={e => upd('interest', e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
                  <option value="risk-score">AI Compensation Risk Score (2–4 weeks)</option>
                  <option value="diagnostic">WORA Diagnostic (200–400M VND)</option>
                  <option value="redesign">WORA Redesign (600M–1.2B VND)</option>
                  <option value="transformation">WORA Transformation (2–4B VND)</option>
                  <option value="dpe">Dynamic Pay Engine pilot</option>
                  <option value="bod">BOD Intelligence Tool access</option>
                  <option value="rewards">Rewards Engine access</option>
                  <option value="demo">Discovery call first</option>
                </select>
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={{ fontSize: 11, color: 'var(--muted)', display: 'block', marginBottom: 6, fontWeight: 700, letterSpacing: '0.08em' }}>MESSAGE (OPTIONAL)</label>
                <textarea value={form.message} onChange={e => upd('message', e.target.value)} placeholder="Tell us briefly what you're trying to figure out…" rows={4}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => (e.target.style.borderColor = 'var(--gold)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
              </div>
              <button onClick={() => { if (form.name && form.email) setSent(true) }}
                style={{ padding: '12px 28px', background: 'var(--gold)', color: 'var(--paper)', fontSize: 13, fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: 'var(--sans)' }}>
                {(!form.name || !form.email) ? 'Enter name + email to send' : 'Send message →'}
              </button>
              <p style={{ fontSize: 11, color: 'var(--dim)', marginTop: 12 }}>We respond within 1 business day. No spam.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
