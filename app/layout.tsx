import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'css/prism.css'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/components/auth/SessionProvider'
import { Space_Grotesk, Poppins } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'
import { CookieBanner } from '@/components/popover'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession()
  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} ${poppins.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicons/black-favicon-16x16.png"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicons/black-favicon-32x32.png"
        media="(prefers-color-scheme: light)"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicons/white-favicon-16x16.png"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicons/white-favicon-32x32.png"
        media="(prefers-color-scheme: dark)"
      />

      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      <body className="antialiased bg-white secondary-950 dark:bg-secondary-900 dark:text-gray-50/50">
        <SessionProvider session={session}>
          <ThemeProviders>
            <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
            <Header />
            <main className="relative h-full mb-auto lg:min-h-[700px]">{children}</main>
            <Footer />
            <CookieBanner />
          </ThemeProviders>
        </SessionProvider>
      </body>
    </html>
  )
}
