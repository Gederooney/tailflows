import { getWheelBg } from '@/lib/colors.utils'
import React, { MouseEvent, useCallback, useEffect, useRef } from 'react'
import { TCoordinates } from '..'
import { Color } from '../Color'
import useCircle from '../hooks/useCircle'

interface CircleProps {
  isLightness: boolean
  color?: string
  getCoordinates: (coordinates: TCoordinates) => void
}

const LightnessWheel = ({
  getCoordinates,
  color,
}: {
  getCoordinates: (coordinates: TCoordinates) => void
  color: string
}) => {
  const { circleRef } = useCircle(true, getCoordinates)
  const [h, s, l] = Color.hexToHsl(color)
  return (
    <div
      ref={circleRef}
      role="button"
      tabIndex={-1}
      className="pointer-events-auto absolute inset-0 rounded-full"
      style={{
        backgroundImage: `linear-gradient(hsl(${h}, ${s}%, 10%), hsl(${h}, ${s}%, 50%), hsl(${h}, ${s}%, 95%))`,
      }}
    ></div>
  )
}
const ColorWheel = ({
  getCoordinates,
}: {
  getCoordinates: (coordinates: TCoordinates) => void
}) => {
  const { circleRef } = useCircle(false, getCoordinates)

  return (
    <div
      ref={circleRef}
      role="button"
      tabIndex={-1}
      style={{ background: `${getWheelBg()}` }}
      className="pointer-events-auto absolute inset-0 rounded-full"
    ></div>
  )
}

const Circle = ({ isLightness, getCoordinates, color }: CircleProps) => {
  return isLightness ? (
    <LightnessWheel color={color as string} getCoordinates={getCoordinates} />
  ) : (
    <ColorWheel getCoordinates={getCoordinates} />
  )
}

export default Circle
