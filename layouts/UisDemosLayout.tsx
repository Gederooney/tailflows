import React, { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Ui } from 'contentlayer/generated'
import { Section } from '@/components/Newsletter'

interface LayoutProps {
  content: CoreContent<Ui>
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

const UisDemosLayout = ({ content, next, prev, children }: LayoutProps) => {
  return (
    <div className="">
      <section>
        <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')]">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            <div className="flex justify-center">
              <a
                className="inline-flex items-center p-1 text-sm text-gray-800 transition bg-white border border-gray-200 rounded-full gap-x-2 ps-3 hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/ui/cards"
              >
                Tailwindcss cards
                <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </a>
            </div>

            <div className="max-w-4xl mx-auto mt-5 text-center">
              <h1 className="block text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl dark:text-gray-200">
                Tailwind css
                <span className="text-transparent bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600">
                  {' '}
                  Héros{' '}
                </span>
                gratuits
              </h1>
            </div>

            <div className="max-w-3xl mx-auto mt-5 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Parcourez une collection de template section Héro{' '}
                <span className="sr-only">Hero sections</span> fait en tailwind css et html pour
                mettre en valeur les pages de vos sites web
              </p>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              <a
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-white border border-transparent rounded-md gap-x-3 bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:ring-1 focus:ring-gray-600 dark:focus:ring-offset-gray-800"
                href="#default"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <button
                type="button"
                className="relative inline-flex items-center p-2 font-mono text-sm text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm group ps-3 gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Commencez ici
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl">{children}</div>
      </section>
      <Section />
    </div>
  )
}

export default UisDemosLayout
