'use client'
import React from 'react'
import { Section } from '@/components/Newsletter'
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function formatDate(isoDate) {
  // Création d'un objet Date à partir de la chaîne ISO
  const date = new Date(isoDate)

  // Options pour configurer le formatage
  const options = {
    weekday: 'long', // jour de la semaine en entier
    year: 'numeric', // année en quatre chiffres
    month: 'long', // mois en entier
    day: 'numeric', // jour du mois
  }

  // Utilisation de Intl.DateTimeFormat pour formater la date selon les options et la locale fr-FR
  // @ts-ignore
  const formatter = new Intl.DateTimeFormat('fr-FR', options)

  // Retourne la date formatée
  return formatter.format(date)
}

const Page = () => {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  const router = useRouter()

  return (
    <>
      <div className="min-h-full py-16 space-y-16 ">
        <Section />
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 px-4">
          <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
            <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-primary-200 dark:bg-primary-500/20 sm:block"></div>
            <div className="space-y-16 md:px-6 px-4">
              {posts.map((p) => (
                <button
                  role="link"
                  aria-label="Voir l'article"
                  tabIndex={0}
                  className="relative group cursor-pointer"
                  key={p.slug}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') router.push(`/blog/${p.slug}`)
                  }}
                  onClick={() => router.push(`/blog/${p.slug}`)}
                >
                  <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-gray-100 dark:group-hover:bg-secondary-800 "></div>
                  <svg
                    viewBox="0 0 9 9"
                    className="hidden absolute right-full mr-[2.5rem] top-2 text-gray-500 md:mr-[4.5rem] w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                  >
                    <circle
                      cx="4.5"
                      cy="4.5"
                      r="4.5"
                      stroke="currentColor"
                      className="fill-white dark:fill-secondary-800 stroke-primary-500"
                      strokeWidth="2"
                    ></circle>
                  </svg>

                  <div className="relative">
                    <h3 className="text-base font-semibold tracking-tight text-secondary-900 dark:text-gray-50 pt-8 lg:pt-0">
                      {p.title}
                    </h3>
                    <div className="mt-2 mb-4 prose prose-gray prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2 text-gray-500 dark:text-gray-400">
                      <p>{p.excerpt}</p>
                    </div>
                    <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                      <dt className="sr-only">Date</dt>
                      <dd className="whitespace-nowrap text-sm leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={p.date}>{formatDate(p.date)}</time>
                      </dd>
                    </dl>
                  </div>
                  <Link
                    className="flex items-center text-sm text-primary-500 font-medium"
                    href={'/blog/' + p.slug}
                  >
                    <span className="relative">
                      Continuer la lecture
                      <span className="sr-only">{p.title}</span>
                    </span>
                    <svg
                      className="relative mt-px overflow-visible ml-2.5 text-primary-300 dark:text-primary-700"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </Link>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
