'use client'
import React, { useState, useEffect } from 'react'
import { Icon } from '../Content'
import { format as prettier } from 'prettier/standalone'
import Prism from 'prismjs'
import pluginHtml from 'prettier/plugins/html'

import {
  copyToClipboard,
  downloadSVGFile,
  downloadSbgAsPng,
  formatSvg,
  svgToDataURL,
  svgToJSXString,
} from '@/lib/utils'
import { ActionButton } from '@/components/button'

export const highlightCode = (str: string) => {
  const formattedSvg = Prism.highlight(str, Prism.languages.html, 'html')
  return formattedSvg
}

export const formatCode = (str: string) =>
  prettier(str, {
    parser: 'html',
    plugins: [pluginHtml],
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

const Content = (icon: Icon) => {
  const [codeString, setCodeString] = useState<{ svg: string; jsx: string; dataurl: string }>({
    svg: '',
    jsx: '',
    dataurl: '',
  })
  const [activeCodeString, setActiveCodeString] = useState<'svg' | 'jsx' | 'dataurl'>('svg')

  const svg = formatSvg(icon.svg)
  const svgStrings = {
    svg,
    jsx: svgToJSXString(svg),
    dataurl: svgToDataURL(svg),
  }

  useEffect(() => {
    const highlightedSvg = formatCode(svgStrings.svg)
    const highlightedJsx = formatCode(svgStrings.jsx)
    const highlightedDataurl = formatCode(svgStrings.dataurl)

    Promise.all([highlightedSvg, highlightedJsx, highlightedDataurl]).then(
      ([svgResult, jsxResult, dataurlResult]) => {
        const newSvg = svgResult || ''
        const newJsx = jsxResult || ''
        const newDataurl = dataurlResult || ''

        setCodeString((prev) => ({ ...prev, jsx: newJsx, svg: newSvg, dataurl: newDataurl }))
      }
    )
  }, [])

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl text-secondary-600 dark:text-gray-50/50">
      <div className="mb-6">
        <h1 className="text-sm font-medium uppercase">{icon.name.replaceAll('_', ' ')}</h1>
      </div>
      <div className="flex flex-col w-full gap-8 md:flex-row">
        <div className="flex items-center justify-center flex-grow-0 p-2 border rounded-md shadow border-gray-50/10 shrink-0 md:h-96 md:w-96">
          <button
            type="button"
            className={`w-64 h-64 box-border flex items-center justify-center`}
            dangerouslySetInnerHTML={{ __html: svg }}
          ></button>
        </div>
        <div className="flex flex-col flex-1 min-h-[16rem] max-h-[23rem]">
          <div className="flex flex-wrap items-center justify-center flex-grow-0 flex-shrink-0 w-full gap-4 my-4 md:h-12">
            <ActionButton
              classname="flex items-center justify-center gap-1 px-4 py-2 text-xs border rounded-md border-secondary-600 bg-secondary-600 text-gray-50 min-w-[10rem]"
              actionMethod={() => {
                copyToClipboard(svg)
              }}
              sucessChildren={<span className="text-xs">Copié !</span>}
            >
              <span className="inline-block w-4 h-4">
                <svg
                  className="w-full h-full fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
                </svg>
              </span>
              <span>Copier SVG</span>
            </ActionButton>
            <ActionButton
              classname="flex items-center justify-center gap-1 px-4 py-2 text-xs border rounded-md border-secondary-600 min-w-[10rem]"
              sucessChildren={<span className="text-xs">Téléchargé !</span>}
              actionMethod={() => {
                downloadSVGFile(svg, icon.name)
              }}
            >
              <span className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                  <path d="M7 11l5 5l5 -5" />
                  <path d="M12 4l0 12" />
                </svg>
              </span>
              <span>Télécharger SVG</span>
            </ActionButton>
            <ActionButton
              classname="flex items-center justify-center gap-1 px-4 py-2 text-xs border rounded-md border-secondary-600 bg-secondary-600 text-gray-50 min-w-[10rem]"
              sucessChildren={<span className="text-xs">Téléchargé !</span>}
              actionMethod={() => {
                downloadSbgAsPng(svg, icon.name)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <path d="M7 11l5 5l5 -5" />
                <path d="M12 4l0 12" />
              </svg>
              <span>Télécharger PNG</span>
            </ActionButton>
          </div>
          <div className="flex-1 overflow-hidden rounded-lg bg-secondary-700">
            <div className="w-full h-full">
              <div className="flex items-center justify-between h-12 gap-4 pr-2 border-b border-gray-50/10 bg-secondary-600 text-gray-50">
                <div className="relative flex items-center justify-start flex-grow-0 flex-shrink-0 h-12 gap-0">
                  <button
                    className={`relative z-20 inline-block w-20 text-xs h-full hover:bg-secondary-400/50 ${
                      activeCodeString === 'svg' ? 'disabled' : null
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveCodeString((prev) => 'svg')
                    }}
                  >
                    Code SVG
                  </button>
                  <button
                    className={`relative z-20 inline-block w-20 text-xs h-full hover:bg-secondary-400/50 ${
                      activeCodeString === 'jsx' ? 'disabled' : null
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveCodeString((prev) => 'jsx')
                    }}
                  >
                    Code JSX
                  </button>
                  <button
                    className={`relative z-20 inline-block w-20 text-xs h-full hover:bg-secondary-400/50 ${
                      activeCodeString === 'dataurl' ? 'disabled' : null
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveCodeString((prev) => 'dataurl')
                    }}
                  >
                    Data URL
                  </button>
                  <span
                    className={`absolute top-0 left-0 z-10 inline-block w-20 h-full bg-secondary-400 transition-transform duration-100 ease-in ${
                      activeCodeString === 'svg'
                        ? 'translate-x-0'
                        : activeCodeString === 'jsx'
                          ? 'translate-x-20'
                          : activeCodeString === 'dataurl'
                            ? 'translate-x-40'
                            : null
                    }`}
                  ></span>
                </div>
                <div className="">
                  <ActionButton
                    classname=""
                    actionMethod={() => {
                      copyToClipboard(svgStrings[activeCodeString])
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
              <div className="w-full text-xs grow-0">
                <div className="p-8 overflow-scroll bg-secondary-700">
                  <pre className="overflow-auto">
                    <code
                      className="text-[#7dd3fc] break-words whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{ __html: codeString[activeCodeString] }}
                    ></code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="my-8">
        <h1 className="text-sm font-medium uppercase">Exemples de tailles</h1>
        <div className="grid grid-cols-12 gap-2 ">
          <div className="flex items-center justify-center col-span-12 gap-2 px-8 overflow-scroll border shadow md:col-span-8 border-gray-50/10">
            {[4, 6, 8, 10, 12, 16, 24, 48].map((size) => (
              <button key={`h-taille-diff-${size}`} className="relative">
                <span
                  className={`h-${size} w-${size} fill-current inline-block`}
                  dangerouslySetInnerHTML={{ __html: svg }}
                ></span>
                {/* <span className="absolute top-0">{`w-${size} h-${size}`}</span> */}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center col-span-12 gap-2 py-4 border shadow md:col-span-4 border-gray-50/10">
            {[4, 6, 8, 10, 12, 16].map((size) => (
              <button
                key={`five-icons-stroke-${size}`}
                className={`relative inline-block h-${size}`}
                dangerouslySetInnerHTML={{ __html: svg }}
              ></button>
            ))}
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-sm font-medium uppercase">Exemples d'utilisations</h1>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 p-6 border shadow md:col-span-4 border-gray-50/10">
            <div className="flex flex-row w-full h-full border bg-gray-100/50 dark:bg-transparent dark:border-gray-50/10">
              <span className="block w-1/4 p-4 border-r dark:border-gray-50/10">
                <span
                  className={`h-full w-full fill-current inline-block`}
                  dangerouslySetInnerHTML={{ __html: svg }}
                ></span>
              </span>
              <div className="flex items-center justify-center flex-1 h-full p-2">
                <p className="px-4 text-xs">
                  <span>It distracted by the readable content</span>{' '}
                  <span
                    className="inline-block w-4 h-4"
                    dangerouslySetInnerHTML={{ __html: svg.replace('class="', 'class="inline ') }}
                  ></span>{' '}
                  <span>
                    of a page when looking at its layout.{' '}
                    <span
                      className="inline-block w-4 h-4"
                      dangerouslySetInnerHTML={{ __html: svg.replace('class="', 'class="inline ') }}
                    ></span>{' '}
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters,
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 py-4 border shadow md:col-span-4 border-gray-50/10">
            <div className="flex items-center justify-center w-full h-full gap-4">
              <button className="flex items-center justify-center gap-2 px-6 py-2 rounded-lg bg-slate-950/50 text-gray-50 dark:text-gray-50/50 dark:border dark:border-gray-50/10">
                <span
                  className="inline-block w-4 h-4 text-current"
                  dangerouslySetInnerHTML={{ __html: svg }}
                ></span>
                <span>Label</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-2 border rounded-lg text-gray-950/50 border-slate-950/50 dark:border-gray-50/10 dark:text-gray-50/50">
                <span
                  className="inline-block w-4 h-4 text-current"
                  dangerouslySetInnerHTML={{ __html: svg }}
                ></span>
                <span>Label</span>
              </button>
            </div>
          </div>
          <div className="col-span-12 py-4 border shadow md:col-span-4 border-gray-50/10">
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <div className="relative flex">
                <span className="absolute -translate-y-1/2 top-1/2 left-2">
                  <span
                    className="inline-block w-4 h-4 text-current"
                    dangerouslySetInnerHTML={{ __html: svg }}
                  ></span>
                </span>
                <input
                  className="w-full h-8 pl-8 border rounded-sm border-black/10 dark:bg-transparent dark:border-gray-50/10"
                  value="exemple"
                  type="text"
                  readOnly
                  disabled
                />
              </div>
              <div className="relative flex">
                <span className="absolute -translate-y-1/2 top-1/2 left-2">
                  <span
                    className="inline-block w-4 h-4 text-current"
                    dangerouslySetInnerHTML={{ __html: svg }}
                  ></span>
                </span>
                <input
                  className="w-full h-8 pl-8 border rounded-sm border-black/10 dark:bg-transparent dark:border-gray-50/10"
                  value="exemple"
                  type="password"
                  readOnly
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 py-4 border shadow md:col-span-6 border-gray-50/10">
            <div className="w-full p-4">
              <h2 className="flex items-center gap-2 font-bold">
                <span
                  className="inline-block w-4 h-4 text-current"
                  dangerouslySetInnerHTML={{ __html: svg }}
                ></span>
                <span>Content here, content here</span>
              </h2>
              <p className="text-xs font-light">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            </div>
          </div>
          <div className="col-span-12 py-4 border shadow md:col-span-6 border-gray-50/10">
            <div className="flex items-center justify-center h-full gap-4">
              {[1, 2, 3, 4, 5].map((index) => (
                <span
                  key={`five-icons-two-${index}`}
                  className="inline-block w-8 h-8"
                  dangerouslySetInnerHTML={{ __html: svg }}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Content
