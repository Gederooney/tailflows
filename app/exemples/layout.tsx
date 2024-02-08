import React from 'react'
import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: `Exemples - ${siteMetadata.title}`,
  description: '',
  openGraph: {
    title: `Exemples - ${siteMetadata.title}`,
    description: siteMetadata.description,
    url: './',
    siteName: `Exemples - ${siteMetadata.title}`,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
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
    title: `Exemples - ${siteMetadata.title}`,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
