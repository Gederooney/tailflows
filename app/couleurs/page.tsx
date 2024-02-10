'use client'
import { useState, useMemo, useEffect, useRef } from 'react'
import WheelView from './Wheel'
import WheelForm from './WheelForm'
import ColorContext from './context'
import { Color as IColor, WheelView as IWheelView } from './colors'
import {
  getTailwindColorConfig,
  makeShadeNoMode,
  makeShadesWithMode,
  nearest,
} from './colors.utils'
import JustShadeBtn from '@/components/shades/JustShadeBtn'
import { getWheelBg, setColors } from './colors.utils'
import { ColorsExemple } from '@/components/demos'
import { ActionButton } from '@/components/button'
import { copyToClipboard } from '@/lib/utils'
import { Section } from '@/components/Newsletter'
import Guide from './Guide'

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
      noMode: makeShadeNoMode([h, s * 100, l * 100], 11),
      lch: makeShadesWithMode(state.hex, 'lch'),
      lab: makeShadesWithMode(state.hex, 'hsv'),
    }

    return { nearestColor, shades }
  }, [state])

  useEffect(() => {
    setColors(derivedData.shades.noMode)
  }, [derivedData])

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
                  <div className="flex flex-row justify-between">
                    <h3>Nuances sans mode</h3>
                    <div className="flex flex-row items-center gap-2">
                      <span className="text-xs">copiez:</span>
                      <ActionButton classname="" sucessChildren={<></>} actionMethod={() => {}}>
                        <span>css</span>
                      </ActionButton>
                      <ActionButton
                        classname=""
                        sucessChildren={
                          <span className="inline-block w-6 text-green-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-auto h-4 fill-current"
                              viewBox="0 -960 960 960"
                            >
                              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                            </svg>
                          </span>
                        }
                        actionMethod={() => {
                          const shadesObj = getTailwindColorConfig(derivedData.shades.noMode)
                          copyToClipboard(
                            JSON.stringify({
                              '--nom-ici': shadesObj,
                            })
                          )
                        }}
                      >
                        <span className="inline-block w-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 54 33"
                            className="w-auto h-3"
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
                  <div className="flex flex-wrap justify-end flex-grow-0 flex-shrink-0 gap-y-2 lg:gap-y-0">
                    {derivedData.shades.noMode.map((shade, index) => (
                      <div
                        key={`noModeShade-${shade}-hsl-${index}`}
                        className="w-[9%] shrink-0 grow-0 lg:p-1"
                      >
                        <JustShadeBtn colorHex={shade} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex flex-row justify-between">
                    <h3>Nuances en mode LCH</h3>
                    <div className="flex flex-row items-center gap-2">
                      <span className="text-xs">copiez:</span>
                      <ActionButton classname="" sucessChildren={<></>} actionMethod={() => {}}>
                        <span>css</span>
                      </ActionButton>

                      <ActionButton
                        classname=""
                        sucessChildren={
                          <span className="inline-block w-6 text-green-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-auto h-4 fill-current"
                              viewBox="0 -960 960 960"
                            >
                              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                            </svg>
                          </span>
                        }
                        actionMethod={() => {
                          const shadesObj = getTailwindColorConfig(derivedData.shades.lch)
                          copyToClipboard(
                            JSON.stringify({
                              '--nom-ici': shadesObj,
                            })
                          )
                        }}
                      >
                        <span className="inline-block w-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 54 33"
                            className="w-auto h-3"
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
                  <div className="flex flex-wrap justify-end flex-grow-0 flex-shrink-0 gap-y-2 lg:gap-y-0">
                    {derivedData.shades.lch.map((shade, index) => (
                      <div
                        key={`lchShade-${shade}-lch-${index}`}
                        className="w-[9%] shrink-0 grow-0 lg:p-1"
                      >
                        <JustShadeBtn colorHex={shade} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex flex-row justify-between">
                    <h3>Nuances en mode LAB</h3>
                    <div className="flex flex-row items-center gap-2">
                      <span className="text-xs">copiez:</span>
                      <ActionButton classname="" sucessChildren={<></>} actionMethod={() => {}}>
                        <span>css</span>
                      </ActionButton>
                      <ActionButton
                        classname=""
                        sucessChildren={
                          <span className="inline-block w-6 text-green-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-auto h-4 fill-current"
                              viewBox="0 -960 960 960"
                            >
                              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                            </svg>
                          </span>
                        }
                        actionMethod={() => {
                          const shadesObj = getTailwindColorConfig(derivedData.shades.lab)
                          copyToClipboard(
                            JSON.stringify({
                              '--nom-ici': shadesObj,
                            })
                          )
                        }}
                      >
                        <span className="inline-block w-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 54 33"
                            className="w-auto h-3"
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
                  <div className="flex flex-wrap justify-end flex-grow-0 flex-shrink-0 gap-y-2 lg:gap-y-0">
                    {derivedData.shades.lab.map((shade, index) => (
                      <div
                        key={`lab-${shade}-lab-${index}`}
                        className="w-[9%] shrink-0 grow-0 lg:p-1"
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
      </div>
      <ColorsExemple />
      <Guide />
      <Section />
    </ColorContext.Provider>
  )
}

export default Page
