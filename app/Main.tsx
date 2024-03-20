import Hero from '@/components/Hero'
import { Section as Newsletter } from '@/components/Newsletter'
import Link from 'next/link'
import data from '@/data/homePageData.json' assert { 'type': 'json' }
import ThemeCard from '@/components/ThemeGridCard'
import { Theme, ReposInfos } from 'types'

const classnames = ['grid-a', 'grid-b', 'grid-c', 'grid-d', 'grid-e', 'grid-f']

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      <section className="py-12 bg-gray-100 dark:bg-secondary-50/5">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl mx-auto mb-10 text-center lg:mb-14">
            <h2 className="block max-w-2xl mx-auto text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl dark:text-gray-200">
              Templates tailwindcss{' '}
              <span className="text-primary-600 dark:text-primary-500">Gratuits</span>
            </h2>
            <p className="px-4 mt-1 text-sm text-center text-gray-500 dark:text-gray-400 sm:text-base">
              Découvrez notre sélection rigoureuse de templates TailwindCSS gratuits, soigneusement
              choisis pour enrichir votre blog, portfolio, site web de développeur, ou dashboard
              d'administration. Nous avons parcouru le web pour vous offrir les meilleures pages
              d'atterrissage et designs prêts à l'emploi, facilitant ainsi le lancement rapide de
              vos projets.{' '}
              <span className="sr-only">
                Explorez davantage en cliquant{' '}
                <Link href="/templates" className="text-primary-700">
                  ici
                </Link>{' '}
                et accélérez votre développement dès aujourd'hui.
              </span>
            </p>
          </div>
          <div className="grid w-full gap-4 themes-demos-grid">
            {(data.themes as unknown as (Theme & ReposInfos)[])
              .sort((a, b) => b.popularity - a.popularity)
              .map((theme, index) => (
                <div key={theme.slug} className={`p-6 ${classnames[index]}`}>
                  <ThemeCard {...theme} />
                </div>
              ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  )
}
