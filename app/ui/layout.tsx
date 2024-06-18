import React from 'react'
import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: `UIs - ${siteMetadata.title}`,
  description:
    "Liste d'interfaces utilisateur (UI) crées avec HTML5 et Tailwindcss pour accélérer le développement web.",
  openGraph: {
    title: `UIs - ${siteMetadata.title}`,
    description:
      "Liste d'interfaces utilisateur (UI) crées avec HTML5 et Tailwindcss pour accélérer le développement web.",
    url: './',
    siteName: `Uis - ${siteMetadata.title}`,
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
