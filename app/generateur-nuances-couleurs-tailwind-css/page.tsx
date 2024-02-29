'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Wheel from '@/components/colors/Wheel'
import Shade from '@/components/colors/Shade'
import {
  getCssString,
  getTailwindColorConfig,
  makeShadesWithMode,
  setColors,
} from '@/lib/colors.utils'
import { ActionButton } from '@/components/button'
import { copyToClipboard } from '@/lib/utils'
import chroma from 'chroma-js'
import Exemples from './Exemples'
import Palette from './Palette'
import ColorContext from './context'
import { useSearchParams } from 'next/navigation'
import { Color } from '@/components/colors/Color'
import { IInitialWheelState } from '@/components/colors'

const SucessChildren = () => (
  <>
    <span>Copié</span>
    <span className="inline-block w-6 text-green-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-4 fill-current"
        viewBox="0 -960 960 960"
      >
        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
      </svg>
    </span>
  </>
)

const Page = () => {
  const searchParams = useSearchParams()
  const color = searchParams.get('color')

  const coordinates = Color.hexToCoordinates(color ?? '#2a7fd5')
  const combinaisons = Color.getCombinaisonElementsCoordinates(
    'complementary',
    color ?? '#2a7fd5',
    coordinates
  )

  const palette = combinaisons.reduce(
    (acc, curr, index) => {
      const { hex, ...rest } = curr
      return {
        elements: [...acc.elements, { ...rest }],
        colors: [...acc.colors, curr.hex],
      }
    },
    { elements: [], colors: [] }
  )

  const initialWheelState: IInitialWheelState = {
    colorHex: color ?? '#2a7fd5',
    picker: {
      coordinates: coordinates,
      position: Color.coordinatesToPosition(coordinates),
    },
    lightnessPicker: {
      coordinates: { x: 1, y: 0 },
      position: { left: 100, top: 50 },
    },
    combinaisonType: 'complementary',
    palette,
  }

  const [context, setContext] = useState({
    hex: color ?? '#2a7fd5',
    palette: [color ?? '#2a7fd5', ...initialWheelState.palette.colors],
  })

  const shades = useMemo(() => {
    const shades = makeShadesWithMode(context.hex, 'hsl')
    return shades
  }, [context.hex])

  useEffect(() => {
    setColors(shades)
  }, [shades])

  return (
    <ColorContext.Provider value={{ context, setContext }}>
      <div className="grid grid-cols-1 gap-8 px-4 py-12 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        <div className="max-w-xl space-y-4 lg:col-span-2">
          <h1 className="max-w-xl text-2xl font-bold">
            Créez des Nuances Parfaites avec PaletteFlows : L’Outil pour Tailwind CSS et Au-Delà
          </h1>
          <p>
            Transformez votre design web avec PaletteFlows, le générateur de palette de couleurs
            idéal pour Tailwind CSS et tous vos projets de développement web.
          </p>
        </div>

        <div className="lg:col-span-1">
          <Wheel initialState={initialWheelState} />
        </div>
        <div className="max-w-3xl pt-32 lg:col-span-2">
          <div className="mt-0 md:-mt-96">
            <div className="space-y-8">
              <Palette shades={context.palette} />
              <section className="w-full mb-16 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-bold">Nuances</h2>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <ActionButton
                      classname="font-medium w-28"
                      actionMethod={() => copyToClipboard(getCssString(shades))}
                      sucessChildren={SucessChildren()}
                    >
                      Exporter css
                    </ActionButton>

                    <ActionButton
                      classname="w-40 font-medium"
                      actionMethod={() =>
                        copyToClipboard(JSON.stringify(getTailwindColorConfig(shades)))
                      }
                      sucessChildren={SucessChildren()}
                    >
                      <span>Tailwind Config</span>
                      <span className="inline-block w-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 54 33"
                          className="w-auto h-2 ml-1"
                        >
                          <g clipPath="url(#prefix__clip0)">
                            <path
                              fill="#38bdf8"
                              fillRule="evenodd"
                              d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                              clipRule="evenodd"
                            />
                          </g>
                          <defs>
                            <clipPath id="prefix__clip0">
                              <path fill="#fff" d="M0 0h54v32.4H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </ActionButton>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-1 lg:h-20 lg:grid-cols-11">
                  {shades.map((color, index) => {
                    const chromaColor = chroma(color)
                    return (
                      <div
                        key={color}
                        className={`h-20`}
                        style={{
                          color: chromaColor.luminance() > 0.5 ? shades[10] : shades[0],
                        }}
                      >
                        <Shade color={color} pos={index} />
                      </div>
                    )
                  })}
                </div>
              </section>
              <Exemples />
            </div>
          </div>
        </div>
      </div>
    </ColorContext.Provider>
  )
}

export default Page
