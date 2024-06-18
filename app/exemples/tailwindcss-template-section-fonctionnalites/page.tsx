import React from 'react'
import siteMetadata from '@/data/siteMetadata'
import Main from './Main'
import { ResolvingMetadata, Metadata } from 'next'

type Props = {
  params: { search: string }
  searchParams: { [key: string]: string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: `Templates gratuit de section fonctionnalités - ${siteMetadata.title}`,

    description:
      'Découvrez des exemples de sections de fonctionnalités pour votre site web, conçus pour Tailwind CSS.',
    keywords: ['section fonctionnalité', 'features', 'fonctionnalités', 'section', 'Tailwind CSS'],
    openGraph: {
      title: `Templates gratuit de section fonctionnalités - ${siteMetadata.title}`,

      description:
        'Découvrez des exemples de sections de fonctionnalités pour votre site web, conçus pour Tailwind CSS.',
      url: './',
      siteName: `features sections - ${siteMetadata.title}`,
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
}

export default function Page() {
  return <Main />
}
