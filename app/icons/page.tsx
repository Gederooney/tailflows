import React from 'react'
import Content from './Content'
import { ResolvingMetadata, Metadata } from 'next'

type Props = {
  params: { search: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
import siteMetadata from '@/data/siteMetadata'
import { fetchDefaultIcons } from '@/lib/icons'

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: `14 000 icônes gratuits | ${siteMetadata.title}`,

    description:
      "Plus de 14 00 icônes pour vos projets design, web, mobile. Avec des exemples d'utilisation, copiez le svg, ou télechargez le svg ou le png selon vos choix",
    keywords: [
      'free icons',
      'icon web developer',
      'icons ui',
      'icons ux',
      'web design icons',
      'icons developer web',
      'font-awesome icons',
      'tabler icon',
      'facebook icon',
      'tiktok icon',
    ],
    openGraph: {
      title: siteMetadata.title,
      description:
        "Plus de 14 00 icônes pour vos projets design, web, mobile. Avec des exemples d'utilisation, copiez le svg, ou télechargez le svg ou le png selon vos choix",
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

const Page = async () => {
  const icons = await fetchDefaultIcons()
  return <Content initialSet={icons} />
}

export default Page
