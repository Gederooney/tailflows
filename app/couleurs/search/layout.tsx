import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

// export const metadata: Metadata = {
//   metadataBase: new URL(siteMetadata.siteUrl),
//   title: {
//     default: siteMetadata.title,
//     template: `%s | ${siteMetadata.title}`,
//   },
//   description:
//     "Générer des nuances de couleurs à partir d'une couleur de base pour vos projets web et mobiles. Copiez le code HEX, RGB ou HSL pour une intégration rapide dans vos projets React, Vue, Angular, Svelte, etc.",
//   openGraph: {
//     title: siteMetadata.title,
//     description: siteMetadata.description,
//     url: './',
//     siteName: siteMetadata.title,
//     images: [siteMetadata.socialBanner],
//     locale: 'fr_FR',
//     type: 'website',
//   },
//   alternates: {
//     canonical: './',
//     types: {
//       'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
//     },
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   twitter: {
//     title: siteMetadata.title,
//     card: 'summary_large_image',
//     images: [siteMetadata.socialBanner],
//   },
// }

type Props = {
  params: { search: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
