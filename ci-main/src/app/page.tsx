'use client'
import Link from 'next/link'
import { Eyebrow, Rule, StatRow } from '@/components/ui'
import { SUBDOMAINS } from '@/lib/constants'


const T = {
  paper: 'var(--paper)', cream: 'var(--cream)', ink: 'var(--ink)',
  muted: 'var(--muted)', dim: 'var(--dim)', border: 'var(--border)',
  gold: 'var(--gold)', serif: 'var(--serif)', sans: 'var(--sans)',
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: T.paper, padding: '96px 32px 80px', minHeight: '88vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <Eyebrow>AI Workforce Intelligence · Vietnam & Southeast Asia</Eyebrow>
            <h1 style={{ fontSize: 'clamp(38px,4.8vw,64px)', fontFamily: T.serif, fontWeight: 400, lineHeight: 1.08, letterSpacing: '-1px', color: T.ink, marginBottom: 28 }}>
              Traditional benchmarks measure{' '}
              <em style={{ fontStyle: 'italic', color: T.gold }}>hierarchy.</em>
              <br />We measure what survives{' '}
              <em style={{ fontStyle: 'italic' }}>AI.</em>
            </h1>
            <p style={{ fontSize: 17, color: T.muted, lineHeight: 1.8, maxWidth: 520, marginBottom: 40 }}>
              AI adoption has changed what roles are worth — task by task.
              Clarity Intelligence maps human value at task level, so you know which
              roles you're underpricing, which you're losing to competitors,
              and where pay is misaligned with the AI era.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ padding: '12px 28px', background: T.gold, color: T.paper, fontSize: 14, fontWeight: 700, letterSpacing: '0.06em', display: 'inline-block' }}>
                Get your AI Compensation Risk Score →
              </Link>
              <Link href="/platform" style={{ padding: '12px 28px', background: 'transparent', color: T.ink, fontSize: 14, fontWeight: 700, letterSpacing: '0.06em', border: '1px solid var(--border)', display: 'inline-block' }}>
                Explore the platform
              </Link>
            </div>
            <p style={{ fontSize: 11, color: T.dim, marginTop: 14 }}>
              Scoped to one business unit · 2–4 week delivery
            </p>
          </div>

          {/* PC=51 divergence card */}
          <div style={{ background: T.cream, border: '1px solid var(--border)', padding: '32px 36px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: T.muted, marginBottom: 20 }}>
              SAME MERCER GRADE · VERY DIFFERENT AI-ERA VALUE
            </div>
            {[
              { role: 'Customer Success Manager', vt: 'Connection', cvi: '44–52', note: 'Low flight risk', color: T.gold },
              { role: 'HR Business Partner', vt: 'Connection', cvi: '30–38', note: 'Moderate flight risk', color: '#8a7a3a' },
              { role: 'Data Scientist', vt: 'Judgment', cvi: '22–30', note: 'Moderate exposure', color: T.muted },
              { role: 'HR Ops Manager', vt: 'Execution', cvi: '12–15', note: 'High compression risk', color: '#b85a2a' },
            ].map((r, i) => (
              <div key={r.role} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: i < 3 ? '1px solid var(--border)' : 'none', gap: 12 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: T.ink, marginBottom: 2 }}>{r.role}</div>
                  <div style={{ fontSize: 11, color: T.muted }}>{r.vt} · PC 51</div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: 18, fontWeight: 400, fontFamily: T.serif, color: r.color, lineHeight: 1 }}>CVI {r.cvi}</div>
                  <div style={{ fontSize: 10, color: T.dim, marginTop: 2 }}>{r.note}</div>
                </div>
              </div>
            ))}
            <div style={{ fontSize: 10, color: T.dim, marginTop: 16, borderTop: '1px solid var(--border)', paddingTop: 12 }}>
              CVI™ v7 · Vietnam Market 2026 · 2.86M Mercer TRS records validated
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatRow items={[
        { value: '6,699', label: 'Tasks scored', sub: 'AI impact mapped at task level' },
        { value: '1,208', label: 'Roles analysed', sub: '117 calibrated · expert-estimated' },
        { value: 'R²=0.771', label: 'Salary validation', sub: 'Full model · 2.86M TRS records · calibrated tier' },
        { value: '30%', label: 'CVI alone', sub: 'Salary variance without hierarchy input' },
      ]} />

      <Rule />

      {/* ── PLATFORM OVERVIEW ── */}
      <section style={{ padding: '96px 32px', background: T.paper }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Eyebrow>Platform</Eyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginBottom: 48, alignItems: 'start' }}>
            <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', fontFamily: T.serif, fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.5px', color: T.ink }}>
              Four interconnected tools. One unified methodology.
            </h2>
            <p style={{ fontSize: 15, color: T.muted, lineHeight: 1.8 }}>
              WORA-X maps work at task level. CVI™ scores human value. ALI™ scores AI leverage.
              Dynamic Pay Engine connects both into contribution-based compensation design.
              Each tool stands alone — together they form a complete AI-era workforce intelligence system.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2 }}>
            {[
              { code: 'WORA-X', name: 'Work-Role Analysis', href: '/platform/wora-x', desc: '6,699 tasks decomposed across 31 function families. AI impact mapped at task level. The foundation everything else builds on.' },
              { code: 'CVI™', name: 'Clarity Value Index', href: '/platform/cvi', desc: 'Five axes of human irreplaceability: VT × JQ × CD × AR × OS. Calibrated against 2.86M Vietnam market records. R²=0.304 CVI alone.' },
              { code: 'ALI™', name: 'AI Leverage Index', href: '/platform/ali', desc: '202 roles scored across 5 bands. Measures how effectively a person amplifies output through AI systems — the complement to CVI.' },
              { code: 'DPE', name: 'Dynamic Pay Engine', href: '/platform/dynamic-pay-engine', desc: 'Contribution-based total rewards methodology. Core Pay + Project Scope + Annual Bonus. Formula-driven, employee-verifiable.' },
            ].map(item => (
              <Link key={item.code} href={item.href} style={{ background: T.cream, border: '1px solid var(--border)', padding: '28px 24px', display: 'block', transition: 'border-color 0.18s, background 0.18s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.background = 'var(--gold-bg)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--cream)'; }}>
                <div style={{ fontSize: 22, fontWeight: 700, fontFamily: T.serif, color: T.gold, marginBottom: 6 }}>{item.code}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: T.ink, marginBottom: 12, letterSpacing: '0.04em' }}>{item.name}</div>
                <p style={{ fontSize: 12, color: T.muted, lineHeight: 1.7, marginBottom: 16 }}>{item.desc}</p>
                <span style={{ fontSize: 12, color: T.gold, fontWeight: 700 }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ── THE PROBLEM ── */}
      <section style={{ background: T.cream, padding: '96px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <Eyebrow>The gap your benchmark won't show you</Eyebrow>
            <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', fontFamily: T.serif, fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.5px', color: T.ink, marginBottom: 24 }}>
              Same grade. Same salary band. 3–4× difference in AI-era value.
            </h2>
            <p style={{ fontSize: 15, color: T.muted, lineHeight: 1.8, marginBottom: 18 }}>
              Traditional job evaluation frameworks — built around scope, reporting lines, and budget authority
              — were not designed to measure what makes a person irreplaceable as AI capabilities expand.
              The result is predictable misalignment: roles being overpriced as AI absorbs their tasks,
              and roles being underpriced despite carrying context and judgment AI cannot replicate.
            </p>
            <p style={{ fontSize: 15, color: T.muted, lineHeight: 1.8, fontStyle: 'italic', borderLeft: '3px solid var(--gold)', paddingLeft: 20 }}>
              The employees most likely to leave are the ones AI can't replace.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              ['Start from JD', 'Start from workflow'],
              ['Job-level automation %', 'Task-level AI impact'],
              ['"Role X will be replaced"', '"Task mix shifts, role evolves"'],
              ['Generic global benchmark', 'Vietnam-calibrated scoring'],
              ['AI as replacement story', 'AI as redesign opportunity'],
            ].map(([bad, good]) => (
              <div key={bad} style={{ display: 'grid', gridTemplateColumns: '1fr 28px 1fr', gap: 8, alignItems: 'center', padding: '12px 18px', background: T.paper, border: '1px solid var(--border)' }}>
                <div style={{ fontSize: 12, color: '#b85a2a', textDecoration: 'line-through', opacity: 0.8 }}>{bad}</div>
                <div style={{ fontSize: 13, color: T.gold, fontWeight: 700, textAlign: 'center' }}>→</div>
                <div style={{ fontSize: 12, color: T.ink, fontWeight: 600 }}>{good}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ── PRODUCTS ── */}
      <section style={{ padding: '96px 32px', background: T.paper }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Eyebrow>Products</Eyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginBottom: 40, alignItems: 'end' }}>
            <h2 style={{ fontSize: 'clamp(24px,2.8vw,38px)', fontFamily: T.serif, fontWeight: 400, lineHeight: 1.2, color: T.ink }}>
              Intelligence tools for Vietnam's market.
            </h2>
            <p style={{ fontSize: 15, color: T.muted, lineHeight: 1.8 }}>
              Built for specific audiences — not one-size-fits-all. Each product is independently deployable
              and serves a distinct use case, from individual salary benchmarking to enterprise compensation design.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}>
            {[
              { title: 'Salary Check VN', href: 'https://salary.clarityintelligence.co', external: true, audience: 'VN professionals', desc: 'Tell Vietnam professionals exactly where their salary sits (percentile), what skills they\'re missing, and what to do next. Free tier available.', tag: 'salary.clarityintelligence.co' },
              { title: 'BOD Intelligence', href: '/products/bod-intel', external: false, audience: 'Institutional investors', desc: 'Board compensation analytics tool for institutional investors evaluating governance quality and executive pay alignment in Vietnamese listed companies.', tag: 'Gated · B2B' },
              { title: 'Rewards Engine', href: 'https://rewards.clarityintelligence.co', external: true, audience: 'HR / B2B teams', desc: 'Full Dynamic Pay Engine implementation suite: job evaluation, pay structure design, market benchmarking, and reporting. For clients with active engagements.', tag: 'rewards.clarityintelligence.co' },
            ].map(prod => (
              <Link key={prod.title} href={prod.href}
                target={prod.external ? '_blank' : undefined}
                rel={prod.external ? 'noopener noreferrer' : undefined}
                style={{ background: T.cream, border: '1px solid var(--border)', padding: '28px 26px', display: 'block', borderTop: '3px solid var(--gold)', transition: 'background 0.18s' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-bg)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--cream)')}>
                <div style={{ fontSize: 10, color: T.muted, fontWeight: 700, letterSpacing: '0.12em', marginBottom: 10 }}>{prod.audience.toUpperCase()}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: T.ink, marginBottom: 10 }}>{prod.title}{prod.external ? ' ↗' : ''}</div>
                <p style={{ fontSize: 13, color: T.muted, lineHeight: 1.7, marginBottom: 14 }}>{prod.desc}</p>
                <div style={{ fontSize: 10, color: T.gold, fontWeight: 700, letterSpacing: '0.06em' }}>{prod.tag}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ── WRITING PREVIEW ── */}
      <section style={{ padding: '96px 32px', background: T.cream }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
            <div>
              <Eyebrow>Writing</Eyebrow>
              <h2 style={{ fontSize: 'clamp(22px,2.5vw,34px)', fontFamily: T.serif, fontWeight: 400, color: T.ink }}>
                Research notes & data dispatches.
              </h2>
            </div>
            <Link href="/writing" style={{ fontSize: 13, color: T.gold, fontWeight: 700 }}>All writing →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}>
            {[
              { tag: 'Research Notes', title: 'The AI Compensation Gap: Vietnam 2026', sub: 'Why 40% of professional roles are mispriced relative to their AI-era human value — and which direction the error runs.', href: '/writing/research' },
              { tag: 'Data Dispatches', title: 'Connection vs Creation: a v7 finding', sub: 'Contrary to intuition, roles built on human connection (VT=3) are proving more AI-resilient than creative roles (VT=4).', href: '/writing/data-dispatches' },
              { tag: 'WORA Working Group', title: 'Wave 2 completion: 31 function families', sub: 'The WORA-X database now covers 6,699 tasks and 1,208 roles. Notes on what changed between Wave 1 and Wave 2.', href: '/writing/wora-working-group' },
            ].map(post => (
              <Link key={post.title} href={post.href} style={{ background: T.paper, border: '1px solid var(--border)', padding: '28px 26px', display: 'block', transition: 'background 0.18s' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-bg)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--paper)')}>
                <div style={{ fontSize: 10, color: T.gold, fontWeight: 700, letterSpacing: '0.14em', marginBottom: 12 }}>{post.tag.toUpperCase()}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: T.ink, fontFamily: T.serif, marginBottom: 10, lineHeight: 1.4 }}>{post.title}</div>
                <p style={{ fontSize: 12, color: T.muted, lineHeight: 1.7 }}>{post.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ── CTA ── */}
      <section style={{ padding: '96px 32px', background: 'var(--ink)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <Eyebrow color="var(--gold-l)">Get started</Eyebrow>
          <h2 style={{ fontSize: 'clamp(28px,4vw,52px)', fontFamily: T.serif, fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.5px', color: 'var(--paper)', marginBottom: 20 }}>
            Ready to see where your compensation is misaligned?
          </h2>
          <p style={{ fontSize: 15, color: '#a09a94', lineHeight: 1.8, marginBottom: 40 }}>
            The AI Compensation Risk Score is scoped, fast, and board-ready.
            It starts with your existing role data — no re-evaluation required.
          </p>
          <Link href="/contact" style={{ padding: '14px 32px', background: 'var(--gold)', color: 'var(--paper)', fontSize: 14, fontWeight: 700, letterSpacing: '0.06em', display: 'inline-block' }}>
            Book a scoping call →
          </Link>
        </div>
      </section>
    </>
  )
}
