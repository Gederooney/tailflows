import React from 'react'
import icons from './data.json'
import Search from '@/components/Search/Index'
import Link from 'next/link'

function Pagination() {
  return (
    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <Link
          href="/icons"
          className="relative inline-flex items-center rounded-md border border-gray-300  px-4 py-2 text-sm font-light text-gray-700 hover:bg-gray-50"
        >
          Préc
        </Link>
        <Link
          href="/icons"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-light text-gray-700 hover:bg-gray-50"
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
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <Link
              href="/icons"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </Link>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <Link
              href="/icons"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </Link>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <Link
              href="/icons"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
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
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              {/* <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> */}
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

const sortedIcons = icons.sort((a, b) => b.popularity - a.popularity)

const Page = () => {
  const handleSearch = () => {}
  return (
    <div className="max-w-7xl px-4 py-12 mx-auto">
      <Search />
      <div className="flex flex-wrap flex-grow-0 flex-shrink-0">
        {sortedIcons.slice(0, 200).map((icon) => {
          const params = new URLSearchParams()
          params.append('name', icon.name.replaceAll('_', '-'))
          params.append('id', icon.id)
          return (
            <div
              className="w-1/10 md:w-[5%] shrink-0 grow-0 p-1 md:p-2 text-slate-950 dark:text-slate-50"
              key={icon.name}
            >
              <Link
                href={`/icons/search?${params.toString()}`}
                className="block border dark:border-gray-50/10 p-1 md:p-2.5 rounded-md bg-gray-100 dark:bg-gray-50/10"
                target="_blank"
              >
                <svg
                  className="h-full w-full fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={icon.viewBox}
                  dangerouslySetInnerHTML={{ __html: icon.svg as string }}
                ></svg>
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
