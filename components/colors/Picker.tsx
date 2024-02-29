'use client'
import React, { useState } from 'react'
import { TCoordinates, TPosition } from '.'

interface IPickerProps {
  position: TPosition
  coordinates: TCoordinates
  style?: { [key: string]: string }
}

const Picker = ({ position, coordinates, style }: IPickerProps) => {
  return (
    <button
      className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-transparent rounded-full border-[5px] top-1/2 left-1/2 touch-none border-white shadow-[2px_2px_4px_2px_#00000040]"
      style={{ top: `${position.top}%`, left: `${position.left}%`, ...style }}
    ></button>
  )
}

export default Picker
