import Link from 'next/link'
import React from 'react'

const Guide = () => {
  return (
    <section className="max-w-xl my-16 me-auto">
      <div className="max-w-5xl mb-10 text-left me-auto lg:mb-14">
        <h2 className="block max-w-2xl text-2xl font-bold text-left text-gray-800 me-auto md:text-3xl dark:text-gray-200">
          Guide d'Utilisation :{' '}
          <span className="text-primary-600 dark:text-primary-500"> ShadowsFlow </span>– Créez des
          Ombres Portées Personnalisées
        </h2>

        <p className="mt-1 text-sm text-left text-gray-500 dark:text-gray-400 sm:text-base">
          ShadowsFlow est l'outil incontournable sur Tailflows pour générer des box-shadows
          personnalisées adaptées à Tailwind CSS, au CSS standard, et aux styles en ligne HTML. Que
          vous souhaitiez ajouter une profondeur subtile à vos composants ou créer des effets
          d'ombre complexes, ShadowsFlow vous offre une interface intuitive pour personnaliser
          entièrement vos ombres portées. Voici comment maîtriser cet outil puissant.
        </p>
      </div>

      <div className="space-y-4">
        <h3>
          <span className="font-bold">Étape 1 :</span> Commencez avec une Couche de Base
        </h3>
        <ul className="px-4 mt-1 text-sm text-left text-gray-500 list-decimal dark:text-gray-400 sm:text-base">
          <li>
            <strong>Visitez ShadowsFlow sur Tailflows :</strong>Accédez directement à l'outil pour
            commencer.
          </li>
          <li>
            <strong>Analysez la Couche Initiale :</strong> une couche initiale est prédéfinie avec
            des valeurs de base : décalage X à 0, décalage Y à 0, flou à 0, propagation à 0, opacité
            à 25%, et couleur à #000000. Cette couche sert de point de départ pour votre création.
          </li>
        </ul>

        <h3>
          <span className="font-bold">Étape 2 :</span> Personnalisation des Ombres
        </h3>
        <ul className="px-4 mt-1 text-sm text-left text-gray-500 list-decimal dark:text-gray-400 sm:text-base">
          <li>
            <strong>Ajustez les Paramètres : </strong>Modifiez les valeurs de décalage X et Y, le
            rayon de flou, la propagation, l'opacité, et la couleur selon vos besoins. Chaque
            modification offre un aperçu en temps réel sur une carte d'exemple.
          </li>
          <li>
            <strong>Inset ou Pas :</strong> Choisissez si l'ombre doit être intérieure (inset) ou
            standard.
          </li>
          <li>
            <strong>Ajoutez des Couches :</strong> Vous avez la possibilité d'ajouter autant de
            couches d'ombres que nécessaire, chaque couche étant indépendante pour une
            personnalisation granulaire.
          </li>
        </ul>

        <h3>
          <span className="font-bold">Étape 3 :</span> Visualisation et Ajustements en Temps Réel
        </h3>
        <ul className="px-4 mt-1 text-sm text-left text-gray-500 list-disc dark:text-gray-400 sm:text-base">
          <li>
            <strong>Aperçu Dynamique :</strong> Tandis que vous ajustez les paramètres et ajoutez
            des couches, l'effet est immédiatement visible sur la carte d'exemple, vous permettant
            d'évaluer l'esthétique et de faire des ajustements précis en temps réel.
          </li>
        </ul>

        <h3>
          <span className="font-bold">Étape 4 :</span> Exportation de votre Configuration
        </h3>
        <ul className="px-4 mt-1 text-sm text-left text-gray-500 list-decimal dark:text-gray-400 sm:text-base">
          <li>
            <strong>Sélectionnez le Format de Sortie :</strong> Une fois satisfait du résultat,
            choisissez entre Tailwind CSS, CSS standard, ou HTML pour l'exportation.
          </li>
          <li>
            <strong>Copiez la Configuration :</strong>
            <ul className="px-4 mt-1 text-sm text-left text-gray-500 list-disc dark:text-gray-400 sm:text-base">
              <li>
                <strong>Pour TailwindCSS :</strong> Copiez la configuration de la box-shadow pour
                l'utiliser comme classe utility dans votre code HTML.
              </li>
              <li>
                <strong>Pour CSS :</strong> Copiez le code CSS pour l'appliquer directement à vos
                classes ou variables CSS.
              </li>
              <li>
                <strong>Pour HTML :</strong> Copiez le style en ligne pour l'appliquer directement
                sur vos éléments HTML.
              </li>
            </ul>
          </li>
        </ul>

        <h3>Pourquoi Utiliser ShadowsFlow ?</h3>
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
            , CSS, et HTMl
          </li>
          <li>Optimisation du Workflow.</li>
        </ul>

        <p className="mt-1 text-sm text-left text-gray-500 dark:text-gray-400 sm:text-base">
          ShadowsFlow simplifie la création d'ombres portées en offrant un contrôle total sur chaque
          aspect de la conception. Que vous ayez besoin d'une ombre subtile ou d'un effet
          dramatique, ShadowsFlow est l'outil parfait pour injecter de la profondeur et du style
          dans vos projets web.
        </p>
      </div>
    </section>
  )
}

export default Guide
