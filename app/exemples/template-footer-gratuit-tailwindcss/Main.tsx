'use client'
import React from 'react'
import BlocksSection from '@/components/code/BlocksSection'

const data = [
  {
    height: 500,
    name: 'newsletter',
    id: '',
    description:
      "Construisez une liste de mail rapidement en utilisant ce footer. Avec sa newsletter input, il offre une option d'inscription aux utilisateurs.",
    title: 'Newsletter',
    htmlBody: `<footer class="font-lexend py-4 w-full min-h-full">
      <div class="max-w-[80rem] mx-auto space-y-6 px-2 md:px-4 lg:px-6 pt-4">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-y-6">
          <div class="text-gray-700">
            <ul>
              <li class="mb-4">
                <h2 class="font-bold text-lg">Produit</h2>
              </li>
              <li>
                <a href="https://tailflows.com"> Employées </a>
              </li>
              <li>
                <a href="https://tailflows.com"> Paiement </a>
              </li>
              <li>
                <a href="https://tailflows.com"> Planificateur </a>
              </li>
              <li>
                <a href="https://tailflows.com"> Employées </a>
              </li>
            </ul>
          </div>
          <div class="text-gray-700">
            <ul>
              <li class="mb-4">
                <h2 class="font-bold text-lg">Liens Rapide</h2>
              </li>
              <li>
                <a href="https://tailflows.com"> FAQ </a>
              </li>
              <li>
                <a href="https://tailflows.com"> Blog </a>
              </li>
              <li>
                <a href="https://tailflows.com"> Services</a>
              </li>
            </ul>
          </div>
          <div class="text-gray-700">
            <ul>
              <li class="mb-4">
                <h2 class="font-bold text-lg">L'Entreprise</h2>
              </li>
              <li>
                <a href="https://tailflows.com"> Qui Sommes Nous? </a>
              </li>
              <li>
                <a href="https://tailflows.com"> Carrière </a>
              </li>
              <li>
                <a href="https://tailflows.com"> Contact</a>
              </li>
            </ul>
          </div>
          <div class="bg-gray-100 lg:col-span-2 p-4 space-y-2">
            <h2 class="font-bold text-lg">Boîte aux lettres</h2>
            <div
              class="relative flex flex-row w-full rounded-xl overflow-hidden border h-12">
              <label for="email" class="sr-only">Email</label>
              <input
                type="email"
                id="email"
                placeholder="email@nom.com"
                class="flex-1 bg-white h-full px-4 focus:border-none focus:outline-none focus:ring-0" />
              <button
                type="submit"
                class="inline-block h-full px-3 w-12 md:w-16 bg-gray-950 text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-full fill-current mx-auto"
                  viewBox="0 0 512 512">
                  <path
                    d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </button>
            </div>
            <p class="max-w-96 text-gray-500 font-light">
              Bonjour, nous sommes tailflows. Notre objectif est de créer le
              plus grand ecosystem tailwindcss du web. Nous espérons que nos
              efforts facilite vos tâches de dev.
            </p>
          </div>
        </div>
        <div class="h-px w-full bg-gray-900/10"></div>
        <div
          class="flex flex-row justify-between items-center text-sm text-gray-600">
          <a
            href="https://tailflows.com"
            class="inline-flex items-center gap-1">
            <span class="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                class="fill-current">
                <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                  <path
                    d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10H.006q.219-.36.61-.618c.423-.278.922-.295 1.475-.314.853-.03 1.833-.064 2.86-1.068H10a8 8 0 1 0-8-8v6.443c-.604.128-1.246.422-1.906 1.135L0 17.683z"></path>
                  <path
                    d="M10 3.962A6.04 6.04 0 0 0 3.962 10v5.845a1.7 1.7 0 0 0 .639-.245q1.115-.732.829-2.317.944 1.446.528 2.755H10a6.038 6.038 0 1 0 0-12.076"></path>
                </g>
              </svg>
            </span>
            <span class="inline-block text-xl">tailflows</span>
          </a>

          <ul class="flex items-center gap-4">
            <li>
              <a href="https://tailflows.com" class="inline-block"
                >Conditions</a
              >
            </li>
            <li>
              <a href="https://tailflows.com" class="inline-block">Terms</a>
            </li>
            <li>
              <a href="https://tailflows.com" class="inline-block"
                >Politiques</a
              >
            </li>
          </ul>

          <ul class="flex items-center gap-4">
            <li>
              <a
                href="https://tailflows.com"
                class="inline-block rounded-full h-8 w-8 p-2 border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-full h-full fill-current"
                  viewBox="0 0 448 512">
                  <path
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://tailflows.com"
                class="inline-block rounded-full h-8 w-8 p-2 border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-full h-full fill-current"
                  viewBox="0 0 24 24">
                  <g
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2">
                    <path d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M18 2a1 1 0 0 1 .993.883L19 3v4a1 1 0 0 1-.883.993L18 8h-3v1h3a1 1 0 0 1 .991 1.131l-.02.112l-1 4a1 1 0 0 1-.858.75L17 15h-2v6a1 1 0 0 1-.883.993L14 22h-4a1 1 0 0 1-.993-.883L9 21v-6H7a1 1 0 0 1-.993-.883L6 14v-4a1 1 0 0 1 .883-.993L7 9h2V8a6 6 0 0 1 5.775-5.996L15 2z" />
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://tailflows.com"
                class="inline-block rounded-full h-8 w-8 p-2 border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-full h-full fill-current"
                  viewBox="0 0 512 512">
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
`,
  },
  {
    height: 500,
    name: 'simple newsletter-v2',
    id: '',
    description:
      'Ce footer épuré donne un aspect léger à vos pages html. Utilisez le dans un template minimaliste pour mettre en avant les liens essentiels de votre siteweb et votre boîte aux lettres.',
    title: 'Newsletter Light',
    htmlBody: `<footer class="font-lexend py-4 w-full min-h-full">
    <div class="max-w-[80rem] mx-auto space-y-6 px-4 md:px-4 lg:px-6 pt-4">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-y-6">
        <div class="text-gray-700">
          <ul>
            <li class="mb-4">
              <a
                href="https://tailflows.com"
                class="inline-flex items-center gap-1">
                <span class="inline-block">
                  <svg
                    class="fill-current h-10 w-10"
                    viewBox="0 0 180 180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.8">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 90C0 40.2944 40.2944 0 90 0C139.706 0 180 40.2944 180 90C180 139.706 139.706 180 90 180H0.0538461C1.36573 177.832 3.1935 175.979 5.53708 174.44C9.35112 171.936 13.846 171.78 18.8198 171.61C26.4968 171.344 35.3185 171.038 44.556 162H89.9997C129.764 162 162 129.764 162 89.9997C162 50.2352 129.764 17.9997 89.9997 17.9997C50.2352 17.9997 17.9997 50.2352 17.9997 89.9997V147.988C12.5624 149.141 6.78205 151.789 0.847015 158.206C0.557417 158.519 0.275079 158.833 0 159.148V90Z"
                        fill="black" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M89.9998 35.6602C59.9888 35.6602 35.6602 59.989 35.6602 89.9999V142.606C37.7094 142.219 39.6319 141.562 41.4073 140.396C48.0942 136.009 50.5822 129.059 48.8697 119.547C54.5264 128.22 56.1103 136.484 53.6211 144.34H89.9998C120.011 144.34 144.339 120.011 144.339 89.9999C144.339 59.9889 120.011 35.6602 89.9998 35.6602Z"
                        fill="black" />
                    </g>
                  </svg>
                </span>
              </a>
            </li>
            <li class="my-6">
              <a href="https://tailflows.com"> +1 (7635) 547-12-97 </a>
            </li>
            <li>
              <a href="https://tailflows.com"> support@tailflows.com </a>
            </li>
          </ul>
        </div>
        <div class="text-gray-700">
          <ul>
            <li class="mb-4">
              <h2 class="font-bold text-lg h-10">Liens Rapide</h2>
            </li>
            <li class="my-6">
              <a href="https://tailflows.com"> FAQ </a>
            </li>
            <li class="my-6">
              <a href="https://tailflows.com"> Blog </a>
            </li>
          </ul>
        </div>
        <div class="text-gray-700">
          <ul>
            <li class="mb-4">
              <h2 class="font-bold text-lg h-10 opacity-0">Liens Rapide</h2>
            </li>
            <li class="mb-4"></li>
            <li class="">
              <a href="https://tailflows.com"> Qui Sommes Nous? </a>
            </li>
            <li class="my-6">
              <a href="https://tailflows.com"> Carrière </a>
            </li>
          </ul>
        </div>
        <div class="lg:col-span-2 space-y-2">
          <h2 class="font-bold text-lg mb-4">Boîte aux lettres</h2>
          <div
            class="relative flex flex-row w-full rounded-xl overflow-hidden border h-12">
            <label for="email" class="sr-only">Email</label>
            <input
              type="email"
              id="email"
              placeholder="email@nom.com"
              class="flex-1 bg-white h-full px-4 focus:border-none focus:outline-none focus:ring-0" />
            <button
              type="submit"
              class="inline-block h-full px-3 w-12 md:w-16 bg-gray-950 text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-full fill-current mx-auto"
                viewBox="0 0 512 512">
                <path
                  d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="h-px w-full bg-gray-900/10"></div>
      <div
        class="flex justify-between items-center text-sm text-gray-600 flex-wrap">
        <ul
          class="flex items-center gap-4 shrink-0 grow-0 w-full md:w-auto justify-center md:justfy-start">
          <li>
            <a
              href="https://tailflows.com"
              class="inline-block rounded-full h-8 w-8 p-2 border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 448 512">
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://tailflows.com"
              class="inline-block rounded-full h-8 w-8 p-2 border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2">
                  <path d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M18 2a1 1 0 0 1 .993.883L19 3v4a1 1 0 0 1-.883.993L18 8h-3v1h3a1 1 0 0 1 .991 1.131l-.02.112l-1 4a1 1 0 0 1-.858.75L17 15h-2v6a1 1 0 0 1-.883.993L14 22h-4a1 1 0 0 1-.993-.883L9 21v-6H7a1 1 0 0 1-.993-.883L6 14v-4a1 1 0 0 1 .883-.993L7 9h2V8a6 6 0 0 1 5.775-5.996L15 2z" />
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://tailflows.com"
              class="inline-block rounded-full h-8 w-8 p-2 border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
          </li>
        </ul>
        <a
          href="https://tailflows.com"
          class="inline-flex items-center gap-1">
          <span>Un produit de</span>
          <span class="inline-block">
            <svg
              class="h-6 w-5"
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current">
              <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                <path
                  d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10H.006q.219-.36.61-.618c.423-.278.922-.295 1.475-.314.853-.03 1.833-.064 2.86-1.068H10a8 8 0 1 0-8-8v6.443c-.604.128-1.246.422-1.906 1.135L0 17.683z"></path>
                <path
                  d="M10 3.962A6.04 6.04 0 0 0 3.962 10v5.845a1.7 1.7 0 0 0 .639-.245q1.115-.732.829-2.317.944 1.446.528 2.755H10a6.038 6.038 0 1 0 0-12.076"></path>
              </g>
            </svg>
          </span>
          <span class="inline-block text-md">tailflows</span>
        </a>

        <ul class="flex items-center gap-4">
          <li>
            <a href="https://tailflows.com" class="inline-block"
              >Conditions</a
            >
          </li>
          <li>
            <a href="https://tailflows.com" class="inline-block">Terms</a>
          </li>
          <li>
            <a href="https://tailflows.com" class="inline-block"
              >Politiques</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>`,
  },
  {
    height: 500,
    name: 'essentiel',
    id: '',
    description:
      "Ce footer attire l'attention des utilisateurs sur les pages principales de votre site en mettant avant les liens essentiels. Utilisez le au pied de vos pages pour faciliter la navigation entre vos pages web.",
    title: 'Essentiel',
    htmlBody: `<footer class="font-lexend py-12 bg-[#0B1A27] w-full min-h-full">
    <div
      class="max-w-[80rem] pt-4 mx-auto space-y-6 md:space-y-12 px-4 md:px-4 lg:px-6">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-y-6">
        <div class="text-gray-200">
          <ul>
            <li class="mb-4">
              <h2 class="font-bold text-lg">Produit</h2>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Paiement </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Planificateur </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
          </ul>
        </div>
        <div class="text-gray-200">
          <ul>
            <li class="mb-4">
              <h2 class="font-bold text-lg">Produit</h2>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Paiement </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Planificateur </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
          </ul>
        </div>
        <div class="text-gray-200">
          <ul>
            <li class="mb-4">
              <h2 class="font-bold text-lg">Produit</h2>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Paiement </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Planificateur </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
          </ul>
        </div>
        <div class="text-gray-200">
          <ul>
            <li class="mb-4">
              <h2 class="font-bold text-lg">Produit</h2>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Paiement </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Planificateur </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
          </ul>
        </div>
        <div class="text-gray-200">
          <ul>
            <li class="mb-4">
              <h2 class="font-bold text-lg">Produit</h2>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Paiement </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Planificateur </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="flex flex-col gap-2 items-center text-sm text-gray-600 flex-wrap">
        <a
          href="https://tailflows.com"
          class="inline-flex items-center gap-1 mx-auto text-gray-200">
          <span class="inline-block">
            <svg
              class="fill-current h-8 w-8"
              viewBox="0 0 180 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 90C0 40.2944 40.2944 0 90 0C139.706 0 180 40.2944 180 90C180 139.706 139.706 180 90 180H0.0538461C1.36573 177.832 3.1935 175.979 5.53708 174.44C9.35112 171.936 13.846 171.78 18.8198 171.61C26.4968 171.344 35.3185 171.038 44.556 162H89.9997C129.764 162 162 129.764 162 89.9997C162 50.2352 129.764 17.9997 89.9997 17.9997C50.2352 17.9997 17.9997 50.2352 17.9997 89.9997V147.988C12.5624 149.141 6.78205 151.789 0.847015 158.206C0.557417 158.519 0.275079 158.833 0 159.148V90Z"
                  fill="currentColor" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M89.9998 35.6602C59.9888 35.6602 35.6602 59.989 35.6602 89.9999V142.606C37.7094 142.219 39.6319 141.562 41.4073 140.396C48.0942 136.009 50.5822 129.059 48.8697 119.547C54.5264 128.22 56.1103 136.484 53.6211 144.34H89.9998C120.011 144.34 144.339 120.011 144.339 89.9999C144.339 59.9889 120.011 35.6602 89.9998 35.6602Z"
                  fill="currentColor" />
              </g>
            </svg>
          </span>
          <span class="inline-block text-2xl">tailflows</span>
        </a>
        <p class="text-sm font-light text-gray-400">
          &copy; 2024 tailflows. Tous les droits sont reservés
        </p>
        <ul
          class="flex items-center gap-4 shrink-0 grow-0 w-full md:w-auto justify-center md:justfy-start text-gray-200">
          <li>
            <a
              href="https://tailflows.com"
              class="inline-block rounded-full h-8 w-8 p-2 border border-gray-50/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 448 512">
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://tailflows.com"
              class="inline-block rounded-full h-8 w-8 p-2 border border-gray-50/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2">
                  <path d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M18 2a1 1 0 0 1 .993.883L19 3v4a1 1 0 0 1-.883.993L18 8h-3v1h3a1 1 0 0 1 .991 1.131l-.02.112l-1 4a1 1 0 0 1-.858.75L17 15h-2v6a1 1 0 0 1-.883.993L14 22h-4a1 1 0 0 1-.993-.883L9 21v-6H7a1 1 0 0 1-.993-.883L6 14v-4a1 1 0 0 1 .883-.993L7 9h2V8a6 6 0 0 1 5.775-5.996L15 2z" />
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://tailflows.com"
              class="inline-block rounded-full h-8 w-8 p-2 border border-gray-50/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>`,
  },
  {
    height: 650,
    name: 'essentiel-newsletter',
    id: '',
    description:
      "En plus d'attirer l'attention des utilisateurs sur les pages principales de votre site en mettant avant les liens essentiels, ce footer propose également une section boîte aux lettres pour faciliter collection des emails. Utilisez le au pied de vos pages pour faciliter la navigation entre vos pages web et pour créer une liste de diffusion.",
    title: 'Essentiel newsletter',
    htmlBody: `<footer class="font-lexend py-12 bg-[#0B1A27] w-full min-h-full">
    <div
      class="max-w-[80rem] pt-4 mx-auto space-y-6 md:space-y-12 px-4 md:px-4 lg:px-6">
      <form action="#" class="max-w-2xl relative mx-auto mb-16">
      <h2 class="text-gray-300 font-medium text-xl mb-4 text-center">
      Boîte aux lettres
    </h2>
          <div class="relative h-14">
            <label for="email" class="sr-only"></label>
            <input
              class="h-full w-full rounded-full focus:ouline-none focus:ring-0 focus:border-none pl-4 pr-20"
              placeholder="email@mail.com"
              type="text" />
            <input
              type="submit"
              value="m'inscrire"
              class="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-6 rounded-full bg-[#0B1A27] text-gray-300" />
          </div>
        </form>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-y-6">
        <div class="text-gray-200">
          <ul>
            <li class="mb-4">
              <h2 class="font-bold text-lg">Produit</h2>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Paiement </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Planificateur </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
          </ul>
        </div>
        <div class="text-gray-200">
          <ul>
            <li class="mb-4">
              <h2 class="font-bold text-lg">Produit</h2>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Paiement </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Planificateur </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
          </ul>
        </div>
        <div class="text-gray-200">
          <ul>
            <li class="mb-4">
              <h2 class="font-bold text-lg">Produit</h2>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Paiement </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Planificateur </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
          </ul>
        </div>
        <div class="text-gray-200">
          <ul>
            <li class="mb-4">
              <h2 class="font-bold text-lg">Produit</h2>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Paiement </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Planificateur </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
          </ul>
        </div>
        <div class="text-gray-200">
          <ul>
            <li class="mb-4">
              <h2 class="font-bold text-lg">Produit</h2>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Paiement </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Planificateur </a>
            </li>
            <li>
              <a href="https://tailflows.com"> Employées </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="flex flex-col gap-2 items-center text-sm text-gray-600 flex-wrap">
        <a
          href="https://tailflows.com"
          class="inline-flex items-center gap-1 mx-auto text-gray-200">
          <span class="inline-block">
            <svg
              class="fill-current h-8 w-8"
              viewBox="0 0 180 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 90C0 40.2944 40.2944 0 90 0C139.706 0 180 40.2944 180 90C180 139.706 139.706 180 90 180H0.0538461C1.36573 177.832 3.1935 175.979 5.53708 174.44C9.35112 171.936 13.846 171.78 18.8198 171.61C26.4968 171.344 35.3185 171.038 44.556 162H89.9997C129.764 162 162 129.764 162 89.9997C162 50.2352 129.764 17.9997 89.9997 17.9997C50.2352 17.9997 17.9997 50.2352 17.9997 89.9997V147.988C12.5624 149.141 6.78205 151.789 0.847015 158.206C0.557417 158.519 0.275079 158.833 0 159.148V90Z"
                  fill="currentColor" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M89.9998 35.6602C59.9888 35.6602 35.6602 59.989 35.6602 89.9999V142.606C37.7094 142.219 39.6319 141.562 41.4073 140.396C48.0942 136.009 50.5822 129.059 48.8697 119.547C54.5264 128.22 56.1103 136.484 53.6211 144.34H89.9998C120.011 144.34 144.339 120.011 144.339 89.9999C144.339 59.9889 120.011 35.6602 89.9998 35.6602Z"
                  fill="currentColor" />
              </g>
            </svg>
          </span>
          <span class="inline-block text-2xl">tailflows</span>
        </a>
        <p class="text-sm font-light text-gray-400">
          &copy; 2024 tailflows. Tous les droits sont reservés
        </p>
        <ul
          class="flex items-center gap-4 shrink-0 grow-0 w-full md:w-auto justify-center md:justfy-start text-gray-200">
          <li>
            <a
              href="https://tailflows.com"
              class="inline-block rounded-full h-8 w-8 p-2 border border-gray-50/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 448 512">
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://tailflows.com"
              class="inline-block rounded-full h-8 w-8 p-2 border border-gray-50/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2">
                  <path d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M18 2a1 1 0 0 1 .993.883L19 3v4a1 1 0 0 1-.883.993L18 8h-3v1h3a1 1 0 0 1 .991 1.131l-.02.112l-1 4a1 1 0 0 1-.858.75L17 15h-2v6a1 1 0 0 1-.883.993L14 22h-4a1 1 0 0 1-.993-.883L9 21v-6H7a1 1 0 0 1-.993-.883L6 14v-4a1 1 0 0 1 .883-.993L7 9h2V8a6 6 0 0 1 5.775-5.996L15 2z" />
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://tailflows.com"
              class="inline-block rounded-full h-8 w-8 p-2 border border-gray-50/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full fill-current"
                viewBox="0 0 512 512">
                <path
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>`,
  },
]

const Main = () => {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 bg-heroPatternLight dark:bg-heroPatternDark"></div>
        <div className="relative overflow-hidden bg-gradient-to-b from-transparent to-white to-[90%] py-12 space-y-8 dark:to-secondary-900">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            <div className="mx-auto mt-5 text-center max-w-7xl">
              <h2 className="block text-3xl font-bold text-gray-800 md:text-5xl lg:text-4xl dark:text-gray-200 max-w-2xl mx-auto">
                Templates de footer gratuit construit en html5 et tailwindcss
              </h2>
            </div>

            <div className="max-w-4xl mx-auto mt-5 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Utilisez la section au pied de vos pages pour montrer toutes informations et liens
                importants à vos utilisateurs. Vous pouvez inclure la navigation de votre site et
                aussi les mentions légales.
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
