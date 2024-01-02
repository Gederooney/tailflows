'use client'
import React from 'react'
import Search from '@/components/Search/Index'
import themes from '@/data/themes.json'
import Image from 'next/image'
import Link from 'next/link'

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
  const handleSearch = (value: string) => {
    console.log(value)
  }
  return (
    <>
      <Hero />
      <Search handleSearch={handleSearch} />
      <section>
        <div className="mx-auto max-w-7xl">
          <div className="w-full flex flex-row flex-wrap flex-shrink-0 flex-grow-0">
            {themes.map((theme) => (
              <Link
                href={`/themes/search?id=${theme.id}&name=${theme.title.replaceAll(' ', '_')}`}
                key={theme.title}
                className="basis-1/3 p-6"
              >
                <div className="w-full  rounded-md overflow-hidden">
                  <Image src={theme.images[0]} width={1600} height={1200} alt="" />
                </div>
                <h1 className="my-4 line-clamp-1 font-medium">{theme.title}</h1>
                <div className="flex flex-nowrap flex-shrink-0 flex-grow-0 overflow-auto gap-2">
                  {theme.framework.map((key) => (
                    <div
                      key={`${theme.id + key}`}
                      className="px-2 py-1 bg-gray-100 dark:bg-secondary-600 rounded-md"
                    >
                      <span className="text-xs font-light">{key}</span>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Content
