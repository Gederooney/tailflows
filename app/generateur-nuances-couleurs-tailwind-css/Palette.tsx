import { ActionButton } from '@/components/button'
import { copyToClipboard } from '@/lib/utils'
import chroma from 'chroma-js'
import React from 'react'

const Palette = ({
  shades,
  classname,
  handleClick,
}: {
  shades: string[]
  classname?: string
  handleClick?: (value: string) => void
}) => {
  return (
    <section>
      <div className="">
        <h2 className="font-bold">Palettes</h2>
        <div
          className={
            classname
              ? classname
              : 'flex items-center justify-center w-full overflow-hidden rounded-lg md:w-1/2'
          }
        >
          {shades.map((color, id) => {
            const chromaColor = chroma(color)
            return (
              <div
                className={`h-20 shrink-0 grow-0`}
                key={color + id}
                style={{
                  width: `${100 / shades.length}%`,
                  backgroundColor: color,
                  color: chromaColor.luminance() > 0.5 ? 'black' : 'white',
                }}
              >
                <div key={color} className="flex items-center justify-center w-full h-full gap-2">
                  <span className="text-xs sr-only">{color}</span>
                  <ActionButton
                    classname="w-10 h-4"
                    sucessChildren={<span className="h-4 text-xs">Copié!</span>}
                    actionMethod={() => copyToClipboard(color)}
                  >
                    <span className="inline-block w-4 h-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full fill-current "
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M7 9.667A2.667 2.667 0 0 1 9.667 7h8.666A2.667 2.667 0 0 1 21 9.667v8.666A2.667 2.667 0 0 1 18.333 21H9.667A2.667 2.667 0 0 1 7 18.333z" />
                          <path d="M4.012 16.737A2.005 2.005 0 0 1 3 15V5c0-1.1.9-2 2-2h10c.75 0 1.158.385 1.5 1" />
                        </g>
                      </svg>
                    </span>
                  </ActionButton>

                  {handleClick && id !== 0 ? (
                    <ActionButton
                      classname="w-10 h-4"
                      sucessChildren={<span className="h-4 text-xs">Fait !</span>}
                      actionMethod={() => handleClick(color)}
                    >
                      <span className="inline-block w-4 h-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full fill-current "
                          viewBox="0 -960 960 960"
                        >
                          <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                        </svg>
                      </span>
                    </ActionButton>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Palette
