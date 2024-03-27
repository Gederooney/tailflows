'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative z-[20000]">
      <button
        className="py-2 px-6 rounded-lg border border-secondary-900/10 text-sm hover:bg-gray-100 transition-all ease-in-out duration-200 dark:border-gray-50/10 dark:hover:text-secondary-800 dark:hover:bg-gray-100/50"
        onClick={(e) => {
          e.preventDefault()
          setIsOpen((prev) => !prev)
        }}
      >
        Connexion
      </button>

      <ul
        className={`absolute top-full w-60 right-0 bg-gray-100/20 backdrop-blur-3xl rounded-lg p-2 space-y-2 border  dark:bg-white/10 border-secondary-900/10 transition-all ease-in-out duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto translate-y-4'
            : 'opacity-0 pointer-events-none translate-y-0'
        }`}
      >
        <li>
          <div className="">
            <p className="text-sm font-bold text-left ms-2 mb-4">Connexion</p>
            <div className="flex items-center justify-center mt-2 gap-2 text-xs">
              <button
                className="flex items-center gap-1 border px-3 py-1.5 rounded-md bg-[#24292e] text-gray-50 border-gray-950/10 dark:border-gray-50/10"
                onClick={(e) => signIn('github')}
              >
                <span className="h-6 w-6 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full fill-current "
                    viewBox="0 0 448 512"
                  >
                    <path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z" />
                  </svg>
                </span>
                <span className="inline-block">Github</span>
              </button>

              <button
                className="flex items-center gap-1 border px-3 py-1.5 rounded-md bg-[#d62d20] text-gray-50 border-gray-950/10 dark:border-gray-50/10"
                onClick={(e) => null}
              >
                <span className="h-6 w-6 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full fill-current "
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M0 0h24v24H0z" />
                      <path
                        fill="currentColor"
                        d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1-1.265.06a6 6 0 1 0 2.103 6.836l.001-.004h-3.66a1 1 0 0 1-.992-.883L13 13v-2a1 1 0 0 1 1-1h6.945a1 1 0 0 1 .994.89c.04.367.061.737.061 1.11c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2"
                      />
                    </g>
                  </svg>
                </span>
                <span className="inline-block">Google</span>
              </button>
            </div>
          </div>
        </li>
        <li className="relative flex items-center justify-center gap-1">
          <span className="inline-block h-px flex-1 to-secondary-950 dark:to-gray-100 from-transparent bg-gradient-to-r"></span>
          <span className="inline-block text-xxs">ou avec</span>
          <span className="inline-block h-px flex-1 from-secondary-950 dark:from-gray-100 to-transparent bg-gradient-to-r"></span>
        </li>
        <li>
          <div className="">
            <form action="" className="space-y-2 px-2 text-xs dark:text-gray-100">
              <div className="relative">
                <label className="sr-only" htmlFor="auth-email">
                  Email
                </label>
                <input
                  placeholder="Email"
                  id="auth-email"
                  type="email"
                  className="h-10 bg-transparent border border-secondary-900/10 w-full focus:outline-none focus:ring-0 rounded-md dark:border-gray-50/10 focus:border-secondary-900/10 text-xs"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="password">
                  Mot de passe
                </label>
                <input
                  placeholder="Mot de passe"
                  id="password"
                  type="password"
                  className="h-10 bg-transparent border border-secondary-900/10 w-full focus:outline-none focus:ring-0 rounded-md dark:border-gray-50/10 focus:border-secondary-900/10 text-xs"
                />
              </div>
              <div className="">
                <button
                  className="px-3 h-8 flex items-center bg-secondary-800 rounded-md text-gray-100 hover:text-gray-950 border hover:bg-gray-100 hover:border-gray-950/10 dark:bg-gray-800 dark:border-gray-50/10 dark:hover:bg-transparent border-gray-50/10"
                  type="submit"
                >
                  Se connecter
                </button>
              </div>
            </form>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown
