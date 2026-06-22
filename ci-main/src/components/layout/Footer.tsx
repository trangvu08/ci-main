import Link from 'next/link'

const cols = [
  { title: 'Platform', links: [
    { l: 'WORA-X', h: '/platform/wora-x' },
    { l: 'CVI', h: '/platform/cvi' },
    { l: 'Dynamic Pay Engine', h: '/platform/dynamic-pay-engine' },
    { l: 'ALI', h: '/platform/ali' },
  ]},
  { title: 'Products', links: [
    { l: 'Salary Check VN ↗', h: 'https://salary.clarityintelligence.co' },
    { l: 'BOD Intelligence', h: '/products/bod-intel' },
    { l: 'Rewards Engine ↗', h: 'https://rewards.clarityintelligence.co' },
  ]},
  { title: 'Tools', links: [
    { l: 'Homemaker Value Index ↗', h: 'https://tools.clarityintelligence.co/homemaker-value-index' },
    { l: 'Job Pricing Calculator ↗', h: 'https://tools.clarityintelligence.co/job-pricing' },
    { l: 'Judgment Premium Report', h: '/tools/judgment-premium' },
  ]},
  { title: 'Writing', links: [
    { l: 'Research Notes', h: '/writing/research' },
    { l: 'Data Dispatches', h: '/writing/data-dispatches' },
    { l: 'WORA Working Group', h: '/writing/wora-working-group' },
  ]},
  { title: 'Company', links: [
    { l: 'About', h: '/about' },
    { l: 'Contact', h: '/contact' },
  ]},
]

export default function Footer() {
  return (
    <footer style={{ background: '#0d0d0d', color: '#f5f3ee', padding: '56px 32px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <img src="/clarity-logo-cropped.png" alt="Clarity Intelligence" style={{ height: 36, width: 'auto' }} />
            </div>
            <p style={{ fontSize: 13, color: '#a09a94', lineHeight: 1.8, maxWidth: 260 }}>
              Workforce intelligence infrastructure for the AI-augmented era.
              Task-level analysis, human value scoring, contribution-based pay design.
            </p>
            <p style={{ fontSize: 11, color: '#6b6560', marginTop: 14 }}>
              WORA™ CVI™ ALI™ are trademarks of Clarity Intelligence.
            </p>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: '#a09a94', marginBottom: 16 }}>{col.title.toUpperCase()}</div>
              {col.links.map(lk => (
                <Link key={lk.l} href={lk.h}
                  style={{ display: 'block', fontSize: 13, color: '#a09a94', marginBottom: 10, textDecoration: 'none' }}>
                  {lk.l}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid #2a2520', paddingTop: 20, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#6b6560', flexWrap: 'wrap', gap: 8 }}>
          <span>© 2026 Clarity Intelligence. All rights reserved.</span>
          <span>WORA-X Master Database v7.3 · 6,699 tasks · 1,208 roles · 31 function families</span>
        </div>
      </div>
    </footer>
  )
}
