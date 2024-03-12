'use client'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Toggle } from '@/components/inputs'
import { v4 } from 'uuid'
import validateColor from '@/lib/validate-color'
import { highlightCode } from '../icons/search/Content'
import { format as prettier } from 'prettier/standalone'
import { ActionButton } from '@/components/button'
import { copyToClipboard } from '@/lib/utils'
import exemples from '@/data/shadows.json'
import Guide from './Guide'

const config = `/** @type {import('tailwindcss').Config} */
module.exports = {
	 theme: {
		extend: {
			boxShadow: {
				custom: "<--shadow-->",
			}
		}
	 }
}

// html
<div className="shadow-custom"></div>
`

const html = `
<div className="shadow-<--inline-->"></div>
`

const css = `
:root{
	--custom-box-shadow: <--css-->;
}
.custom{
	box-shadow: var(--custom-box-shadow);
}

// ou
.custom {
	box-shadow: <--css-->;
}

// html
<div className="custom"></div>
<div style="box-shadow: <--css-->;"></div>
<div style="box-shadow: var(--custom-box-shadow);"></div>
`

const formatCode = (str: string) =>
  prettier(str, {
    printWidth: 100,
  })
    .then((data) => {
      const html = highlightCode(data)
      return html
    })
    .catch((e) => {
      console.log(e)
      return null
    })

type Shadow = {
  id: string
  color: string
  x: number
  y: number
  spread: number
  blur: number
  opacity: number
  inset: boolean
}

interface ControlsProps {
  onChange: (shadow: Shadow) => void
  onDelete: () => void
  shadow: Shadow
}

interface ControlsNumberInputProps {
  label?: string
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  defaultValue?: number
  style?: string
  initialValue?: string
}

function hexColorWithOpacity(hexColor: string, opacity: number) {
  opacity = Math.max(0, Math.min(1, opacity))

  const alphaHex = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0')

  return hexColor + alphaHex
}

const ControlsNumberInput = ({
  label,
  onChange,
  min,
  max,
  step,
  style,
  initialValue,
}: ControlsNumberInputProps) => {
  const [value, setValue] = useState(initialValue ?? '0')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setValue(value)
    if (isNaN(+value) || (min !== undefined && +value < min)) {
      if (min !== undefined && min <= 0) {
        onChange(0)
      } else if (min !== undefined) {
        onChange(min)
      }
      return
    } else if (max !== undefined && +value > max) {
      onChange(max)
      return
    }
    onChange(+value)
  }
  return (
    <div className="">
      <div className="">
        {label ? <label htmlFor={`input-Number-${label}`}>{label}</label> : null}
        <input
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const target = e.target as HTMLInputElement
              target.blur()
              setValue(+target.value + '')
            }
          }}
          onBlur={(e) => {
            const target = e.target as HTMLInputElement
            if (isNaN(+value) || (min !== undefined && +value < min)) {
              if (min !== undefined && min <= 0) {
                setValue('0')
              } else if (min !== undefined) {
                setValue(min + '')
              }
              return
            } else if (max !== undefined && +value > max) {
              setValue(max + '')
              return
            }
            setValue(+target.value + '')
          }}
          name={label}
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          className={
            style ??
            'text-center w-full h-full bg-transparent border border-secondary-950/10 text-xs rounded-md dark:border-gray-50/10'
          }
        />
      </div>
    </div>
  )
}

const Controls = ({ onChange, shadow, onDelete }: ControlsProps) => {
  const [shadowState, setShadowState] = useState<Shadow>(shadow)

  useEffect(() => {
    onChange(shadowState)
  }, [shadowState, onChange])

  return (
    <div className="p-2 space-y-4 border rounded-md border-gray-900/10 dark:border-gray-50/10">
      <div className="pb-2 border-b dark:border-gray-50/10">
        <div className="flex items-center justify-between">
          <Toggle
            label="Intérieur"
            onChange={(value: boolean) => {
              setShadowState((prev) => ({ ...prev, inset: value }))
            }}
          />
          <button
            className="w-6 h-6 text-red-600"
            onClick={(e) => {
              e.preventDefault()
              onDelete()
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full fill-current "
              viewBox="0 -960 960 960"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 ">
        <div className="relative w-20 ">
          <span className="absolute text-xs -translate-y-1/2 pointer-events-none top-1/2 left-1">
            x:
          </span>
          <ControlsNumberInput
            min={-100}
            max={100}
            step={1}
            onChange={(value) => {
              setShadowState((prev) => ({ ...prev, x: value }))
            }}
            initialValue={'' + shadowState.x}
          />
        </div>
        <div className="relative w-20 ">
          <span className="absolute text-xs -translate-y-1/2 pointer-events-none top-1/2 left-1">
            y:
          </span>
          <ControlsNumberInput
            min={-100}
            max={100}
            step={1}
            initialValue={'' + shadowState.y}
            onChange={(value) => {
              setShadowState((prev) => ({ ...prev, y: value }))
            }}
          />
        </div>
        <div className="relative w-20 ">
          <span className="absolute text-xs -translate-y-1/2 pointer-events-none top-1/2 left-1">
            flou:
          </span>
          <ControlsNumberInput
            min={0}
            max={100}
            step={1}
            initialValue={'' + shadowState.blur}
            onChange={(value) => {
              setShadowState((prev) => ({ ...prev, blur: value }))
            }}
            style="text-center w-full h-full bg-transparent border pl-8 border-secondary-950/10 rounded-md text-xs block dark:border-gray-50/10"
          />
        </div>
        <div className="relative w-30 ">
          <span className="absolute text-xs -translate-y-1/2 pointer-events-none top-1/2 left-1">
            prop:
          </span>
          <ControlsNumberInput
            min={-100}
            max={100}
            step={1}
            initialValue={'' + shadowState.spread}
            onChange={(value) => {
              setShadowState((prev) => ({ ...prev, spread: value }))
            }}
            style="text-center w-full h-full bg-transparent border pl-10 border-secondary-950/10 rounded-md text-xs dark:border-gray-50/10"
          />
        </div>
      </div>
      <div className="pt-2 border-t dark:border-gray-50/10">
        <div className="flex items-center gap-2">
          <div className="box-border relative inline-block w-6 h-6 overflow-hidden border rounded-sm dark:border-gray-50/10">
            <span
              className="inline-block w-1/2 h-6 m-0 pointer-events-none"
              style={{ backgroundColor: shadowState.color }}
            ></span>
            <span
              className="inline-block w-1/2 h-6 m-0 bg-transparent pointer-events-none"
              style={{ backgroundColor: shadowState.color, opacity: shadowState.opacity / 100 }}
            >
              {' '}
            </span>
            <input
              className="absolute inset-0 opacity-0 cursor-pointer"
              type="color"
              name=""
              onChange={(e) => {
                const target = e.target as HTMLInputElement
                setShadowState((prev) => ({ ...prev, color: target.value }))
              }}
            />
          </div>
          <div className="inline-block w-24">
            <input
              type="text"
              name=""
              id=""
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const value = (e.target as HTMLInputElement).value
                  const isValidColor = validateColor(value)
                  const color = isValidColor ? value : '#000000'
                  onChange({
                    ...shadowState,
                    color,
                  })

                  setShadowState({ ...shadowState, color })
                  ;(e.target as HTMLInputElement).blur()
                }
              }}
              onChange={(e) => {
                setShadowState((prev) => ({ ...prev, color: e.target.value }))
              }}
              value={shadowState.color}
              className="w-full h-full text-xs text-center bg-transparent border rounded-md border-secondary-950/10 dark:border-gray-50/10"
            />
          </div>

          <div className="relative w-32 ">
            <span className="absolute text-xs -translate-y-1/2 pointer-events-none top-1/2 left-1">
              Opacité:
            </span>
            <ControlsNumberInput
              min={0}
              max={100}
              step={1}
              initialValue={'' + shadowState.opacity}
              onChange={(value) => {
                setShadowState((prev) => ({ ...prev, opacity: value }))
              }}
              style="text-center w-full h-full bg-transparent border pl-14 border-secondary-950/10 rounded-md text-xs dark:border-gray-50/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const getCssShadowString = (shadows: Shadow[]) => {
  return shadows
    .map(
      (s) =>
        `${s.inset ? 'inset' : ''} ${s.x}px ${s.y}px ${s.blur}px ${
          s.spread
        }px ${hexColorWithOpacity(s.color, s.opacity / 100)}`
    )
    .join(',')
    .trim()
}

const Content = () => {
  const [shadows, setShadows] = useState<Shadow[]>([
    {
      id: v4(),
      color: '#000000',
      x: 0,
      y: 0,
      blur: 0,
      spread: 0,
      opacity: 25,
      inset: false,
    },
  ])

  const [activeCodeString, setActiveCodeString] = useState<'config' | 'html' | 'css'>('config')

  const handleChange = useCallback((s: Shadow) => {
    setShadows((prev) => {
      return prev.map((shadow) => {
        if (shadow.id === s.id) {
          return { ...shadow, ...s }
        }
        return shadow
      })
    })
  }, [])

  const cssString = useMemo(() => getCssShadowString(shadows), [shadows])
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 z-0 bg-heroPatternLight dark:bg-heroPatternDark"></div>
        <div className="bg-gradient-to-b from-transparent to-white to-[90%] py-12 space-y-8 dark:to-secondary-900 relative z-[1]">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
            <a
              href="#examples"
              className="inline-flex items-center justify-between px-1 py-1 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full mb-7 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
                voir
              </span>{' '}
              <span className="text-sm font-medium">plus de 180 exemples</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <h1 className="max-w-3xl mx-auto mb-4 text-4xl font-extrabold leading-none tracking-tight text-secondary-950 md:text-5xl lg:text-6xl dark:text-gray-50">
              Créez facilement votre box shadow avec notre{' '}
              <span className="sr-only">outil gratuit</span>
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Lancez-vous dans la personnalisation de box shadow avec notre générateur intuitif.
              Créez des ombres uniques pour vos projets, et obtenez instantanément la configuration
              pour TailwindCSS, accompagnée d'exemples pratiques.{' '}
              <span className="sr-only">
                Préférez-vous utiliser du HTML ou du CSS directement ? Copiez simplement le code
                généré pour votre box shadow et intégrez-le à votre design en un clin d'œil.
                Commencez maintenant à donner vie à vos idées avec style.
              </span>
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-[90rem] mx-auto">
        <div className="px-4" id="generate">
          <div className="grid box-shadow-grid">
            <section className="py-16 space-y-4 overflow-scroll hide-scrollbar grid-a">
              <div className="flex items-center gap-2">
                <span>Ajouter une couche: </span>
                <button
                  className="flex items-center justify-center font-medium text-center border rounded-full h-9 mx9auto w-9 bg-secondary-50 hover:bg-secondary-600 text-gray-50 dark:border-primary-50/10"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setShadows((prev) => [
                      {
                        id: v4(),
                        color: '#000000',
                        x: 0,
                        y: 0,
                        blur: 0,
                        spread: 0,
                        opacity: 25,
                        inset: false,
                      },
                      ...prev,
                    ])
                  }}
                >
                  <span className="inline-block w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full fill-current "
                      viewBox="0 -960 960 960"
                    >
                      <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="flex overflow-scroll flew-row hide-scrollbar lg:flex-col">
                {shadows.map((s, index) => (
                  <div className="p-2" key={s.id + index}>
                    <Controls
                      onChange={handleChange}
                      onDelete={() => {
                        if (shadows.length === 1) return
                        setShadows((prev) => prev.filter((_, i) => i !== index))
                      }}
                      shadow={s}
                    />
                  </div>
                ))}
              </div>
            </section>
            <section className="grid-b max-h-[500px] py-16 md:sticky top-0">
              <div className="">
                <div className="max-w-[300px] mx-auto">
                  <div
                    className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                    style={{
                      boxShadow: cssString,
                    }}
                  >
                    <img
                      className="w-full h-auto rounded-t-xl"
                      src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
                      alt=""
                    />
                    <div className="p-4 md:p-5">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        Card title
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <p className="mt-5 text-xs text-gray-500 dark:text-gray-500">
                        Last updated 5 mins ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="md:sticky top-0 grid-c max-h-[700px]">
              <div className="h-full py-16">
                <p className="text-sm font-bold">Tailwind.config.js</p>
                <div className="h-[400px]">
                  <div className="relative w-full h-full overflow-auto text-sm rounded-xl">
                    <div className="absolute top-0 left-0 z-10 w-full h-12 bg-secondary-600">
                      <div className="flex justify-between w-full h-full">
                        <div className="relative flex items-center justify-start flex-grow-0 flex-shrink-0 h-12 gap-0 text-gray-50">
                          <button
                            className={`relative z-20 inline-block text-center w-20 text-xs h-full hover:bg-secondary-400/50 `}
                            onClick={(e) => {
                              e.preventDefault()
                              setActiveCodeString((prev) => 'config')
                            }}
                          >
                            config.js
                          </button>
                          <button
                            className={`relative text-center z-20 inline-block w-20 text-xs h-full hover:bg-secondary-400/50 `}
                            onClick={(e) => {
                              e.preventDefault()
                              setActiveCodeString((prev) => 'html')
                            }}
                          >
                            html
                          </button>
                          <button
                            className={`relative text-center z-20 inline-block w-20 text-xs h-full hover:bg-secondary-400/50 `}
                            onClick={(e) => {
                              e.preventDefault()
                              setActiveCodeString((prev) => 'css')
                            }}
                          >
                            css
                          </button>
                          <span
                            className={`absolute top-0 left-0 z-10 inline-block w-20 h-full bg-secondary-400 transition-transform duration-100 ease-in ${
                              activeCodeString === 'config'
                                ? 'translate-x-0'
                                : activeCodeString === 'html'
                                  ? 'translate-x-20'
                                  : activeCodeString === 'css'
                                    ? 'translate-x-40'
                                    : null
                            }`}
                          ></span>
                        </div>
                        <div className="flex items-center h-full px-2 text-gray-50">
                          <ActionButton
                            classname=""
                            actionMethod={() => {
                              let str: string

                              if (activeCodeString === 'config') str = `"custom": "${cssString}"`
                              else if (activeCodeString === 'html')
                                str = `shadow-[${cssString.replaceAll(' ', '_')}]`
                              else str = `box-shadow: ${cssString};`
                              copyToClipboard(str)
                            }}
                            sucessChildren={<span className="text-xs">copié !</span>}
                          >
                            <span className="inline-block w-4 h-4">
                              <svg
                                className="w-full h-full fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
                                .{' '}
                              </svg>
                            </span>
                          </ActionButton>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-full p-3 overflow-scroll bg-secondary-700">
                      <pre className="mt-12 overflow-auto">
                        <code className="text-[#7dd3fc] break-words whitespace-pre-wrap">
                          {activeCodeString === 'config'
                            ? config.replace('<--shadow-->', cssString)
                            : activeCodeString === 'html'
                              ? html.replace('<--inline-->', `[${cssString.replaceAll(' ', '_')}]`)
                              : css.replaceAll('<--css-->', cssString)}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <Guide />

        <section className="">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
            <a
              href="#generate"
              className="inline-flex items-center justify-between px-1 py-1 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full mb-7 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
                Nouveau
              </span>{' '}
              <span className="text-sm font-medium">Créez le votre avec le générateur</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-secondary-950 md:text-5xl lg:text-6xl dark:text-gray-50">
              plus de 180 exemple de shadows
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Ici, nous avons pris la peine de faire la plus longue liste de box shadow avec
              tailwindcss. Trouvez celui qui vous convient le mieux et copiez le code css, html ou
              config tailwindcss selon vos choix.
            </p>
          </div>

          <div
            className="flex flex-wrap items-center justify-center w-full gap-32 mb-16"
            id="examples"
          >
            {exemples.map((shadow, index) => {
              return (
                <div
                  key={shadow.shadow + index}
                  className="relative flex flex-col items-center justify-center w-40 h-40 border rounded-md cursor-pointer border-gray-950/10 dark:border-gray-50/10 group"
                  style={{
                    boxShadow: shadow.vanillaCSS,
                  }}
                >
                  <div className="flex flex-col items-center justify-center gap-1 sr-only group-hover:not-sr-only">
                    <ActionButton
                      actionMethod={() => {
                        copyToClipboard(`box-shadow: ${shadow.vanillaCSS}`)
                      }}
                      sucessChildren={<span>Copié!</span>}
                      classname="block px-3 py-1 text-xs border rounded-md bg-secondary-500 text-gray-50 dark:border-gray-50/10"
                    >
                      <span>css</span>
                    </ActionButton>
                    <ActionButton
                      actionMethod={() => {
                        copyToClipboard(`custom: "${shadow.vanillaCSS}",`)
                      }}
                      sucessChildren={<span>Copié!</span>}
                      classname="block px-3 py-1 text-xs border rounded-md bg-secondary-500 text-gray-50 dark:border-gray-50/10"
                    >
                      <span>Config</span>
                    </ActionButton>
                    <ActionButton
                      actionMethod={() => {
                        copyToClipboard(`shadow-${shadow.shadow}`)
                      }}
                      sucessChildren={<span>Copié!</span>}
                      classname="block px-3 py-1 text-xs border rounded-md bg-secondary-500 text-gray-50 dark:border-gray-50/10"
                    >
                      <span>Class</span>
                    </ActionButton>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}

export default Content
