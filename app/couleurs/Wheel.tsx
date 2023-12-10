import React, { useEffect, useRef, useMemo, useState, useCallback } from 'react'
import chroma from 'chroma-js'

type Point = {
  x: number
  y: number
}

type Position = {
  top: number
  left: number
}

interface PickerViewProps {
  position: Position
  color: number[]
}

type Picker = { position: Position; coords: Point }

interface WheelViewState {
  isDraggingHue: boolean
  color: number[]
  isDraggingBrightness: boolean
  point: Point
  wheelBg: string
  brightness: number
  picker: Picker
  brightPicker: Picker
}

function coordsToHue({ x, y }: Point) {
  const angleRad = Math.atan2(y, x)
  let angleDeg = (angleRad * 180) / Math.PI

  if (angleDeg < 0) {
    angleDeg += 360
  }

  angleDeg = 360 - angleDeg + 90
  angleDeg %= 360
  return angleDeg
}

function coordsTobrightness({ x, y }: Point, radius: number) {
  return (radius - y) / (radius * 2)
}
function getWheelBg(brightness: number) {
  return `radial-gradient(
    circle at 50% 0%,
    hsla(10, 100%, ${brightness * 100}%, 0.7) 0%,
    hsla(10, 0%, ${brightness * 100}%, 0) 43%
  ),
  radial-gradient(circle at 69.1% 3.8%, hsla(32.5, 100%, ${
    brightness * 100
  }%, 0.7) 0%, hsla(32.5, 0%, ${brightness * 100}%, 0) 43%),
  radial-gradient(circle at 85.4% 14.6%, hsla(55, 100%, ${
    brightness * 100
  }%, 0.7) 0%, hsla(55, 0%, ${brightness * 100}%, 0) 43%),
  radial-gradient(
    circle at 96.2% 30.9%,
    hsla(77.5, 100%, ${brightness * 100}%, 0.7) 0%,
    hsla(77.5, 0%, ${brightness * 100}%, 0) 43%
  ),
  radial-gradient(circle at 100% 50%, hsla(100, 100%, ${
    brightness * 100
  }%, 0.7) 0%, hsla(100, 0%, ${brightness * 100}%, 0) 43%),
  radial-gradient(
    circle at 96.2% 69.1%,
    hsla(122.5, 100%, ${brightness * 100}%, 0.7) 0%,
    hsla(122.5, 0%, ${brightness * 100}%, 0) 43%
  ),
  radial-gradient(circle at 85.4% 85.4%, hsla(145, 100%, ${
    brightness * 100
  }%, 0.7) 0%, hsla(145, 0%, ${brightness * 100}%, 0) 43%),
  radial-gradient(
    circle at 69.1% 96.2%,
    hsla(167.5, 100%, ${brightness * 100}%, 0.7) 0%,
    hsla(167.5, 0%, ${brightness * 100}%, 0) 43%
  ),
  radial-gradient(circle at 50% 100%, hsla(190, 100%, ${
    brightness * 100
  }%, 0.7) 0%, hsla(190, 0%, ${brightness * 100}%, 0) 43%),
  radial-gradient(
    circle at 30.9% 96.2%,
    hsla(212.5, 100%, ${brightness * 100}%, 0.7) 0%,
    hsla(212.5, 0%, ${brightness * 100}%, 0) 43%
  ),
  radial-gradient(circle at 14.6% 85.4%, hsla(235, 100%, ${
    brightness * 100
  }%, 0.7) 0%, hsla(235, 0%, ${brightness * 100}%, 0) 43%),
  radial-gradient(
    circle at 3.8% 69.1%,
    hsla(257.5, 100%, ${brightness * 100}%, 0.7) 0%,
    hsla(257.5, 0%, ${brightness * 100}%, 0) 43%
  ),
  radial-gradient(circle at 0% 50%, hsla(280, 100%, ${brightness * 100}%, 0.7) 0%, hsla(280, 0%, ${
    brightness * 100
  }%, 0) 43%),
  radial-gradient(
    circle at 3.8% 30.9%,
    hsla(302.5, 100%, ${brightness * 100}%, 0.7) 0%,
    hsla(302.5, 0%, ${brightness * 100}%, 0) 43%
  ),
  radial-gradient(circle at 14.6% 14.6%, hsla(325, 100%, ${
    brightness * 100
  }%, 0.7) 0%, hsla(325, 0%, ${brightness * 100}%, 0) 43%),
  radial-gradient(
    circle at 30.9% 3.8%,
    hsla(347.5, 100%, ${brightness * 100}%, 0.7) 0%,
    hsla(347.5, 0%, ${brightness * 100}%, 0) 43%
  ),
  hsla(0, 0%, ${brightness * 100}%, 1)`
}

function hslString(color: number[]) {
  const colorStr = color
    .map((c, i) => {
      if (i === 0 || i === color.length - 1) return `${c}`
      return `${c * 100}%`
    })
    .join(', ')

  return `hsla(${colorStr})`
}

function getPosition(p: Point, radius: number): Position {
  const w = radius * 2
  return {
    left: (p.x * 100) / w,
    top: (p.y * 100) / w,
  }
}

function getCoordinates(p: Point, radius: number) {
  return {
    x: p.x - radius,
    y: radius - p.y,
  }
}

function getSaturation(p: Point, radius: number) {
  const sat = Math.sqrt(p.x * p.x + p.y * p.y) / radius

  return sat
}

/**
 * @name pIsInCercle
 * @param P {x:number, y: number}
 * @param r radius of the circle
 * @desc verify weither a point P(x, y)
 * is in circle C of radius R. Where origin
 * is the center of the circle
 * @return true if the P is in C or flase if not
 */
function pIsInCercle(p: Point, r: number) {
  // distance to center
  const d = Math.sqrt(p.x * p.x + p.y * p.y)

  return d <= r
}

/**
 * @name findIntersectionPoint
 * @param P {x:number, y: number}
 * @param r radius of the circle
 * @desc find a point Q(x, y)
 * where q is the intersection of the perimeter of circle of radius r
 * and the line formed by p and the center of the circle
 * @return Q(x, y)
 */
function findIntersectionPoint(p: Point, r: number) {
  // distance to center
  const d = Math.sqrt(p.x * p.x + p.y * p.y)
  const x = (p.x * r) / d
  const y = (p.y * r) / d

  return { x, y }
}

function getHuePositionAndCoordinates(point: Point, radius: number) {
  let position: Position, coords: Point

  position = getPosition(point, radius)

  coords = getCoordinates(point, radius)

  const thePointIsInTheCircle = pIsInCercle(coords, radius)
  if (!thePointIsInTheCircle) {
    // intersectionPointcoords
    coords = findIntersectionPoint(coords, radius)

    // intersectionPosition
    position = getPosition({ x: coords.x + radius, y: radius - coords.y }, radius)
  }
  return { position, coords }
}

const PickerView = ({ position, color }: PickerViewProps) => {
  return (
    <span
      className="inline-block absolute -translate-x-1/2 -translate-y-1/2 h-5 w-5 border-4 border-white rounded-full pointer-events-none"
      style={{
        top: `${position.top}%`,
        left: `${position.left}%`,
        backgroundColor: hslString(color),
      }}
    ></span>
  )
}

const WheelView = () => {
  const [state, setState] = useState<WheelViewState>({
    isDraggingHue: false,
    isDraggingBrightness: false,
    brightness: 0.5,
    color: [180, 1, 0.5, 1],
    wheelBg: getWheelBg(0.5),
    point: {
      x: 0,
      y: 0,
    },
    picker: {
      coords: {
        x: 0,
        y: 0,
      },
      position: {
        left: 50,
        top: 100,
      },
    },
    brightPicker: {
      position: {
        top: 50,
        left: 100,
      },
      coords: {
        x: 0,
        y: 0,
      },
    },
  })
  const isDraggingHue = useMemo(() => state.isDraggingHue, [state])
  const isDraggingBrightness = useMemo(() => state.isDraggingBrightness, [state])

  const wheelRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null)
  const brightRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null)

  useEffect(handleIsDragging, [isDraggingHue, isDraggingBrightness])

  /**
   * @name handleIsDragging
   * @desc add or MouseMoveEvent and mouseUpEvent
   * to document based on the mesmoid isDragging value
   */
  function handleIsDragging() {
    if (isDraggingHue || isDraggingBrightness) {
      handleMouseMove()
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('mousemove', handleMouseMove)
    }
  }

  /**
   * @name handleMouseUp
   * @desc: set the isDragging state to false and call cleanup
   */
  function handleMouseUp() {
    cleanUp()
    setState((prev) => {
      return {
        ...prev,
        isDraggingHue: false,
        isDraggingBrightness: false,
      }
    })
  }

  /**
   * @name cleanUp
   * @description remove the addEventListeners
   */
  function cleanUp() {
    document.removeEventListener('mouseup', handleMouseUp)
    document.removeEventListener('mousemove', handleMouseMove)
  }

  /**
   * @name handleMouseMove
   * @param e MouseEvent
   * @description Calculate the mouse position and update the picker state
   * @return void
   */
  function handleMouseMove(e?: MouseEvent) {
    if (isDraggingHue && !wheelRef.current) return

    if (isDraggingBrightness && !brightRef.current) return

    const el: HTMLDivElement | null = isDraggingHue ? wheelRef.current : brightRef.current

    if (!el) return

    const rect = el.getBoundingClientRect()

    const point: Point = e
      ? {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        }
      : {
          x: state.point.x - rect.left,
          y: state.point.y - rect.top,
        }

    const radius = rect.width / 2

    let position: Position,
      coords: Point,
      [hue, saturation, brightness] = state.color

    if (isDraggingHue) {
      const rtn = getHuePositionAndCoordinates(point, radius)
      position = rtn.position
      coords = rtn.coords
      ;(hue = coordsToHue(coords)), (saturation = getSaturation(coords, radius))
    } else {
      coords = getCoordinates(point, radius)

      // intersection point
      coords = findIntersectionPoint(coords, radius)
      position = getPosition({ x: coords.x + radius, y: radius - coords.y }, radius)
      brightness = coordsTobrightness(coords, radius)
    }

    const color: number[] = chroma({ h: hue, s: saturation, l: brightness }).hsl()

    setState((prev) => {
      if (isDraggingHue)
        return {
          ...prev,
          color,
          picker: {
            ...prev.picker,
            position,
            coords,
          },
        }
      else isDraggingBrightness
      return {
        ...prev,
        color,
        brightness,
        wheelBg: getWheelBg(brightness),
        brightPicker: {
          ...prev.brightPicker,
          position,
          coords,
        },
      }
    })
  }

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>, picker: 'H' | 'B') {
    e.stopPropagation()
    const point = { x: e.clientX, y: e.clientY }
    switch (picker) {
      case 'H':
        setState((prev) => {
          return {
            ...prev,
            isDraggingHue: true,
            isDraggingBrightness: false,
            point,
          }
        })
        break
      case 'B':
        setState((prev) => {
          return {
            ...prev,
            isDraggingHue: false,
            isDraggingBrightness: true,
            point,
          }
        })
        break
    }
  }

  return (
    <section className="inline">
      <div className="">
        <div
          className="w-[250px] rounded-full aspect-square flex items-center justify-center  border relative shadow-sm drop-shadow-sm"
          ref={brightRef}
          style={{
            background: `linear-gradient(to bottom, rgb(0, 0, 0), ${hslString(
              state.color
            )}, rgb(254, 255, 255))`,
          }}
          onMouseDown={(e) => handleMouseDown(e, 'B')}
          role="button"
          tabIndex={0}
        >
          <PickerView {...state.brightPicker} color={state.color} />
          <div
            className="w-[220px] rounded-full aspect-square flex items-center justify-center  border bg-white pointer-events-auto"
            onMouseDown={(e) => e.stopPropagation()}
            role="button"
            tabIndex={0}
          >
            <div className="h-[200px] w-[200px] rounded-full  relative">
              <div
                ref={wheelRef}
                onMouseDown={(e) => handleMouseDown(e, 'H')}
                role="button"
                tabIndex={0}
                className={`absolute top-0 left-0 h-full w-full rounded-full overflow-hidden ${
                  isDraggingHue ? 'cursor-none' : 'cursor-pointer'
                }`}
                // id="wheel2"
                style={{ background: state.wheelBg }}
              ></div>
              <PickerView {...state.picker} color={[state.color[0], state.color[1], 0.5, 1]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WheelView
