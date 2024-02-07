'use client'
import React, { useMemo, useState } from 'react'
import icons from '@/data/icons.json'
import Search from '@/components/Search/Index'
import Link from 'next/link'
import { formatSvg } from '@/lib/utils'

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

export type Icon = {
  name: string
  tags: string[]
  version: number
  popularity: number
  codepoint: number
  unsupported_families: string[]
  categories: string[]
  sizes_px?: number[]
  svg: string
  id: string
  viewBox: string
}

function Pagination() {
  return (
    <div className="relative z-0 flex items-center justify-between px-4 py-3 sm:px-6">
      <div className="flex justify-between flex-1 sm:hidden">
        <Link
          href="/icons"
          className="relative inline-flex items-center px-4 py-2 text-sm font-light text-gray-900 border border-gray-300 rounded-md dark:border-gray-50/10 dark:text-gray-50/50 hover:bg-gray-50"
        >
          Préc
        </Link>
        <Link
          href="/icons"
          className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-light text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 dark:text-gray-50/50 dark:border-gray-50/10"
        >
          Suiv
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-xs text-gray-700 dark:text-gray-50/50">
            <span className="font-light">1</span> à <span className="font-light">10</span> de{' '}
            <span className="font-light">97</span> resultats
          </p>
        </div>
        <div>
          <nav
            className="z-0 inline-flex -space-x-px rounded-md shadow-sm isolate"
            aria-label="Pagination"
          >
            <Link
              href="/icons"
              className="relative inline-flex items-center px-2 py-2 text-gray-400 dark:text-gray-50/50 rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </Link>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <Link
              href="/icons"
              aria-current="page"
              className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-secondary-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-gray-50/50"
            >
              1
            </Link>
            <Link
              href="/icons"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-gray-50/50"
            >
              2
            </Link>
            <Link
              href="/icons"
              className="relative items-center hidden px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex dark:text-gray-50/50"
            >
              3
            </Link>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0 dark:text-gray-50/50">
              ...
            </span>
            <Link
              href="/icons"
              className="relative items-center hidden px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex dark:text-gray-50/50"
            >
              8
            </Link>
            <Link
              href="/icons"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-gray-50/50"
            >
              9
            </Link>
            <Link
              href="/icons"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-gray-50/50"
            >
              10
            </Link>
            <Link
              href="/icons"
              className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-gray-50/50"
            >
              <span className="sr-only">Next</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              {/* <ChevronRightIcon className="w-5 h-5" aria-hidden="true" /> */}
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

const Page = () => {
  const [searchTerm, setsearchTerm] = useState('')
  const handleSearch = (term: string) => {
    setsearchTerm(term)
  }
  const defaultIcons = (icons as Icon[]).sort((a, b) => b.popularity - a.popularity)

  const sortedIcons = useMemo(() => {
    if (searchTerm.length) {
      const searchWords = searchTerm
        .trim()
        .toLocaleLowerCase()
        .split(' ')
        .filter((word) => word !== '')
      if (searchWords.length === 0) return defaultIcons
      const filteredIcons = (icons as Icon[]).filter((icon) =>
        searchWords.every((word) => icon.tags.some((tag) => tag.includes(word)))
      )

      return filteredIcons
    }
    return defaultIcons
  }, [searchTerm])

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
        <a
          href="/themes"
          className="inline-flex items-center justify-between px-1 py-1 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full mb-7 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
            themes
          </span>{' '}
          <span className="text-sm font-medium">
            liste de thèmes tailwindcss gratuits et open sources{' '}
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
        {sortedIcons.slice(0, 200).map((icon, index) => {
          const params = new URLSearchParams()
          params.append('name', icon.name.replaceAll('_', '-'))
          params.append('id', icon.id)
          const svg = formatSvg(icon.svg)
          return (
            <div
              className="w-1/5 p-1 text-secondary-600 md:w-1/10 shrink-0 grow-0 md:p-2 dark:text-gray-50/50 aspect-square"
              key={icon.name + index}
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
        })}
      </div>
      {/* <Pagination /> */}
    </div>
  )
}

export default Page