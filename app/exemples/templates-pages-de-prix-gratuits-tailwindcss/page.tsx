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
    title: `Templates Tailwindcss Gratuits Pour Pages De Prix`,
    description:
      'Une liste exhaustive de templates tailwindcss gratuits pour présenter les prix et les functionnalités de vos produits digitaux.',
    keywords: ['Pages de prix', 'templates gartuits', 'tailwindcss'],
    openGraph: {
      title: `Templates d'Authentification Tailwind CSS Gratuits - ${siteMetadata.title}`,
      description:
        'Une liste exhaustive de templates tailwindcss gratuits pour présenter les prix et les functionnalités de vos produits digitaux.',
      url: './',
      siteName: `Templates Pages De Prix Tailwindcss - ${siteMetadata.title}`,
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

const Page = () => {
  return <Main />
}

export default Page
