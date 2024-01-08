import React, { useEffect, useRef, useMemo, useContext } from 'react'
import chroma from 'chroma-js'
import ColorContext from './context'
import { Point, Position } from './colors'

import {
  coordsToHue,
  coordsTobrightness,
  getPosition,
  getCoordinates,
  getSaturation,
  findIntersectionPoint,
  getHuePositionAndCoordinates,
} from './colors.utils'

interface PickerViewProps {
  position: Position
  color: string
}

const PickerView = ({ position, color }: PickerViewProps) => {
  return (
    <span
      className="absolute inline-block w-5 h-5 -translate-x-1/2 -translate-y-1/2 border-4 border-white rounded-full pointer-events-none"
      style={{
        top: `${position.top}%`,
        left: `${position.left}%`,
        backgroundColor: color,
      }}
    ></span>
  )
}

const AlphaSelector = () => {
  const { state, setState } = useContext(ColorContext)

  const alpha = state.alpha * 100

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setState((prev) => ({
      ...prev,
      alpha: +value / 100,
    }))
  }
  return (
    <div className="relative w-full h-full shadow-sm drop-shadow-sm">
      <div
        className="absolute top-0 left-0 z-10 w-full h-full overflow-hidden rounded-md pointer-events-none"
        style={{
          background: `white`,
        }}
      ></div>
      <div
        className="h-[250px] w-8 rounded-sm overflow-hidden relative pointer-events-none"
        style={{
          background:
            'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAARZJREFUOE9tUwsWwjAII3fo/U/YO6Ak/Db1+ZyjEJJAYWbHYPE1dzMDzOIZPxF3XIcrFklzxL8w2OGD1ZFHqMxkyoW5eYeJ2oARJsDURefMJg5usXng8ij6G053JP3ikHxhAtikUk2pOtKSOQkyGnBFuQyIxk6/IjIMSEcHDaeaW90zY2ErUyaSwVjNLhF1v1WxAZgv63DYeU2J00hNAK5YBdwrE4w9HP8dtIfJa/h/zMzl0cl7C0KiOusjaQ8bnhtWCIvuWQuYIqrNCEj4nGXp12tKaFOmfe5MF9eGPtHsADDPVdfS6r4s46dlgIznHK1WfVzQRLqEAvcKt1u6nnHZ3q7le4D8jLFvXk9Ed4XMeuJp8ff9A+OJh8DQ+vGnAAAAAElFTkSuQmCC") left center',
        }}
      >
        <div
          className="absolute top-0 left-0 z-10 w-full h-full overflow-hidden rounded-md pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, hsl(${state.mode.hsl.h}, ${
              state.mode.hsl.s * 100
            }%, 50%), hsla(180,100%, 50%, 0))`,
          }}
        ></div>
        <input
          // @ts-ignore
          orient="vertical"
          style={{
            zIndex: 100,
          }}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer pointer-events-auto"
          onChange={handleChange}
          type="range"
          min={0}
          max={100}
          step={1}
          value={alpha}
          name="slider"
          id="slider"
        />
      </div>
      <span
        style={{
          left: `50%`,
          bottom: `${alpha}%`,
          transform: 'translate(-50%, 50%)',
          backgroundColor: 'white',
          zIndex: 100,
        }}
        className="absolute left-0 z-50 w-10 h-2 border-2 border-gray-900 rounded-md cursor-pointer pointer-events-none"
      ></span>
    </div>
  )
}

const WheelView = () => {
  const { state, setState } = useContext(ColorContext)

  const isDraggingHue = useMemo(() => state.isDraggingHue, [state])
  const isDraggingBrightness = useMemo(() => state.isDraggingBrightness, [state])

  const wheelRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null)
  const brightRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null)

  useEffect(() => {
    let wheelRadius = 0
    let alphaPickerRadius = 0
    if (wheelRef.current) wheelRadius = wheelRef?.current?.getBoundingClientRect().width / 2

    if (brightRef.current) alphaPickerRadius = brightRef?.current?.getBoundingClientRect().width / 2

    setState((prev) => ({ ...prev, wheelRadius, alphaPickerRadius }))
  }, [])

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
    // document.removeEventListener('touchend', )
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

    if (!e) return

    const point: Point = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }

    const radius = rect.width / 2

    let position: Position,
      coords: Point,
      { h, s, l } = state.mode.hsl

    if (isDraggingHue) {
      const rtn = getHuePositionAndCoordinates(point, radius)
      position = rtn.position
      coords = rtn.coords
      ;(h = coordsToHue(coords)), (s = getSaturation(coords, radius))
    } else {
      coords = getCoordinates(point, radius)

      // intersection point
      coords = findIntersectionPoint(coords, radius)
      position = getPosition({ x: coords.x + radius, y: radius - coords.y }, radius)
      l = coordsTobrightness(coords, radius)
    }

    // @ts-ignore
    const newColor = chroma({ h, s, l })
    const hsl = newColor.hsl()
    const rgb = newColor.rgb()
    const lab = newColor.lab()
    const hex = newColor.hex().slice(1)

    setState((prev) => {
      let next = {
        ...prev,
        hex: hex,
        hexToDisplay: hex,
        mode: {
          ...prev.mode,
          hsl: { h: isNaN(hsl[0]) ? 0 : hsl[0], s: hsl[1], l: hsl[2] },
          rgb: { r: rgb[0], g: rgb[1], b: rgb[2] },
          lab: { l: lab[0], a: lab[1], b: lab[2] },
        },
      }
      if (isDraggingHue) {
        next = {
          ...next,
          //  @ts-ignore
          color: hsl,
          picker: {
            position,
            coords,
          },
        }
      } else {
        next = {
          ...next,
          // @ts-ignore
          color: hsl,
          brightness: l,
          brightPicker: {
            position,
            coords,
          },
        }
      }
      return next
    })
  }

  type ToucheMouseEvent = React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>

  function handleMouseDown(e: ToucheMouseEvent, picker: 'H' | 'B') {
    let point: Point
    e.stopPropagation()

    if (e.type === 'mousedown') {
      e = e as React.MouseEvent<HTMLDivElement>
      point = { x: e.clientX, y: e.clientY }
    } else if (e.type === 'touchstart') {
      e = e as React.TouchEvent<HTMLDivElement>
      const touch = e.touches[0]
      point = { x: touch.clientX, y: touch.clientY }
    }

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
    <section className="inline-block mx-auto md:mx-0">
      <div className="">
        <div className="flex flex-row gap-4">
          <div
            className="w-[250px] rounded-full aspect-square flex items-center justify-center  border relative shadow-sm drop-shadow-sm"
            ref={brightRef}
            style={{
              background: `linear-gradient(to bottom, rgb(0, 0, 0), hsl(${state.mode.hsl.h}, ${
                state.mode.hsl.s * 100
              }%, 50%), rgb(254, 255, 255))`,
            }}
            onMouseDown={(e) => handleMouseDown(e, 'B')}
            onTouchStart={(e) => handleMouseDown(e, 'B')}
            role="button"
            tabIndex={0}
          >
            <PickerView
              {...state.brightPicker}
              color={`hsl(${state.mode.hsl.h}, ${state.mode.hsl.s * 100}%, 50%)`}
            />
            <div
              className="w-[220px] rounded-full aspect-square flex items-center justify-center  border bg-white pointer-events-auto"
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              role="button"
              tabIndex={0}
            >
              <div className="h-[200px] w-[200px] rounded-full  relative">
                <div
                  ref={wheelRef}
                  onMouseDown={(e) => handleMouseDown(e, 'H')}
                  onTouchStart={(e) => handleMouseDown(e, 'H')}
                  role="button"
                  tabIndex={0}
                  className={`absolute top-0 left-0 h-full w-full rounded-full overflow-hidden ${
                    isDraggingHue ? 'cursor-none' : 'cursor-pointer'
                  }`}
                  style={{ background: state.wheelBg }}
                ></div>
                <PickerView
                  {...state.picker}
                  color={`hsl(${state.mode.hsl.h}, ${state.mode.hsl.s * 100}%, 50%)`}
                />
              </div>
            </div>
          </div>
          <div className="rounded-sm">
            <AlphaSelector />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WheelView
