import Link from 'next/link'
import React from 'react'
import { ReposInfos, Theme } from 'types'
import Image from 'next/image'

const Card = (theme: Theme & ReposInfos) => {
  return (
    <Link href={`/templates/${theme.slug}`} className="p-6 overflow-hidden md:basis-1/3">
      <div className="w-full overflow-hidden rounded-md relative group">
        <div className="absolute inset-0 bg-secondary-950/70 z-[2] pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease flex">
          <span className="inline-block h-4 w-4 m-auto text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full fill-none stroke-current"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </span>
        </div>
        <Image
          className="relative z-[1]"
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
