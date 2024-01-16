import Hero from '@/components/Hero'
import { Section as Newsletter } from '@/components/Newsletter'
import Image from 'next/image'
import Link from 'next/link'

const ColorGeneratorIntro = () => {
  return (
    <section className="py-16 bg-secondary-50/10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-row items-center justify-between gap-8">
          <div>
            <h1 className="text-4xl font-bold">Généteur de nuances de couleurs tailwindcss</h1>
            <p className="text-sm font-normal">
              Conçu pour cela, utilisez notre générateur de couleurs pour créer votre configuration
              de couleurs rapidement pour votre projet. Vous n'avez qu'à insérer ou choisir une
              couleur de base pour copier la config.
            </p>
            <div className="my-6">
              <Link
                href="/couleurs"
                className="inline-flex items-center gap-2 px-6 py-2 border rounded-md dark:border-gray-50/10 dark:bg-secondary-50 md:px-12 bg-secondary-950 text-gray-50"
              >
                <span>Essayer</span>
                <span>
                  <svg viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="max-w-2xl overflow-hidden rounded-md">
            <Image src="/static/images/home/home_image_1.png" height={1080} width={1920} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

const IconsIntro = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-row items-center justify-between w-full gap-8">
          <div className="w-1/2 max-w-2xl overflow-hidden rounded-md shadow shrink-0">
            <Image
              src="/static/gifs/icons.gif"
              className="w-full aspect-video"
              height={800}
              width={436}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold">
              Trouver votre icone parmis plus de 11000 icones open source{' '}
            </h1>
            <p className="text-sm font-normal">
              Conçu pour cela, utilisez notre générateur de couleurs pour créer votre configuration
              de couleurs rapidement pour votre projet. Vous n'avez qu'à insérer ou choisir une
              couleur de base pour copier la config.
            </p>
            <div className="my-6">
              <Link
                href="/couleurs"
                className="inline-flex items-center gap-2 px-6 py-2 border rounded-md dark:border-gray-50/10 dark:bg-secondary-50 md:px-12 bg-secondary-950 text-gray-50"
              >
                <span>Y aller</span>
                <span>
                  <svg viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      <Newsletter />
    </>
  )
}
