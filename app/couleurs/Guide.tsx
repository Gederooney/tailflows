import Link from 'next/link'
import React from 'react'

const Guide = () => {
  return (
    <section className="max-w-xl my-16 me-auto">
      <div className="max-w-5xl mb-10 text-left me-auto lg:mb-14">
        <h2 className="block max-w-2xl text-2xl font-bold text-left text-gray-800 me-auto md:text-3xl dark:text-gray-200">
          Découvrez <span className="text-primary-600 dark:text-primary-500"> PaletteFlow</span> :
          Votre Générateur de Nuances de Couleurs
        </h2>

        <p className="mt-1 text-sm text-left text-gray-500 dark:text-gray-400 sm:text-base">
          PaletteFlow révolutionne la sélection de couleurs pour vos projets de développement web.
          Cet outil intuitif vous permet de générer et d’intégrer des palettes de couleurs
          personnalisées dans Tailwind CSS ou CSS standard en quelques clics.
        </p>
      </div>

      <div className="space-y-4">
        <h3>
          <span className="font-bold">Étape 1 :</span> Sélection de la Couleur de Base
        </h3>
        <ul className="px-4 mt-1 text-sm text-left text-gray-500 list-disc dark:text-gray-400 sm:text-base">
          <li>Accédez à PaletteFlow sur Tailflows.</li>
          <li>Sélectionnez votre Couleur sur le Cercle Chromatique.</li>
        </ul>

        <h3>
          <span className="font-bold">Étape 2 :</span> Génération et sélection des nuances
        </h3>
        <ul className="px-4 mt-1 text-sm text-left text-gray-500 list-disc dark:text-gray-400 sm:text-base">
          <li>Visualisation des nuances générées.</li>
        </ul>

        <h3>
          <span className="font-bold">Étape 3 :</span> Copie de la Configuration
        </h3>
        <ul className="px-4 mt-1 text-sm text-left text-gray-500 list-disc dark:text-gray-400 sm:text-base">
          <li>Sélectionnez le Mode de Préférence.</li>
          <li>
            Copiez le Code avec facilité en cliquant sur le bouton tailwindcss ou css du mode
            choisi.
          </li>
        </ul>

        <h3>Pourquoi Choisir PaletteFlow ?</h3>
        <ul className="px-4 mt-1 text-sm text-left text-gray-500 list-disc dark:text-gray-400 sm:text-base">
          <li>Intuitivité et Rapidité.</li>
          <li>Flexibilité de Design.</li>
          <li>
            Prêt pour{' '}
            <Link
              href="https://tailwindcss.com/"
              title="https://tailwindcss.com/"
              className="text-primary-500"
            >
              TailwindCSS
            </Link>{' '}
            et CSS.
          </li>
          <li>Optimisation du Workflow.</li>
        </ul>

        <p className="mt-1 text-sm text-left text-gray-500 dark:text-gray-400 sm:text-base">
          Rendez votre processus de design plus fluide et inspirant avec PaletteFlow. Visitez{' '}
          <Link href="/" title="tailflows.com" className="text-primary-500">
            Tailflows
          </Link>{' '}
          dès aujourd'hui pour accéder à PaletteFlow et explorer d'autres outils conçus pour
          dynamiser votre développement web.
        </p>
      </div>
    </section>
  )
}

export default Guide
