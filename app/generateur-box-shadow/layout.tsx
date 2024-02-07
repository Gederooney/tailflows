import React from 'react'

import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: `shadowsflow - ${siteMetadata.title}`,
  description:
    "ShadowsFlow est l'outil incontournable sur Tailflows pour générer des box-shadows personnalisées adaptées à Tailwind CSS, au CSS standard, et aux styles en ligne HTML.",
  openGraph: {
    title: `shadowsflow - ${siteMetadata.title}`,
    description:
      "ShadowsFlow est l'outil incontournable sur Tailflows pour générer des box-shadows personnalisées adaptées à Tailwind CSS, au CSS standard, et aux styles en ligne HTML.",
    url: './',
    siteName: `shadowsflow - ${siteMetadata.title}`,
    images: [siteMetadata.socialBanner],
    locale: 'fr_FR',
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
    title: `shadowsflow - ${siteMetadata.title}`,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
