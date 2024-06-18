import BlocksSection from '@/components/code/BlocksSection'
import React from 'react'

const data = [
  {
    height: 600,
    name: 'Primary',
    id: '',
    description: '',
    title: 'Boutons primaires',
    htmlBody: `<section class="">
      <div class="">
        <div class="flex items-center justify-center py-4 gap-2">
          <button
            class="text-sm text-gray-50 px-4 py-2 bg-blue-500 rounded-lg font-light hover:bg-blue-400">
            Bouton
          </button>
          <button
            class="text-sm text-gray-50 px-4 py-2 bg-blue-500 rounded-lg font-light hover:bg-blue-400 flex items-center justify-center gap-2">
            <span>Bouton</span>
            <span
              class="inline-flex h-4 w-4 p-1 rounded-full border border-gray-50/80 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
          <button
            class="text-sm text-gray-50 p-2 bg-blue-500 rounded-lg font-light hover:bg-blue-400 flex items-center justify-center gap-2">
            <span
              class="inline-flex h-4 w-4 p-1 rounded-full border border-gray-50/80 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
        </div>
        <div class="flex items-center justify-center py-4 gap-2">
          <button
            class="text-base text-gray-50 px-8 py-2.5 bg-blue-500 rounded-lg font-light hover:bg-blue-400">
            Bouton
          </button>
          <button
            class="text-base text-gray-50 px-8 py-2.5 bg-blue-500 rounded-lg font-light hover:bg-blue-400 flex items-center justify-center gap-2">
            <span>Bouton</span>
            <span
              class="inline-flex h-5 w-5 p-1.5 rounded-full border border-gray-50/80 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
          <button
            class="text-gray-50 p-2.5 bg-blue-500 rounded-lg font-light hover:bg-blue-400 flex items-center justify-center gap-2">
            <span
              class="inline-flex h-5 w-5 p-1.5 rounded-full border border-gray-50/80 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
        </div>
        <div class="flex items-center justify-center py-4 gap-2">
          <button
            class="text-lg text-gray-50 px-12 py-3.5 bg-blue-500 rounded-lg font-light hover:bg-blue-400">
            Bouton
          </button>
          <button
            class="text-lg text-gray-50 px-12 py-3.5 bg-blue-500 rounded-lg font-light hover:bg-blue-400 flex items-center justify-center gap-4">
            <span>Bouton</span>
            <span
              class="inline-flex h-5 w-5 p-1.5 rounded-full border border-gray-50/80 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
          <button
            class="text-gray-50 p-3.5 bg-blue-500 rounded-lg font-light hover:bg-blue-400 flex items-center justify-center gap-2">
            <span
              class="inline-flex h-7 w-7 p-1.5 rounded-full border border-gray-50/80 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>`,
  },
  {
    height: 600,
    name: 'Disabled',
    id: '',
    description: '',
    title: 'Bouton désactivé',
    htmlBody: `<section class="">
      <div class="">
        <div class="flex items-center justify-center py-4 gap-2">
          <button
            class="text-sm text-gray-50 px-4 py-2 bg-blue-500 rounded-lg font-light hover:bg-blue-400 disabled:bg-blue-100 disabled:text-gray-500"
            disabled>
            Bouton
          </button>
          <button
            class="text-sm text-gray-50 px-4 py-2 bg-blue-500 rounded-lg font-light hover:bg-blue-400 disabled:bg-blue-100 disabled:text-gray-500 flex items-center justify-center gap-2"
            disabled>
            <span>Bouton</span>
            <span
              class="inline-flex h-4 w-4 p-1 rounded-full border border-gray-500/80 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
          <button
            class="text-sm text-gray-50 p-2 bg-blue-500 rounded-lg font-light hover:bg-blue-400 disabled:bg-blue-100 disabled:text-gray-500 flex items-center justify-center gap-2"
            disabled>
            <span
              class="inline-flex h-4 w-4 p-1 rounded-full border border-gray-500/80 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
        </div>
        <div class="flex items-center justify-center py-4 gap-2">
          <button
            class="text-base text-gray-50 px-8 py-2.5 bg-blue-500 rounded-lg font-light hover:bg-blue-400 disabled:bg-blue-100 disabled:text-gray-500"
            disabled>
            Bouton
          </button>
          <button
            class="text-base text-gray-50 px-8 py-2.5 bg-blue-500 rounded-lg font-light hover:bg-blue-400 disabled:bg-blue-100 disabled:text-gray-500 flex items-center justify-center gap-2"
            disabled>
            <span>Bouton</span>
            <span
              class="inline-flex h-5 w-5 p-1.5 rounded-full border border-gray-500/80 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
          <button
            class="text-sm text-gray-50 p-2.5 bg-blue-500 rounded-lg font-light hover:bg-blue-400 disabled:bg-blue-100 disabled:text-gray-500 flex items-center justify-center gap-2"
            disabled>
            <span
              class="inline-flex h-5 w-5 p-1.5 rounded-full border border-gray-500/80 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
        </div>
        <div class="flex items-center justify-center py-4 gap-2">
          <button
            class="text-lg text-gray-50 px-12 py-3.5 bg-blue-500 rounded-lg font-light hover:bg-blue-400 disabled:bg-blue-100 disabled:text-gray-500"
            disabled>
            Bouton
          </button>
          <button
            class="text-lg text-gray-50 px-12 py-3.5 bg-blue-500 rounded-lg font-light hover:bg-blue-400 disabled:bg-blue-100 disabled:text-gray-500 flex items-center justify-center gap-2"
            disabled>
            <span>Bouton</span>
            <span
              class="inline-flex h-5 w-5 p-1.5 rounded-full border border-gray-500/80 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
          <button
            class="text-gray-50 p-3.5 bg-blue-500 rounded-lg font-light hover:bg-blue-400 disabled:bg-blue-100 disabled:text-gray-500 flex items-center justify-center gap-2"
            disabled>
            <span
              class="inline-flex h-7 w-7 p-1.5 rounded-full border border-gray-500/80 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>`,
  },
  {
    height: 600,
    name: 'Secondaire',
    id: '',
    description: '',
    title: 'Bouton secondaire',
    htmlBody: `<section class="">
      <div class="">
      <div class="">
        <div class="flex items-center justify-center py-4 gap-2">
          <button
            class="text-sm text-blue-700 px-4 py-2 bg-blue-200 rounded-lg font-light hover:text-blue-950 hover:bg-blue-300">
            Bouton
          </button>
          <button
            class="text-sm text-blue-700 px-4 py-2 bg-blue-200 rounded-lg font-light hover:text-blue-950 flex items-center justify-center gap-2 group hover:bg-blue-300">
            <span>Bouton</span>
            <span
              class="inline-flex h-4 w-4 p-1 rounded-full border border-blue-700/80 items-center justify-center group-hover:border-blue-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
          <button
            class="text-sm text-blue-700 p-2.5 bg-blue-200 rounded-lg font-light hover:text-blue-950 flex items-center justify-center gap-2 group hover:bg-blue-300">
            <span
              class="inline-flex h-4 w-4 p-1 rounded-full border border-blue-700/80 group-hover:border-blue-950 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
        </div>
        <div class="flex items-center justify-center py-4 gap-2">
          <button
            class="text-base text-blue-700 px-8 py-2.5 bg-blue-200 rounded-lg font-light hover:text-blue-950 hover:bg-blue-300">
            Bouton
          </button>
          <button
            class="text-base text-blue-700 px-8 py-2.5 bg-blue-200 rounded-lg font-light hover:text-blue-950 flex items-center justify-center gap-2 group hover:bg-blue-300">
            <span>Bouton</span>
            <span
              class="inline-flex h-5 w-5 p-1 rounded-full border border-blue-700/80 items-center justify-center group-hover:border-blue-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
          <button
            class="text-base text-blue-700 p-2.5 bg-blue-200 rounded-lg font-light hover:text-blue-950 flex items-center justify-center gap-2 group hover:bg-blue-300">
            <span
              class="inline-flex h-5 w-5 p-1 rounded-full border border-blue-700/80 group-hover:border-blue-950 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
        </div>
        <div class="flex items-center justify-center py-4 gap-2">
          <button
            class="text-lg text-blue-700 px-12 py-3.5 bg-blue-200 rounded-lg font-light hover:text-blue-950 hover:bg-blue-300">
            Bouton
          </button>
          <button
            class="text-lg text-blue-700 px-12 py-3.5 bg-blue-200 rounded-lg font-light hover:text-blue-950 flex items-center justify-center gap-2 group hover:bg-blue-300">
            <span>Bouton</span>
            <span
              class="inline-flex h-4 w-4 p-1 rounded-full border border-blue-700/80 items-center justify-center group-hover:border-blue-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
          <button
            class="text-lg text-blue-700 p-3.5 bg-blue-200 rounded-lg font-light hover:text-blue-950 flex items-center justify-center gap-2 group hover:bg-blue-300">
            <span
              class="inline-flex h-7 w-7 p-1 rounded-full border border-blue-700/80 group-hover:border-blue-950 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
    </section>`,
  },
  {
    height: 600,
    name: 'Contour',
    id: '',
    description: '',
    title: 'Bouton contour',
    htmlBody: `<section class="">
    <div class="">
      <div class="">
        <div class="flex items-center justify-center py-4 gap-2">
          <button
            class="text-sm text-blue-700 px-4 py-2 bg-blue-200 rounded-lg font-light hover:text-blue-950 hover:bg-blue-300 border border-blue-950">
            Bouton
          </button>
          <button
            class="text-sm text-blue-700 px-4 py-2 bg-blue-200 rounded-lg font-light hover:text-blue-950 flex items-center justify-center gap-2 group hover:bg-blue-300 border border-blue-950">
            <span>Bouton</span>
            <span
              class="inline-flex h-4 w-4 p-1 rounded-full border border-blue-700/80 items-center justify-center group-hover:border-blue-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
          <button
            class="text-sm text-blue-700 p-2.5 bg-blue-200 rounded-lg font-light hover:text-blue-950 flex items-center justify-center gap-2 group hover:bg-blue-300 border border-blue-950">
            <span
              class="inline-flex h-4 w-4 p-1 rounded-full border border-blue-700/80 group-hover:border-blue-950 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
					<button
            class="text-sm text-gray-50 px-4 py-2 bg-blue-500 rounded-lg font-light hover:bg-blue-400 disabled:bg-blue-100 disabled:text-gray-500 border border-blue-950"
            disabled>
            Bouton
          </button>
        </div>
        <div class="flex items-center justify-center py-4 gap-2">
          <button
            class="text-base text-blue-700 px-8 py-2.5 bg-blue-200 rounded-lg font-light hover:text-blue-950 hover:bg-blue-300 border border-blue-950">
            Bouton
          </button>
          <button
            class="text-base text-blue-700 px-8 py-2.5 bg-blue-200 rounded-lg font-light hover:text-blue-950 flex items-center justify-center gap-2 group hover:bg-blue-300 border border-blue-950">
            <span>Bouton</span>
            <span
              class="inline-flex h-5 w-5 p-1 rounded-full border border-blue-700/80 items-center justify-center group-hover:border-blue-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
          <button
            class="text-base text-blue-700 p-2.5 bg-blue-200 rounded-lg font-light hover:text-blue-950 flex items-center justify-center gap-2 group hover:bg-blue-300 border border-blue-950">
            <span
              class="inline-flex h-5 w-5 p-1 rounded-full border border-blue-700/80 group-hover:border-blue-950 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
        </div>
        <div class="flex items-center justify-center py-4 gap-2">
          <button
            class="text-lg text-blue-700 px-12 py-3.5 bg-blue-200 rounded-lg font-light hover:text-blue-950 hover:bg-blue-300 border border-blue-950">
            Bouton
          </button>
          <button
            class="text-lg text-blue-700 px-12 py-3.5 bg-blue-200 rounded-lg font-light hover:text-blue-950 flex items-center justify-center gap-2 group hover:bg-blue-300 border border-blue-950">
            <span>Bouton</span>
            <span
              class="inline-flex h-4 w-4 p-1 rounded-full border border-blue-700/80 items-center justify-center group-hover:border-blue-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
          <button
            class="text-lg text-blue-700 p-3.5 bg-blue-200 rounded-lg font-light hover:text-blue-950 flex items-center justify-center gap-2 group hover:bg-blue-300 border border-blue-950">
            <span
              class="inline-flex h-7 w-7 p-1 rounded-full border border-blue-700/80 group-hover:border-blue-950 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m184 112l144 144l-144 144" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
    </section>`,
  },
]

const Page = () => {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 bg-heroPatternLight dark:bg-heroPatternDark"></div>
        <div className="relative overflow-hidden bg-gradient-to-b from-transparent to-white to-[90%] py-12 space-y-8 dark:to-secondary-900">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            <div className="max-w-6xl mx-auto mt-5 text-center">
              <h2 className="block max-w-2xl mx-auto text-3xl font-bold text-gray-800 md:text-5xl lg:text-4xl dark:text-gray-200">
                Exemple de Boutons Tailwind CSS
              </h2>
            </div>

            <div className="max-w-4xl mx-auto mt-5 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Voici quelques exemples de boutons avec ou sans contour, avec ou sans icône. Vous
                pouvez choisir un bouton primaire ou secondaire. Ils sont tous gratuits et créés
                avec Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="py-16 mx-auto space-y-16 max-w-7xl">
        {data.map((block, index) => (
          <div className="space-y-8" key={`hero-${index}-${block.name}`}>
            <div className="px-4 mx-auto max-w-7xl">
              <h2 className="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group">
                {block.title}
              </h2>
              <p className="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
                {block.description}
              </p>
            </div>
            <BlocksSection {...block} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Page
