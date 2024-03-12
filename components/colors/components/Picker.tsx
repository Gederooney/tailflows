import React, { useMemo } from 'react'
import { TCoordinates } from '..'
import { coordinatesToPosition } from '@/lib/colors.utils'

export enum PickerType {
  LIGHTNESSPICKER = 'lightness',
  COLORWHEELPICKER = 'wheel',
  COMBINAISONPICKER = 'combinaisonpicker',
}

interface PickerProps {
  type: PickerType
  coordinates: TCoordinates
}

const Picker = ({ type, coordinates }: PickerProps) => {
  const style = {
    lightness: 'h-4 w-4 bg-white',
    wheel: 'h-6 w-6 bg-transparent border-4 border-white',
    combinaisonpicker: 'h-[6px] border border-white',
  }
  const position = useMemo(() => coordinatesToPosition(coordinates), [coordinates])
  return (
    <button
      className={`absolute -translate-x-1/2  -translate-y-1/2 pointer-events-none aspect-square rounded-full ${style[type]} z-[1000] shadow-[2px_2px_4px_2px_#00000040]`}
      style={{ top: `${position.top}%`, left: `${position.left}%` }}
    ></button>
  )
}

export default Picker
