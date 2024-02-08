import React from 'react'
import { ActionButton } from '@/components/button'

const heroTravel = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            container: {
              center: true,
              padding: '1rem',
            },
            colors: {},
          },
        },
      }
    </script>
  </head>
  <body class="bg-white">
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
</html>
`

const Travel = () => {
  return (
    <section className="px-4">
      <div className="w-full overflow-hidden border shadow rounded-xl border-gray-950/10 dark:border-gray-50/10">
        <div className="relative min-h-[42rem] bg-secondary-700 flex flex-col">
          <header className="w-full h-14 bg-secondary-500">
            <div className="flex items-center justify-between w-full h-full">
              <div className="relative w-64 h-full">
                <span className="absolute inline-block w-32 h-full"></span>
                <button className="inline-flex items-center justify-center w-32 h-full gap-2 text-sm text-gray-300 bg-gray-300/10">
                  <span className="inline-block w-4 h-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full fill-current "
                      viewBox="0 -960 960 960"
                    >
                      <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                    </svg>
                  </span>
                  <span>Démos</span>
                </button>
                <button className="inline-flex items-center justify-center w-32 h-full gap-2 text-sm text-gray-300">
                  <span className="inline-block w-4 h-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full fill-current "
                      viewBox="0 0 576 512"
                    >
                      <path d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                    </svg>
                  </span>
                  <span>Code</span>
                </button>
              </div>
              <div className="items-center justify-center hidden gap-4 text-gray-300 md:flex">
                <button className="grid p-1 rounded-md border-gray-300/10 hover:border place-content-center hover:bg-gray-300/10">
                  <span className="inline-block w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full stroke-current fill-none "
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                  </span>
                </button>
                <button className="grid p-1 rounded-md border-gray-300/10 hover:border place-content-center hover:bg-gray-300/10">
                  <span className="inline-block w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full fill-current "
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 64C0 28.7 28.7 0 64 0H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM256 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM384 64H64V384H384V64z" />
                    </svg>
                  </span>
                </button>
                <button className="grid p-1 rounded-md border-gray-300/10 hover:border place-content-center hover:bg-gray-300/10">
                  <span className="inline-block w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full fill-current "
                      viewBox="0 0 576 512"
                    >
                      <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z" />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="flex items-start justify-end w-64 text-gray-300 pe-4">
                <ActionButton
                  actionMethod={() => {}}
                  sucessChildren={
                    <span className="inline-block w-6 h-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full fill-current "
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                      </svg>
                    </span>
                  }
                  classname="grid p-1 rounded-md border-gray-300/10 hover:border place-content-center hover:bg-gray-300/10"
                >
                  <span className="inline-block w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full fill-current "
                      viewBox="0 0 512 512"
                    >
                      <rect
                        width="336"
                        height="336"
                        x="128"
                        y="128"
                        fill="none"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        rx="57"
                        ry="57"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="m383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"
                      />
                    </svg>
                  </span>
                </ActionButton>
              </div>
            </div>
          </header>
          <div className="relative flex-1 flex-shrink-0 w-full h-full">
            <div
              className="absolute inset-0 z-0 h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d1d5db' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
            <div className="relative z-[5] w-full h-[38.5rem] md:h-[856px] bg-transparent">
              <iframe
                id="hero-travel"
                title="test"
                loading="eager"
                className="w-full h-full m-0 bg-secondary-700"
                srcDoc={heroTravel}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Travel
