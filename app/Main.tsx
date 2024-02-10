import Hero from '@/components/Hero'
import { Section as Newsletter } from '@/components/Newsletter'
import Image from 'next/image'
import Link from 'next/link'

const themes = [
  {
    created_at: 1704145905897,
    title: 'Dashboard admin de flowbite',
    frameworks: ['Nextjs', 'React', 'javascript', 'HUGO', 'Webpack'],
    categories: ['Dashboard'],
    author: 'Flowbite',
    description: ['Un Thème complet de flowbite'],
    popularity: 12,
    images: ['/static/images/themes/tailwind_dashboard.webp'],
    tags: ['dashboard', 'admin', 'flowbite', 'React', 'Nextjs'],
    download_link: 'https://github.com/themesberg/flowbite-admin-dashboard/archive/main.zip',
    preview_link: 'https://flowbite-admin-dashboard.vercel.app/',
    upDatedAt: 1704145905897,
    repos: 'https://github.com/themesberg/flowbite-admin-dashboard',
    repos_api_url: 'https://api.github.com/repos/themesberg/flowbite-admin-dashboard',
    id: '9bb747c1_5972_4fb1_ac9b_b40b1553fd36',
    colors: ['#1B2231', '#2C62D7', '#FCBA90', '#FFF6EF'],
    features: [],
  },
  {
    created_at: 1704156845667,
    title: 'AdminToolkit',
    frameworks: ['Html', 'Scss', 'javascript', 'Vanilla'],
    categories: ['Dashboard'],
    colors: ['#485668', '#8B62F3', '#F97387', '#FABE3A', '#FFFFFF'],
    author: 'Md Mostafizur Rahman',
    description: [
      "AdminToolkit - est un modèle de tableau de bord d'administration moderne qui propose une variété de fonctionnalités et de fonctionnalités utiles. Le modèle comprend plus de 50 pages pré-conçues, chacune conçue en mettant l'accent sur la facilité d'utilisation et l'expérience utilisateur. Ces pages couvrent un large éventail de cas d'utilisation, notamment les tableaux de bord, les analyses, la gestion des produits, la gestion des utilisateurs, la gestion des factures, et bien d'autres.",
      "En plus de ses pages pré-conçues, AdminToolkit propose une large gamme de composants d'interface utilisateur et de classes utilitaires. Cela inclut des icônes, des boutons, des tables, des formulaires et des graphiques, entre autres. Ces composants et classes utilitaires sont soigneusement conçus pour offrir une expérience utilisateur fluide, tout en étant hautement personnalisables. Cela permet aux développeurs de créer des designs uniques qui correspondent à l'identité de leur marque et aux exigences de leur projet.",
      "Dans l'ensemble, AdminToolkit est un excellent choix pour les développeurs à la recherche d'un modèle de tableau de bord d'administration convivial et hautement personnalisable. Sa conception intuitive, sa large gamme de pages pré-conçues, ses composants d'interface utilisateur utiles et ses classes utilitaires en font le meilleur choix pour créer des tableaux de bord d'administration modernes et réactifs.",
    ],
    popularity: 10,
    images: ['/static/images/themes/tailwindcss_adminToolkit.webp'],
    tags: ['Landing', 'saas', 'Vue', 'Nuxt'],
    download_link: 'https://github.com/mostafizurhimself/admintoolkit-html/archive/main.zip',
    preview_link: 'https://www.getadmintoolkit.com/ecommerce.html',
    repos: 'https://github.com/mostafizurhimself/admintoolkit-html',
    repos_api_url: 'https://api.github.com/repos/mostafizurhimself/admintoolkit-html',
    features: [],
    id: '9bb747c1_5972_4fb1_ac9b_b40b1553ed56',
  },
  {
    created_at: 1704737372458,
    title: 'Fettle',
    frameworks: ['HTML', 'Javascript'],
    categories: ['Landing'],
    colors: ['#193231', '#84A9B1', '#FFFFFF'],
    author: '',
    description: [
      "Page d'accueil pour sale de gym",
      'Cet theme fait partie de plusieurs themes dans le repos Github. Dans les layouts, copiez le html pour Fettle',
    ],
    popularity: 10,
    images: ['/static/images/themes/fettle.webp'],
    tags: ['Landing Page', 'Gym'],
    download_link: 'https://github.com/rosstopping/tailwindcss-templates/archive/master.zip',
    preview_link: 'https://tailwindcss-templates.tailflows.com/layouts/fettle.html',
    repos: 'https://github.com/rosstopping/tailwindcss-templates',
    repos_api_url: 'https://api.github.com/repos/rosstopping/tailwindcss-templates',
    features: ['Responsive', 'Minimaliste'],
    id: '9bb747c1_65ap_4fb1_ac9b_b1704737372458',
    actions: [],
  },
  {
    created_at: 1704744981208,
    title: 'AstroWind',
    frameworks: ['Astro', 'Typescript', 'Mdx'],
    categories: ['Blog', 'Portfolio', 'Startup', 'Mobile App', 'Saas'],
    colors: ['#000000', '#BB5B72', '#0161EF', '#FFFFFF'],
    author: 'Onwidget',
    description: [
      'Un modèle gratuit utilisant Astro 4.0 et Tailwind CSS. Thème de démarrage Astro',
    ],
    popularity: 15,
    images: ['/static/images/themes/astrowind.webp'],
    tags: ['Landing Page', 'Blog', 'Portfolio', 'Astro Template', 'Saas'],
    download_link: 'https://github.com/onwidget/astrowind/archive/main.zip',
    preview_link: 'https://astrowind.vercel.app/',
    repos: 'https://github.com/onwidget/astrowind',
    repos_api_url: 'https://api.github.com/repos/onwidget/astrowind',
    features: ['Responsive', 'Minimaliste', 'Composants', 'Plusieurs pages', 'Blog'],
    id: '9bb747c1_65ap_4fb1_ac9b_b1704744981208',
    actions: [],
  },
  {
    created_at: 1705413289526,
    title: 'Ecommerce Template v1',
    frameworks: ['HTML', 'TailwindCSS v3'],
    categories: ['Ecommerce'],
    colors: ['#1F2937', '#F53D57', '#ffffff'],
    author: 'fajar7xx',
    description: [
      "Ce template de commerce électronique utilisant TailwindCSS 3 (2022) est une solution contemporaine pour créer des boutiques en ligne. Ce modèle tire parti des dernières fonctionnalités de TailwindCSS pour offrir un design moderne et réactif. Il est conçu pour améliorer l'expérience utilisateur avec une interface intuitive et une navigation fluide, facilitant l'achat en ligne. Ce modèle est idéal pour les entreprises souhaitant se lancer dans l'e-commerce avec un site à l'apparence professionnelle et optimisé pour les moteurs de recherche, tout en étant facile à personnaliser",
    ],
    popularity: 8,
    images: ['/static/images/themes/ecommerce-template-tailwind-1.webp'],
    tags: ['Template', 'Ecommerce'],
    download_link: 'https://github.com/fajar7xx/ecommerce-template-tailwind-1/archive/main.zip',
    preview_link: 'https://ecommerce-template-tailwind-1.tailflows.com/',
    repos: 'https://github.com/fajar7xx/ecommerce-template-tailwind-1',
    repos_api_url: 'https://api.github.com/repos/fajar7xx/ecommerce-template-tailwind-1',
    features: [],
    id: '9bb747c1_65ap_4fb1_ac9b_b1705413289526',
    actions: [],
  },
  {
    created_at: 1705416988661,
    title: 'Stablo',
    frameworks: ['NextJs', 'Sanity'],
    categories: ['Blog'],
    colors: ['#000000', '#ffffff'],
    author: 'Web3Templates',
    description: [
      'Stablo est un template de blog JAMStack créé avec Next.js, Tailwind CSS et Sanity CMS par Web3Templates. Il se décline en versions gratuites et professionnelles. Ce modèle intègre les technologies modernes du développement web pour offrir une expérience utilisateur fluide et une esthétique soignée. Il est conçu pour être facilement personnalisable, rendant la création et la gestion de contenu de blog efficaces et intuitives, tout en bénéficiant des avantages de performance et de SEO offerts par JAMStack',
    ],
    popularity: 11,
    images: ['/static/images/themes/stablo.webp'],
    tags: ['Blog', 'Portfolio'],
    download_link: 'https://github.com/web3templates/stablo/archive/main.zip',
    preview_link: 'https://stablo.web3templates.com/',
    repos: 'https://github.com/web3templates/stablo',
    repos_api_url: 'https://api.github.com/repos/web3templates/stablo',
    features: [],
    id: '9bb747c1_65ap_4fb1_ac9b_b1705416988661',
    actions: [],
  },
]

const classnames = ['grid-a', 'grid-b', 'grid-c', 'grid-d', 'grid-e', 'grid-f']

const ThemeIntro = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-secondary-50/5">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl mx-auto mb-10 text-center lg:mb-14">
          <h2 className="block max-w-2xl mx-auto text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl dark:text-gray-200">
            Templates tailwindcss{' '}
            <span className="text-primary-600 dark:text-primary-500">Gratuits</span>
          </h2>
          <p className="px-4 mt-1 text-sm text-center text-gray-500 dark:text-gray-400 sm:text-base">
            Découvrez notre sélection rigoureuse de templates TailwindCSS gratuits, soigneusement
            choisis pour enrichir votre blog, portfolio, site web de développeur, ou dashboard
            d'administration. Nous avons parcouru le web pour vous offrir les meilleures pages
            d'atterrissage et designs prêts à l'emploi, facilitant ainsi le lancement rapide de vos
            projets.{' '}
            <span className="sr-only">
              Explorez davantage en cliquant{' '}
              <Link href="/themes" className="text-primary-700">
                ici
              </Link>{' '}
              et accélérez votre développement dès aujourd'hui.
            </span>
          </p>
        </div>
        <div className="grid w-full gap-4 themes-demos-grid">
          {themes
            .sort((a, b) => b.popularity - a.popularity)
            .map((theme, index) => {
              const params = new URLSearchParams()
              params.append('name', theme.title.replaceAll('_', '-').replaceAll(' ', '-'))
              params.append('id', theme.id)

              return (
                <Link
                  href={`/themes/search?${params.toString()}`}
                  key={theme.title}
                  className={`p-6 overflow-hidden md:basis-1/3 ${classnames[index]}`}
                >
                  <div className="w-full overflow-hidden rounded-md">
                    <Image
                      src={theme.images[0]}
                      width={1600}
                      height={1200}
                      alt={theme.title}
                      loading="lazy"
                    />
                  </div>
                  <h1 className="my-4 font-medium line-clamp-1">{theme.title}</h1>
                  <div className="flex flex-grow-0 flex-shrink-0 gap-2 overflow-auto flex-nowrap">
                    {theme.frameworks.map((key) => (
                      <div
                        key={`${theme.id + key}`}
                        className="px-2 py-1 bg-gray-100 rounded-md dark:bg-secondary-600"
                      >
                        <span className="text-xs font-light">{key}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      <ThemeIntro />
      <Newsletter />
    </>
  )
}
