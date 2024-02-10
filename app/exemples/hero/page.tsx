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
    title: `Templates de Hero Sections Tailwind CSS Gratuits - ${siteMetadata.title}`,

    description:
      'Plongez dans notre vaste collection de templates de hero sections Tailwind CSS, entièrement gratuits et prêts à être intégrés dans vos projets web.',
    keywords: [
      'templates section héro Tailwind CSS gratuits',
      'exemple de section héro Tailwind CSS',
      'créer une hero section avec Tailwind CSS',
      'section héro responsive Tailwind CSS',
      'meilleures hero sections Tailwind CSS',
      'section héro Tailwind CSS pour landing page',
      'design de hero section avec Tailwind CSS',
      'construire une hero section Tailwind CSS',
      'inspiration hero section Tailwind CSS',
      'configurer une hero section en Tailwind CSS',
    ],
    openGraph: {
      title: `Templates de Hero Sections Tailwind CSS Gratuits - ${siteMetadata.title}`,

      description:
        'Plongez dans notre vaste collection de templates de hero sections Tailwind CSS, entièrement gratuits et prêts à être intégrés dans vos projets web.',
      url: './',
      siteName: `Hero sections - ${siteMetadata.title}`,
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
