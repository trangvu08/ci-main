// Subdomain URLs — overridden by env vars in each environment
export const SUBDOMAINS = {
  salary: process.env.NEXT_PUBLIC_SALARY_URL ?? 'https://salary.clarityintelligence.co',
  tools: process.env.NEXT_PUBLIC_TOOLS_URL ?? 'https://tools.clarityintelligence.co',
  rewards: process.env.NEXT_PUBLIC_REWARDS_URL ?? 'https://rewards.clarityintelligence.co',
} as const

// Main nav structure — used by Nav.tsx
export const NAV = [
  {
    label: 'Platform',
    href: '/platform',
    children: [
      { label: 'WORA-X', href: '/platform/wora-x', description: 'Task-level workforce taxonomy' },
      { label: 'CVI', href: '/platform/cvi', description: 'Clarity Value Index' },
      { label: 'Dynamic Pay Engine', href: '/platform/dynamic-pay-engine', description: 'Real-time pay positioning' },
      { label: 'ALI', href: '/platform/ali', description: 'AI Leverage Index' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Salary Check VN', href: SUBDOMAINS.salary, external: true, description: 'Vietnam salary benchmarking' },
      { label: 'BOD Intelligence', href: '/products/bod-intel', description: 'Board compensation analytics' },
      { label: 'Rewards Engine', href: SUBDOMAINS.rewards, external: true, description: 'Compensation design suite' },
    ],
  },
  {
    label: 'Tools',
    href: '/tools',
    children: [
      { label: 'Homemaker Value Index', href: `${SUBDOMAINS.tools}/homemaker-value-index`, external: true },
      { label: 'Job Pricing Calculator', href: `${SUBDOMAINS.tools}/job-pricing`, external: true },
      { label: 'Judgment Premium Report', href: `${SUBDOMAINS.tools}/judgment-premium`, external: true },
    ],
  },
  {
    label: 'Writing',
    href: '/writing',
    children: [
      { label: 'Research Notes', href: '/writing/research' },
      { label: 'Data Dispatches', href: '/writing/data-dispatches' },
      { label: 'WORA Working Group', href: '/writing/wora-working-group' },
    ],
  },
] as const
