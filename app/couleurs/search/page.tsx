import Content from './Content'
import siteMetadata from '@/data/siteMetadata'
import { ResolvingMetadata, Metadata } from 'next'

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
    title: `${searchParams.color}-${searchParams.name} | ${siteMetadata.title}`,

    description: `Générer des nuances de couleurs à partir d'une couleur de base pour vos projets web et mobiles. Copiez le code HEX, RGB ou HSL pour une intégration rapide dans vos projets React, Vue, Angular, Svelte, etc.`,
    openGraph: {
      title: siteMetadata.title,
      description: siteMetadata.description,
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

const Page = ({ searchParams }: { searchParams: { color: string; name: string } }) => {
  return <Content searchParams={searchParams} />
}

export default Page
