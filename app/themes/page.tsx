import React from 'react'
import Content from './Content'
import { ResolvingMetadata, Metadata } from 'next'
import themes from '@/data/themes.json'

type Props = {
  params: { search: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
import siteMetadata from '@/data/siteMetadata'

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const theme = themes.find((theme) => theme.id === searchParams.id)
  if (!theme) return {} as Metadata
  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: `${searchParams.name} | ${siteMetadata.title}`,

    description: theme.description[0],
    keywords: [
      ...theme.tags,
      ...theme.categories,
      'template tailwindcss',
      'template gratuit',
      'tailwindcss',
      'template tailwindcss gradtuit',
      ...theme.features,
    ],
    openGraph: {
      title: siteMetadata.title,
      description: theme.description[0],
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
