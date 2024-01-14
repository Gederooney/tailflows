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

    description: `Générateur de nuances tailwindcss pour ${searchParams.color}. Copiez le resultat et coller dans votre fichier tailwind.config pour avancer plus rapidement dans vos projets web`,
    openGraph: {
      title: `${searchParams.color}-${searchParams.name} | ${siteMetadata.title}`,
      description: `Générateur de nuances tailwindcss pour ${searchParams.color}. Copiez le resultat et coller dans votre fichier tailwind.config pour avancer plus rapidement dans vos projets web`,
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
