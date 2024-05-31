'use client'
import React, { useState, useEffect } from 'react'
import { copyToClipboard } from '@/lib/utils'
import { useColorUseCases } from '../context/ColorUseCases'

const Button = ({
  value,
  name,
  index,
}: {
  value: { hex: string; rgb: string; hsl: string }
  name: string
  index: string
}) => {
  const [copied, setCopied] = useState(false)
  const { colorUseCasesContextState } = useColorUseCases()

  const { useCase, classType } = colorUseCasesContextState

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }
  }, [copied])

  return (
    <button
      className="absolute inset-0 group"
      onClick={(e) => {
        e.preventDefault()
        let text = `${useCase}-${name}-${index}`

        if (classType === 'hex') {
          text = `${useCase}-[${value.hex}]`
        } else if (classType === 'rgb') {
          text = `${useCase}-[${value.rgb}]`
        } else if (classType === 'hsl') {
          text = `${useCase}-[${value.hsl}]`
        }
        copyToClipboard(text)
        setCopied(true)
      }}
      style={{ backgroundColor: value.hex }}
    >
      {copied ? (
        <div className="h-full w-full flex items-center justify-center bg-none bg-opacity-0 group-hover:bg-opacity-20 text-white text-xs pointer-event-none -rotate-90 md:rotate-0">
          Copié!
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-center bg-none bg-opacity-0 group-hover:bg-opacity-50 text-white text-xs pointer-event-none opacity-0 group-hover:opacity-100 gap-1 -rotate-90 md:rotate-0">
          <span className="inline-block h-4 w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full fill-current "
              viewBox="0 0 512 512"
            >
              <rect
                width="336"
                height="336"
                x="128"
                y="128"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="32"
                rx="57"
                ry="57"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="m383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"
              />
            </svg>
          </span>
          <span>{index}</span>
        </div>
      )}
    </button>
  )
}

export default Button

// text-stone-400 text-lime-600 text-blue-700
