import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
