import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-heroPatternLight dark:bg-heroPatternDark"></div>
      <div className="relative overflow-hidden bg-gradient-to-b from-transparent to-white to-[90%] py-12 space-y-8 dark:to-secondary-900">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="flex justify-center">
            <Link
              className="inline-flex items-center p-2 px-3 text-xs text-gray-600 transition bg-white border border-gray-200 rounded-full gap-x-2 hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400"
              href="/couleurs"
            >
              Générateurs de pallettes tailwindcss
              <span className="flex items-center gap-x-1">
                <span className="border-gray-400 text-secondary-600 border-s ps-2 dark:text-gray-400">
                  Voir
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 text-secondary-600"
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
            </Link>
          </div>

          <div className="max-w-2xl mx-auto mt-5 text-center">
            <h1 className="block text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl dark:text-gray-200">
              Un écosysteme tailwindcss complet
            </h1>
          </div>

          <div className="max-w-3xl mx-auto mt-5 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Vous aimez tailwindcss? Nous aussi. Nous ambitionnons de rendre votre porcessus de
              travail plus facile et rapide en créant le plus grand écosystème tailwindcss.
            </p>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <Link
              className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-white border border-transparent rounded-full gap-x-3 bg-gradient-to-tl from-secondary-600 to-secondary-300 hover:from-secondary-300 hover:to-secondary-600 focus:outline-none focus:ring-2 focus:ring-secondary-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
              href="/icons"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current "
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M2.5 21h8l-4-7zM14 3l7 7m-7 0l7-7m-7 11h7v7h-7z"
                />
              </svg>
              Trouvez une icône
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
