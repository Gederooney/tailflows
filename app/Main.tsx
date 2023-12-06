import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <section className="py-12">
        <div className="">
          <h1 className="mx-auto max-w-4xl text-center text-5xl font-extrabold">
            L'ecosysteme tailwindcss le plus complet pour les développeurs web
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-center">
            Vous aimez tailwindcss? Nous aussi. Nous ambitionnons de créer le plus grand écosystème
            pour les développeurs tailwindcss.
          </p>
        </div>
      </section>
    </>
  )
}
