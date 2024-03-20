'use client'
import React, { useState } from 'react'
import Search from '@/components/Search/Index'
import Link from 'next/link'
import { formatSvg } from '@/lib/utils'
import axios from 'axios'
import { Icon } from 'types'

const possibleSVGAttr = [
  'xmlns',
  'height',
  'viewBox',
  'width',
  'fill',
  'stroke',
  'stroke-width',
  'stroke-linecap',
  'stroke-linejoin',
]

const Content = ({ initialSet }: { initialSet: Icon[] }) => {
  const [icons, setIcons] = useState<Icon[]>(initialSet)

  const handleSearch = async (term: string) => {
    try {
      const { data } = await axios.get(`/api/icons/search?term=${term}`)
      setIcons(() => data.icons)
    } catch {
      setIcons(() => [])
    }
  }

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
        <a
          href="/themes"
          className="inline-flex items-center justify-between px-1 py-1 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full mb-7 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
            templates
          </span>{' '}
          <span className="text-sm font-medium">
            liste de templates tailwindcss gratuits et open sources{' '}
          </span>
          <svg
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-secondary-950 md:text-5xl lg:text-6xl dark:text-gray-50">
          Personalisez vos icônes à la façon tailwindcss avec les class utilitaires.
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Plus de 6000 milles icônes de plusieurs sources customisez pour l'utilisation dans vos
          projets tailwindcss. Utilisez les icônes dans vos projets design, web comme mobile.
          Développez plus rapidement des projets web.
        </p>
      </div>
      <Search handleSearch={handleSearch} inputOnly buttonTexte="Trouver" />
      <div className="flex flex-wrap flex-grow-0 flex-shrink-0 my-12">
        {icons.length > 0
          ? icons.map((icon, index) => {
              const params = new URLSearchParams()
              params.append('name', icon.name.replaceAll('_', '-'))
              params.append('id', icon.id)
              const svg = formatSvg(icon.svg)
              return (
                <div
                  className="w-1/5 p-1 text-secondary-600 md:w-1/10 shrink-0 grow-0 md:p-2 dark:text-gray-50/50 aspect-square"
                  key={icon.id + index}
                >
                  <Link
                    href={`/icons/search?${params.toString()}`}
                    className="flex gap-2 flex-col items-center justify-center border dark:border-gray-50/10 p-1 md:p-2.5 rounded-md  h-full w-full"
                    target="_blank"
                  >
                    <span
                      className="inline-block w-8 h-8 text-current"
                      dangerouslySetInnerHTML={{
                        __html: svg,
                      }}
                    ></span>
                    {/* <p className="block w-full text-xs text-center shrink-0 grow-0 line-clamp-1">
                  {icon.name}
                </p> */}
                  </Link>
                </div>
              )
            })
          : null}
      </div>
      {/* <Pagination /> */}
    </div>
  )
}

export default Content
