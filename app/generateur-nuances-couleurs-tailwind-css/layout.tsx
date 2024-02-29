import React from 'react'
import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: `Générateur de Couleurs et Nuances pour Design Web Avancé`,
  description:
    'Transformez votre design web avec PaletteFlows, le générateur de palette de couleurs idéal pour Tailwind CSS et tous vos projets de développement web.',
  openGraph: {
    title: `Générateur de Couleurs et Nuances pour Design Web Avancé`,
    description:
      'Transformez votre design web avec PaletteFlows, le générateur de palette de couleurs idéal pour Tailwind CSS et tous vos projets de développement web.',
    url: './',
    siteName: `Tailflows`,
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
    title: `Générateur de Couleurs et Nuances pour Design Web Avancé`,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
