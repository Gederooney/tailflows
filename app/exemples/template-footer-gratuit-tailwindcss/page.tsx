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
    title: `Templates Gratuit de Footer Avec Tailwind CSS`,

    description:
      'Découvrez une liste de templates de pied de page (footer) gratuits et construit avec tailwindcss et html5.',
    keywords: ['footer tailwindcss', 'template'],
    openGraph: {
      title: `Templates Gratuit de Footer Avec Tailwind CSS - ${siteMetadata.title}`,

      description:
        'Découvrez une liste de templates de pied de page (footer) gratuits et construit avec tailwindcss et html5.',
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
      title: `tailflows - ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: [siteMetadata.socialBanner],
    },
  }
}

export default function Page() {
  return <Main />
}
