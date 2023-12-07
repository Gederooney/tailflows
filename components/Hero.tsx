import React from 'react'

const Hero = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="px-6">
        <h1 className="mx-auto max-w-xl lg:max-w-4xl text-center hidden md:block text-3xl lg:text-5xl font-extrabold">
          L'écosysteme tailwindcss le plus complet pour les développeurs web
        </h1>
        <h1 className="mx-auto max-w-lg text-center block md:hidden text-2xl font-extrabold">
          Le plus grand écosysteme <br /> tailwindcss pour les développeurs web
        </h1>
        <p className="mx-auto mt-2 max-w-lg lg:max-w-2xl text-center text-sm lg:text-base">
          Vous aimez tailwindcss? Nous aussi. Nous ambitionnons de rendre votre porcessus de travail
          plus facile et rapide en créant le plus grand écosystème tailwindcss.
        </p>
      </div>
    </section>
  )
}

export default Hero
