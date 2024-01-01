'use client'
import React from 'react'
import Search from '@/components/Search/Index'

const Hero = () => (
  <section className="py-12 lg:py-16">
    <div className="px-6">
      <h1 className="hidden max-w-xl mx-auto text-3xl font-extrabold text-center lg:max-w-4xl md:block lg:text-5xl">
        Nous avons une liste exhaustive des templates tailwindcss gratuites ou sous licence MIT pour
        vos projets
      </h1>
      <h1 className="block max-w-lg mx-auto text-2xl font-extrabold text-center md:hidden">
        Le plus grand écosysteme <br /> tailwindcss pour les développeurs web
      </h1>
      <p className="max-w-lg mx-auto mt-2 text-sm text-center lg:max-w-2xl lg:text-base">
        Vous aimez tailwindcss? Nous aussi. Nous ambitionnons de rendre votre porcessus de travail
        plus facile et rapide avec cette liste de template gratuite prèt à l'utilisation pour vos
        projets.
      </p>
    </div>
  </section>
)

const Content = () => {
  const handleSearch = (value: string) => {}
  return (
    <>
      <Hero />
      <Search handleSearch={handleSearch} />
    </>
  )
}

export default Content
