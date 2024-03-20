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
    title: `Top Templates Gratuits Tailwind CSS 2023 : Découvrez les Meilleurs pour Next.js, React, et Plus | ${siteMetadata.title}`,

    description:
      "Découvrez notre sélection exclusive des meilleurs templates Tailwind CSS gratuits et sous licence gratuite de 2023. Parfait pour Next.js, React, Astro, et d'autres frameworks. Lancez votre projet avec style !",
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

function TemplatesPage() {
  return (
    <div>
      <h1>Top Templates Gratuits Tailwind CSS 2023</h1>
      <p>
        Bienvenue sur notre page dédiée aux templates Tailwind CSS gratuits et sous licence MIT, la
        ressource incontournable pour tout développeur web en quête de designs modernes et réactifs.
        Que vous soyez un adepte de Next.js, un passionné de React, un utilisateur d'Astro, ou un
        fan de HTML pur, notre sélection de templates vous aidera à donner vie à vos idées avec
        élégance et efficacité.
      </p>

      <h2>Pourquoi Choisir nos Templates Tailwind CSS ?</h2>
      <ul>
        <li>
          Variété : Notre bibliothèque comprend des templates adaptés à une multitude de frameworks.
        </li>
        <li>
          Qualité : Chaque template est soigneusement sélectionné pour garantir des standards de
          design élevés.
        </li>
        <li>
          Flexibilité : Ajuster et modifier ces templates pour qu'ils correspondent à votre vision
          est un jeu d'enfant.
        </li>
        <li>
          Prêt à l'Emploi : Avec des templates conçus pour être immédiatement opérationnels, vous
          pouvez accélérer le développement de votre site ou application.
        </li>
      </ul>

      <h2>Découvrez Notre Sélection</h2>
      <p>
        <strong>Templates Next.js</strong> : Idéals pour les applications SSR (Server-Side
        Rendering) ou SSG (Static Site Generation).
      </p>
      <p>
        <strong>Templates React</strong> : Lancez rapidement des applications SPA (Single Page
        Application) avec nos templates React.
      </p>
      <p>
        <strong>Templates Astro</strong> : Parfaits pour des sites rapides et légers, exploitant la
        puissance du rendu statique et du rendu à la demande.
      </p>
      <p>
        <strong>Templates HTML</strong> : Nos templates HTML offrent une base solide, facile à
        étendre et à personnaliser pour une approche plus traditionnelle.
      </p>

      <h2>Commencez Aujourd'hui</h2>
      <p>
        Plongez dans notre collection de templates Tailwind CSS et donnez un coup d'accélérateur à
        votre prochain projet web. Explorez, téléchargez, et commencez à construire quelque chose
        d'exceptionnel aujourd'hui. Votre projet parfait commence ici, avec Tailflows.
      </p>
    </div>
  )
}

const Page = () => {
  return (
    <>
      <Content />
      <section className="sr-only">
        <TemplatesPage />
      </section>
    </>
  )
}

export default Page
