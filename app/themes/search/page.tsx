import React from 'react'
import Content from './Content'
import siteMetadata from '@/data/siteMetadata'
import { ResolvingMetadata, Metadata } from 'next'
import themes from '@/data/themes.json' assert { type: 'json' }
import { notFound } from 'next/navigation'

type Props = {
  params: { search: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const theme = themes.find((theme) => theme.id === searchParams.id)
  if (!theme) return {} as Metadata
  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: `${searchParams.name} | ${siteMetadata.title}`,

    description: `${theme.description[0]}`,
    keywords: [
      ...theme.tags,
      'template',
      'tailwindcss theme',
      'template gratuit',
      ...theme.categories,
      ...theme.framework,
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

async function getTheme(themeId: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/themes`, {
      method: 'GET',
    })
    if (!res.ok) return null

    const data = await res.json()

    console.log(data)
    return data
  } catch (error) {
    console.log(error.message)
    return null
  }
}

const Page = async ({ searchParams }: { searchParams: { name: string; id: string } }) => {
  const theme = await getTheme(searchParams.id)

  if (!theme) return notFound()
  return <Content />
}

export default Page
