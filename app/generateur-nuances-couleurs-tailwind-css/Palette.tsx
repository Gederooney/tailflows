import { ActionButton } from '@/components/button'
import Shade from '@/components/colors/Shade'
import { copyToClipboard } from '@/lib/utils'
import chroma from 'chroma-js'
import React from 'react'

const Palette = ({ shades }: { shades: string[] }) => {
  return (
    <section>
      <div className="">
        <h2 className="font-bold">Palettes</h2>
        <div className="flex items-center justify-center w-full overflow-hidden rounded-lg md:w-1/2">
          {shades.map((color) => {
            const chromaColor = chroma(color)
            return (
              <div
                className="h-20 shrink-0 grow-0"
                key={color}
                style={{
                  width: `${100 / shades.length}%`,
                  backgroundColor: color,
                  color: chromaColor.luminance() > 0.5 ? 'black' : 'white',
                }}
              >
                <ActionButton
                  key={color}
                  classname="flex items-center justify-center w-full h-full"
                  sucessChildren={<span>Copié</span>}
                  actionMethod={() => copyToClipboard(color)}
                >
                  <span className="">{color}</span>
                </ActionButton>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Palette
