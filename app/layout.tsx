import 'css/tailwind.css'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RouteLoader from '@/components/RouteLoader'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'
import { Manrope, Newsreader } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { ThemeProviders } from './theme-providers'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${manrope.variable} ${newsreader.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon.ico" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fbfbf8" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#11110f" />
      <body className="bg-[var(--color-bg)] text-[var(--color-fg)] antialiased">
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <RouteLoader />
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <SectionContainer>
            <div className="page-shell flex min-h-[100dvh] flex-col justify-between font-sans">
              <Header />
              <main id="main-content" className="mb-auto pt-28 sm:pt-32">
                {children}
              </main>
              <Footer />
            </div>
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}
