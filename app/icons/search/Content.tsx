import React from 'react'
import icons from '../data.json'
import { Icon } from '../page'
import { notFound } from 'next/navigation'

const Content = ({ searchParams }: { searchParams: { name: string; id: string } }) => {
  const icon = (icons as Icon[]).find((icon) => icon.id === searchParams.id)

  const iconData = {
    h: 64,
    w: 64,
  }

  if (!icon) return notFound()

  return (
    <div className="max-w-7xl px-4 py-12 mx-auto">
      <div className="mb-6">
        <h1 className="uppercase font-medium text-sm">{icon.name.replaceAll('_', ' ')}</h1>
      </div>
      <div className="flex flex-row w-full gap-2">
        <div className="inline-block border rounded-md p-2 shadow inline-block">
          <button type="button" className={`w-96 h-96 box-border flex items-center justify-center`}>
            <svg
              className={`h-${iconData.h} w-${iconData.h} fill-current`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox={icon.viewBox ?? '0 0 24 24'}
              dangerouslySetInnerHTML={{ __html: icon.svg as string }}
            ></svg>
          </button>
        </div>
        <div className="flex-1 w-full flex flex-col">
          <div className="h-12 w-full flex items-center justify-center gap-2">
            <button className="px-4 py-2 border text-xs rounded-sm flex items-center justify-center gap-1">
              <span>Copier SVG</span>
              <span className="h-4 w-4 inline-block">
                <svg
                  className="h-full w-full fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
                </svg>
              </span>
            </button>
            <button className="px-4 py-2 border text-xs rounded-sm flex items-center justify-center gap-1">
              Télécharger SVG
            </button>
            <button className="px-4 py-2 border text-xs rounded-sm flex items-center justify-center gap-1">
              Télécharger PNG
            </button>
          </div>
          <div className="h-12 w-full border-b flex items-end justify-start gap-4">
            <button className="text-xs">Code SVG</button>
            <button className="text-xs">Code JSX</button>
            <button className="text-xs">Data URI</button>
          </div>
          <div className="flex-1 w-full text-xs">
            <code>
              {`
          <svg viewbox="${icon.viewBox}">
          ${icon.svg}
          </svg>
          `}
            </code>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
