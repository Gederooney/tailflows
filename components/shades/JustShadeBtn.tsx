import React, { useState, useEffect, useRef } from 'react'
import chroma from 'chroma-js'

const JustShadeBtn = ({ colorHex }: { colorHex: string }) => {
  const [copied, setCopied] = useState(false)
  const timeout = useRef<number | null>(null)

  useEffect(() => {
    if (copied) {
      timeout.current = window.setTimeout(() => {
        setCopied(false)
      }, 1000)
    }
    return () => {
      if (timeout.current) {
        window.clearTimeout(timeout.current)
      }
    }
  }, [copied])

  const isDark = chroma(colorHex).luminance() < 0.5
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        navigator.clipboard.writeText(colorHex)
        setCopied(true)
      }}
      className="relative flex flex-col w-full text-center items-center"
    >
      <span
        className="w-full aspect-9/16 lg:aspect-square lg:rounded-md flex items-center justify-center"
        style={{ backgroundColor: colorHex }}
      >
        {copied && (
          <span
            className={`block -rotate-90 lg:rotate-0 ${
              isDark ? 'text-white' : 'text-gray-900'
            } text-xxs font-light`}
          >
            copié!
          </span>
        )}
      </span>
      <span className={`hidden text-xs font-thin  lg:block`}>{colorHex}</span>
    </button>
  )
}

export default JustShadeBtn
