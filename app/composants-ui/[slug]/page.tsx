import React from 'react'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allUis } from 'contentlayer/generated'

const POSTS_PER_PAGE = 5

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allUis.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))

  return paths
}

export default function Page({ params }: { params: { page: string } }) {
  const posts = allCoreContent(sortPosts(allUis))
  const pageNumber = parseInt(params.page as string)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return <>Heros</>
}
