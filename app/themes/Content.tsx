'use client'
import React from 'react'
import Search from '@/components/Search/Index'
import themes from '@/data/themes.json'
import Image from 'next/image'
import Link from 'next/link'
import { Section as Newsletter } from '@/components/Newsletter'

const Hero = () => (
  <section className="py-12 lg:py-16">

    
    <div className="px-6">
      <h1 className="hidden max-w-xl mx-auto text-3xl font-extrabold text-center lg:max-w-4xl md:block lg:text-5xl">
        Nous avons une liste exhaustive des templates tailwindcss gratuits
      </h1>
      <h1 className="block max-w-lg mx-auto text-2xl font-extrabold text-center md:hidden">
        Nous avons une liste <br /> exhaustive des templates tailwindcss gratuit
      </h1>
      <p className="max-w-lg mx-auto mt-2 text-sm text-center lg:max-w-2xl lg:text-base">
        Vous aimez tailwindcss? Nous aussi. Nous ambitionnons de rendre votre porcessus de travail
        plus facile et rapide avec cette liste de template gratuits prèts à l'utilisationdans vos
        projets prsonnel.
      </p>
    </div>
  </section>
)

const Content = () => {
  const handleSearch = (value: string) => {}
  return (
    <>
      <Hero />
      <Search handleSearch={handleSearch} inputOnly buttonTexte="Trouver" />
      <section>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-row flex-wrap flex-grow-0 flex-shrink-0 w-full">
            {themes
              .sort((a, b) => b.popularity - a.popularity)
              .map((theme) => {
                const params = new URLSearchParams()
                params.append('name', theme.title.replaceAll('_', '-').replaceAll(' ', '-'))
                params.append('id', theme.id)

                return (
                  <Link
                    href={`/themes/search?${params.toString()}`}
                    key={theme.title}
                    className="p-6 overflow-hidden md:basis-1/3"
                  >
                    <div className="w-full overflow-hidden rounded-md">
                      <Image
                        src={theme.images[0]}
                        width={1600}
                        height={1200}
                        alt={theme.title}
                        loading="lazy"
                      />
                    </div>
                    <h1 className="my-4 font-medium line-clamp-1">{theme.title}</h1>
                    <div className="flex flex-grow-0 flex-shrink-0 gap-2 overflow-auto flex-nowrap">
                      {theme.frameworks.map((key) => (
                        <div
                          key={`${theme.id + key}`}
                          className="px-2 py-1 bg-gray-100 rounded-md dark:bg-secondary-600"
                        >
                          <span className="text-xs font-light">{key}</span>
                        </div>
                      ))}
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  )
}

export default Content
