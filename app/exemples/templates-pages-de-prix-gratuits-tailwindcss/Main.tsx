import BlocksSection from '@/components/code/BlocksSection'
import React from 'react'

const data = [
  {
    name: 'default',
    id: 'yzN2DZfpJVMTNujhwNQUjrRwiABCum171154066475512tsOD47MPk',
    title: 'Template Connexion Épuré avec Tailwind CSS',
    description: '',
    htmlBody: '',
    script: '',
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
              <h2 className="block text-3xl font-bold text-gray-800 md:text-5xl lg:text-6xl dark:text-gray-200">
                Templates d'Authentification Tailwind CSS: Connexion et Inscription
              </h2>
            </div>

            <div className="max-w-4xl mx-auto mt-5 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Découvrez notre collection de templates d'authentification Tailwind CSS, parfaits
                pour les pages de connexion, d'inscription et de récupération de mot de passe.
                <span className="sr-only">
                  Conçus pour s'intégrer harmonieusement à tout projet web, ces templates optimisent
                  l'expérience utilisateur tout en offrant sécurité et style.
                </span>{' '}
                Simplifiez le développement de vos formulaires d'authentification avec nos solutions
                prêtes à l'emploi.
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
