import React from 'react'
import { getTheme } from '../utils'
import { notFound } from 'next/navigation'
import Content from './Content'
import { ResolvingMetadata, Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

type Props = {
  params: { search: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const theme = await getTheme({ id: searchParams.id as string })
  if (!theme) return {} as Metadata
  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: `${theme.metaTitle ?? searchParams.name} | ${siteMetadata.title}`,

    description: `${theme.description[0]}`,
    keywords: [
      ...theme.tags,
      'template',
      'tailwindcss theme',
      'template gratuit',
      ...theme.categories,
      ...theme.frameworks,
    ],
    openGraph: {
      title: siteMetadata.title,
      description: `${theme.description[0]}`,
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

const page = async ({ params }: { params: { slug: string } }) => {
  const theme = await getTheme({ slug: params.slug })

  if (!theme) return notFound()
  return <Content {...theme} />
}

export default page
