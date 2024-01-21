import React from 'react'
import Content from './Content'
import { ResolvingMetadata, Metadata } from 'next'

type Props = {
  params: { search: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
import siteMetadata from '@/data/siteMetadata'

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: `Templates gartuits tailwindcss | ${siteMetadata.title}`,

    description:
      'Plus de 100 themes tailwindcss gratuits. Télechargez gratuitement les templates pour créer vos blog, vos sites ecommerce, portofolio et plus encore',
    keywords: [
      'portfolio template tailwindcss',
      'admin dashboard tailwindcss',
      'blog template tailwindcss',
      'free templates',
      'template tailwindcss',
      'template gratuit',
      'tailwindcss',
      'template tailwindcss gradtuit',
    ],
    openGraph: {
      title: siteMetadata.title,
      description:
        'Plus de 100 themes tailwindcss gratuits. Télechargez gratuitement les templates pour créer vos blog, vos sites ecommerce, portofolio et plus encore',
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
