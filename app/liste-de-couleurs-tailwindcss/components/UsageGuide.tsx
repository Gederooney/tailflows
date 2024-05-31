import React from 'react'

const UsageGuide = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl py-6">
        <h2 className="text-3xl  text-secondary-600 dark:text-primary-300 mb-2 text-center font-bold">
          Comment fonctionne cet outil ?
        </h2>
        <p className="max-w-md mb-4 text-center mx-auto">
          Suivez les étapes ci-dessous pour obtenir la classe de couleur en fonction de
          l'utilisation et du format que vous souhaitez.
        </p>
        <div className=" flex flex-col md:flex-row gap-4 p-4">
          <ol className=" overflow-hidden space-y-8 order-2 md:order-1">
            <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-secondary-600 after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5">
              <a href="/#" className="flex items-start font-medium w-full  ">
                <span className="w-8 h-8 aspect-square bg-secondary-600 border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm lg:w-10 lg:h-10 text-gray-50">
                  1
                </span>
                <div className="block">
                  <h4 className="text-base  text-secondary-600 dark:text-primary-300 mb-2">
                    Type d'utilisation
                  </h4>
                  <p className="text-sm text-gray-600 max-w-md mb-4">
                    Sélectionnez l'usage que vous souhaitez pour la classe à générer avec la
                    couleur. Vous pouvez choisir entre le texte, le background, la bordure, l'ombre,
                    le highlight et plus encore.
                    <br />
                  </p>
                </div>
              </a>
            </li>
            <li className="relative flex-1 after:content-[''] z-10 after:w-0.5 after:h-full  after:bg-secondary-600 after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5">
              <a href="/#" className="flex items-center font-medium w-full  ">
                <span className="w-8 h-8 aspect-square bg-secondary-600 border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm  lg:w-10 lg:h-10 text-gray-50 z-20">
                  2
                </span>
                <div className="block">
                  <h4 className="text-base  text-secondary-600 dark:text-primary-300 mb-2">
                    Format
                  </h4>
                  <p className="text-sm text-gray-600 max-w-md">
                    Choisissez le format de couleur que vous souhaitez utiliser. Vous pouvez
                    simplement laisser 'class tailwindcss' pour avoir la classe par défaut de
                    Tailwindcss qui correspond à la couleur.
                  </p>
                </div>
              </a>
            </li>
            <li className="relative flex-1 after:content-[''] z-20 after:w-0.5 after:h-full  after:bg-secondary-600 after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5">
              <a href="/#" className="flex items-start font-medium w-full  ">
                <span className="w-8 h-8 aspect-square bg-secondary-600 border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-gray-50 lg:w-10 lg:h-10 z-10">
                  3
                </span>
                <div className="block">
                  <h4 className="text-base  text-secondary-600 dark:text-primary-300 mb-2">
                    Copiez
                  </h4>
                  <p className="text-sm text-gray-600 max-w-xs">
                    En un simple clic sur la case qui correspond à la couleur que vous souhaitez,
                    copiez la classe générée.
                  </p>
                </div>
              </a>
            </li>
          </ol>
          <div className="flex-1 order-1 md:order-2">
            <img src="/static/images/home/tailwindcss-color-usage-tool.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default UsageGuide
