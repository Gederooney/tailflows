'use client'
import React from 'react'
import StopBar from './StopBar'
import useLinearGradient from '../hooks/useLinearGradient'
import { ActionButton } from '@/components/button'
import { copyToClipboard } from '@/lib/utils'

const Linear = () => {
  const { dragger, handleDrag, circleRef, draggerRef, centerRef, background } = useLinearGradient()

  return (
    <section className="flex w-full h-full" style={{ backgroundImage: background }}>
      <div className="absolute top-0 left-0 flex items-center gap-2 p-2">
        <ActionButton
          classname="flex items-center gap-2 px-2 py-1.5 rounded-md  border border-gray-50/10 backdrop-blur-lg bg-gray-50/30 text-gray-50 text-xs"
          actionMethod={() => copyToClipboard(`background-image: ${background};`)}
          sucessChildren={<span>Copié!!</span>}
        >
          <span>Copier</span>
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

        <ActionButton
          classname="flex items-center gap-2 px-2 py-1.5 rounded-md  border border-gray-50/10 backdrop-blur-lg bg-gray-50/30 text-gray-50 text-xs"
          actionMethod={() => copyToClipboard(`bg-[${background.replaceAll(' ', '_')}]`)}
          sucessChildren={<span>Copié!!</span>}
        >
          <span>Tailwind css</span>
          <span className="inline-block w-4 h-4">
            <svg className="w-full h-full" fill="none" viewBox="0 0 54 33">
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
      <div
        className="relative p-8 mx-auto my-auto aspect-square"
        ref={circleRef}
        style={{ height: '14rem' }}
      >
        <StopBar useCase="main" />
        <span
          ref={centerRef}
          className="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-gray-200 border rounded-full shadow-md border-gray-950/30 z-[2]"
          style={{ top: '50%', left: '50%' }}
        ></span>
        <button
          ref={draggerRef}
          onMouseDown={handleDrag}
          onTouchStart={handleDrag}
          id="btn-b"
          className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-md cursor-pointer left-full bg-gray-200 z-[3] border-gray-950/30 border"
          style={{
            top: `${dragger.position.top}%`,
            left: `${dragger.position.left}%`,
          }}
        ></button>
        <div
          id="circle"
          className="absolute m-auto origin-center -translate-x-1/2 -translate-y-1/2 border border-dashed rounded-full w-[calc(100%_-_2rem)] left-1/2 top-1/2 aspect-square border-gray-950/30 dark:border-gray-50/30"
        ></div>
      </div>
    </section>
  )
}

export default Linear
