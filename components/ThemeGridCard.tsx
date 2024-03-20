import Link from 'next/link'
import React from 'react'
import { ReposInfos, Theme } from 'types'
import Image from 'next/image'

const Card = (theme: Theme & ReposInfos) => {
  return (
    <Link href={`/templates/${theme.slug}`} className="p-6 overflow-hidden md:basis-1/3">
      <div className="w-full overflow-hidden rounded-md">
        <Image
          src={theme.images[0]}
          width={1600}
          height={1200}
          alt={theme.slug.replaceAll('-', ' ')}
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
}

export default Card
