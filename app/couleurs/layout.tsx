import React from 'react'
import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: `Paletteflows - ${siteMetadata.title}`,
  description:
    'Paletteflows est un outil intuitif qui vous permet de générer et d’intégrer des palettes de couleurs personnalisées dans Tailwind CSS ou CSS standard en quelques clics.',
  openGraph: {
    title: `Paletteflows - ${siteMetadata.title}`,
    description:
      'Paletteflows est un outil intuitif qui vous permet de générer et d’intégrer des palettes de couleurs personnalisées dans Tailwind CSS ou CSS standard en quelques clics.',
    url: './',
    siteName: `Paletteflows - ${siteMetadata.title}`,
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
    title: `Paletteflows - ${siteMetadata.title}`,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
