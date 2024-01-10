'use client'
import { useState, useMemo } from 'react'
import WheelView from './Wheel'
import WheelForm from './WheelForm'
import ColorContext from './context'
import { Color as IColor, WheelView as IWheelView } from './colors'
import { makeShadeNoMode, makeShadesWithMode, nearest } from './colors.utils'
// import JustShadeBtn from '@/components/shades/JustShadeBtn'
import JustShadeBtn from '@/components/shades/JustShadeBtn'
import { getWheelBg } from './colors.utils'

const Page = () => {
  const [state, setState] = useState<IColor & IWheelView>({
    hex: '00ffff',
    hexToDisplay: '00ffff',
    currentMode: 'hsl',
    alpha: 0.5,
    mode: {
      hsl: {
        h: 180,
        s: 1,
        l: 0.5,
      },
      rgb: {
        r: 180,
        g: 100,
        b: 50,
      },
      lab: {
        l: 1,
        a: 1,
        b: 1,
      },
    },
    isDraggingHue: false,
    isDraggingBrightness: false,
    brightness: 0.5,
    color: '#00ffff',
    wheelBg: getWheelBg(),
    picker: {
      coords: {
        x: 0,
        y: -100,
      },
      position: {
        left: 50,
        top: 100,
      },
    },
    brightPicker: {
      position: {
        top: 50,
        left: 100,
      },
      coords: {
        x: 125,
        y: 0,
      },
    },
    wheelRadius: 0,
    alphaPickerRadius: 0,
  })

  const derivedData = useMemo(() => {
    const nearestColor = nearest(state.hex)
    const [h, s, l] = Object.values(state.mode.hsl)
    const shades = {
      noMode: makeShadeNoMode([h, s * 100, l * 100], 30),
      lch: makeShadesWithMode(state.hex, 'lch'),
      lab: makeShadesWithMode(state.hex, 'hsv'),
    }

    return { nearestColor, shades }
  }, [state])

  return (
    <ColorContext.Provider value={{ state, setState }}>
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <div className="flex items-center justify-start gap-2 mb-4">
          <h1 className="w-64 text-lg font-bold line-clamp-1">{derivedData.nearestColor.name}</h1>
          <span
            className="w-16 rounded-md aspect-video"
            style={{ backgroundColor: derivedData.nearestColor.value }}
          ></span>
          <span className="flex items-center w-16 rounded-md aspect-video">
            {state.hex.toUpperCase()}
          </span>
        </div>
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <div className="flex flex-col flex-grow-0 flex-shrink-0 w-full gap-3 overflow-x-scroll lg:w-auto md:flex-row md:overflow-hidden">
            <WheelView />
            <WheelForm />
          </div>
          <section className="w-full lg:flex-1">
            <div className="">
              <div className="container">
                <div className="w-full">
                  <h1>Nuances sans mode</h1>
                  <div className="flex flex-wrap flex-grow-0 flex-shrink-0 gap-y-2 lg:gap-y-0">
                    {derivedData.shades.noMode.map((shade, index) => (
                      <div
                        key={`noModeShade-${shade}-hsl-${index}`}
                        className="w-1/10 shrink-0 grow-0 lg:p-1"
                      >
                        <JustShadeBtn colorHex={shade} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="py-12">
          <div className="container">
            <div className="flex flex-col w-full gap-4 lg:flex-row">
              <div className="md:w-1/2">
                <h1>Nuances en mode LCH</h1>
                <div className="flex flex-wrap flex-grow-0 flex-shrink-0 gap-y-2 lg:gap-y-0">
                  {derivedData.shades.lch.map((shade, index) => (
                    <div
                      key={`noModeShade-${shade}-lch-${index}`}
                      className="w-1/10 shrink-0 grow-0 lg:p-1"
                    >
                      <JustShadeBtn colorHex={shade} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2">
                <h1>Nuances en mode LAB</h1>
                <div className="flex flex-wrap flex-grow-0 flex-shrink-0 gap-y-2 lg:gap-y-0">
                  {derivedData.shades.lab.map((shade, index) => (
                    <div
                      key={`noModeShade-${shade}-lab-${index}`}
                      className="w-1/10 shrink-0 grow-0 lg:p-1"
                    >
                      <JustShadeBtn colorHex={shade} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ColorContext.Provider>
  )
}

export default Page
