import React from 'react'
import icons from '@/data/icons.json'
import legacyIcons from '@/data/legacy_icons.json'
import siteMetadata from '@/data/siteMetadata'
import { ResolvingMetadata, Metadata } from 'next'
import Content from './Content'
import { Icon } from '../page'
import { notFound } from 'next/navigation'

type Props = {
  params: { search: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const icon =
    (icons as Icon[]).find((icon) => icon.id === searchParams.id) ??
    (legacyIcons as Icon[]).find((icon) => icon.id === searchParams.id)
  if (!icon) return {} as Metadata
  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: `${searchParams.name} | ${siteMetadata.title}`,

    description: `Customisez l'icon ${icon?.name.replaceAll(
      '-',
      ' '
    )} selon vos goûts et copiez le code svg ou jsx avec les classes tailwind pour utiliser dans vos projets rapidement. Choissisez une couleur de votre choix, definissez la largeur, la hauteur et la taille des contours.`,
    keywords: [...icon.tags, 'icon', 'tailwindcss icons', 'utility class icons'],
    openGraph: {
      title: siteMetadata.title,
      description: `Customisez l'icon ${icon?.name.replaceAll(
        '-',
        ' '
      )} selon vos goûts et copiez le code svg ou jsx avec les classes tailwind pour utiliser dans vos projets rapidement. Choissisez une couleur de votre choix, definissez la largeur, la hauteur et la taille des contours.`,
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

const Page = ({ searchParams }: { searchParams: { name: string; id: string } }) => {
  const icon =
    (icons as Icon[]).find((icon) => icon.id === searchParams.id) ??
    (legacyIcons as Icon[]).find((icon) => icon.id === searchParams.id)

  if (!icon) return notFound()
  return <Content {...icon} />
}

export default Page
