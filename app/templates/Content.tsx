'use client'
import React from 'react'
import Search from '@/components/Search/Index'
import themes from '@/data/themes.json'
import { Section as Newsletter } from '@/components/Newsletter'
import ThemeCard from '@/components/ThemeGridCard'
import { ReposInfos, Theme } from 'types'

const Hero = () => (
  <section className="py-12 lg:py-16">
    <div className="px-6">
      <h1 className="hidden max-w-xl mx-auto text-3xl font-extrabold text-center lg:max-w-4xl md:block lg:text-5xl">
        Top Templates de siteweb gratuits
      </h1>
      <h1 className="block max-w-lg mx-auto text-xl font-extrabold text-center md:hidden">
        Top Templates de siteweb gratuits
      </h1>
      <p className="max-w-lg mx-auto mt-2 text-sm text-center lg:max-w-2xl lg:text-base">
        Explorez la collection ultime de templates Tailwind CSS gratuits, conçus pour accélérer le
        développement de vos projets web sur Next.js, React, Astro, et plus.
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
            {(themes as unknown as (Theme & ReposInfos)[])
              .sort((a, b) => b.popularity - a.popularity)
              .map((theme) => (
                <ThemeCard key={theme.slug} {...theme} />
              ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  )
}

export default Content
