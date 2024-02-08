import React from 'react'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allUis } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'
import UisDemosLayout from '@/layouts/UisDemosLayout'
import { Section } from '@/components/Newsletter'

const POSTS_PER_PAGE = 5

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allUis.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))

  return paths
}

export default function Page({ params }: { params: { slug: string } }) {
  const ui = allUis.find((ui) => ui.slug === params.slug.toLowerCase())

  if (!ui) {
    return null
  }

  return (
    <>
      {/* <UisDemosLayout content={ui}>
        <MDXLayoutRenderer code={ui.body.code} components={components} toc={ui.toc} />
      </UisDemosLayout> */}

      <div className="min-h-full py-16">
        <h1 className="max-w-2xl mx-auto mb-8 text-5xl font-bold text-center dark:text-white animate-pulse text-secondary-900">
          Bientôt disponible
        </h1>
        <p className="max-w-xl mx-auto mb-8 text-lg text-center dark:text-white text-secondary-900">
          Nous travaillons fort pour que cette page soit disponible bientôt. Revenez nous voir
          bientôt et Restez connecté!
        </p>
        <Section />
      </div>
    </>
  )
}
