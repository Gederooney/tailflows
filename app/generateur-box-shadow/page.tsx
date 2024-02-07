import React from 'react'
import siteMetadata from '@/data/siteMetadata'
import { ResolvingMetadata, Metadata } from 'next'
import Content from './Content'

type Props = {
  params: { search: string }
  searchParams: { [key: string]: string | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { name, color } = searchParams
  const ulrParams = new URLSearchParams()

  if (!name || !color) {
    return {}
  }
  ulrParams.append('color', color.toLowerCase())
  ulrParams.append('name', name.replaceAll(' ', '-'))
  const canonicalUrl = `${siteMetadata.siteUrl}/couleurs/search?${ulrParams.toString()}`
  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: `shadowsflow - ${siteMetadata.title}`,

    description:
      "ShadowsFlow est l'outil incontournable sur Tailflows pour générer des box-shadows personnalisées adaptées à Tailwind CSS, au CSS standard, et aux styles en ligne HTML.",
    keywords: [
      'box shadows',
      'tailwindcss',
      'tailwindcss shadow',
      'css shadow',
      'ombre de portée css',
      'box-shadow',
      'css box-shadow',
    ],
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
      canonical: canonicalUrl,
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
  return <Content />
}

export default Page
