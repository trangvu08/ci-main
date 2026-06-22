import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Clarity Intelligence',
    template: '%s | Clarity Intelligence',
  },
  description:
    'Workforce intelligence infrastructure for the AI-augmented era. WORA-X task taxonomy, CVI human value scoring, Dynamic Pay Engine.',
  metadataBase: new URL('https://clarityintelligence.co'),
  openGraph: { siteName: 'Clarity Intelligence', type: 'website', locale: 'en_US' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
