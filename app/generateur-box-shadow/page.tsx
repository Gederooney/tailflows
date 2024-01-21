import React from 'react'
import siteMetadata from '@/data/siteMetadata'
import { ResolvingMetadata, Metadata } from 'next'
import Content from './Content'

type Props = {
  params: { search: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: `180 et plus tailwindcss & css box shadows | ${siteMetadata.title}`,

    description: `Plus de 180 exemples de box shadows avec les configs tailwindcss pour vos projets. Copiez, coller et développer plus rapidement.`,
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
      title: siteMetadata.title,
      description: `Plus de 180 exemples de box shadows avec les configs tailwindcss pour vos projets. Copiez, coller et développer plus rapidement.`,
      url: './',
      siteName: siteMetadata.title,
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
      title: siteMetadata.title,
      card: 'summary_large_image',
      images: [siteMetadata.socialBanner],
    },
  }
}

const Page = () => {
  return <Content />
}

export default Page
