'use client'
import React, { useState, useEffect } from 'react'
import { Icon } from '../page'
import Prism from 'prismjs'
import { format as prettier } from 'prettier/standalone'
import pluginHtml from 'prettier/plugins/html'

const DownLoadBtn = () => {
  return (
    <button className="flex items-center justify-center gap-1 px-4 py-2 text-xs border rounded-sm">
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
    </button>
  )
}

const CopyBtn = () => {
  return (
    <button className="flex items-center justify-center gap-1 px-4 py-2 text-xs border rounded-sm">
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
    </button>
  )
}

const Content = (icon: Icon) => {
  const [formatedSvg, setFormatedSvg] = useState('')
  const iconData = {
    h: 64,
    w: 64,
  }

  useEffect(() => {
    prettier(`<svg viewBox="${icon.viewBox}">${icon.svg}</svg>`, {
      parser: 'html',
      plugins: [pluginHtml],
      printWidth: 100,
    })
      .then((data) => {
        const html = getFormattedSVG(data)
        setFormatedSvg(html)
      })
      .catch((e) => console.log(e))
  }, [])

  const getFormattedSVG = (str: string) => {
    const formattedSvg = Prism.highlight(str, Prism.languages.html, 'html')
    return formattedSvg
  }

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl">
      <div className="mb-6">
        <h1 className="text-sm font-medium uppercase">{icon.name.replaceAll('_', ' ')}</h1>
      </div>
      <div className="flex flex-col w-full gap-8 md:flex-row">
        <div className="grid p-2 border rounded-md shadow place-content-center border-gray-50/10">
          <button type="button" className={`w-96 h-96 box-border flex items-center justify-center`}>
            <svg
              className={`h-full w-full fill-current`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox={icon.viewBox ?? '0 0 24 24'}
              dangerouslySetInnerHTML={{ __html: icon.svg }}
            ></svg>
          </button>
        </div>
        <div className="flex flex-col flex-1 overflow-auto">
          <div className="flex items-center justify-center w-full h-12 gap-4">
            <button className="flex items-center justify-center gap-1 px-4 py-2 text-xs border rounded-sm dark:border-gray-50/50">
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
            </button>
            <button className="flex items-center justify-center gap-1 px-4 py-2 text-xs border rounded-sm dark:border-gray-50/50">
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
            </button>
            <button className="flex items-center justify-center gap-1 px-4 py-2 text-xs border rounded-sm dark:border-gray-50/50">
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
            </button>
          </div>
          <div className="flex-1 overflow-hidden rounded-lg bg-cyan-950">
            <div className="w-full h-full">
              <div className="flex items-center justify-between h-12 gap-4 px-2 border-b border-gray-50/10 bg-cyan-900 text-gray-50">
                <div className="flex items-center justify-start h-12 gap-4">
                  <button className="text-sm">Code SVG</button>
                  <button className="text-sm">Code JSX</button>
                  <button className="text-sm">Data URI</button>
                </div>
                <div className="">
                  <button
                    className=""
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      navigator.clipboard
                        .writeText(formatedSvg)
                        .then(() => {})
                        .catch((err) => {
                          console.error('Error in copying text: ', err)
                        })
                    }}
                  >
                    <span></span>
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
                  </button>
                </div>
              </div>
              <div className="w-full text-xs grow-0">
                <div className="p-8 bg-cyan-950">
                  <pre className="overflow-auto ">
                    <code
                      className="break-words whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{ __html: formatedSvg }}
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
              <button key={`h-${size}`} className="relative">
                <svg
                  className={`h-${size} w-${size} fill-current`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={icon.viewBox ?? '0 0 24 24'}
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                ></svg>
                {/* <span className="absolute top-0">{`w-${size} h-${size}`}</span> */}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center col-span-12 py-4 border shadow md:col-span-4 border-gray-50/10">
            {[4, 6, 8, 10, 12, 16].map((size) => (
              <button key={`stroke-${size}`} className="relative">
                <svg
                  className={`h-8 w-8 fill-current`}
                  strokeWidth={size}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={icon.viewBox ?? '0 0 24 24'}
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                ></svg>
                {/* <span className="absolute top-0">{`w-${size} h-${size}`}</span> */}
              </button>
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
                <svg
                  className={`h-full w-full fill-current`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={icon.viewBox ?? '0 0 24 24'}
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                ></svg>
              </span>
              <div className="flex items-center justify-center flex-1 h-full p-2">
                <p className="px-4 text-xs">
                  <span>It distracted by the readable content</span>{' '}
                  <span className="inline">
                    <svg
                      className={`h-4 w-4 fill-current inline`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox={icon.viewBox ?? '0 0 24 24'}
                      dangerouslySetInnerHTML={{ __html: icon.svg }}
                    ></svg>
                  </span>{' '}
                  <span>
                    of a page when looking at its layout.{' '}
                    <span className="inline">
                      <svg
                        className={`h-4 w-4 fill-current inline`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox={icon.viewBox ?? '0 0 24 24'}
                        dangerouslySetInnerHTML={{ __html: icon.svg }}
                      ></svg>
                    </span>{' '}
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
                <span>
                  <svg
                    className={`h-4 w-4 fill-current`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={icon.viewBox ?? '0 0 24 24'}
                    dangerouslySetInnerHTML={{ __html: icon.svg }}
                  ></svg>
                </span>
                <span>Label</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-2 border rounded-lg text-gray-950/50 border-slate-950/50 dark:border-gray-50/10 dark:text-gray-50/50">
                <span>
                  <svg
                    className={`h-4 w-4 fill-current`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={icon.viewBox ?? '0 0 24 24'}
                    dangerouslySetInnerHTML={{ __html: icon.svg }}
                  ></svg>
                </span>
                <span>Label</span>
              </button>
            </div>
          </div>
          <div className="col-span-12 py-4 border shadow md:col-span-4 border-gray-50/10">
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <div className="relative flex">
                <span className="absolute -translate-y-1/2 top-1/2 left-2">
                  <svg
                    className={`h-4 w-4 fill-current`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={icon.viewBox ?? '0 0 24 24'}
                    dangerouslySetInnerHTML={{ __html: icon.svg }}
                  ></svg>
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
                  <svg
                    className={`h-4 w-4 fill-current`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={icon.viewBox ?? '0 0 24 24'}
                    dangerouslySetInnerHTML={{ __html: icon.svg }}
                  ></svg>
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
                <svg
                  className={`h-4 w-4 fill-current inline`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={icon.viewBox ?? '0 0 24 24'}
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                ></svg>
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
              <span>
                <svg
                  className={`h-8 w-8 fill-current inline`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={icon.viewBox ?? '0 0 24 24'}
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                ></svg>
              </span>
              <span>
                <svg
                  className={`h-8 w-8 fill-current inline`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={icon.viewBox ?? '0 0 24 24'}
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                ></svg>
              </span>
              <span>
                <svg
                  className={`h-8 w-8 fill-current inline`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={icon.viewBox ?? '0 0 24 24'}
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                ></svg>
              </span>
              <span>
                <svg
                  className={`h-8 w-8 fill-current inline`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={icon.viewBox ?? '0 0 24 24'}
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                ></svg>
              </span>
              <span>
                <svg
                  className={`h-8 w-8 fill-current inline`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={icon.viewBox ?? '0 0 24 24'}
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                ></svg>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Content
