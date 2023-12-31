import React from 'react'
import icons from './data.json'
import Search from '@/components/Search/Index'
import Link from 'next/link'

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
          className="relative inline-flex items-center px-4 py-2 text-sm font-light text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Préc
        </Link>
        <Link
          href="/icons"
          className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-light text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Suiv
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-xs text-gray-700">
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
              className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
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
              className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-indigo-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </Link>
            <Link
              href="/icons"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </Link>
            <Link
              href="/icons"
              className="relative items-center hidden px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </Link>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <Link
              href="/icons"
              className="relative items-center hidden px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </Link>
            <Link
              href="/icons"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </Link>
            <Link
              href="/icons"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </Link>
            <Link
              href="/icons"
              className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
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

const sortedIcons = (icons as Icon[]).sort((a, b) => b.popularity - a.popularity)

const Page = () => {
  const handleSearch = () => {}
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl">
      <Search />
      <div className="flex flex-wrap flex-grow-0 flex-shrink-0">
        {sortedIcons.slice(0, 200).map((icon) => {
          const params = new URLSearchParams()
          params.append('name', icon.name.replaceAll('_', '-'))
          params.append('id', icon.id)
          return (
            <div
              className="w-1/5 md:w-1/10 shrink-0 grow-0 p-1 md:p-2 text-slate-950/40 dark:text-slate-50/80 aspect-square"
              key={icon.name}
            >
              <Link
                href={`/icons/search?${params.toString()}`}
                className="flex gap-2 flex-col items-center justify-center border dark:border-gray-50/10 p-1 md:p-2.5 rounded-md  h-full w-full"
                target="_blank"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={icon.viewBox}
                  dangerouslySetInnerHTML={{ __html: icon.svg as string }}
                ></svg>
                <span className="w-full shrink-0 grow-0 block text-center text-xs line-clamp-1">
                  {icon.name}
                </span>
              </Link>
            </div>
          )
        })}
      </div>
      <Pagination />
    </div>
  )
}

export default Page
