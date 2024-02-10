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
    title: `Templates d'Authentification Tailwind CSS Gratuits - ${siteMetadata.title}`,
    description:
      "Découvrez notre collection de templates d'authentification Tailwind CSS, parfaits pour les pages de connexion, d'inscription et de récupération de mot de passe.",
    keywords: [
      "templates d'authentification Tailwind CSS",
      'formulaires de connexion Tailwind CSS',
      'templates de login Tailwind CSS gratuits',
      "formulaires d'inscription Tailwind CSS",
      "UI d'authentification avec Tailwind CSS",
      "designs de formulaire d'authentification Tailwind CSS",
      "composants d'authentification Tailwind CSS",
      'modèles de pages de login Tailwind CSS',
      'exemples de formulaires Tailwind CSS',
      'templates Tailwind CSS pour authentification',
    ],
    openGraph: {
      title: `Templates d'Authentification Tailwind CSS Gratuits - ${siteMetadata.title}`,
      description:
        "Découvrez notre collection de templates d'authentification Tailwind CSS, parfaits pour les pages de connexion, d'inscription et de récupération de mot de passe.",
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
