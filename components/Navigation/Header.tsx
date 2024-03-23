'use client'
import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from '../Link'
import MobileNav from './MobileNav'
import ThemeSwitch from '../ThemeSwitch'
import SearchButton from '../SearchButton'
import AuthDropdown from '@/components/auth/Button'
import { useSession } from 'next-auth/react'
import ProfileButton from '../auth/ProfileButton'

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const shades = [
    '#f2f7fc',
    '#cde0f4',
    '#a7c9ec',
    '#81b3e4',
    '#5b9cdd',
    '#3485d7',
    '#246fba',
    '#1d5a95',
    '#164571',
    '#0f2f4c',
    '#081827',
  ]

  const session = useSession()

  useEffect(() => {
    if (openDropdown) {
      const close = (event: MouseEvent) => {
        setOpenDropdown(false)
      }
      document.body.addEventListener('click', close)
    }

    return () => {
      document.body.removeEventListener('click', close)
    }
  }, [openDropdown])
  return (
    <header className="relative w-full shadow dark:border-b border-white/5">
      <div className="items-center justify-between hidden gap-8 px-6 py-2 mx-auto lg:flex max-w-7xl">
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="flex flex-row items-center gap-1 mr-3">
                <Logo />
                <span className="text-xl select-none">tailflows</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-between flex-1 space-x-4 leading-5 sm:space-x-6">
          <ul className="flex items-center gap-4 mx-auto">
            <li>
              <SearchButton />
            </li>
            <li className="relative" onMouseEnter={() => setOpenDropdown(true)}>
              <button
                onTouchStart={(event) => {
                  setOpenDropdown((prev) => !prev)
                }}
                onClick={(event) => {
                  event.stopPropagation()
                  event.preventDefault()
                  setOpenDropdown((prev) => !prev)
                }}
                className="hidden text-sm font-medium text-gray-900 dark:text-gray-50/50 sm:block"
              >
                Outils
              </button>

              <div
                className={
                  openDropdown
                    ? 'h-auto w-auto opacity-100 pointer-events-auto'
                    : 'pointer-events-none overflow-hidden relative opacity-0'
                }
              >
                <span className="absolute block w-4 h-4 border-t border-r border-secondary-950/10 dark:border-gray-50/10  z-[10001] top-[200%] -rotate-45 rounded-[.2rem] translate-y-[.2rem] left-[1/2] translate-x-1/2 bg-gray-50/20 backdrop-blur-lg dark:bg-secondary-800/10 tooltipanchor"></span>
                <div className="absolute  -translate-x-1/2 border border-secondary-950/10 dark:border-gray-50/10 top-[250%] w-[40rem] left-1/2 rounded-xl  z-[10000] overflow-hidden shadow-xl dark:shadow-gray-700/10 bg-transparent">
                  <ul className="relative grid grid-cols-2 gap-8 p-4 bg-gray-50/20 backdrop-blur-lg dark:bg-secondary-800/10">
                    <li className="col-span-2">
                      <Link href="/generateur-nuances-couleurs-tailwind-css" className="space-y-2">
                        <h2 className="text-sm font-bold ">Géneratuer de nuances</h2>
                        <p className="text-xs font-light w-96">
                          Génerer des nuances de couleurs avec notre cercle chromatique et exporter
                          le resultat au format tailwindcss, html ou css
                        </p>
                        <div className="grid grid-cols-11">
                          {shades.map((shade, index) => (
                            <span
                              key={`nav-shade-${shade}`}
                              className="inline-block w-full aspect-square"
                              style={{ backgroundColor: shade }}
                            ></span>
                          ))}
                        </div>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        className="space-y-2 text-sm font-bold"
                        href="/generateur-gradient-tailwindcss"
                      >
                        <h2 className="text-sm font-bold ">Générateur de gradient</h2>
                        <div className="">
                          <p className="text-xs font-light w-60">
                            Créez des dégradés de couleurs intuitifs. Customisez vos dégradés en
                            jouant avec la teinte, la saturation ou la luminosité de la couleur
                          </p>
                        </div>
                        <div className="w-full h-20 rounded-md bg-[linear-gradient(69.99569637232901deg,_#2a00ff_-40%,_#D92727_140%)]"></div>
                      </Link>
                    </li>
                    <li className="">
                      <Link className="space-y-2 text-sm font-bold" href="/generateur-box-shadow">
                        <h2 className="text-sm font-bold ">Ombre de portée</h2>
                        <div className="">
                          <p className="text-xs font-light w-60">
                            Rendez vos design unique avec des ombres de portée. Ajoutez une ou
                            plusieurs couches tout en visualisant le rendu en live
                          </p>
                        </div>
                        <div className="w-full h-20 rounded-md"></div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <li key={link.title + 'desktop'}>
                  <Link
                    href={link.href}
                    className="hidden text-sm font-medium text-gray-900 dark:text-gray-50/50 sm:block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
          </ul>
          <ThemeSwitch />
          {session.data?.user ? <ProfileButton /> : <AuthDropdown />}
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-2 lg:hidden">
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="flex flex-row items-center gap-1 mr-3">
                <Logo />
                <span className="text-lg select-none">tailflows</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitch />
          <SearchButton />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
