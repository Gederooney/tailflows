import { copyToClipboard } from '@/lib/utils'
import React from 'react'
import { ActionButton } from '../button'

const Shade = ({ color, pos }: { color: string; pos: number }) => {
  return (
    <div className="w-full h-full text-xs rounded-md" style={{ background: color }}>
      <div className="relative flex items-center justify-center w-full h-full">
        {pos === 0 ? '50' : pos === 10 ? 950 : pos * 100}
      </div>
    </div>
  )
}

export default Shade
