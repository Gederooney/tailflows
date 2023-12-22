'use client'
import { useState, useMemo } from 'react'
import WheelView from './Wheel'
import WheelForm from './WheelForm'
import ColorContext from './context'
import { Color as IColor, WheelView as IWheelView } from './colors'
import { makeShadeNoMode, makeShadesWithMode, nearest } from './colors.utils'
import JustShadeBtn from '@/components/shades/JustShadeBtn'

function getWheelBg() {
  return `radial-gradient(
    circle at 50% 0%,
    hsla(10, 100%, 50%, 0.7) 0%,
    hsla(10, 0%, 50%, 0) 43%
  ),
  radial-gradient(circle at 69.1% 3.8%, hsla(32.5, 100%, 50%, 0.7) 0%, hsla(32.5, 0%, 50%, 0) 43%),
  radial-gradient(circle at 85.4% 14.6%, hsla(55, 100%, 50%, 0.7) 0%, hsla(55, 0%, 50%, 0) 43%),
  radial-gradient(
    circle at 96.2% 30.9%,
    hsla(77.5, 100%, 50%, 0.7) 0%,
    hsla(77.5, 0%, 50%, 0) 43%
  ),
  radial-gradient(circle at 100% 50%, hsla(100, 100%, 50%, 0.7) 0%, hsla(100, 0%, 50%, 0) 43%),
  radial-gradient(
    circle at 96.2% 69.1%,
    hsla(122.5, 100%, 50%, 0.7) 0%,
    hsla(122.5, 0%, 50%, 0) 43%
  ),
  radial-gradient(circle at 85.4% 85.4%, hsla(145, 100%, 50%, 0.7) 0%, hsla(145, 0%, 50%, 0) 43%),
  radial-gradient(
    circle at 69.1% 96.2%,
    hsla(167.5, 100%, 50%, 0.7) 0%,
    hsla(167.5, 0%, 50%, 0) 43%
  ),
  radial-gradient(circle at 50% 100%, hsla(190, 100%, 50%, 0.7) 0%, hsla(190, 0%, 50%, 0) 43%),
  radial-gradient(
    circle at 30.9% 96.2%,
    hsla(212.5, 100%, 50%, 0.7) 0%,
    hsla(212.5, 0%, 50%, 0) 43%
  ),
  radial-gradient(circle at 14.6% 85.4%, hsla(235, 100%, 50%, 0.7) 0%, hsla(235, 0%, 50%, 0) 43%),
  radial-gradient(
    circle at 3.8% 69.1%,
    hsla(257.5, 100%, 50%, 0.7) 0%,
    hsla(257.5, 0%, 50%, 0) 43%
  ),
  radial-gradient(circle at 0% 50%, hsla(280, 100%, 50%, 0.7) 0%, hsla(280, 0%, 50%, 0) 43%),
  radial-gradient(
    circle at 3.8% 30.9%,
    hsla(302.5, 100%, 50%, 0.7) 0%,
    hsla(302.5, 0%, 50%, 0) 43%
  ),
  radial-gradient(circle at 14.6% 14.6%, hsla(325, 100%, 50%, 0.7) 0%, hsla(325, 0%, 50%, 0) 43%),
  radial-gradient(
    circle at 30.9% 3.8%,
    hsla(347.5, 100%, 50%, 0.7) 0%,
    hsla(347.5, 0%, 50%, 0) 43%
  ),
  hsla(0, 0%, 50%, 1)`
}

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

    console.log(shades)
    return { nearestColor, shades }
  }, [state])

  return (
    <ColorContext.Provider value={{ state, setState }}>
      <div className="max-w-7xl px-4 py-12 mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="w-full lg:w-auto flex flex-row gap-3 flex-shrink-0 flex-grow-0 overflow-x-scroll">
            <WheelView />
            <WheelForm />
          </div>
          <section className="w-full lg:flex-1">
            <div className="">
              <div className="container">
                <div className="w-full">
                  <h1>Nuances sans mode</h1>
                  <div className="flex flex-wrap flex-shrink-0 flex-grow-0 gap-y-2 lg:gap-y-0">
                    {derivedData.shades.noMode.map((shade) => (
                      <div key={`noModeShade-${shade}`} className="w-1/10 shrink-0 grow-0 lg:p-1">
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
            <div className="w-full flex flex-col lg:flex-row gap-4">
              <div className="md:w-1/2">
                <h1>Nuances en mode LCH</h1>
                <div className="flex flex-wrap flex-shrink-0 flex-grow-0 gap-y-2 lg:gap-y-0">
                  {derivedData.shades.lch.map((shade) => (
                    <div key={`noModeShade-${shade}`} className="w-1/10 shrink-0 grow-0 lg:p-1">
                      <JustShadeBtn colorHex={shade} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2">
                <h1>Nuances en mode LAB</h1>
                <div className="flex flex-wrap flex-shrink-0 flex-grow-0 gap-y-2 lg:gap-y-0">
                  {derivedData.shades.lab.map((shade) => (
                    <div key={`noModeShade-${shade}`} className="w-1/10 shrink-0 grow-0 lg:p-1">
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
