import React from 'react'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allUis } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'
import UisDemosLayout from '@/layouts/UisDemosLayout'

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
      <UisDemosLayout content={ui}>
        <MDXLayoutRenderer code={ui.body.code} components={components} toc={ui.toc} />
      </UisDemosLayout>
    </>
  )
}
