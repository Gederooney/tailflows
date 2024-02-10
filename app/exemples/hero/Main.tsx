'use client'
import React from 'react'
import BlocksSection from '@/components/code/BlocksSection'

const data = [
  {
    name: 'travel',
    id: ``,
    title: 'Hero section barre de recherche tailwind CSS',
    description:
      'Découvrez notre Hero Section avec recherche intégrée, conçue pour Tailwind CSS. Parfait pour les sites voulant mettre en avant une barre de recherche, ce template combine un titre accrocheur et une description succincte pour captiver instantanément vos visiteurs.',
    htmlBody: `
    <body class="h-screen bg-white">
    <header class="bg-white">
      <div class="w-full">
        <nav
          class="fixed w-full z-20 top-0 start-1/2 max-w-6xl -translate-x-1/2 bg-white">
          <div
            class="max-w-screen-xl flex flex-nowrap items-center justify-between mx-auto p-4">
            <a
              href="https://tailflows.com/"
              class="flex items-center space-x-3 rtl:space-x-reverse">
              <div class="flex flex-row items-center gap-1 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  class="logo_svg__c-style">
                  <g
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd">
                    <path
                      d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10H.006q.219-.36.61-.618c.423-.278.922-.295 1.475-.314.853-.03 1.833-.064 2.86-1.068H10a8 8 0 1 0-8-8v6.443c-.604.128-1.246.422-1.906 1.135L0 17.683z"></path>
                    <path
                      d="M10 3.962A6.04 6.04 0 0 0 3.962 10v5.845a1.7 1.7 0 0 0 .639-.245q1.115-.732.829-2.317.944 1.446.528 2.755H10a6.038 6.038 0 1 0 0-12.076"></path>
                  </g></svg
                ><span class="text-xl select-none">tailflows</span>
              </div>
            </a>
            <div class="flex md:order-2 space-x-1 items-center">
              <button
                type="button"
                class="text-black font-medium rounded-lg text-sm px-4 py-2 text-center flex items-center justify-center gap-1">
                <span class="inline-block h-4 w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-full h-full fill-current"
                    viewBox="0 -960 960 960">
                    <path
                      d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
                  </svg>
                </span>
              </button>
              <span> | </span>
              <button
                type="button"
                class="text-black font-medium rounded-lg text-sm px-4 py-2 text-center flex items-center justify-center gap-1">
                <span class="inline-block h-4 w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-full h-full fill-current"
                    viewBox="0 -960 960 960">
                    <path
                      d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                  </svg>
                </span>
                <span class="hidden sm:block">Se connecter</span>
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky">
              <ul
                class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-black bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:p-0 md:dark:text-purple-500"
                    aria-current="page"
                    >Accueil</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
                    >A-propos</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
                    >Services</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
                    >Contact</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <section class="pb-10 relative">
    <div className="absolute inset-0 bg-heroPatternLight dark:bg-heroPatternDark"></div>
      <div class="relative overflow-hidden">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
  
          <div class="mt-5 max-w-2xl text-center mx-auto">
            <h1
              class="block font-bold text-gray-800 text-3xl md:text-5xl lg:text-6xl">
              Qu'elle est votre prochaine
              <span class="text-gray-800">destination?</span>
            </h1>
          </div>


          <div class="mt-5 max-w-3xl text-center mx-auto">
            <p class="text-lg text-gray-600 dark:text-gray-400">
              Tailflows est l'écosystem tailwindcss le plus complet sur le web.
              Vous y trouverez des couleurs, des ombres de portée, des icons et
              bien plus.
            </p>
          </div>


          <div class="mt-8 mx-auto max-w-3xl space-y-2">
            <div class="mt-8 gap-4 flex justify-start mx-auto max-w-2xl">
              <button
                class="flex items-center justify-center border-b-2 border-gray-900 p-3 gap-2">
                <span class="inline-block w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-full h-full fill-current"
                    viewBox="0 -960 960 960">
                    <path
                      d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q146 0 255.5 91.5T872-559h-82q-19-73-68.5-130.5T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h80v120h-40L168-552q-3 18-5.5 36t-2.5 36q0 131 92 225t228 95v80Zm364-20L716-228q-21 12-45 20t-51 8q-75 0-127.5-52.5T440-380q0-75 52.5-127.5T620-560q75 0 127.5 52.5T800-380q0 27-8 51t-20 45l128 128-56 56ZM620-280q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z" />
                  </svg>
                </span>
                <span>Tout</span>
              </button>
              <button class="flex items-center justify-center p-3 gap-2">
                <span class="inline-block w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-full h-full fill-current"
                    viewBox="0 -960 960 960">
                    <path
                      d="M40-200v-600h80v400h320v-320h320q66 0 113 47t47 113v360h-80v-120H120v120H40Zm240-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm240 40h320v-160q0-33-23.5-56.5T760-640H520v240ZM280-520q17 0 28.5-11.5T320-560q0-17-11.5-28.5T280-600q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-40Zm240-80v240-240Z" />
                  </svg>
                </span>
                <span>Hotels</span>
              </button>
              <button class="flex items-center justify-center p-3 gap-2">
                <span class="inline-block w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-full h-full fill-current"
                    viewBox="0 0 448 512">
                    <path
                      d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
                  </svg>
                </span>
                <span>Restaurants</span>
              </button>
              <button class="flex items-center justify-center p-3 gap-2">
                <span class="inline-block w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-full h-full fill-current"
                    viewBox="0 -960 960 960">
                    <path
                      d="M720 0 600-120v-60L316-464q-9 2-18 3t-18 1v-88q50 2 102-21.5t84-58.5l56-62q13-15 30.5-22.5T590-720q38 0 64 26t26 64v230q0 26-9.5 47.5T644-314L500-456v-92q-20 17-43 31t-49 25l252 252h60l120 120L720 0ZM220-140l-60-60 180-180 100 100h-80L220-140Zm380-620q-33 0-56.5-23.5T520-840q0-33 23.5-56.5T600-920q33 0 56.5 23.5T680-840q0 33-23.5 56.5T600-760Z" />
                  </svg>
                </span>
                <span>Activités</span>
              </button>
            </div>
            <form class="w-full relative">
              <div class="flex w-full border rounded-full p-2 items-center">
                <div class="flex-1 flex flex-row items-center">
                  <button class="inline-block w-8 h-8 p-1 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full h-full fill-current"
                      viewBox="0 0 512 512">
                      <path
                        d="M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z"
                        fill="currentColor" />
                    </svg>
                  </button>
                  <input
                    type="search"
                    autocomplete="off"
                    autocorrect="off"
                    autocapitalize="none"
                    spellcheck="false"
                    required=""
                    name="q"
                    class="flex-1 focus:ring-0 focus:outline-none placeholder:text-gray-400 bg-transparent"
                    placeholder="Destinations, activités..."
                    title="Search"
                    role="searchbox"
                    aria-label="Search"
                    aria-controls="typeahead_results"
                    aria-autocomplete="list"
                    value="" />
                </div>
                <button
                  class="w-32 h-12 rounded-full bg-purple-800 hover:bg-purple-900 text-gray-50">
                  Trouver
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

      <div class="max-w-6xl mx-auto px-4">
        <div
          class="w-full relative bg-purple-200 rounded-xl px-2 pt-8 space-y-4 md:space-y-0">
          <div
            class="relative md:absolute inset-0 z-[1] bg-transparent md:px-10 order-0">
            <div class="h-full grid place-content-center md:w-1/2 lg:w-2/5">
              <div class="px-8 space-y-3 text-center md:text-left">
                <h1
                  class="text-purple-950 text-4xl font-bold mb-4 text-center md:text-left">
                  Votre prochain voyage en quelques clicks
                </h1>
                <p class="text-center md:text-left">
                  Utilisez notre nouveau planificateur de voyage et planifiez
                  vos vaccances de reves des aujourd'hui
                </p>
                <button
                  class="items-center flex gap-2 px-12 py-3 rounded-full text-white bg-purple-900 mx-auto md:m-0">
                  <span class="inline-block w-5 h-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full h-full fill-current"
                      viewBox="0 -960 960 960">
                      <path
                        d="M480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552l84-84 56 56-180 180-180-180 56-56 84 84q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186q20-18 37-35l34-34q-5-10-8-21.5t-3-23.5q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29q-8 0-14.5-1t-13.5-3q-29 30-61.5 61T480-80Z" />
                    </svg>
                  </span>
                  <span>Planifiez maintenant</span>
                </button>
              </div>
            </div>
          </div>
          <img
            class="w-full h-auto hidden md:inline-block"
            src="https://www.tripadvisor.ca/img2/trips/home-gai-entry-dv.png"
            alt="" />
          <img
            class="w-full h-auto block md:hidden"
            src="https://www.tripadvisor.ca/img2/trips/home-gai-entry-mv.png"
            alt="" />
        </div>
      </div>

    </section>
  </body>
`,
  },
  {
    name: 'restaurant',
    title: 'Hero section avancée avec filtres',
    description:
      "Explorez notre Hero Section polyvalente, spécialement conçue pour les projets nécessitant une recherche approfondie. Équipée d'une barre de recherche, de filtres de catégorie, d'une illustration, d'un titre captivant et d'une description, elle offre une expérience utilisateur riche et intuitive.",
    id: '',
    htmlBody: `
    <body class="h-screen bg-white">
    <section class="bg-white ">
      <header
        class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 sm:py-0">
        <nav
          class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global">
          <div class="flex items-center justify-between">
            <a
              href="https://tailflows.com/"
              class="flex items-center space-x-3 rtl:space-x-reverse">
              <div class="flex flex-row items-center gap-1 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  class="logo_svg__c-style">
                  <g
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd">
                    <path
                      d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10H.006q.219-.36.61-.618c.423-.278.922-.295 1.475-.314.853-.03 1.833-.064 2.86-1.068H10a8 8 0 1 0-8-8v6.443c-.604.128-1.246.422-1.906 1.135L0 17.683z"></path>
                    <path
                      d="M10 3.962A6.04 6.04 0 0 0 3.962 10v5.845a1.7 1.7 0 0 0 .639-.245q1.115-.732.829-2.317.944 1.446.528 2.755H10a6.038 6.038 0 1 0 0-12.076"></path>
                  </g></svg
                ><span class="text-xl select-none">tailflows</span>
              </div>
            </a>
            <div class="sm:hidden">
              <button
                type="button"
                class="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation">
                <svg
                  class="hs-collapse-open:hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                <svg
                  class="hs-collapse-open:block flex-shrink-0 hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16">
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div
              class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <a
                class="font-medium text-blue-600 sm:py-6 dark:text-blue-500"
                href="#"
                aria-current="page"
                >Mon restaurant</a
              >
              <a
                class="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
                >List de souhait</a
              >
              <a
                class="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
                >Panier</a
              >
              <a
                class="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
                >Blog</a
              >

              <a
                class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                href="#">
                <svg
                  class="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
                Mon compte
              </a>
            </div>
          </div>
        </nav>
      </header>
      <!-- Hero -->
      <div class="relative">
        <div
          class="absolute text-red-600 w-full h-full z-0 hero-pattern top-0"></div>
        <!-- Grid -->
        <div
          class="px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-32 bg-gradient-to-b from-transparent to-white to-[50%] relative z-1">
          <div
            class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center max-w-[85rem] mx-auto relative overflow-hidden">
            <div class="space-y-4">
              <h1
                class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
                Trouver le <span class="text-blue-600">restaurant</span> le plus
                proche par <a href="https://www.tailflows.com">tailflows</a>
              </h1>
              <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">
                Vous avez fin, trouvez un endroit pour votre prochain souper en
                quelques clicks et passer commande.
              </p>

              <!-- search bar -->
              <div class="mt-7 grid gap-3 w-full sm:inline-flex relative">
                <form action="" class="flex border p-2 rounded-full w-full">
                  <select
                    name=""
                    id=""
                    class="grow-0 shrink-0 w-16 sm:w-24 truncate">
                    <option value="">Restauration rapide</option>
                    <option value="">Café</option>
                    <option value="">Boulangerie</option>
                  </select>
                  <div class="flex-1 bg-red-600 relative">
                    <input
                      type="search"
                      autocomplete="off"
                      autocorrect="off"
                      autocapitalize="none"
                      spellcheck="false"
                      required=""
                      name="q"
                      placeholder="où allez-vous manger?"
                      title="Search"
                      role="searchbox"
                      aria-label="Search"
                      aria-controls="typeahead_results"
                      aria-autocomplete="list"
                      value=""
                      class="w-full py-2 pl-2 pr-12 outline-none focus:outline-none" />
                    <button
                      type="submit"
                      class="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 h-full px-4 rounded-full text-white">
                      Trouver
                    </button>
                  </div>
                </form>
              </div>
              <!-- end search bar -->

              <!-- trust -->
              <div class="mt-0 relative">
                <div class="py-5">
                  <p
                    class="mt-3 text-sm text-gray-800 max-w-sm">
                    cherchez parmis
                    <span class="font-bold">12 000</span> restaurants choisis
                    avec soin.
                    <a href="/login" class="text-blue-500 font-bold text-base"
                      >Connctez vous
                    </a>
                    pour ajouter le votre
                  </p>
                </div>
              </div>
              <!-- End trust -->
            </div>
            <!-- End Col -->

            <div class="relative ms-4">
              <div class="px-4 text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  class="w-full"
                  viewBox="0 0 888 485.489"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <title>breakfast</title>
                  <path
                    d="M275.41211,460.30048H246.99329a3.76777,3.76777,0,0,0-3.76777,3.76776v12.47387a3.76777,3.76777,0,0,0,3.76777,3.76777h4.70941V499h19V480.30988h4.70941a3.76777,3.76777,0,0,0,3.76776-3.76777V464.06824A3.76777,3.76777,0,0,0,275.41211,460.30048Z"
                    transform="translate(-156 -207.2555)"
                    class="fill-blue-600" />
                  <path
                    d="M303.87661,574.46128a146.10549,146.10549,0,0,1-25.418-86.62437,3.08142,3.08142,0,0,0-2.40522-3.075V479.372H246.03933v5.315h-.41356a3.07971,3.07971,0,0,0-3.06724,3.30786q3.54683,49.44186-23.95358,88.677a8.4873,8.4873,0,0,0-1.53606,5.14352l3.28188,101.51817a8.78815,8.78815,0,0,0,8.713,8.48191h67.88732a8.79123,8.79123,0,0,0,8.71824-8.63152l1.26471-98.56588A17.78875,17.78875,0,0,0,303.87661,574.46128Z"
                    transform="translate(-156 -207.2555)"
                    class="fill-blue-950" />
                  <path
                    d="M269.48783,464.36493a8.12881,8.12881,0,0,1-16.25763,0"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <path
                    d="M293.12991,608.18244h-8.22064a21.57614,21.57614,0,0,0-42.6488,0h-8.22118a6.06671,6.06671,0,0,0-5.99616,6.98918l8.92944,58.04135h51.27407l10.84608-57.84582A6.0667,6.0667,0,0,0,293.12991,608.18244Z"
                    transform="translate(-156 -207.2555)"
                    class="fill-blue-600" />
                  <polygon
                    points="827.952 307.634 825.98 386.448 823.538 484.181 740.414 484.181 737.552 369.675 736 307.634 827.952 307.634"
                    fill="#e6e6e6" />
                  <rect
                    x="775.72312"
                    y="265.70393"
                    width="11.76981"
                    height="155.95002"
                    class="fill-blue-600" />
                  <path
                    d="M978.06676,574.27527l-2.22611,112.02H900.07391l-2.60826-131.24365a51.63393,51.63393,0,0,1,40.82688,5.61536C950.95161,568.15405,965.173,572.18424,978.06676,574.27527Z"
                    transform="translate(-156 -207.2555)"
                    class="fill-blue-600" />
                  />
                  <rect
                    x="752.03074"
                    y="379.63032"
                    width="10.79992"
                    height="10.79992"
                    fill="#e6e6e6" />
                  <rect
                    x="759.38688"
                    y="357.56192"
                    width="10.79992"
                    height="10.79992"
                    fill="#e6e6e6" />
                  <rect
                    x="936.42384"
                    y="575.81564"
                    width="10.79992"
                    height="10.79992"
                    transform="translate(375.57517 -653.92108) rotate(36.56259)"
                    fill="#e6e6e6" />
                  <rect
                    x="955.93676"
                    y="594.95132"
                    width="10.79992"
                    height="10.79992"
                    transform="translate(390.81432 -661.77916) rotate(36.56259)"
                    fill="#e6e6e6" />
                  <rect
                    x="922.83416"
                    y="605.98552"
                    width="10.79992"
                    height="10.79992"
                    transform="translate(390.87303 -639.88846) rotate(36.56259)"
                    fill="#e6e6e6" />
                  <circle
                    cx="805.14765"
                    cy="351.03508"
                    r="2.20684"
                    class="fill-blue-950" />
                  <circle
                    cx="760.27524"
                    cy="336.32281"
                    r="2.20684"
                    class="fill-blue-950" />
                  <circle
                    cx="797.79152"
                    cy="320.87493"
                    r="2.20684"
                    class="fill-blue-950" />
                  <circle
                    cx="444.50808"
                    cy="241.75402"
                    r="241.75402"
                    class="fill-blue-600" />
                  <path
                    d="M600.50808,625.46663a176.45595,176.45595,0,1,1,124.77436-51.68275A175.30352,175.30352,0,0,1,600.50808,625.46663Zm0-342.0314c-91.29808,0-165.5743,74.27621-165.5743,165.57429,0,91.2977,74.27622,165.5743,165.5743,165.5743,91.2977,0,165.57429-74.2766,165.57429-165.5743C766.08237,357.71144,691.80578,283.43523,600.50808,283.43523Z"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <circle
                    cx="444.50808"
                    cy="241.75402"
                    r="171.0157"
                    class="fill-blue-950" />
                  <path
                    d="M473.32742,380.62742a21.704,21.704,0,1,1,38.68118-19.69819l48.31632,94.87836a21.704,21.704,0,1,1-38.68118,19.69819Z"
                    transform="translate(-156 -207.2555)"
                    fill="#ff6584" />
                  <path
                    d="M478.71655,391.21l-2.23-4.379c11.12916-8.64736,24.19788-15.007,38.68118-19.69819l2.23,4.379C501.72232,374.77607,488.38616,380.817,478.71655,391.21Z"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <path
                    d="M489.12314,411.64534l-2.23-4.379c11.12915-8.64736,24.19788-15.007,38.68117-19.69819l2.23,4.379C512.12891,395.21141,498.79275,401.25236,489.12314,411.64534Z"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <path
                    d="M499.52973,432.08068l-2.23-4.379c11.12915-8.64736,24.19788-15.007,38.68118-19.69819l2.23,4.379C522.5355,415.64675,509.19935,421.6877,499.52973,432.08068Z"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <path
                    d="M509.93632,452.516l-2.23-4.379c11.12916-8.64736,24.19788-15.007,38.68118-19.69819l2.23,4.379C532.94209,436.08209,519.60594,442.123,509.93632,452.516Z"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <path
                    d="M520.34292,472.95136l-2.23-4.379c11.12916-8.64736,24.19788-15.007,38.68118-19.69819l2.23,4.379C543.34868,456.51743,530.01253,462.55838,520.34292,472.95136Z"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <path
                    d="M437.07906,416.14643a21.704,21.704,0,1,1,38.68118-19.6982l48.31632,94.87837a21.704,21.704,0,0,1-38.68118,19.69819Z"
                    transform="translate(-156 -207.2555)"
                    fill="#ff6584" />
                  <path
                    d="M442.46819,426.729l-2.23-4.379c11.12916-8.64736,24.19788-15.007,38.68118-19.69819l2.23,4.379C465.474,410.29508,452.1378,416.336,442.46819,426.729Z"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <path
                    d="M452.87478,447.16435l-2.23-4.379c11.12915-8.64736,24.19788-15.007,38.68118-19.69819l2.23,4.379C475.88055,430.73042,462.5444,436.77137,452.87478,447.16435Z"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <path
                    d="M463.28137,467.59969l-2.23-4.379c11.12915-8.64736,24.19788-15.007,38.68118-19.69819l2.23,4.379C486.28714,451.16576,472.951,457.20671,463.28137,467.59969Z"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <path
                    d="M473.688,488.035l-2.23-4.379c11.12916-8.64736,24.19788-15.007,38.68118-19.69819l2.23,4.379C496.69373,471.6011,483.35758,477.64205,473.688,488.035Z"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <path
                    d="M484.09456,508.47037l-2.23-4.379c11.12916-8.64736,24.19788-15.007,38.68118-19.69819l2.23,4.379C507.10032,492.03644,493.76417,498.07739,484.09456,508.47037Z"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <path
                    d="M714.77766,454.45093l.15257.00013a25.8881,25.8881,0,0,0,24.23924-16.23619,84.50284,84.50284,0,0,0,5.9231-31.69393c-.27144-45.91073-37.62223-83.57515-83.52936-84.21021a84.74394,84.74394,0,0,0-35.27687,162.32018,25.66668,25.66668,0,0,0,28.50566-5.28585A84.45815,84.45815,0,0,1,714.77766,454.45093Z"
                    transform="translate(-156 -207.2555)"
                    fill="#e6e6e6" />
                  <circle
                    cx="515.24639"
                    cy="193.55868"
                    r="27.98439"
                    fill="#f9a825" />
                  <circle
                    cx="454.42624"
                    cy="187.11516"
                    r="3.29669"
                    class="fill-blue-950" />
                  <circle
                    cx="345.59806"
                    cy="190.22453"
                    r="3.29669"
                    class="fill-blue-950" />
                  <circle
                    cx="471.99609"
                    cy="152.94948"
                    r="3.29669"
                    class="fill-blue-950" />
                  <circle
                    cx="471.90243"
                    cy="247.97277"
                    r="3.29669"
                    class="fill-blue-950" />
                  <circle
                    cx="537.19934"
                    cy="146.14069"
                    r="3.29669"
                    class="fill-blue-950" />
                  <circle
                    cx="324.20705"
                    cy="236.31261"
                    r="3.29669"
                    class="fill-blue-950" />
                  <circle
                    cx="348.30472"
                    cy="283.7306"
                    r="3.29669"
                    class="fill-blue-950" />
                  <circle
                    cx="499.69951"
                    cy="289.94935"
                    r="12.43751"
                    fill="#ff6584" />
                  <path
                    d="M665.02764,497.9822a9.32813,9.32813,0,0,1-18.65626,0"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <path
                    d="M646.37138,496.42751a9.32813,9.32813,0,0,1,18.65626,0"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <ellipse
                    cx="495.03545"
                    cy="285.67396"
                    rx="0.77734"
                    ry="1.16602"
                    fill="#ff6584" />
                  <ellipse
                    cx="499.69951"
                    cy="284.11927"
                    rx="0.77734"
                    ry="1.16602"
                    fill="#ff6584" />
                  <ellipse
                    cx="499.69951"
                    cy="294.22475"
                    rx="0.77734"
                    ry="1.16602"
                    fill="#ff6584" />
                  <ellipse
                    cx="504.36357"
                    cy="288.00599"
                    rx="0.77734"
                    ry="1.16602"
                    fill="#ff6584" />
                  <ellipse
                    cx="503.58623"
                    cy="296.55678"
                    rx="0.77734"
                    ry="1.16602"
                    fill="#ff6584" />
                  <ellipse
                    cx="494.2581"
                    cy="292.67006"
                    rx="0.77734"
                    ry="1.16602"
                    fill="#ff6584" />
                  <circle
                    cx="524.57452"
                    cy="256.52356"
                    r="12.43751"
                    fill="#ff6584" />
                  <path
                    d="M689.90265,464.5564a9.32813,9.32813,0,0,1-18.65626,0"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <path
                    d="M671.24639,463.00172a9.32813,9.32813,0,0,1,18.65626,0"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <ellipse
                    cx="519.91046"
                    cy="252.24816"
                    rx="0.77734"
                    ry="1.16602"
                    fill="#ff6584" />
                  <ellipse
                    cx="524.57452"
                    cy="250.69348"
                    rx="0.77734"
                    ry="1.16602"
                    fill="#ff6584" />
                  <ellipse
                    cx="524.57452"
                    cy="260.79895"
                    rx="0.77734"
                    ry="1.16602"
                    fill="#ff6584" />
                  <ellipse
                    cx="529.23859"
                    cy="254.5802"
                    rx="0.77734"
                    ry="1.16602"
                    fill="#ff6584" />
                  <ellipse
                    cx="528.46124"
                    cy="263.13098"
                    rx="0.77734"
                    ry="1.16602"
                    fill="#ff6584" />
                  <ellipse
                    cx="519.13311"
                    cy="259.24426"
                    rx="0.77734"
                    ry="1.16602"
                    fill="#ff6584" />
                  <circle
                    cx="549.44953"
                    cy="273.62513"
                    r="12.43751"
                    class="fill-blue-600" />
                  <path
                    d="M714.77766,481.658a9.32813,9.32813,0,0,1-18.65626,0"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <path
                    d="M696.1214,480.10329a9.32813,9.32813,0,0,1,18.65626,0"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <ellipse
                    cx="544.78547"
                    cy="269.34974"
                    rx="0.77734"
                    ry="1.16602"
                    class="fill-blue-600" />
                  <ellipse
                    cx="549.44953"
                    cy="267.79505"
                    rx="0.77734"
                    ry="1.16602"
                    class="fill-blue-600" />
                  <ellipse
                    cx="549.44953"
                    cy="277.90052"
                    rx="0.77734"
                    ry="1.16602"
                    class="fill-blue-600" />
                  <ellipse
                    cx="554.1136"
                    cy="271.68177"
                    rx="0.77734"
                    ry="1.16602"
                    class="fill-blue-600" />
                  <ellipse
                    cx="553.33625"
                    cy="280.23255"
                    rx="0.77734"
                    ry="1.16602"
                    class="fill-blue-600" />
                  <ellipse
                    cx="544.00812"
                    cy="276.34583"
                    rx="0.77734"
                    ry="1.16602"
                    class="fill-blue-600" />
                  <circle
                    cx="487.262"
                    cy="275.17982"
                    r="12.43751"
                    class="fill-blue-600" />
                  <path
                    d="M652.59013,483.21266a9.32813,9.32813,0,0,1-18.65626,0"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <path
                    d="M633.93387,481.658a9.32813,9.32813,0,0,1,18.65626,0"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <ellipse
                    cx="482.59794"
                    cy="270.90442"
                    rx="0.77734"
                    ry="1.16602"
                    class="fill-blue-600" />
                  <ellipse
                    cx="487.262"
                    cy="269.34974"
                    rx="0.77734"
                    ry="1.16602"
                    class="fill-blue-600" />
                  <ellipse
                    cx="487.262"
                    cy="279.45521"
                    rx="0.77734"
                    ry="1.16602"
                    class="fill-blue-600" />
                  <ellipse
                    cx="491.92607"
                    cy="273.23646"
                    rx="0.77734"
                    ry="1.16602"
                    class="fill-blue-600" />
                  <ellipse
                    cx="491.14872"
                    cy="281.78724"
                    rx="0.77734"
                    ry="1.16602"
                    class="fill-blue-600" />
                  <ellipse
                    cx="481.8206"
                    cy="277.90052"
                    rx="0.77734"
                    ry="1.16602"
                    class="fill-blue-600" />
                  <circle
                    cx="515.24639"
                    cy="280.62122"
                    r="12.43751"
                    class="fill-blue-600" />
                  <path
                    d="M680.57452,488.65407a9.32813,9.32813,0,1,1-18.65626,0"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <path
                    d="M661.91826,487.09938a9.32813,9.32813,0,1,1,18.65626,0"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <ellipse
                    cx="510.58233"
                    cy="276.34583"
                    rx="0.77734"
                    ry="1.16602"
                    class="fill-blue-600" />
                  <ellipse
                    cx="515.24639"
                    cy="274.79114"
                    rx="0.77734"
                    ry="1.16602"
                    class="fill-blue-600" />
                  <ellipse
                    cx="515.24639"
                    cy="284.89662"
                    rx="0.77734"
                    ry="1.16602"
                    class="fill-blue-600" />
                  <ellipse
                    cx="519.91046"
                    cy="278.67786"
                    rx="0.77734"
                    ry="1.16602"
                    class="fill-blue-600" />
                  <ellipse
                    cx="519.13311"
                    cy="287.22865"
                    rx="0.77734"
                    ry="1.16602"
                    class="fill-blue-600" />
                  <ellipse
                    cx="509.80498"
                    cy="283.34193"
                    rx="0.77734"
                    ry="1.16602"
                    class="fill-blue-600" />
                  <circle
                    cx="534.68"
                    cy="293.83607"
                    r="12.43751"
                    fill="#ff6584" />
                  <path
                    d="M700.00812,501.86892a9.32812,9.32812,0,1,1-18.65625,0"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <path
                    d="M681.35187,500.31423a9.32812,9.32812,0,1,1,18.65625,0"
                    transform="translate(-156 -207.2555)"
                    opacity="0.2" />
                  <ellipse
                    cx="530.01593"
                    cy="289.56068"
                    rx="0.77734"
                    ry="1.16602"
                    fill="#ff6584" />
                  <ellipse
                    cx="534.68"
                    cy="288.00599"
                    rx="0.77734"
                    ry="1.16602"
                    fill="#ff6584" />
                  <ellipse
                    cx="534.68"
                    cy="298.11147"
                    rx="0.77734"
                    ry="1.16602"
                    fill="#ff6584" />
                  <ellipse
                    cx="539.34406"
                    cy="291.89271"
                    rx="0.77734"
                    ry="1.16602"
                    fill="#ff6584" />
                  <ellipse
                    cx="538.56672"
                    cy="300.4435"
                    rx="0.77734"
                    ry="1.16602"
                    fill="#ff6584" />
                  <ellipse
                    cx="529.23859"
                    cy="296.55678"
                    rx="0.77734"
                    ry="1.16602"
                    fill="#ff6584" />
                  <circle
                    cx="374.73442"
                    cy="246.41808"
                    r="3.29669"
                    class="fill-blue-950" />
                  <polygon
                    points="464.345 366.08 385.17 344.123 388.203 332.857 467.378 354.815 464.345 366.08"
                    fill="#f9a825" />
                  <path
                    d="M608.73806,569.57043a218.26828,218.26828,0,0,1-82.07767,0V557.89212a250.99129,250.99129,0,0,0,82.07767,0Z"
                    transform="translate(-156 -207.2555)"
                    fill="#f9a825" />
                  <path
                    d="M617.17595,534.53552a218.26828,218.26828,0,0,1-82.07767,0V522.85721a250.99184,250.99184,0,0,0,82.07767,0Z"
                    transform="translate(-156 -207.2555)"
                    fill="#f9a825" />
                  <path
                    d="M645.558,548.54948a218.26833,218.26833,0,0,1-82.07768,0v-11.6783a250.9919,250.9919,0,0,0,82.07768,0Z"
                    transform="translate(-156 -207.2555)"
                    fill="#f9a825" />
                  <path
                    d="M652.46168,561.78489a218.26787,218.26787,0,0,1-82.07767,0v-11.6783a250.99184,250.99184,0,0,0,82.07767,0Z"
                    transform="translate(-156 -207.2555)"
                    fill="#f9a825" />
                  <polygon
                    points="520.531 371.824 439.554 385.426 437.676 373.904 518.652 360.302 520.531 371.824"
                    fill="#f9a825" />
                  <path
                    d="M664.43494,580.57677a219.97,219.97,0,0,1-74.58008,34.78439l-4.80446-10.61152a252.95437,252.95437,0,0,0,74.58007-34.78439Z"
                    transform="translate(-156 -207.2555)"
                    fill="#f9a825" />
                  <path
                    d="M657.68866,545.16625a219.96991,219.96991,0,0,1-74.58007,34.78439l-4.80446-10.61152a252.95437,252.95437,0,0,0,74.58007-34.78439Z"
                    transform="translate(-156 -207.2555)"
                    fill="#f9a825" />
                  <path
                    d="M689.24339,545.87182a219.96977,219.96977,0,0,1-74.58008,34.78439l-4.80446-10.61151a252.95471,252.95471,0,0,0,74.58008-34.7844Z"
                    transform="translate(-156 -207.2555)"
                    fill="#f9a825" />
                  <path
                    d="M700.96153,554.97242a219.96991,219.96991,0,0,1-74.58007,34.78439L621.577,579.14529a252.95437,252.95437,0,0,0,74.58007-34.78439Z"
                    transform="translate(-156 -207.2555)"
                    fill="#f9a825" />
                  <rect
                    x="442.95339"
                    y="324.92984"
                    width="3.88672"
                    height="3.88672"
                    fill="#00bf71" />
                  <rect
                    x="454.61355"
                    y="392.55878"
                    width="3.88672"
                    height="3.88672"
                    fill="#00bf71" />
                  <rect
                    x="392.42602"
                    y="324.92984"
                    width="3.88672"
                    height="3.88672"
                    fill="#00bf71" />
                  <rect
                    x="482.59794"
                    y="373.12517"
                    width="3.88672"
                    height="3.88672"
                    fill="#00bf71" />
                  <rect
                    x="484.92997"
                    y="350.5822"
                    width="3.88672"
                    height="3.88672"
                    fill="#00bf71" />
                  <rect
                    x="574.85572"
                    y="545.40019"
                    width="5.44141"
                    height="3.10938"
                    transform="translate(250.70796 -437.19066) rotate(34.15572)"
                    fill="#00bf71" />
                  <rect
                    x="620.71902"
                    y="553.95098"
                    width="5.44141"
                    height="3.10938"
                    transform="translate(263.41949 -461.46545) rotate(34.15572)"
                    fill="#00bf71" />
                  <rect
                    x="564.75025"
                    y="568.72051"
                    width="5.44141"
                    height="3.10938"
                    transform="translate(262.05797 -427.49459) rotate(34.15572)"
                    fill="#00bf71" />
                  <rect
                    x="596.62136"
                    y="565.61114"
                    width="5.44141"
                    height="3.10938"
                    transform="translate(1249.17714 182.37779) rotate(124.15572)"
                    fill="#00bf71" />
                  <rect
                    x="617.60965"
                    y="571.05255"
                    width="5.44141"
                    height="3.10938"
                    transform="translate(1286.45203 173.50612) rotate(124.15572)"
                    fill="#00bf71" />
                  <rect
                    x="673.57842"
                    y="552.39629"
                    width="5.44141"
                    height="3.10938"
                    transform="matrix(-0.56144, 0.82751, -0.82751, -0.56144, 1358.40581, 98.06043)"
                    fill="#00bf71" />
                  <rect
                    y="483.24828"
                    width="888"
                    height="2.24072"
                    class="fill-blue-950" />
                </svg>
              </div>

              <!-- End SVG-->
            </div>
            <!-- End Col -->
          </div>
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Hero -->
    </section>
  </body>
    `,
  },
  {
    name: 'podcast',
    id: '',
    title: 'Hero Section Blog & Podcast Élégante',
    description:
      "Boostez votre blog ou podcast avec notre Hero Section dédiée, fusionnant élégance et fonctionnalité. Avec un titre engageant, une description inspirante, un bouton CTA dynamique, et une illustration attrayante, elle capte l'attention et encourage l'interaction dès le premier regard.",
    htmlBody: `
    <body class="h-screen bg-white">
    <header
      class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 sm:py-0 dark:bg-slate-950">
      <nav
        class="relative max-w-[85rem] w-full mx-auto  sm:flex sm:items-center sm:justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Global">
        <div class="flex items-center justify-between">
          <a
            href="https://tailflows.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse">
            <div class="flex flex-row items-center gap-1 mr-3 text-gray-950 dark:text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                class="">
                <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                  <path
                    d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10H.006q.219-.36.61-.618c.423-.278.922-.295 1.475-.314.853-.03 1.833-.064 2.86-1.068H10a8 8 0 1 0-8-8v6.443c-.604.128-1.246.422-1.906 1.135L0 17.683z"></path>
                  <path
                    d="M10 3.962A6.04 6.04 0 0 0 3.962 10v5.845a1.7 1.7 0 0 0 .639-.245q1.115-.732.829-2.317.944 1.446.528 2.755H10a6.038 6.038 0 1 0 0-12.076"></path>
                </g></svg
              >
              <span class="text-xl select-none">tailflows</span>
            </div>
          </a>
          <div class="sm:hidden">
            <button
              type="button"
              class="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation">
              <svg
                class="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
              <svg
                class="hs-collapse-open:block flex-shrink-0 hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16">
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
          <div
            class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            <a
              class="font-medium text-indigo-600 sm:py-6 dark:text-indigo-500"
              href="#"
              aria-current="page"
              >Accueil</a
            >
            <a
              class="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              href="#"
              >Contact</a
            >
            <a
              class="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              href="#"
              >Panier</a
            >
            <a
              class="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              href="#"
              >Blog</a
            >

            <a
              class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-indigo-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-indigo-500"
              href="#">
              <svg
                class="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              Mon compte
            </a>
          </div>
        </div>
      </nav>
    </header>
    <!-- Hero -->
    <section
      class="relative flex items-center w-full bg-white dark:bg-slate-950">
      <div class="absolute text-red-600 w-full h-full z-0 hero-pattern top-0">
        <div
          class="h-full w-full bg-gradient-to-b from-transparent to-white dark:to-slate-950 to-[50%]"></div>
      </div>

      <div class="relative z-[1] items-center py-16 mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <div class="relative flex-col items-start m-auto align-middle">
          <div class="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
            <div class="relative items-center gap-12 m-auto lg:inline-flex">
              <div class="max-w-xl text-center lg:text-left">
                <div>
                  <p
                    class="text-3xl font-medium md:text-6xl text-slate-900 dark:text-slate-50">
                    The Ramsey <span class="text-indigo-500">show</span> by
                    tailflows
                  </p>
                  <p
                    class="mt-4 text-lg tracking-tight text-slate-500 dark:text-slate-300 lg:text-xl">
                    Organize your LinkedIn connections the way you want. No ads,
                    no distractions.
                  </p>
                </div>
                <div class="flex flex-col items-center gap-3 mt-10 lg:flex-row">
                  <a
                    class="inline-flex items-center justify-center w-full px-6 py-4 text-center text-white duration-200 bg-indigo-500 border-2 border-indigo-500 focus:outline-none focus-visible:outline-black focus-visible:ring-black hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500 lg:w-auto rounded-xl"
                    href="#_">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 fill-current"
                      viewBox="0 -960 960 960">
                      <path
                        d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                    <span class="ml-3">listen to the latest episode</span></a
                  >
                  <p class="text-slate-500">
                    <span class="block">published</span>
                    <span class="block">wed feb 10</span>
                  </p>
                </div>
                <div
                  class="flex flex-col gap-3 mt-12 lg:flex-row divide-slate-400 lg:divide-x-2">
                  <div>
                    <div
                      class="flex items-center justify-center gap-3 lg:justify-start">
                      <div class="flex gap-1">
                        <svg
                          class="w-4 h-4 text-yellow-400 icon icon-tabler fill-yellow-400 icon-tabler-star"
                          fill="currentColor"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M0 0h24v24H0z"
                            fill="none"
                            stroke="none"></path>
                          <path
                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-400 icon icon-tabler fill-yellow-400 icon-tabler-star"
                          fill="currentColor"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M0 0h24v24H0z"
                            fill="none"
                            stroke="none"></path>
                          <path
                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-400 icon icon-tabler fill-yellow-400 icon-tabler-star"
                          fill="currentColor"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M0 0h24v24H0z"
                            fill="none"
                            stroke="none"></path>
                          <path
                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-400 icon icon-tabler fill-yellow-400 icon-tabler-star"
                          fill="currentColor"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M0 0h24v24H0z"
                            fill="none"
                            stroke="none"></path>
                          <path
                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-400 icon icon-tabler fill-yellow-400 icon-tabler-star"
                          fill="currentColor"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M0 0h24v24H0z"
                            fill="none"
                            stroke="none"></path>
                          <path
                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                        </svg>
                      </div>
                      <span class="text-slate-500">apple music rating</span>
                    </div>
                  </div>
                  <div class="lg:pl-3">
                    <span
                      ><strong class="text-indigo-500">6000+</strong>
                      <span class="ml-3 text-slate-500"
                        >Monthly listeners</span
                      ></span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="block w-full mt-12 lg:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 2000 1275"
                style="enable-background: new 0 0 2000 1275"
                xml:space="preserve">
                <style type="text/css">
                  .st0 {
                    fill: #9ecbe1;
                  }
                  .st1 {
                    fill: #264b64;
                  }
                  .st2 {
                    fill: #d5e8f2;
                  }
                  .st3 {
                    fill: #ffffff;
                  }
                  .st4 {
                    fill: url(#SVGID_1_);
                  }
                  .st5 {
                    fill: #f5ad89;
                  }
                  .st6 {
                    fill: url(#SVGID_2_);
                  }
                  .st7 {
                    fill: url(#SVGID_3_);
                  }
                  .st8 {
                    fill: #461e29;
                  }
                  .st9 {
                    fill: url(#SVGID_4_);
                  }
                  .st10 {
                    fill: url(#SVGID_5_);
                  }
                  .st11 {
                    fill: #131115;
                  }
                  .st12 {
                    fill: #363b48;
                  }
                  .st13 {
                    fill: url(#SVGID_6_);
                  }
                  .st14 {
                    fill: url(#SVGID_7_);
                  }
                  .st15 {
                    fill: url(#SVGID_8_);
                  }
                  .st16 {
                    fill: url(#SVGID_9_);
                  }
                  .st17 {
                    fill: url(#SVGID_10_);
                  }
                  .st18 {
                    fill: url(#SVGID_11_);
                  }
                  .st19 {
                    fill: url(#SVGID_12_);
                  }
                  .st20 {
                    fill: url(#SVGID_13_);
                  }
                  .st21 {
                    fill: url(#SVGID_14_);
                  }
                  .st22 {
                    fill: url(#SVGID_15_);
                  }
                  .st23 {
                    fill: url(#SVGID_16_);
                  }
                  .st24 {
                    fill: #63077a;
                  }
                  .st25 {
                    fill: url(#SVGID_17_);
                  }
                  .st26 {
                    fill: url(#SVGID_18_);
                  }
                  .st27 {
                    fill: #373a50;
                  }
                  .st28 {
                    fill: #191534;
                  }
                  .st29 {
                    fill: url(#SVGID_19_);
                  }
                  .st30 {
                    fill: #ffffff;
                    stroke: #000000;
                    stroke-miterlimit: 10;
                  }
                  .st31 {
                    fill: url(#SVGID_20_);
                  }
                  .st32 {
                    fill: url(#SVGID_21_);
                  }
                  .st33 {
                    fill: url(#SVGID_22_);
                  }
                  .st34 {
                    fill: #e5e5e5;
                  }
                  .st35 {
                    opacity: 0.5;
                    fill: #ffffff;
                  }
                  .st36 {
                    fill: none;
                    stroke: #ffffff;
                    stroke-miterlimit: 10;
                  }
                  .st37 {
                    fill: url(#SVGID_23_);
                  }
                  .st38 {
                    fill: url(#SVGID_24_);
                  }
                  .st39 {
                    fill: url(#SVGID_25_);
                  }
                  .st40 {
                    fill: url(#SVGID_26_);
                  }
                  .st41 {
                    fill: url(#SVGID_27_);
                  }
                  .st42 {
                    fill: url(#SVGID_28_);
                  }
                  .st43 {
                    fill: none;
                    stroke: #2d4b5c;
                    stroke-width: 6;
                    stroke-miterlimit: 10;
                  }
                  .st44 {
                    font-family: 'Roboto-Medium';
                  }
                  .st45 {
                    font-size: 39.6643px;
                  }
                </style>
                <ellipse
                  transform="matrix(0.1602 -0.9871 0.9871 0.1602 1051.2249 2257.4307)"
                  class="st0"
                  cx="1852.3"
                  cy="510.9"
                  rx="39.4"
                  ry="39.4" />
                <rect x="1684.1" y="566" class="st1" width="15" height="54.4" />
                <rect x="1858" y="566" class="st1" width="15" height="54.4" />
                <g>
                  <rect
                    x="1754.5"
                    y="441.5"
                    class="st0"
                    width="86"
                    height="109" />
                  <rect
                    x="1840.5"
                    y="441.5"
                    class="st2"
                    width="23"
                    height="109" />
                </g>
                <rect
                  x="644.5"
                  y="179.4"
                  class="st2"
                  width="740.4"
                  height="391.4" />
                <g>
                  <rect
                    x="186.1"
                    y="215.8"
                    class="st2"
                    width="222.1"
                    height="312" />
                  <path
                    class="st1"
                    d="M374.5,343.3c0,42.7-34.6,77.3-77.3,77.3c-42.7,0-77.3-34.6-77.3-77.3c0-42.7,34.6-77.3,77.3-77.3   C339.9,266,374.5,300.6,374.5,343.3z" />
                  <path
                    class="st3"
                    d="M322.5,343.3c0,15-12.1,27.1-27.1,27.1c-15,0-27.1-12.1-27.1-27.1c0-15,12.1-27.1,27.1-27.1   C310.4,316.2,322.5,328.4,322.5,343.3z" />
                  <path
                    class="st3"
                    d="M356.6,475.7c0,2.4-2,4.4-4.4,4.4H242.1c-2.4,0-4.4-2-4.4-4.4V470c0-2.4,2-4.4,4.4-4.4h110.2   c2.4,0,4.4,2,4.4,4.4V475.7z" />
                </g>
                <rect
                  x="83.3"
                  y="626.7"
                  class="st2"
                  width="434.5"
                  height="550" />
                <linearGradient
                  id="SVGID_1_"
                  gradientUnits="userSpaceOnUse"
                  x1="1143.8126"
                  y1="603.3799"
                  x2="1344.7812"
                  y2="603.3799">
                  <stop offset="9.595919e-02" style="stop-color: #fddc70" />
                  <stop offset="0.2244" style="stop-color: #fdd76e" />
                  <stop offset="0.3661" style="stop-color: #fdca6a" />
                  <stop offset="0.5142" style="stop-color: #fcb463" />
                  <stop offset="0.6668" style="stop-color: #fc965a" />
                  <stop offset="0.8228" style="stop-color: #fb6e4e" />
                  <stop offset="0.9795" style="stop-color: #fa3f41" />
                  <stop offset="1" style="stop-color: #fa3840" />
                </linearGradient>
                <path
                  class="st4"
                  d="M1291.5,616.9c0,0-3.8,7.8-8.6,18.1l-75.9-67.1c0.1-2.4,0.1-10.7-3.9-17c-1.5-6.4-5.9-25.2-3.6-32.3  c2.7-8.4-8.1-0.7-8.4,6.1c-0.2,3.9-1.1,9.6-1.8,13.9c-3.3-3-6.1-5.8-7.8-7.5l-21.2-29c0,0-13.8,8.4-16.2,18.2  c-2.4,9.8,8.1,30.2,8.1,30.2l1.4,1.8l-0.1,0.1c0,0,21.2,31.5,34.2,31.8l85,120.7c0,0,28.4-4.6,36.9-20.6  c10.9-12.7,34.9-51.4,34.9-51.4C1348.7,626.5,1295.6,610.5,1291.5,616.9z" />
                <g>
                  <g>
                    <g>
                      <g>
                        <path
                          class="st5"
                          d="M1448.4,1183.1c-6.7,0-12.4-5.1-13.1-11.9l-26.4-256.8c-0.7-7.3,4.5-13.7,11.8-14.5      c7.2-0.8,13.7,4.5,14.5,11.8l26.4,256.8c0.7,7.3-4.5,13.7-11.8,14.5C1449.3,1183.1,1448.8,1183.1,1448.4,1183.1z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          class="st5"
                          d="M1615,1183.1c-5.6,0-10.7-3.5-12.5-9.1l-83.6-254.6c-2.3-6.9,1.5-14.4,8.4-16.7c6.9-2.3,14.4,1.5,16.7,8.4      l83.6,254.6c2.3,6.9-1.5,14.4-8.4,16.7C1617.7,1182.9,1616.3,1183.1,1615,1183.1z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          class="st5"
                          d="M1229.6,1183.1c-1.4,0-2.7-0.2-4.1-0.7c-6.9-2.3-10.7-9.7-8.4-16.7l83.6-254.6c2.3-6.9,9.7-10.7,16.7-8.4      c6.9,2.3,10.7,9.7,8.4,16.7l-83.6,254.6C1240.4,1179.6,1235.2,1183.1,1229.6,1183.1z" />
                      </g>
                    </g>
                    <g>
                      <path
                        class="st5"
                        d="M1434.8,1039.5c-0.5,0-0.9-0.1-1.3-0.4l-124.2-114.4c-0.8-0.7-0.8-1.9-0.1-2.6c0.7-0.8,1.9-0.8,2.7-0.1     l122.9,113.2L1540,919.7c0.7-0.8,1.9-0.8,2.7-0.1c0.8,0.7,0.8,1.9,0.1,2.7L1436.2,1039     C1435.9,1039.4,1435.4,1039.5,1434.8,1039.5C1434.9,1039.5,1434.8,1039.5,1434.8,1039.5z" />
                    </g>
                    <g>
                      <path
                        class="st5"
                        d="M1568.5,1039.7c-0.4,0-0.8-0.1-1.1-0.4L1426,935.8l-151,100.8c-0.9,0.6-2,0.3-2.6-0.5     c-0.6-0.9-0.3-2,0.5-2.6L1425,932c0.7-0.4,1.5-0.4,2.2,0l142.5,104.3c0.8,0.6,1,1.8,0.4,2.6     C1569.6,1039.5,1569,1039.7,1568.5,1039.7z" />
                    </g>
                    <g>
                      <linearGradient
                        id="SVGID_2_"
                        gradientUnits="userSpaceOnUse"
                        x1="1628.6478"
                        y1="785.0148"
                        x2="1349.3706"
                        y2="773.5615">
                        <stop offset="0" style="stop-color: #feb021" />
                        <stop offset="1" style="stop-color: #fa3840" />
                      </linearGradient>
                      <path
                        class="st6"
                        d="M1587.8,639c0,0,46.6,277.5-82.8,275c-129.5-2.5-249.2,0-249.2,0v-56.6l94.1-81.7l11.3-122L1587.8,639z" />
                    </g>
                  </g>
                </g>
                <linearGradient
                  id="SVGID_3_"
                  gradientUnits="userSpaceOnUse"
                  x1="1354.3395"
                  y1="445.917"
                  x2="1403.8878"
                  y2="445.917">
                  <stop offset="0" style="stop-color: #73cfe9" />
                  <stop offset="1" style="stop-color: #9ecbe1" />
                </linearGradient>
                <path
                  class="st7"
                  d="M1403.9,454.1c0,13.7-11.1,24.8-24.8,24.8l0,0c-13.7,0-24.8-11.1-24.8-24.8v-16.4c0-13.7,11.1-24.8,24.8-24.8  l0,0c13.7,0,24.8,11.1,24.8,24.8V454.1z" />
                <path
                  class="st8"
                  d="M1373.5,468.8c0,0-13.5,34,1.2,48.7c14.7,14.7,4.9-4,4.9-4" />
                <g>
                  <linearGradient
                    id="SVGID_4_"
                    gradientUnits="userSpaceOnUse"
                    x1="1168.2814"
                    y1="1107.8903"
                    x2="1224.2461"
                    y2="1107.8903">
                    <stop offset="9.595919e-02" style="stop-color: #fddc70" />
                    <stop offset="0.2244" style="stop-color: #fdd76e" />
                    <stop offset="0.3661" style="stop-color: #fdca6a" />
                    <stop offset="0.5142" style="stop-color: #fcb463" />
                    <stop offset="0.6668" style="stop-color: #fc965a" />
                    <stop offset="0.8228" style="stop-color: #fb6e4e" />
                    <stop offset="0.9795" style="stop-color: #fa3f41" />
                    <stop offset="1" style="stop-color: #fa3840" />
                  </linearGradient>
                  <path
                    class="st9"
                    d="M1224.2,1078.8l-0.9,64.8l-55.1-15.9c0,0,22.5-26,17.2-55.5" />
                  <linearGradient
                    id="SVGID_5_"
                    gradientUnits="userSpaceOnUse"
                    x1="1286.8223"
                    y1="1110.8285"
                    x2="1330.5959"
                    y2="1110.8285">
                    <stop offset="9.595919e-02" style="stop-color: #fddc70" />
                    <stop offset="0.2244" style="stop-color: #fdd76e" />
                    <stop offset="0.3661" style="stop-color: #fdca6a" />
                    <stop offset="0.5142" style="stop-color: #fcb463" />
                    <stop offset="0.6668" style="stop-color: #fc965a" />
                    <stop offset="0.8228" style="stop-color: #fb6e4e" />
                    <stop offset="0.9795" style="stop-color: #fa3f41" />
                    <stop offset="1" style="stop-color: #fa3840" />
                  </linearGradient>
                  <path
                    class="st10"
                    d="M1330.6,1081.7l-0.9,64.8l-42.9-12.6c0,0,10.3-29.2,5-58.8" />
                  <path
                    class="st11"
                    d="M1318,807.8c0,0-170.1,31.3-183.7,52.6c-13.6,21.3,24,238.1,24,238.1l71.1,7.6c0,0,4.7-114.6-9.1-188.6   c-1.7-9.2,215.5-35.1,215.5-35.1l7.3-109.1l-117.8,1.3L1318,807.8z" />
                  <path
                    class="st12"
                    d="M1406.9,809.2c0,0-107.4,41.1-124.6,67.8c-17.2,26.7-12.9,229.2-12.9,229.2l71.7,3.5l9.7-183.3l138.5-22.8   c0,0,41.9-27,27-95.8l-12-32.9h-128.8L1406.9,809.2z" />
                  <path
                    class="st11"
                    d="M1224.5,1129.9l1.3,43.8l-136.7,2.8c0,0-8.7-6.7,8-12c16.6-5.3,66.7-32.3,77.9-47.8   C1184.6,1140.5,1224.5,1129.9,1224.5,1129.9z" />
                  <path
                    class="st11"
                    d="M1330.4,1132.3l2.2,48.5l-97.5-2.4c0,0,0-9.5,14.3-18.2c14.3-8.7,41.8-40.9,41.8-40.9L1330.4,1132.3z" />
                </g>
                <g>
                  <linearGradient
                    id="SVGID_6_"
                    gradientUnits="userSpaceOnUse"
                    x1="705.8201"
                    y1="508.0051"
                    x2="795.5036"
                    y2="508.0051">
                    <stop offset="9.595919e-02" style="stop-color: #fddc70" />
                    <stop offset="0.2244" style="stop-color: #fdd76e" />
                    <stop offset="0.3661" style="stop-color: #fdca6a" />
                    <stop offset="0.5142" style="stop-color: #fcb463" />
                    <stop offset="0.6668" style="stop-color: #fc965a" />
                    <stop offset="0.8228" style="stop-color: #fb6e4e" />
                    <stop offset="0.9795" style="stop-color: #fa3f41" />
                    <stop offset="1" style="stop-color: #fa3840" />
                  </linearGradient>
                  <path
                    class="st13"
                    d="M795.5,498.3c0,0-23.3,6.8-25.7,19.2c-2.4,12.4-10.3,43.1-10.3,43.1l-53.7-38.6l52.8-66.4L795.5,498.3z" />
                  <linearGradient
                    id="SVGID_7_"
                    gradientUnits="userSpaceOnUse"
                    x1="844.066"
                    y1="479.4916"
                    x2="771.7966"
                    y2="446.2922">
                    <stop offset="9.595919e-02" style="stop-color: #fddc70" />
                    <stop offset="0.2244" style="stop-color: #fdd76e" />
                    <stop offset="0.3661" style="stop-color: #fdca6a" />
                    <stop offset="0.5142" style="stop-color: #fcb463" />
                    <stop offset="0.6668" style="stop-color: #fc965a" />
                    <stop offset="0.8228" style="stop-color: #fb6e4e" />
                    <stop offset="0.9795" style="stop-color: #fa3f41" />
                    <stop offset="1" style="stop-color: #fa3840" />
                  </linearGradient>
                  <path
                    class="st14"
                    d="M820,424c0,0-2.5,17.4-0.7,20.9c1.8,3.5,13.3,23.1,6.8,24.3c-6.5,1.2-5.9,2.6-5.9,2.6s-4.7,33.6-11.8,34.6   c-7.1,1-65.7-34.4-59.4-49.6c6.3-15.1,13.8-49.6,14.2-50.7C763.5,404.9,820,424,820,424z" />
                  <path
                    class="st8"
                    d="M741.2,377.9c0,0-23.6,8-34.5,45.4c-10.9,37.5-28.2,56.4-28.2,56.4l88.1,38.2c0,0,9.6-94.9,21.7-93.5   c12.1,1.5,37.8,2.7,37.8,2.7S820.9,351.9,741.2,377.9z" />
                  <g>
                    <linearGradient
                      id="SVGID_8_"
                      gradientUnits="userSpaceOnUse"
                      x1="759.5113"
                      y1="444.4306"
                      x2="804.9437"
                      y2="444.4306">
                      <stop offset="0" style="stop-color: #ffffff" />
                      <stop offset="1" style="stop-color: #9ecbe1" />
                    </linearGradient>
                    <path
                      class="st15"
                      d="M804.9,452c0,12.5-10.2,22.7-22.7,22.7l0,0c-12.5,0-22.7-10.2-22.7-22.7v-15c0-12.5,10.2-22.7,22.7-22.7l0,0    c12.5,0,22.7,10.2,22.7,22.7V452z" />
                    <linearGradient
                      id="SVGID_9_"
                      gradientUnits="userSpaceOnUse"
                      x1="766.151"
                      y1="444.4303"
                      x2="798.304"
                      y2="444.4303">
                      <stop offset="0" style="stop-color: #73cfe9" />
                      <stop offset="1" style="stop-color: #9ecbe1" />
                    </linearGradient>
                    <path
                      class="st16"
                      d="M798.3,449.8c0,8.9-7.2,16.1-16.1,16.1l0,0c-8.9,0-16.1-7.2-16.1-16.1v-10.6c0-8.9,7.2-16.1,16.1-16.1l0,0    c8.9,0,16.1,7.2,16.1,16.1V449.8z" />
                    <path
                      class="st3"
                      d="M794.5,399.6h-19.7l-0.3,17c0,2.2,0,4.2,0.1,5.9c-1.7,2.3-2.7,5.1-2.7,8.2v9.2c0,7.6,6.2,13.9,13.9,13.9    c7.6,0,13.9-6.2,13.9-13.9v-9.2c0-3.9-1.6-7.4-4.2-9.9C796.2,413.8,795.4,405.6,794.5,399.6z" />
                    <linearGradient
                      id="SVGID_10_"
                      gradientUnits="userSpaceOnUse"
                      x1="750.7444"
                      y1="383.2055"
                      x2="799.6186"
                      y2="383.2055">
                      <stop offset="0" style="stop-color: #ffffff" />
                      <stop offset="1" style="stop-color: #9ecbe1" />
                    </linearGradient>
                    <path
                      class="st17"
                      d="M769,366.8c-4.6,0-18.3,0.7-18.3,5.4c0,4.6,6.5,3.1,11.1,3.1c10.3,0,13,24.3,13,24.3h19.7    C793.8,394.7,790.4,366.8,769,366.8z" />
                  </g>
                </g>
                <g>
                  <linearGradient
                    id="SVGID_11_"
                    gradientUnits="userSpaceOnUse"
                    x1="896.6103"
                    y1="539.8912"
                    x2="910.9657"
                    y2="539.8912">
                    <stop offset="9.595919e-02" style="stop-color: #fddc70" />
                    <stop offset="0.2244" style="stop-color: #fdd76e" />
                    <stop offset="0.3661" style="stop-color: #fdca6a" />
                    <stop offset="0.5142" style="stop-color: #fcb463" />
                    <stop offset="0.6668" style="stop-color: #fc965a" />
                    <stop offset="0.8228" style="stop-color: #fb6e4e" />
                    <stop offset="0.9795" style="stop-color: #fa3f41" />
                    <stop offset="1" style="stop-color: #fa3840" />
                  </linearGradient>
                  <path
                    class="st18"
                    d="M896.6,557.9c0-1,6.4-24.6,3.8-32.5c-2.6-8,7.7-0.6,8,5.7c0.3,6.4,2.6,18.2,2.6,18.2" />
                  <linearGradient
                    id="SVGID_12_"
                    gradientUnits="userSpaceOnUse"
                    x1="906.8285"
                    y1="620.6519"
                    x2="721.2684"
                    y2="620.6519">
                    <stop offset="9.595919e-02" style="stop-color: #fddc70" />
                    <stop offset="0.2244" style="stop-color: #fdd76e" />
                    <stop offset="0.3661" style="stop-color: #fdca6a" />
                    <stop offset="0.5142" style="stop-color: #fcb463" />
                    <stop offset="0.6668" style="stop-color: #fc965a" />
                    <stop offset="0.8228" style="stop-color: #fb6e4e" />
                    <stop offset="0.9795" style="stop-color: #fa3f41" />
                    <stop offset="1" style="stop-color: #fa3840" />
                  </linearGradient>
                  <path
                    class="st19"
                    d="M902,564.3l-87.5,77.4c-11.3-23.5-37.1-76.1-47.6-90.3c-13.7-18.5-34.1-8.8-34.1-8.8l59.5,141.7l3.5-3.9   c7,16.2,35.5,20.8,35.5,20.8l87.1-123.6L902,564.3z" />
                  <linearGradient
                    id="SVGID_13_"
                    gradientUnits="userSpaceOnUse"
                    x1="893.3574"
                    y1="550.5292"
                    x2="950.7752"
                    y2="550.5292">
                    <stop offset="9.595919e-02" style="stop-color: #fddc70" />
                    <stop offset="0.2244" style="stop-color: #fdd76e" />
                    <stop offset="0.3661" style="stop-color: #fdca6a" />
                    <stop offset="0.5142" style="stop-color: #fcb463" />
                    <stop offset="0.6668" style="stop-color: #fc965a" />
                    <stop offset="0.8228" style="stop-color: #fb6e4e" />
                    <stop offset="0.9795" style="stop-color: #fa3f41" />
                    <stop offset="1" style="stop-color: #fa3840" />
                  </linearGradient>
                  <path
                    class="st20"
                    d="M943.6,557.1c2.8-5.7,8.6-18.5,6.8-25.7c-2.3-9.5-16.1-17.6-16.1-17.6L919,535.6l0,0c0,0-8.9,9.6-17.9,16   c-8.9,6.4-7.7,21.1-7.7,21.1l17.2,14.7c10,1.1,26-19.9,31.3-27.4l0.1,0.1c0,0,0.2-0.4,0.6-1.1c0.7-1,1.1-1.6,1.1-1.6L943.6,557.1z" />
                </g>
                <g>
                  <g>
                    <g>
                      <path
                        class="st5"
                        d="M715.6,1183.1c6.7,0,12.4-5.1,13.1-11.9l26.4-256.8c0.7-7.3-4.5-13.7-11.8-14.5c-7.2-0.8-13.7,4.5-14.5,11.8     l-26.4,256.8c-0.7,7.3,4.5,13.7,11.8,14.5C714.7,1183.1,715.1,1183.1,715.6,1183.1z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        class="st5"
                        d="M549,1183.1c5.6,0,10.7-3.5,12.5-9.1l83.6-254.6c2.3-6.9-1.5-14.4-8.4-16.7c-6.9-2.3-14.4,1.5-16.7,8.4     l-83.6,254.6c-2.3,6.9,1.5,14.4,8.4,16.7C546.2,1182.9,547.6,1183.1,549,1183.1z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        class="st5"
                        d="M934.3,1183.1c1.4,0,2.7-0.2,4.1-0.7c6.9-2.3,10.7-9.7,8.4-16.7l-83.6-254.6c-2.3-6.9-9.7-10.7-16.7-8.4     c-6.9,2.3-10.7,9.7-8.4,16.7l83.6,254.6C923.6,1179.6,928.7,1183.1,934.3,1183.1z" />
                    </g>
                  </g>
                  <g>
                    <path
                      class="st5"
                      d="M729.1,1039.5c0.5,0,0.9-0.1,1.3-0.4l124.2-114.4c0.8-0.7,0.8-1.9,0.1-2.6c-0.7-0.8-1.9-0.8-2.7-0.1    l-122.9,113.2L623.9,919.7c-0.7-0.8-1.9-0.8-2.7-0.1c-0.8,0.7-0.8,1.9-0.1,2.7L727.7,1039C728.1,1039.4,728.5,1039.5,729.1,1039.5    C729.1,1039.5,729.1,1039.5,729.1,1039.5z" />
                  </g>
                  <g>
                    <path
                      class="st5"
                      d="M595.5,1039.7c0.4,0,0.8-0.1,1.1-0.4L738,935.8l151,100.8c0.9,0.6,2,0.3,2.6-0.5c0.6-0.9,0.3-2-0.5-2.6    L739,932c-0.7-0.4-1.5-0.4-2.2,0l-142.5,104.3c-0.8,0.6-1,1.8-0.4,2.6C594.3,1039.5,594.9,1039.7,595.5,1039.7z" />
                  </g>
                  <g>
                    <linearGradient
                      id="SVGID_14_"
                      gradientUnits="userSpaceOnUse"
                      x1="560.8055"
                      y1="775.6569"
                      x2="907.863"
                      y2="775.6569">
                      <stop offset="0" style="stop-color: #feb021" />
                      <stop offset="1" style="stop-color: #fa3840" />
                    </linearGradient>
                    <path
                      class="st21"
                      d="M565.4,637.3c0,0-36.1,279.3,93.4,276.8c129.5-2.5,249.1,0,249.1,0v-56.6l-94-81.7l-11.2-122L565.4,637.3z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      class="st12"
                      d="M1047,1120.9c6.8-0.2,59.7,6.2,61.4,10.2s-25.3,25.2-38.8,29.1c-8,2.3-20.7-4.2-44.4-1.5    c-33.5,3.8-20,11.5-27.3,15.9c-8,4.7-10.8,3.9-10.8,3.9l-14.4-23.3l-0.4-28.8" />
                  </g>
                  <g>
                    <linearGradient
                      id="SVGID_15_"
                      gradientUnits="userSpaceOnUse"
                      x1="992.1715"
                      y1="1049.7802"
                      x2="919.4641"
                      y2="912.2972">
                      <stop offset="9.595919e-02" style="stop-color: #fddc70" />
                      <stop offset="0.2244" style="stop-color: #fdd76e" />
                      <stop offset="0.3661" style="stop-color: #fdca6a" />
                      <stop offset="0.5142" style="stop-color: #fcb463" />
                      <stop offset="0.6668" style="stop-color: #fc965a" />
                      <stop offset="0.8228" style="stop-color: #fb6e4e" />
                      <stop offset="0.9795" style="stop-color: #fa3f41" />
                      <stop offset="1" style="stop-color: #fa3840" />
                    </linearGradient>
                    <path
                      class="st22"
                      d="M813.3,877.3l107.5,13.2c0,0-7.1,74.7,8.1,119.5c15.2,44.8,52.9,136.6,52.9,136.6l84.8-17.2    c0,0-49.5-2.3-57.4-17.9c-23.2-45.7-9.2-237.3-32.7-254.8c-23.5-17.6-93-36.8-93-36.8L813.3,877.3z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      class="st12"
                      d="M761.5,1125.9c3.5,5.8,23.6,55.2,21,58.6c-2.6,3.4-34.3-9.9-44.3-19.8c-5.9-5.9-6.4-20.1-20.3-39.5    c-19.6-27.4-19.8-11.8-27.1-16.2c-8-4.7-8.7-7.5-8.7-7.5l13.4-23.9l25-14.3" />
                  </g>
                  <g>
                    <g>
                      <linearGradient
                        id="SVGID_16_"
                        gradientUnits="userSpaceOnUse"
                        x1="845.5355"
                        y1="1052.504"
                        x2="786.9648"
                        y2="804.9102">
                        <stop
                          offset="9.595919e-02"
                          style="stop-color: #fddc70" />
                        <stop offset="0.2244" style="stop-color: #fdd76e" />
                        <stop offset="0.3661" style="stop-color: #fdca6a" />
                        <stop offset="0.5142" style="stop-color: #fcb463" />
                        <stop offset="0.6668" style="stop-color: #fc965a" />
                        <stop offset="0.8228" style="stop-color: #fb6e4e" />
                        <stop offset="0.9795" style="stop-color: #fa3f41" />
                        <stop offset="1" style="stop-color: #fa3840" />
                      </linearGradient>
                      <path
                        class="st23"
                        d="M893.9,837.6c0,0,64.4,42.2,59.6,71.1c-4.8,28.9-171.6,137.2-201.5,178.8c-10.2,14.2,10.5,59.2,10.5,59.2     l-54.3-67.4c0,0,64.1-75.7,96.9-109.8c32.8-34.1,57-61.5,57-61.5l-71-44.3" />
                    </g>
                  </g>
                </g>
                <g>
                  <path
                    class="st12"
                    d="M651.1,769.2c0,0-34.9,60,1.6,97.7c36.5,37.7,201.2,39,201.2,36.5c0-74.1,98.5-65.7,98.5-65.7   s-112.7-70.2-204.8-68.2" />
                  <path
                    class="st12"
                    d="M837.9,907.8c9.7,0,16-0.3,17.1-0.8c1.4-0.6,2.5-2.1,2.5-3.6c0-17.2,5.6-31.1,16.8-41.3   c26.9-24.7,77.2-20.7,77.7-20.7c1.7,0.2,3.3-0.9,3.9-2.6c0.6-1.7-0.1-3.5-1.6-4.4c-4.6-2.9-114.9-70.8-206.8-68.8   c-2.1,0-3.7,1.8-3.7,3.9c0,2.1,1.7,3.7,3.8,3.7c0,0,0.1,0,0.1,0c72.2-1.7,158.7,42.7,190.3,60.4c-18.1,0.6-48.7,4.5-68.8,22.9   c-12,11-18.5,25.7-19.1,43.7c-22,1.6-162.4-2.5-194.7-35.9c-34.1-35.3-1.4-92.7-1-93.2c1-1.8,0.4-4.1-1.4-5.2   c-1.8-1-4.1-0.4-5.2,1.4c-1.5,2.6-35.9,63,2.1,102.3C680.5,901.1,794.2,907.8,837.9,907.8z" />
                </g>
                <path
                  class="st24"
                  d="M705.5,506.8c-1.8-0.6-29.5,5.3-41.9,36.6c-12.4,31.3-39.5,265.5-39.5,265.5l155.8-38.3  c0,0,1.7-109.2,11.8-121c10-11.8,3.5-23.6-10.6-60.2c-14.2-36.6-17.3-41.2-17.3-41.2L705.5,506.8z" />
                <linearGradient
                  id="SVGID_17_"
                  gradientUnits="userSpaceOnUse"
                  x1="677.9313"
                  y1="621.5363"
                  x2="917.3124"
                  y2="621.5363">
                  <stop offset="9.595919e-02" style="stop-color: #fddc70" />
                  <stop offset="0.2244" style="stop-color: #fdd76e" />
                  <stop offset="0.3661" style="stop-color: #fdca6a" />
                  <stop offset="0.5142" style="stop-color: #fcb463" />
                  <stop offset="0.6668" style="stop-color: #fc965a" />
                  <stop offset="0.8228" style="stop-color: #fb6e4e" />
                  <stop offset="0.9795" style="stop-color: #fa3f41" />
                  <stop offset="1" style="stop-color: #fa3840" />
                </linearGradient>
                <path
                  class="st25"
                  d="M700,541.2c13.9-1.8,28.7,6.8,34.2,34.4c5.5,27.5,16.7,87,16.7,87l119.1,14.9c0,0,26.4-4.7,32.3-2  c5.9,2.8,14.9,14.2,14.9,14.2s0,14.2-13.4,11.8c-13.4-2.4-21.6-5.5-21.6-5.5s-141,12.8-158.3,1.4c-17.3-11.4-47.6-88.5-46-110.5  C679.6,564.8,686.1,543,700,541.2z" />
                <linearGradient
                  id="SVGID_18_"
                  gradientUnits="userSpaceOnUse"
                  x1="7953.1411"
                  y1="686.8759"
                  x2="8027.7295"
                  y2="686.8759"
                  gradientTransform="matrix(-1 0 0 1 8895.1309 0)">
                  <stop offset="9.595919e-02" style="stop-color: #fddc70" />
                  <stop offset="0.2244" style="stop-color: #fdd76e" />
                  <stop offset="0.3661" style="stop-color: #fdca6a" />
                  <stop offset="0.5142" style="stop-color: #fcb463" />
                  <stop offset="0.6668" style="stop-color: #fc965a" />
                  <stop offset="0.8228" style="stop-color: #fb6e4e" />
                  <stop offset="0.9795" style="stop-color: #fa3f41" />
                  <stop offset="1" style="stop-color: #fa3840" />
                </linearGradient>
                <path
                  class="st26"
                  d="M873.6,679.4l31-6.9l34.3,19.3c0,0,8.3,7.7-2.2,8.8c-10.6,1.1-54.3,0.7-55.4,0.3c-1.1-0.4-13.9-6.6-13.9-6.6" />
                <g>
                  <path
                    class="st27"
                    d="M996.3,697.6c0,2.8-3,5-6.7,5l0,0c-3.7,0-6.7-2.2-6.7-5v-91.8c0-2.8,3-5,6.7-5l0,0c3.7,0,6.7,2.2,6.7,5V697.6   z" />
                  <path
                    class="st28"
                    d="M938.9,704.3c-1.7,1.7-4.4,1.7-6.1,0l0,0c-1.7-1.7-1.7-4.4,0-6.1l56-56c1.7-1.7,4.4-1.7,6.1,0l0,0   c1.7,1.7,1.7,4.4,0,6.1L938.9,704.3z" />
                  <path
                    class="st28"
                    d="M1041.9,704.3c1.7,1.7,4.4,1.7,6.1,0l0,0c1.7-1.7,1.7-4.4,0-6.1l-56-56c-1.7-1.7-4.4-1.7-6.1,0l0,0   c-1.7,1.7-1.7,4.4,0,6.1L1041.9,704.3z" />
                  <path
                    class="st28"
                    d="M1004,645c0,2.7-2.2,4.9-4.9,4.9h-18.9c-2.7,0-4.9-2.2-4.9-4.9l0,0c0-2.7,2.2-4.9,4.9-4.9h18.9   C1001.8,640.1,1004,642.3,1004,645L1004,645z" />
                  <g>
                    <rect
                      x="1032.9"
                      y="593.3"
                      transform="matrix(0.7182 -0.6958 0.6958 0.7182 -131.5724 894.8825)"
                      class="st28"
                      width="12.4"
                      height="33.2" />

                    <rect
                      x="1006.4"
                      y="559.5"
                      transform="matrix(0.7182 -0.6959 0.6959 0.7182 -121.8513 872.8373)"
                      class="st27"
                      width="20.5"
                      height="54.7" />
                    <path
                      class="st28"
                      d="M1010.3,553.5c7.2,7.4,7,19.2-0.4,26.4l0,0c-7.4,7.2-19.2,7-26.4-0.4l-23.8-24.6c-7.2-7.4-7-19.2,0.4-26.4    l0,0c7.4-7.2,19.2-7,26.4,0.4L1010.3,553.5z" />
                  </g>
                  <polygon
                    class="st27"
                    points="988.2,601.1 1009.8,589.9 1030.3,611.8 1013.8,623.6 992.7,615.6  " />
                </g>
                <linearGradient
                  id="SVGID_19_"
                  gradientUnits="userSpaceOnUse"
                  x1="591.9416"
                  y1="842.797"
                  x2="781.3279"
                  y2="842.797">
                  <stop offset="0" style="stop-color: #feb021" />
                  <stop offset="1" style="stop-color: #fa3840" />
                </linearGradient>
                <path
                  class="st29"
                  d="M591.9,774.7h138.9c0,0,50.4-4.4,50.4,44.2c0,48.7,0,92,0,92s-168.1-4.4-175.2-66.4  C599,782.7,591.9,774.7,591.9,774.7z" />
                <g>
                  <polyline
                    class="st1"
                    points="1430.1,533.6 1510.6,548.4 1524.9,631.4 1499.4,649.8 1520.3,849.9 1313.6,809.3 1332.9,632.9    1287.3,618.4 1334.6,542 1398.8,529.1  " />
                </g>
                <g>
                  <path class="st30" d="M1466.2,414.5" />
                </g>
                <linearGradient
                  id="SVGID_20_"
                  gradientUnits="userSpaceOnUse"
                  x1="1350.1896"
                  y1="702.4356"
                  x2="1505.453"
                  y2="613.2273">
                  <stop offset="9.595919e-02" style="stop-color: #fddc70" />
                  <stop offset="0.2244" style="stop-color: #fdd76e" />
                  <stop offset="0.3661" style="stop-color: #fdca6a" />
                  <stop offset="0.5142" style="stop-color: #fcb463" />
                  <stop offset="0.6668" style="stop-color: #fc965a" />
                  <stop offset="0.8228" style="stop-color: #fb6e4e" />
                  <stop offset="0.9795" style="stop-color: #fa3f41" />
                  <stop offset="1" style="stop-color: #fa3840" />
                </linearGradient>
                <path
                  class="st31"
                  d="M1521.1,629.3c0,0-44.7,20.6-44.7,22.5l-0.9,32.7l-68.6-60.7c0.1-2.4,0.1-10.7-3.9-17  c-1.5-6.4-5.9-25.2-3.6-32.3c2.7-8.4-8.1-0.7-8.4,6.1c-0.2,3.9-1.1,9.6-1.8,13.9c-3.2-2.9-6-5.6-7.6-7.3l-19.4-28.3  c0,0-15.8,7.5-18.2,17.3c-2.4,9.8,7.4,29.8,7.4,29.8l5,6.5l0,0c6.3,8.6,21.2,27.4,31.2,27.6l85,120.7c0,0,50.6-5.5,43.8-33.8  c3.1,1.1,0.2-0.7,1.5-2.4C1525.4,715.3,1522.1,666.2,1521.1,629.3z" />
                <g>
                  <path
                    class="st1"
                    d="M652.7,431.8h21.4c8.3,0,14.7-7.4,14.7-15.8v-73.8c0-8.3-6.4-15.7-14.7-15.7H486.4c-8.3,0-16.6,7.3-16.6,15.7   v73.8c0,8.3,8.3,15.8,16.6,15.8h125.4c13.5,19.3,38.8,27.5,58.4,27.5C670.8,459.3,650.1,446.9,652.7,431.8z" />
                  <g>
                    <path
                      class="st3"
                      d="M541.5,377.4c0,5.5-4.5,10-10,10c-5.5,0-10-4.5-10-10c0-5.5,4.5-10,10-10C537,367.4,541.5,371.9,541.5,377.4z    " />
                    <path
                      class="st3"
                      d="M586,377.4c0,5.5-4.5,10-10,10c-5.5,0-10-4.5-10-10c0-5.5,4.5-10,10-10C581.5,367.4,586,371.9,586,377.4z" />
                    <path
                      class="st3"
                      d="M630.5,377.4c0,5.5-4.5,10-10,10c-5.5,0-10-4.5-10-10c0-5.5,4.5-10,10-10C626,367.4,630.5,371.9,630.5,377.4z    " />
                  </g>
                </g>
                <g>
                  <path
                    class="st0"
                    d="M1518.4,456.5h-8.5c-3.3,0-6.1-3.4-6.1-6.7v-29.4c0-3.3,2.8-5.7,6.1-5.7h74.8c3.3,0,7.1,2.4,7.1,5.7v29.4   c0,3.3-3.8,6.7-7.1,6.7h-50c-13.5,0-1.5,11.6-20,13.6C1514.5,470.2,1517.1,459.8,1518.4,456.5z" />
                  <g>
                    <path
                      class="st3"
                      d="M1562.7,434.4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4c0-2.2-1.8-4-4-4C1564.5,430.4,1562.7,432.2,1562.7,434.4z" />
                    <path
                      class="st3"
                      d="M1545,434.4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4c0-2.2-1.8-4-4-4C1546.7,430.4,1545,432.2,1545,434.4z" />
                    <path
                      class="st3"
                      d="M1527.2,434.4c0,2.2,1.8,4,4,4s4-1.8,4-4c0-2.2-1.8-4-4-4S1527.2,432.2,1527.2,434.4z" />
                  </g>
                </g>
                <g>
                  <ellipse
                    transform="matrix(0.5969 -0.8023 0.8023 0.5969 464.7072 1361.0157)"
                    class="st3"
                    cx="1586.9"
                    cy="218"
                    rx="84.9"
                    ry="84.9" />
                  <g>
                    <rect
                      x="1583.9"
                      y="125.5"
                      class="st2"
                      width="6"
                      height="32.9" />
                    <rect
                      x="1583.9"
                      y="277.6"
                      class="st2"
                      width="6"
                      height="33" />
                  </g>
                  <g>
                    <rect
                      x="1646.5"
                      y="215"
                      class="st2"
                      width="32.9"
                      height="6" />
                    <rect
                      x="1494.3"
                      y="215"
                      class="st2"
                      width="32.9"
                      height="6" />
                  </g>
                  <path
                    class="st0"
                    d="M1586.9,112.3c-58.4,0-105.7,47.3-105.7,105.7c0,58.4,47.3,105.7,105.7,105.7c58.4,0,105.7-47.3,105.7-105.7   C1692.6,159.7,1645.2,112.3,1586.9,112.3z M1586.9,302.9c-46.9,0-84.9-38-84.9-84.9c0-46.9,38-84.9,84.9-84.9   c46.9,0,84.9,38,84.9,84.9C1671.7,264.9,1633.7,302.9,1586.9,302.9z" />
                  <g>
                    <polygon
                      class="st8"
                      points="1604.5,246.2 1584.3,218.9 1584.3,174.2 1589.5,174.2 1589.5,217.2 1608.7,243.1   " />
                  </g>
                  <g>
                    <linearGradient
                      id="SVGID_21_"
                      gradientUnits="userSpaceOnUse"
                      x1="1563.3887"
                      y1="232.6759"
                      x2="1589.8552"
                      y2="232.6759">
                      <stop offset="0.1047" style="stop-color: #fc6f3d" />
                      <stop offset="0.9543" style="stop-color: #f7426e" />
                    </linearGradient>
                    <path
                      class="st32"
                      d="M1565.3,249.3c-0.4,0-0.8-0.1-1.2-0.4c-0.9-0.7-1-1.9-0.4-2.7l22.6-29.3c0.7-0.9,1.9-1,2.7-0.4    c0.9,0.7,1,1.9,0.4,2.7l-22.6,29.3C1566.5,249,1565.9,249.3,1565.3,249.3z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      class="st28"
                      d="M1164.4,694.2c0,5,3.9,9.3,9.5,9.3H1360c5.5,0,10.6-4.3,10.6-9.3v-0.5c0-5-5.1-8.4-10.6-8.4h-186.1    c-5.5,0-9.5,3.4-9.5,8.4V694.2z" />
                    <path
                      class="st3"
                      d="M1156.3,665.6c2.6,12.4,14.8,22.8,27.3,22.8h127.7c8,0,5-10.4,2.4-22.8l-17.8-83.1    c-2.6-12.4-14.8-21.8-27.3-21.8h-112.4c-12.4,0-20.3,9.4-17.7,21.8L1156.3,665.6z" />
                    <linearGradient
                      id="SVGID_22_"
                      gradientUnits="userSpaceOnUse"
                      x1="1127.1849"
                      y1="625.6259"
                      x2="1307.4783"
                      y2="625.6259">
                      <stop offset="0" style="stop-color: #cccccc" />
                      <stop offset="1" style="stop-color: #808080" />
                    </linearGradient>
                    <path
                      class="st33"
                      d="M1145.5,666.6c2.6,12.4,14.8,22.9,27.3,22.9h112.4c6.8,0,22-0.5,22.3-0.5c0,0-3.4-16.9-4.6-22.4l-17.8-83.1    c-2.6-12.4-14.8-21.7-27.3-21.7h-112.4c-12.4,0-20.3,9.4-17.7,21.8L1145.5,666.6z" />
                  </g>
                  <path
                    class="st34"
                    d="M1194.9,624.5c0,8.8,7.1,16,16,16c8.8,0,16-7.1,16-16c0-8.8-7.1-16-16-16   C1202,608.6,1194.9,615.7,1194.9,624.5z" />
                </g>
                <g>
                  <path
                    class="st35"
                    d="M1797.9,1074.7c0,0-56.3-282.4-5-263.3c51.3,19.1,58.3,237.2,35.2,268.3" />
                  <path
                    class="st2"
                    d="M1797.9,1074.7c0,0-56.3-282.4-5-263.3c51.3,19.1,58.3,237.2,35.2,268.3" />
                  <path
                    class="st2"
                    d="M1792.5,1085.1c0,0-10-115.3-65.2-109.3c-55.2,6,25.1,100.3,39.1,109.3" />
                  <polygon
                    class="st2"
                    points="1845.9,1176.6 1776.1,1176.6 1771,1088.3 1851,1088.3  " />
                  <path
                    class="st1"
                    d="M1728.3,928.6c0,0-15,45.1,25.1,37.1c40.1-8,28.5-9.5,28.5-9.5" />
                  <path
                    class="st0"
                    d="M1804.5,1084c0,0-13-172.5-32.1-179.5c-19-7-51.1,8-44.1,24.1c7,16,54.2,156.4,54.2,156.4" />
                  <path
                    class="st1"
                    d="M1908.2,894.8c0,0,10.8,54.3-10,72.4c-20.9,18.1-36.7-15.1-36.7-15.1l-3.3-59.3" />
                  <path
                    class="st0"
                    d="M1806.6,1080.7c0,0,14.1-229.1,63.3-215.1c49.2,14.1,40.2,41.2,40.2,41.2s-12.1-11.1-19.1,3   c-7,14.1-43.2,174.9-43.2,174.9" />
                  <path
                    class="st2"
                    d="M1837.2,1081.1c0,0,20.1-114,74.5-103.1c54.4,10.8-33.8,97.7-48.6,105.4" />
                  <path
                    class="st36"
                    d="M1791.9,825.4c0,0,26.4,164.8,17.4,255.2" />
                  <path
                    class="st36"
                    d="M1745.3,913.9c0,0,42.5,119.6,45.5,160.8" />
                  <path
                    class="st36"
                    d="M1726.6,991.2c0,0,40.2,60.3,46.2,86.4" />
                  <path
                    class="st36"
                    d="M1880.3,881.7c0,0-41.2,123.6-52.3,191" />
                  <g>
                    <path
                      class="st36"
                      d="M1847.6,1080l-1-0.5c22.9-40.8,55-83.1,55.3-83.5l0.9,0.7C1902.5,997,1870.5,1039.3,1847.6,1080z" />
                  </g>
                  <rect
                    x="1755.9"
                    y="1078.6"
                    class="st1"
                    width="110.3"
                    height="24.7" />
                </g>
                <g>
                  <path
                    class="st27"
                    d="M1222.6,442.2l-3.3,18.6c-0.7,3.8,1.9,7.5,5.7,8.2l60.1,10.6l5.7-32.5l-60.1-10.6   C1226.9,435.8,1223.3,438.4,1222.6,442.2" />
                  <path
                    class="st28"
                    d="M1329.3,464.8l-2,11.4c-1.6,9.3-10.6,15.6-19.9,13.9l-25.7-4.5c-4.4-0.8-7.4-5-6.6-9.4l5.2-29.2   c0.8-4.4,5-7.4,9.4-6.6l25.7,4.5C1324.7,446.5,1330.9,455.4,1329.3,464.8" />
                  <path
                    class="st28"
                    d="M1258.7,447.5c-5.8,0-10.5,4.7-10.5,10.5c0,5.8,4.7,10.5,10.5,10.5c5.8,0,10.5-4.7,10.5-10.5   C1269.2,452.2,1264.5,447.5,1258.7,447.5" />
                  <rect
                    x="1255.1"
                    y="352.2"
                    class="st27"
                    width="7"
                    height="74.4" />
                  <path
                    class="st28"
                    d="M1259.1,414.6L1259.1,414.6c3.5,0,6.4,2.9,6.4,6.4v38.4h-12.8V421C1252.7,417.5,1255.6,414.6,1259.1,414.6" />
                  <polygon
                    class="st28"
                    points="1091.2,459 1088,454.6 1251.6,337.2 1254.8,341.6  " />
                  <polygon
                    class="st28"
                    points="1099.6,471.4 1096.3,467 1258.5,345.6 1261.7,349.9  " />
                  <path
                    class="st28"
                    d="M1268.3,344.4c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9   C1262.5,331.5,1268.3,337.2,1268.3,344.4" />
                  <rect
                    x="1086.3"
                    y="469.2"
                    class="st28"
                    width="5.5"
                    height="244" />
                  <rect
                    x="1097.9"
                    y="469.2"
                    class="st28"
                    width="5.5"
                    height="244" />
                  <path
                    class="st27"
                    d="M1099.9,478.4h-19.7v-31.8h19.7c8.8,0,15.9,7.1,15.9,15.9C1115.8,471.2,1108.6,478.4,1099.9,478.4" />

                  <rect
                    x="1097.3"
                    y="421.3"
                    transform="matrix(0.8774 -0.4798 0.4798 0.8774 -62.1702 602.4448)"
                    class="st28"
                    width="100.4"
                    height="3" />
                  <rect
                    x="1065.6"
                    y="662.8"
                    class="st28"
                    width="58.6"
                    height="41" />
                </g>
                <g>
                  <g>
                    <path
                      class="st8"
                      d="M1372.9,432c-14-14-29.3-52.9,3.2-61.4c13.4-3.5,35.7,8.6,35.7,8.6s11.1-5.3,13-3.6    c1.9,1.7,10.3,8.1,10.3,8.1l16.4,12.8" />
                  </g>
                  <g>
                    <linearGradient
                      id="SVGID_23_"
                      gradientUnits="userSpaceOnUse"
                      x1="1383.1166"
                      y1="517.8704"
                      x2="1438.6954"
                      y2="517.8704">
                      <stop offset="9.595919e-02" style="stop-color: #fddc70" />
                      <stop offset="0.2244" style="stop-color: #fdd76e" />
                      <stop offset="0.3661" style="stop-color: #fdca6a" />
                      <stop offset="0.5142" style="stop-color: #fcb463" />
                      <stop offset="0.6668" style="stop-color: #fc965a" />
                      <stop offset="0.8228" style="stop-color: #fb6e4e" />
                      <stop offset="0.9795" style="stop-color: #fa3f41" />
                      <stop offset="1" style="stop-color: #fa3840" />
                    </linearGradient>
                    <path
                      class="st37"
                      d="M1436.1,476.3l2.6,58.8c0,0-15.4,25.8-32.5,24.3c-19.1-1.7-23-20-23-20l10.2-27.8" />
                  </g>
                  <g>
                    <g>
                      <path
                        class="st8"
                        d="M1377.5,446.2c5.8,22.8,47,66.1,63.3,49.1c3.5-3.6,23.6-44.8,23.9-47.8c2-23.5,11.7-62.1-46.7-59.2     C1382.7,390.2,1371.7,423.4,1377.5,446.2z" />
                    </g>
                    <g>
                      <linearGradient
                        id="SVGID_24_"
                        gradientUnits="userSpaceOnUse"
                        x1="1371.0103"
                        y1="467.0586"
                        x2="1446.3674"
                        y2="467.0586">
                        <stop
                          offset="9.595919e-02"
                          style="stop-color: #fddc70" />
                        <stop offset="0.2244" style="stop-color: #fdd76e" />
                        <stop offset="0.3661" style="stop-color: #fdca6a" />
                        <stop offset="0.5142" style="stop-color: #fcb463" />
                        <stop offset="0.6668" style="stop-color: #fc965a" />
                        <stop offset="0.8228" style="stop-color: #fb6e4e" />
                        <stop offset="0.9795" style="stop-color: #fa3f41" />
                        <stop offset="1" style="stop-color: #fa3840" />
                      </linearGradient>
                      <path
                        class="st38"
                        d="M1374.2,419.7c0,0-14.1,95.9,17.4,94.7c31.5-1.2,37.8-35.6,37.8-35.6s10.3,1.9,15-10.8     c4.7-12.8-0.4-18.1-0.4-18.1l-14.5,9l5.5-33.9L1374.2,419.7z" />
                    </g>
                  </g>
                  <g>
                    <path class="st30" d="M1383.1,407.1" />
                  </g>
                  <path
                    class="st8"
                    d="M1432.7,445.3c0,0-19.5,48.6-29.6,50.3c-10.1,1.7-31.3-1.4-31.3-1.4s-8.4,28.5,16.4,29.6   c24.7,1,46.1-29.2,47.9-69.3" />
                  <g>
                    <linearGradient
                      id="SVGID_25_"
                      gradientUnits="userSpaceOnUse"
                      x1="1419.8533"
                      y1="453.5558"
                      x2="1469.4017"
                      y2="453.5558">
                      <stop offset="0" style="stop-color: #ffffff" />
                      <stop offset="1" style="stop-color: #9ecbe1" />
                    </linearGradient>
                    <path
                      class="st39"
                      d="M1469.4,461.8c0,13.7-11.1,24.8-24.8,24.8l0,0c-13.7,0-24.8-11.1-24.8-24.8v-16.4    c0-13.7,11.1-24.8,24.8-24.8l0,0c13.7,0,24.8,11.1,24.8,24.8V461.8z" />
                    <linearGradient
                      id="SVGID_26_"
                      gradientUnits="userSpaceOnUse"
                      x1="1427.0936"
                      y1="453.5558"
                      x2="1462.1613"
                      y2="453.5558">
                      <stop offset="0" style="stop-color: #73cfe9" />
                      <stop offset="1" style="stop-color: #9ecbe1" />
                    </linearGradient>
                    <path
                      class="st40"
                      d="M1462.2,459.4c0,9.7-7.8,17.5-17.5,17.5l0,0c-9.7,0-17.5-7.9-17.5-17.5v-11.6c0-9.7,7.8-17.5,17.5-17.5l0,0    c9.7,0,17.5,7.8,17.5,17.5V459.4z" />
                    <path
                      class="st3"
                      d="M1458,404.6h-21.4l-0.3,18.5c0,2.4,0,4.5,0.1,6.4c-1.9,2.5-3,5.6-3,9v10c0,8.3,6.8,15.1,15.1,15.1    c8.3,0,15.1-6.8,15.1-15.1v-10c0-4.2-1.7-8.1-4.6-10.8C1459.9,420.1,1459,411.2,1458,404.6z" />
                    <linearGradient
                      id="SVGID_27_"
                      gradientUnits="userSpaceOnUse"
                      x1="1410.2906"
                      y1="386.7824"
                      x2="1463.5945"
                      y2="386.7824">
                      <stop offset="0" style="stop-color: #ffffff" />
                      <stop offset="1" style="stop-color: #9ecbe1" />
                    </linearGradient>
                    <path
                      class="st41"
                      d="M1430.2,368.9c-5.1,0-19.9,0.8-19.9,5.8c0,5.1,7,3.4,12.1,3.4c11.2,0,14.2,26.5,14.2,26.5h21.4    C1457.3,399.3,1453.5,368.9,1430.2,368.9z" />
                  </g>
                </g>
                <path
                  class="st8"
                  d="M437.4,1169.3c-2.4,6.1-9.3,9.1-15.4,6.8l0,0c-6.1-2.4-9.1-9.3-6.8-15.4l147-442.1c2.4-6.1,9.3-9.1,15.4-6.8  l0,0c6.1,2.4,9.1,9.3,6.8,15.4L437.4,1169.3z" />
                <linearGradient
                  id="SVGID_28_"
                  gradientUnits="userSpaceOnUse"
                  x1="6646.167"
                  y1="851.2959"
                  x2="6850.5806"
                  y2="851.2959"
                  gradientTransform="matrix(-1 0 0 1 8241.0195 0)">
                  <stop offset="0" style="stop-color: #feb021" />
                  <stop offset="1" style="stop-color: #fa3840" />
                </linearGradient>
                <path
                  class="st42"
                  d="M1594.9,780.6l-154,0.5c0,0-50.4-4.4-50.4,44.2c0,48.7,0,92,0,92s169.7,27.7,186.8-54  C1593.1,814.7,1594.9,780.6,1594.9,780.6z" />
                <path
                  class="st8"
                  d="M1640.4,719.3c0,9.8-7.9,17.7-17.7,17.7H498.6c-9.8,0-17.7-7.9-17.7-17.7l0,0c0-9.8,7.9-17.7,17.7-17.7h1124.2  C1632.5,701.6,1640.4,709.5,1640.4,719.3L1640.4,719.3z" />
                <path
                  class="st8"
                  d="M1690.4,1169.3c2.4,6.1,9.3,9.1,15.4,6.8l0,0c6.1-2.4,9.1-9.3,6.8-15.4l-147-442.1c-2.4-6.1-9.3-9.1-15.4-6.8  l0,0c-6.1,2.4-9.1,9.3-6.8,15.4L1690.4,1169.3z" />
                <g>
                  <rect
                    x="112.4"
                    y="650.7"
                    class="st0"
                    width="294.8"
                    height="83.3" />
                  <rect
                    x="112.4"
                    y="765.3"
                    class="st0"
                    width="294.8"
                    height="83.3" />
                  <rect
                    x="112.4"
                    y="879.8"
                    class="st0"
                    width="294.8"
                    height="83.3" />
                  <rect
                    x="112.4"
                    y="994.4"
                    class="st0"
                    width="294.8"
                    height="83.3" />
                </g>
                <rect
                  x="898.2"
                  y="70.9"
                  class="st43"
                  width="233.1"
                  height="82.1" />
                <rect
                  x="905.6"
                  y="78.3"
                  class="st1"
                  width="218.3"
                  height="67.3" />
                <text
                  transform="matrix(1 0 0 1 950.5254 125.0898)"
                  class="st3 st44 st45">
                  ON AIR
                </text>
                <polyline
                  class="st1"
                  points="1725.2,549.6 1823.3,549.6 1775.3,443.7 1726.6,443.7 " />
                <rect
                  x="1795.2"
                  y="433.5"
                  transform="matrix(0.9064 -0.4225 0.4225 0.9064 -39.2748 809.3965)"
                  class="st3"
                  width="22.5"
                  height="119.7" />
                <g>
                  <rect
                    x="1668"
                    y="430.2"
                    class="st0"
                    width="86"
                    height="120.8" />
                  <rect
                    x="1754"
                    y="430.2"
                    class="st2"
                    width="23"
                    height="120.8" />
                </g>
                <rect
                  x="1645.7"
                  y="548.6"
                  class="st2"
                  width="266.5"
                  height="30.3" />
                <path
                  class="st1"
                  d="M1750.5,1187.5c0,3-2.4,5.4-5.4,5.4H341.8c-3,0-5.4-2.4-5.4-5.4v-5.4c0-3,2.4-5.4,5.4-5.4h1403.3  c3,0,5.4,2.4,5.4,5.4V1187.5z" />
              </svg>
            </div>
          </div>
        </div>
        <div class="">
          <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
            <h2
              class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-slate-50 md:text-4xl">
              Listen on
            </h2>
            <div
              class="grid grid-cols-2 gap-8 dark:text-slate-50 sm:gap-12 md:grid-cols-3 lg:grid-cols-3 text-center">
              <a href="#" class="flex justify-center items-center">
                <svg
                  class="h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="409.289 277.787 512 114.301">
                  <g
                    viewBox="0 0 90 20"
                    preserveAspectRatio="xMidYMid meet"
                    class="style-scope yt-icon"
                    transform="matrix(5.715038, 0, 0, 5.715038, 409.288757, 277.787231)">
                    <g class="style-scope yt-icon">
                      <path
                        d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                        class="style-scope yt-icon dark:fill-slate-50"
                        fill="#FF0000" />
                      <path
                        d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
                        class="style-scope yt-icon dark:fill-slate-500"
                        fill="white" />
                    </g>
                    <g class="style-scope yt-icon">
                      <g id="youtube-paths" class="style-scope yt-icon">
                        <path
                          d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"
                          class="style-scope yt-icon dark:fill-slate-50"
                          fill="#282828" />
                        <path
                          d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"
                          class="style-scope yt-icon dark:fill-slate-50"
                          fill="#282828" />
                        <path
                          d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"
                          class="style-scope yt-icon dark:fill-slate-50"
                          fill="#282828" />
                        <path
                          d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"
                          class="style-scope yt-icon dark:fill-slate-50"
                          fill="#282828" />
                        <path
                          d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"
                          class="style-scope yt-icon dark:fill-slate-50"
                          fill="#282828" />
                        <path
                          d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"
                          class="style-scope yt-icon dark:fill-slate-50"
                          fill="#282828" />
                        <path
                          d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"
                          class="style-scope yt-icon dark:fill-slate-50"
                          fill="#282828" />
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
              <a href="#" class="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-9"
                  version="1.1"
                  viewBox="0 0 559 168">
                  <path
                    fill="#1ED760"
                    class="dark:fill-slate-50"
                    d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.288 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.802c-1.89 3.072-5.91 4.042-8.98 2.152-22.51-13.836-56.823-17.843-83.448-9.761-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739zm94.56 3.072c-14.46-3.448-17.03-5.868-17.03-10.953 0-4.804 4.52-8.037 11.25-8.037 6.52 0 12.98 2.455 19.76 7.509 0.2 0.153 0.46 0.214 0.71 0.174 0.26-0.038 0.48-0.177 0.63-0.386l7.06-9.952c0.29-0.41 0.21-0.975-0.18-1.288-8.07-6.473-17.15-9.62-27.77-9.62-15.61 0-26.52 9.369-26.52 22.774 0 14.375 9.41 19.465 25.67 23.394 13.83 3.187 16.17 5.857 16.17 10.629 0 5.29-4.72 8.58-12.32 8.58-8.44 0-15.33-2.85-23.03-9.51-0.19-0.17-0.45-0.24-0.69-0.23-0.26 0.02-0.49 0.14-0.65 0.33l-7.92 9.42c-0.33 0.4-0.29 0.98 0.09 1.32 8.96 8 19.98 12.22 31.88 12.22 16.82 0 27.69-9.19 27.69-23.42 0.03-12.007-7.16-18.657-24.77-22.941l-0.03-0.013zm62.86-14.26c-7.29 0-13.27 2.872-18.21 8.757v-6.624c0-0.523-0.42-0.949-0.94-0.949h-12.95c-0.52 0-0.94 0.426-0.94 0.949v73.601c0 0.52 0.42 0.95 0.94 0.95h12.95c0.52 0 0.94-0.43 0.94-0.95v-23.23c4.94 5.53 10.92 8.24 18.21 8.24 13.55 0 27.27-10.43 27.27-30.369 0.02-19.943-13.7-30.376-27.26-30.376l-0.01 0.001zm12.21 30.375c0 10.149-6.25 17.239-15.21 17.239-8.85 0-15.53-7.41-15.53-17.239 0-9.83 6.68-17.238 15.53-17.238 8.81-0.001 15.21 7.247 15.21 17.237v0.001zm50.21-30.375c-17.45 0-31.12 13.436-31.12 30.592 0 16.972 13.58 30.262 30.91 30.262 17.51 0 31.22-13.39 31.22-30.479 0-17.031-13.62-30.373-31.01-30.373v-0.002zm0 47.714c-9.28 0-16.28-7.46-16.28-17.344 0-9.929 6.76-17.134 16.07-17.134 9.34 0 16.38 7.457 16.38 17.351 0 9.927-6.8 17.127-16.17 17.127zm68.27-46.53h-14.25v-14.566c0-0.522-0.42-0.948-0.94-0.948h-12.95c-0.52 0-0.95 0.426-0.95 0.948v14.566h-6.22c-0.52 0-0.94 0.426-0.94 0.949v11.127c0 0.522 0.42 0.949 0.94 0.949h6.22v28.795c0 11.63 5.79 17.53 17.22 17.53 4.64 0 8.49-0.96 12.12-3.02 0.3-0.16 0.48-0.48 0.48-0.82v-10.6c0-0.32-0.17-0.63-0.45-0.8-0.28-0.18-0.63-0.19-0.92-0.04-2.49 1.25-4.9 1.83-7.6 1.83-4.15 0-6.01-1.89-6.01-6.11v-26.76h14.25c0.52 0 0.94-0.426 0.94-0.949v-11.126c0.02-0.523-0.4-0.949-0.93-0.949l-0.01-0.006zm49.64 0.057v-1.789c0-5.263 2.02-7.61 6.54-7.61 2.7 0 4.87 0.536 7.3 1.346 0.3 0.094 0.61 0.047 0.85-0.132 0.25-0.179 0.39-0.466 0.39-0.77v-10.91c0-0.417-0.26-0.786-0.67-0.909-2.56-0.763-5.84-1.546-10.76-1.546-11.95 0-18.28 6.734-18.28 19.467v2.74h-6.22c-0.52 0-0.95 0.426-0.95 0.948v11.184c0 0.522 0.43 0.949 0.95 0.949h6.22v44.405c0 0.53 0.43 0.95 0.95 0.95h12.94c0.53 0 0.95-0.42 0.95-0.95v-44.402h12.09l18.52 44.402c-2.1 4.66-4.17 5.59-6.99 5.59-2.28 0-4.69-0.68-7.14-2.03-0.23-0.12-0.51-0.14-0.75-0.07-0.25 0.09-0.46 0.27-0.56 0.51l-4.39 9.63c-0.21 0.46-0.03 0.99 0.41 1.23 4.58 2.48 8.71 3.54 13.82 3.54 9.56 0 14.85-4.46 19.5-16.44l22.46-58.037c0.12-0.292 0.08-0.622-0.1-0.881-0.17-0.257-0.46-0.412-0.77-0.412h-13.48c-0.41 0-0.77 0.257-0.9 0.636l-13.81 39.434-15.12-39.46c-0.14-0.367-0.49-0.61-0.88-0.61h-22.12v-0.003zm-28.78-0.057h-12.95c-0.52 0-0.95 0.426-0.95 0.949v56.481c0 0.53 0.43 0.95 0.95 0.95h12.95c0.52 0 0.95-0.42 0.95-0.95v-56.477c0-0.523-0.42-0.949-0.95-0.949v-0.004zm-6.4-25.719c-5.13 0-9.29 4.152-9.29 9.281 0 5.132 4.16 9.289 9.29 9.289s9.28-4.157 9.28-9.289c0-5.128-4.16-9.281-9.28-9.281zm113.42 43.88c-5.12 0-9.11-4.115-9.11-9.112s4.04-9.159 9.16-9.159 9.11 4.114 9.11 9.107c0 4.997-4.04 9.164-9.16 9.164zm0.05-17.365c-4.67 0-8.2 3.71-8.2 8.253 0 4.541 3.51 8.201 8.15 8.201 4.67 0 8.2-3.707 8.2-8.253 0-4.541-3.51-8.201-8.15-8.201zm2.02 9.138l2.58 3.608h-2.18l-2.32-3.31h-1.99v3.31h-1.82v-9.564h4.26c2.23 0 3.69 1.137 3.69 3.051 0.01 1.568-0.9 2.526-2.21 2.905h-0.01zm-1.54-4.315h-2.37v3.025h2.37c1.18 0 1.89-0.579 1.89-1.514 0-0.984-0.71-1.511-1.89-1.511z" />
                </svg>
              </a>
              <a href="#" class="flex justify-center items-center">
                <svg
                  class="h-9 dark:fill-slate-50"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  viewBox="0 0 84.3 20.7"
                  xml:space="preserve">
                  <path
                    d="M35.4,20.1V6.6h-0.1l-5.4,13.5h-2.1L22.4,6.6h-0.1v13.5h-2.5V1.8H23l5.8,14.6h0.1l5.8-14.6H38v18.3L35.4,20.1L35.4,20.1z   M52.1,20.1h-2.6v-2.3h-0.1c-0.7,1.6-2.1,2.5-4.1,2.5c-2.9,0-4.6-1.9-4.6-5V6.7h2.7v8.1c0,2,1,3.1,2.8,3.1c2,0,3.1-1.4,3.1-3.5V6.7  h2.7L52.1,20.1L52.1,20.1z M59.5,6.5c3.1,0,5,1.7,5.1,4.2h-2.5c-0.2-1.3-1.1-2.1-2.6-2.1C58,8.6,57,9.3,57,10.4c0,0.8,0.6,1.4,2,1.7  l2.1,0.5c2.7,0.6,3.7,1.7,3.7,3.6c0,2.4-2.2,4.1-5.3,4.1c-3.3,0-5.3-1.6-5.5-4.2h2.7c0.2,1.4,1.2,2.1,2.8,2.1c1.6,0,2.6-0.7,2.6-1.8  c0-0.9-0.5-1.4-1.9-1.7l-2.1-0.5c-2.5-0.6-3.7-1.8-3.7-3.8C54.4,8.1,56.4,6.5,59.5,6.5z M66.8,3.2c0-0.9,0.7-1.6,1.6-1.6  c0.9,0,1.6,0.7,1.6,1.6c0,0.9-0.7,1.6-1.6,1.6C67.5,4.8,66.8,4.1,66.8,3.2L66.8,3.2z M67,6.7h2.7v13.4H67V6.7z M81.1,11.3  c-0.3-1.4-1.3-2.6-3.1-2.6c-2.1,0-3.5,1.8-3.5,4.6c0,2.9,1.4,4.6,3.5,4.6c1.7,0,2.7-0.9,3.1-2.5h2.6c-0.3,2.8-2.5,4.8-5.7,4.8  c-3.8,0-6.2-2.6-6.2-6.9c0-4.2,2.4-6.9,6.2-6.9c3.4,0,5.4,2.2,5.7,4.8L81.1,11.3L81.1,11.3z M11.5,3.6C10.8,4.4,9.7,5.1,8.6,5  C8.4,3.8,9,2.6,9.6,1.9c0.7-0.9,1.9-1.5,2.9-1.5C12.6,1.5,12.2,2.7,11.5,3.6L11.5,3.6z M12.5,5.2c0.6,0,2.4,0.2,3.6,2  c-0.1,0.1-2.1,1.3-2.1,3.8c0,3,2.6,4,2.6,4c0,0.1-0.4,1.4-1.3,2.8c-0.8,1.2-1.7,2.4-3,2.4c-1.3,0-1.7-0.8-3.2-0.8  c-1.5,0-2,0.8-3.2,0.8c-1.3,0-2.3-1.3-3.1-2.5c-1.7-2.5-3-7-1.2-10c0.8-1.5,2.4-2.5,4-2.5c1.3,0,2.5,0.9,3.2,0.9  C9.5,6.1,10.9,5.1,12.5,5.2L12.5,5.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero -->
  </body>`,
  },
]

const Main = () => {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 bg-heroPatternLight dark:bg-heroPatternDark"></div>
        <div className="relative overflow-hidden bg-gradient-to-b from-transparent to-white to-[90%] py-12 space-y-8 dark:to-secondary-900">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            <div className="max-w-4xl mx-auto mt-5 text-center">
              <h2 className="block text-3xl font-bold text-gray-800 md:text-5xl lg:text-6xl dark:text-gray-200">
                Templates de Hero Sections Tailwind CSS Gratuits
              </h2>
            </div>

            <div className="max-w-4xl mx-auto mt-5 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Plongez dans notre vaste collection de templates de hero sections Tailwind CSS,
                entièrement gratuits et prêts à être intégrés dans vos projets web.
                <span className="sr-only">
                  Que vous cherchiez à impressionner vos visiteurs dès le premier clic avec une
                  landing page éblouissante ou à présenter votre contenu de manière captivante, nos
                  hero sections, faciles à personnaliser et responsive, sont la solution parfaite.
                </span>{' '}
                Découvrez des designs innovants qui propulseront l'esthétique de votre site au
                niveau supérieur.
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

export default Main
