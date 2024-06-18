'use client'
import React from 'react'
import BlocksSection from '@/components/code/BlocksSection'

const data = [
  {
    height: 850,
    name: 'default',
    id: '',
    description:
      "Mettez l'accent sur vos fonctionnalités avec cette section de mise en page simple et élégante. Idéal pour les pages de destination, les pages de vente et les pages de fonctionnalités.",
    title: 'Template Section fonctionnalités',
    htmlBody: `<section class="">
      <div class="px-4 py-8 mx-auto max-w-7xl">
        <div class="space-y-4">
          <h2 class="text-3xl font-bold text-center">Features Section</h2>
          <p class="mx-auto font-light text-center text-gray-600 max-w-96">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div class="relative w-full p-4">
          <div
            class="absolute left-0 hidden w-full h-px -translate-y-1/2 bg-gray-950/10 lg:top-1/2 md:top-1/3 md:block"></div>
          <div
            class="absolute hidden w-px h-full md:block bg-gray-950/10 left-1/2 lg:left-1/3"></div>
          <div
            class="absolute left-0 hidden w-full h-px lg:w-px lg:h-full bg-gray-950/10 lg:left-2/3 top-2/3 lg:top-0 md:block"></div>
          <div
            class="grid grid-cols-1 gap-4 p-4 md:grid-rows-3 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            <div>
              <div
                class="flex flex-col items-center justify-center px-4 py-8 space-y-4">
                <span
                  class="block p-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                  <svg
                    class="transition-all duration-500 stroke-current"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                      stroke=""
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                  </svg>
                </span>
                <h3 class="text-lg font-bold text-center">Result</h3>
                <p class="text-sm font-light text-center text-gray-500">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div>
              <div
                class="flex flex-col items-center justify-center px-4 py-8 space-y-4">
                <span
                  class="block p-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                  </svg>
                </span>
                <h3 class="text-lg font-bold text-center">Result</h3>
                <p class="text-sm font-light text-center text-gray-500">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div>
              <div
                class="flex flex-col items-center justify-center px-4 py-8 space-y-4">
                <span
                  class="block p-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                  </svg>
                </span>
                <h3 class="text-lg font-bold text-center">Result</h3>
                <p class="text-sm font-light text-center text-gray-500">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div>
              <div
                class="flex flex-col items-center justify-center px-4 py-8 space-y-4">
                <span
                  class="block p-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                  <svg
                    class="transition-all duration-500 stroke-current"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                      stroke=""
                      stroke-width="2"></path>
                    <path
                      d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                      stroke=""
                      stroke-width="2"></path>
                    <path
                      d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                      stroke=""
                      stroke-width="2"></path>
                    <path
                      d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                      stroke=""
                      stroke-width="2"></path>
                  </svg>
                </span>
                <h3 class="text-lg font-bold text-center">Result</h3>
                <p class="text-sm font-light text-center text-gray-500">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div>
              <div
                class="flex flex-col items-center justify-center px-4 py-8 space-y-4">
                <span
                  class="block p-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M26.7301 15.661C26.7301 22.1995 21.306 27.5 14.6151 27.5C7.9241 27.5 2.5 22.1995 2.5 15.661C2.5 9.1225 7.9241 3.822 14.6151 3.822M18.1313 10.1507L18.1313 4.85383C18.1313 3.22503 19.6455 2.00299 21.1519 2.70013C23.7608 3.90751 26.6177 6.25557 27.456 10.2563C27.7542 11.6798 26.4931 12.8563 25.0064 12.8368L20.7873 12.7814C19.3147 12.762 18.1313 11.5899 18.1313 10.1507Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"></path>
                  </svg>
                </span>
                <h3 class="text-lg font-bold text-center">Result</h3>
                <p class="text-sm font-light text-center text-gray-500">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div>
              <div
                class="flex flex-col items-center justify-center px-4 py-8 space-y-4">
                <span
                  class="block p-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M24.6429 11.4286C24.6429 14.3872 20.2457 16.7857 14.8214 16.7857C9.3972 16.7857 5 14.3872 5 11.4286M24.6429 16.7857C24.6429 19.7444 20.2457 22.1429 14.8214 22.1429C9.3972 22.1429 5 19.7444 5 16.7857M24.6429 22.1429C24.6429 25.1015 20.2457 27.5 14.8214 27.5C9.3972 27.5 5 25.1015 5 22.1429M24.6429 6.96429C24.6429 9.42984 20.2457 11.4286 14.8214 11.4286C9.3972 11.4286 5 9.42984 5 6.96429C5 4.49873 9.3972 2.5 14.8214 2.5C20.2457 2.5 24.6429 4.49873 24.6429 6.96429Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"></path>
                  </svg>
                </span>
                <h3 class="text-lg font-bold text-center">Result</h3>
                <p class="text-sm font-light text-center text-gray-500">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`,
  },
  {
    height: 850,
    name: 'Image à gauche',
    id: '',
    description:
      'Utilisez une images pour élaborer vos fonctionnalités. Idéal pour les sections de fonctionnalités qui mettent en une illustration de leurs produits.',
    title: 'Template Section fonctionnalités avec image à gauche',
    htmlBody: `<section class="pt-32">
      <div class="px-4 py-8 mx-auto space-y-16 max-w-7xl">
        <div class="space-y-4">
          <h2 class="text-3xl font-bold text-center">Fonctionnalités</h2>
          <p class="mx-auto font-light text-center text-gray-600 max-w-96">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 p-4">
          <div class="col-span-full lg:col-span-1">
            <img
              src="https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="object-cover object-center mx-auto rounded-md lg:h-full lg:w-full max-h-96 lg:max-h-full"
              alt="" />
          </div>
          <div class="relative w-full col-span-1 p-4 lg:col-span-2">
            <div
              class="absolute hidden w-full h-px -translate-y-1/2 bg-gray-950/10 lg:top-1/2 md:top-1/3 md:block"></div>
            <div
              class="absolute hidden w-px h-full md:block bg-gray-950/10 left-1/2 lg:left-1/3"></div>
            <div
              class="absolute left-0 hidden w-full h-px lg:w-px lg:h-full bg-gray-950/10 lg:left-2/3 top-2/3 lg:top-0 md:block"></div>
            <div
              class="grid grid-cols-1 gap-4 p-4 md:grid-rows-3 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
              <div>
                <div
                  class="flex flex-col items-center justify-center px-4 py-8 space-y-4">
                  <span
                    class="block p-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                    <svg
                      class="transition-all duration-500 stroke-current"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                        stroke=""
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"></path>
                    </svg>
                  </span>
                  <h3 class="text-lg font-bold text-center">Result</h3>
                  <p class="text-sm font-light text-center text-gray-500">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
              <div>
                <div
                  class="flex flex-col items-center justify-center px-4 py-8 space-y-4">
                  <span
                    class="block p-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"></path>
                    </svg>
                  </span>
                  <h3 class="text-lg font-bold text-center">Result</h3>
                  <p class="text-sm font-light text-center text-gray-500">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
              <div>
                <div
                  class="flex flex-col items-center justify-center px-4 py-8 space-y-4">
                  <span
                    class="block p-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"></path>
                    </svg>
                  </span>
                  <h3 class="text-lg font-bold text-center">Result</h3>
                  <p class="text-sm font-light text-center text-gray-500">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
              <div>
                <div
                  class="flex flex-col items-center justify-center px-4 py-8 space-y-4">
                  <span
                    class="block p-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                    <svg
                      class="transition-all duration-500 stroke-current"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                        stroke=""
                        stroke-width="2"></path>
                      <path
                        d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                        stroke=""
                        stroke-width="2"></path>
                      <path
                        d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                        stroke=""
                        stroke-width="2"></path>
                      <path
                        d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                        stroke=""
                        stroke-width="2"></path>
                    </svg>
                  </span>
                  <h3 class="text-lg font-bold text-center">Result</h3>
                  <p class="text-sm font-light text-center text-gray-500">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
              <div>
                <div
                  class="flex flex-col items-center justify-center px-4 py-8 space-y-4">
                  <span
                    class="block p-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M26.7301 15.661C26.7301 22.1995 21.306 27.5 14.6151 27.5C7.9241 27.5 2.5 22.1995 2.5 15.661C2.5 9.1225 7.9241 3.822 14.6151 3.822M18.1313 10.1507L18.1313 4.85383C18.1313 3.22503 19.6455 2.00299 21.1519 2.70013C23.7608 3.90751 26.6177 6.25557 27.456 10.2563C27.7542 11.6798 26.4931 12.8563 25.0064 12.8368L20.7873 12.7814C19.3147 12.762 18.1313 11.5899 18.1313 10.1507Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"></path>
                    </svg>
                  </span>
                  <h3 class="text-lg font-bold text-center">Result</h3>
                  <p class="text-sm font-light text-center text-gray-500">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
              <div>
                <div
                  class="flex flex-col items-center justify-center px-4 py-8 space-y-4">
                  <span
                    class="block p-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24.6429 11.4286C24.6429 14.3872 20.2457 16.7857 14.8214 16.7857C9.3972 16.7857 5 14.3872 5 11.4286M24.6429 16.7857C24.6429 19.7444 20.2457 22.1429 14.8214 22.1429C9.3972 22.1429 5 19.7444 5 16.7857M24.6429 22.1429C24.6429 25.1015 20.2457 27.5 14.8214 27.5C9.3972 27.5 5 25.1015 5 22.1429M24.6429 6.96429C24.6429 9.42984 20.2457 11.4286 14.8214 11.4286C9.3972 11.4286 5 9.42984 5 6.96429C5 4.49873 9.3972 2.5 14.8214 2.5C20.2457 2.5 24.6429 4.49873 24.6429 6.96429Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"></path>
                    </svg>
                  </span>
                  <h3 class="text-lg font-bold text-center">Result</h3>
                  <p class="text-sm font-light text-center text-gray-500">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`,
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
              <h2 className="block max-w-2xl mx-auto text-3xl font-bold text-gray-800 md:text-5xl lg:text-4xl dark:text-gray-200">
                Templates gratuit de section fonctionnalités
              </h2>
            </div>

            <div className="max-w-3xl mx-auto mt-5 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Découvrez des exemples de sections de fonctionnalités pour votre site web, conçus
                pour Tailwind CSS. Créez des pages de destination, des pages de vente et des pages
                de fonctionnalités qui attirent l'attention de vos visiteurs.
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
