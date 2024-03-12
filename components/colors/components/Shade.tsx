import { copyToClipboard } from '@/lib/utils'
import React from 'react'
import { ActionButton } from '../../button'

const Shade = ({ color, pos }: { color: string; pos: number }) => {
  return (
    <div className="w-full h-full text-xs rounded-md" style={{ background: color }}>
      <div className="relative flex items-center justify-center w-full h-full md:flex-col">
        <span>{pos === 0 ? '50' : pos === 10 ? 950 : pos * 100}</span>
        <ActionButton
          classname="w-10 h-4"
          sucessChildren={<span className="h-4 text-xs">Copié!</span>}
          actionMethod={() => copyToClipboard(color)}
        >
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
      </div>
    </div>
  )
}

export default Shade
