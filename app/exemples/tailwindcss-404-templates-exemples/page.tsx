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
    title: `Templates 404 Tailwind CSS : Page d'Erreur Personnalisée - ${siteMetadata.title}`,

    description:
      "Transformez une erreur en opportunité avec nos templates de pages d'erreur 404, conçus pour Tailwind CSS. Offrez une expérience utilisateur réfléchie même dans les moments d'égarement grâce à des designs créatifs et engageants qui guident vos visiteurs vers des pages utiles.",
    keywords: [
      'templates 404 Tailwind CSS gratuits',
      "pages d'erreur 404 créatives Tailwind CSS",
      'construire une page 404 avec Tailwind CSS',
      'design de page 404 responsive Tailwind CSS',
      'meilleures pages 404 Tailwind CSS',
      'page 404 Tailwind CSS pour site web',
      'personnaliser une page 404 en Tailwind CSS',
      'exemple de page 404 Tailwind CSS',
      'inspiration page 404 Tailwind CSS',
      'page 404 Tailwind CSS avec image de fond',
    ],
    openGraph: {
      title: `Templates 404 Tailwind CSS : Page d'Erreur Personnalisée - ${siteMetadata.title}`,

      description:
        "Transformez une erreur en opportunité avec nos templates de pages d'erreur 404, conçus pour Tailwind CSS. Offrez une expérience utilisateur réfléchie même dans les moments d'égarement grâce à des designs créatifs et engageants qui guident vos visiteurs vers des pages utiles.",
      url: './',
      siteName: `404 sections - ${siteMetadata.title}`,
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

export default function Page() {
  return <Main />
}
