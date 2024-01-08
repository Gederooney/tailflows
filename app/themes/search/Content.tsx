'use client'

import DonutChart from '@/components/DonutChart'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Theme, ReposInfos } from 'types'
import chroma from 'chroma-js'
import Link from 'next/link'

const formatDateToFrench = (dateString: string) => {
  const months = [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novembre',
    'décembre',
  ]

  const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']

  const date = new Date(dateString)
  const dayName = days[date.getDay()]
  const day = String(date.getDate()).padStart(2, '0') // pad with leading zero
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return `${dayName} ${day} ${month} ${year}`
}

const Preview = ({ siteUrl, handleClose }: { siteUrl: string; handleClose: () => void }) => (
  <section className="fixed inset-0 z-50 bg-gray-50">
    <header className="" style={{ height: '50px' }}>
      <div className="h-full">
        <div className="flex items-center justify-center h-full gap-2">
          <button className="flex w-8 h-8 p-2 border rounded-md shadow">
            <svg viewBox="0 0 576 512" className="w-full h-full fill-current">
              <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z" />
            </svg>
          </button>
          <button className="flex w-8 h-8 p-2 border rounded-md shadow">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
              <path d="M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z" />
            </svg>
          </button>
          <button className="flex w-8 h-8 p-2 border rounded-md shadow">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
    <div className="relative w-full shadow" style={{ height: 'calc(100% - 50px)' }}>
      <iframe
        src={siteUrl}
        title="title"
        className="rounded-t-2xl"
        width="100%"
        height="100%"
        style={{ height: '100%', width: '100%' }}
      ></iframe>
      <button
        className="absolute top-0 right-0 w-8 h-8 p-2 -translate-x-1/2 -translate-y-1/2 border rounded-full bg-gray-50 border-secondary-950/20"
        onClick={(e) => {
          handleClose()
          addBodyOverflow()
        }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
    </div>
  </section>
)

const removeBodyOverflow = () => {
  const body = document.querySelector('body')
  if (body) body.style.overflow = 'hidden'
}

const addBodyOverflow = () => {
  const body = document.querySelector('body')
  if (body) body.style.overflow = 'auto'
}
const Content = (theme: Theme & { reposInfos: ReposInfos }) => {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <>
      <section className="my-12">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="relative flex flex-col gap-8 md:flex-row">
            <div className="w-full md:flex-1 md:px-12">
              <div className="w-full">
                <Image
                  className="object-cover w-full h-auto"
                  src={theme.images[0]}
                  height={1600}
                  width={1200}
                  alt={theme.title}
                />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 my-4 md: ">
                <Link
                  href={theme.download_link}
                  download={theme.title}
                  className="flex items-center gap-2 px-6 py-2 border rounded-md shadow"
                >
                  <span>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <g>
                        <rect fill="none" className="w-full h-full" />
                      </g>
                      <g>
                        <path d="M5,20h14v-2H5V20z M19,9h-4V3H9v6H5l7,7L19,9z" />
                      </g>
                    </svg>
                  </span>
                  <span>Télécharger</span>
                </Link>
                <Link
                  target="_blank"
                  href={theme.repos}
                  className="flex items-center gap-2 px-6 py-2 border rounded-md shadow"
                >
                  <span>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </span>
                  <span>Repos</span>
                </Link>
                <button
                  className="flex items-center gap-2 px-6 py-2 border rounded-md shadow"
                  onClick={(e) => {
                    e.stopPropagation()
                    removeBodyOverflow()
                    setShowPreview(true)
                  }}
                >
                  <span>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                  </span>
                  <span>Démos</span>
                </button>
                <Link
                  target="_blank"
                  href={theme.preview_link}
                  className="flex items-center gap-2 px-6 py-2 border rounded-md shadow"
                >
                  <span>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                    </svg>
                  </span>
                  <span>Site web</span>
                </Link>
              </div>
              <div className="grid w-full grid-cols-2 gap-4 my-32">
                {theme.images.slice(1).map((img) => (
                  <Image
                    key={img}
                    className="object-cover w-full h-auto basis-1/2"
                    src={img}
                    height={1600}
                    width={1200}
                    alt={theme.title}
                  />
                ))}
              </div>
            </div>
            <div className="sticky top-0 w-full text-sm grow-0 shrink-0 md:w-1/3 md:p-4">
              <div className="w-full pb-4 mb-4 border-b border-secondary-50/10 dark:border-primary-50/10">
                <h2 className="text-lg font-bold">{theme.title}</h2>
                <div className="flex gap-4 my-2">
                  <span className="font-medium">Auteur:</span>
                  <span>{theme.author}</span>
                </div>
                <div className="flex gap-4 my-2">
                  <span className="font-medium">License:</span>
                  <span>{theme.reposInfos?.license.key.toUpperCase()}</span>
                </div>
                <div className="flex items-center gap-4 my-2">
                  <span className="font-medium">Category:</span>
                  <div className="flex flex-grow-0 flex-shrink-0 gap-2 overflow-auto flex-nowrap">
                    {theme.categories.map((key) => (
                      <div
                        key={`${theme.id + key}`}
                        className="px-2 py-1 bg-gray-100 rounded-md dark:bg-secondary-600"
                      >
                        <span className="text-xs font-light">{key}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 my-2">
                  <span className="font-medium">Stack:</span>
                  <div className="flex flex-grow-0 flex-shrink-0 gap-2 overflow-auto flex-nowrap">
                    {theme.frameworks.map((key) => (
                      <div
                        key={`${theme.id + key}`}
                        className="px-2 py-1 bg-gray-100 rounded-md dark:bg-secondary-600"
                      >
                        <span className="text-xs font-light">{key}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center w-full gap-4 my-2 ">
                  <span className="font-medium">Couleurs:</span>
                  <div className="flex-1 overflow-auto hide-scrollbar">
                    <div className="flex flex-grow-0 flex-shrink-0 w-full gap-2">
                      {theme.colors.map((key) => {
                        const color = chroma(key)
                        return (
                          <div
                            key={`${theme.id + key}`}
                            className={`px-2 py-1 rounded-md text-xs font-thin ${
                              color.luminance() > 0.5 ? 'text-secondary-950' : 'text-primary-50'
                            }`}
                            style={{
                              backgroundColor: key,
                            }}
                          >
                            <span className="text-xs font-light">{key}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-4 mb-4 border-b border-secondary-50/10 dark:border-primary-50/10">
                <div className="flex items-center gap-4 my-2">
                  <DonutChart
                    data={[
                      ...Object.keys(theme.reposInfos?.languages ?? []).map((key) => ({
                        key,
                        value: theme.reposInfos?.languages[key],
                      })),
                    ]}
                  />
                </div>
              </div>
              <div className="pb-4 mb-4 border-b border-secondary-50/10 dark:border-primary-50/10">
                <h2 className="">Description:</h2>
                <p className="text-sm font-light">{theme.description[0]}</p>
              </div>
              <div className="pb-4 mb-4 select-none">
                <h2 className="mb-6 font-medium">Informations dur le repos:</h2>
                <div className="">
                  <div className="flex items-center gap-2 text-current">
                    <span>
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                      </svg>
                    </span>
                    <span>{theme.reposInfos?.stargazers_count} Étoiles</span>
                  </div>
                  <div className="flex items-center gap-2 text-current">
                    <span>
                      <svg viewBox="0 0 576 512" className="w-4 h-4 fill-current">
                        <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                      </svg>
                    </span>
                    <span>{theme.reposInfos?.subscribers_count} Followers</span>
                  </div>
                  <div className="flex items-center gap-2 text-current">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                        strokeWidth="1.75"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="12" cy="18" r="2"></circle>
                        <circle cx="7" cy="6" r="2"></circle>
                        <circle cx="17" cy="6" r="2"></circle>
                        <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2"></path>
                        <line x1="12" y1="12" x2="12" y2="16"></line>
                      </svg>
                    </span>
                    <span>{theme.reposInfos?.forks_count} Forks</span>
                  </div>
                  <div className="flex items-center gap-2 text-current">
                    <span>
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                      </svg>
                    </span>
                    <span>{theme.reposInfos?.contributors_count} Contributeurs</span>
                  </div>
                  <div className="my-6">
                    <h2 className="mb-6 font-medium">Activités</h2>
                    <div className="flex items-center justify-between">
                      <span>Création:</span>
                      <span>{formatDateToFrench(theme.reposInfos?.created_at ?? '')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Derniere mise a jour:</span>
                      <span>{formatDateToFrench(theme.reposInfos?.updated_at ?? '')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Dernier push:</span>
                      <span>{formatDateToFrench(theme.reposInfos?.pushed_at ?? '')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-6 mx-auto max-w-7xl"></div>
      </section>
      {showPreview ? (
        <Preview
          siteUrl={theme.preview_link}
          handleClose={() => {
            setShowPreview(false)
          }}
        />
      ) : null}
    </>
  )
}

export default Content
