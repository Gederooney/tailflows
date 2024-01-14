import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="py-12 space-y-8 lg:py-24">
      <div className="px-6 text-center">
        <h1 className="hidden max-w-xl mx-auto text-3xl font-extrabold text-center lg:max-w-4xl md:block lg:text-5xl">
          L'écosysteme tailwindcss le plus complet pour les développeurs web
        </h1>
        <h1 className="block max-w-lg mx-auto text-2xl font-extrabold text-center md:hidden">
          Le plus grand écosysteme <br /> tailwindcss pour les développeurs web
        </h1>
        <p className="max-w-lg mx-auto mt-2 text-sm text-center lg:max-w-2xl lg:text-base">
          Vous aimez tailwindcss? Nous aussi. Nous ambitionnons de rendre votre porcessus de travail
          plus facile et rapide en créant le plus grand écosystème tailwindcss.
        </p>
        <Link
          className="box-border inline-block px-12 py-4 mt-4 rounded-full bg-secondary-600 text-primary-50"
          href="/couleurs"
        >
          Générateur de couleurs
        </Link>
      </div>
      <div className="max-w-4xl px-2 mx-auto overflow-hidden rounded-md">
        <Image src="/static/images/home/home_image_1.png" height={1080} width={1920} alt="" />
      </div>
    </section>
  )
}

export default Hero
