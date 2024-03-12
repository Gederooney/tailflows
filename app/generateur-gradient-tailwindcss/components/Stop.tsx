import { TCoordinates, TPosition } from '@/components/colors'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import Context from '../Context'
import useStop from '../hooks/useStop'

export interface IStop {
  position: TPosition
  coordinates?: TCoordinates
  color: string
  id: string
}

export interface IStopProps {
  stop: IStop
  updateStop: (position: IStop) => void
  setActiveStop: () => void
  toggleIsDragging: (value: boolean) => void
}

const Stop = ({ stop, updateStop, setActiveStop, toggleIsDragging }: IStopProps) => {
  const { handleMouseDown, onTouch, isMouseDown, left, isActive } = useStop({
    stop,
    updateStop,
    setActiveStop,
    toggleIsDragging,
  })

  return (
    <button
      onMouseDown={handleMouseDown}
      onTouchStart={onTouch}
      onTouchMove={onTouch}
      className={`absolute -translate-x-1/2 w-3 h-3  top-1  z-[4] ${
        isActive ? 'border-2 border-gray-50/50' : 'border-gray-950/30 border'
      }`}
      style={{ left: `${left}%`, zIndex: isMouseDown ? 100 : 4 }}
    >
      <span
        style={{ background: stop.color }}
        className={`relative  block w-full h-full before:absolute before:content-[''] before:h-[6px] before:w-[6px]  before:top-0 beofre:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:z-[-3] before:border pointer-events-none ${
          isActive ? 'before:border-gray-50/50' : 'before:border-gray-950/30'
        }`}
      ></span>
    </button>
  )
}

export default Stop
