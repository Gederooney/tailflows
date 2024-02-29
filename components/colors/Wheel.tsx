'use client'

import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  TouchEvent,
  MouseEvent,
  useMemo,
  useContext,
} from 'react'
import Picker from './Picker'
import { IInitialWheelState, TCombinaisonsType, TCoordinates, THsl, TPosition } from '.'
import { Color } from './Color'
import chroma from 'chroma-js'
import ColorContext from '@/app/generateur-nuances-couleurs-tailwind-css/context'
import {
  getIntersectionPoint,
  pointIsInCercle,
  getRelativeMousePositionToWheel,
  getLeftAndTop,
} from '@/lib/colors.utils'

const Wheel = ({ initialState }: { initialState: IInitialWheelState }) => {
  const { setContext } = useContext(ColorContext)

  const [userInput, setUserInput] = useState<string>(initialState.colorHex)
  const [picker, setPicker] = useState<{ coordinates: TCoordinates; position: TPosition }>(
    initialState.picker
  )

  const [lightnessPicker, setLightnessPicker] = useState<{
    coordinates: TCoordinates
    position: TPosition
  }>(initialState.lightnessPicker)

  const [combinaisonsType, setCombinaisonsType] = useState<TCombinaisonsType>(
    initialState.combinaisonType
  )

  const [combinaisons, setCombinaisons] = useState<
    {
      coordinates: TCoordinates
      position: TPosition
    }[]
  >(initialState.palette.elements)

  const color = useMemo(() => {
    const hsl = Color.coordinatesToHsl(picker, lightnessPicker)
    const currentColor = chroma(hsl[0], hsl[1] / 100, hsl[2] / 100, 'hsl')
    return {
      hsl: currentColor.hsl(),
      hex: currentColor.hex(),
    }
  }, [picker, lightnessPicker])

  const isDragging = useRef(false)
  const isDraggingLightness = useRef(false)
  const wheel = useRef<HTMLDivElement>(null)
  const lightness = useRef<HTMLDivElement>(null)
  const sizes = useRef<DOMRect | undefined>(undefined)

  const handleMouseDown = useCallback(
    (draggingLightness: boolean) => (event: unknown) => {
      isDragging.current = true
      isDraggingLightness.current = draggingLightness
      handleAction(event as MouseEvent)
      document.body.addEventListener('mousemove', handleMouseMove)
      document.body.addEventListener('mouseup', handleMouseUp)
    },
    []
  )
  const handleMouseMove = useCallback((event: unknown) => {
    handleAction(event as MouseEvent)
  }, [])
  const handleMouseUp = useCallback((event: unknown) => {
    isDraggingLightness.current = false
    isDragging.current = false
    document.body.removeEventListener('mousemove', handleMouseMove)
    document.body.removeEventListener('mouseup', handleMouseUp)
  }, [])

  const handleTouchStart = useCallback(
    (draggingLightness: boolean) => (event: unknown) => {
      isDraggingLightness.current = draggingLightness
      isDragging.current = true
      handleAction(event as TouchEvent)
    },
    []
  )
  const handleTouchMove = useCallback((event: unknown) => {
    handleAction(event as TouchEvent)
  }, [])
  const handleTouchEnd = useCallback((event: unknown) => {
    isDraggingLightness.current = false
    isDragging.current = false
  }, [])

  const handleSelectChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setCombinaisonsType(event.target.value as TCombinaisonsType)
  }, [])

  const handleInputFocus = useCallback((event) => {
    if (event.target.value === '') {
      event.target.value = '#'
    }
  }, [])
  const handleInputKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    if (
      (event.key === 'Backspace' && target.value === '#') ||
      (event.key !== 'Backspace' && !Color.hexChars.includes(event.key.toUpperCase()))
    ) {
      event.preventDefault()
      return false
    }
  }, [])
  const handleInputBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    if (target.value === '') {
      setUserInput('#')
    }
  }, [])

  const handleInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value

    // Ensure the first character is always '#'
    if (!value.startsWith('#')) {
      value = '#' + value.replace(/#/g, '')
    } else {
      value = '#' + value.slice(1).replace(/#/g, '')
    }

    // Allow only hex characters after the '#'
    value = value.replace(/[^#a-fA-F0-9]/g, '')

    // Limit length to 7 characters (1 '#' + 6 hex digits)
    if (value.length > 7) {
      value = value.substring(0, 7)
    }

    setUserInput(value.toLowerCase())
    const generatedColor = Color.padColorHex(value)
    const pickerCoordinates = Color.hexToCoordinates(generatedColor)
    const pickerPosition = Color.coordinatesToPosition(pickerCoordinates)

    const [h, s, l] = Color.hexToHsl(generatedColor)
    const y = 1 - l / 50
    const x = Math.sqrt(1 - y * y)

    const lightnessCoordinates = { x, y }
    const lightnessPosition = Color.coordinatesToPosition(lightnessCoordinates)

    setPicker({ coordinates: pickerCoordinates, position: pickerPosition })
    setLightnessPicker({ coordinates: lightnessCoordinates, position: lightnessPosition })
  }, [])

  useEffect(() => {
    const combinaisons = Color.getCombinaisonElementsCoordinates(
      combinaisonsType,
      color.hex,
      picker.coordinates
    )

    const palette = combinaisons.reduce(
      (acc, curr) => {
        const { hex, ...rest } = curr
        return {
          elements: [...acc.elements, { ...rest }],
          colors: [...acc.colors, curr.hex],
        }
      },
      { elements: [], colors: [] }
    )

    setContext((prev) => ({
      ...prev,
      hex: color.hex,
      palette: [color.hex, ...palette.colors],
    }))

    if (!isDraggingLightness.current) {
      setCombinaisons((prev) => palette.elements)
    }
  }, [picker, lightnessPicker, combinaisonsType])

  useEffect(() => {
    const wheelElement = wheel.current
    const lightnessElement = lightness.current
    if (wheelElement) {
      wheelElement.addEventListener('mousedown', handleMouseDown(false), {
        passive: false,
      })

      wheelElement.addEventListener('touchstart', handleTouchStart(false), {
        passive: false,
      })
      wheelElement.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      })
      wheelElement.addEventListener('touchend', handleTouchEnd, { passive: false })
    }

    if (lightnessElement) {
      lightnessElement.addEventListener('mousedown', handleMouseDown(true), {
        passive: false,
      })

      lightnessElement.addEventListener('touchstart', handleTouchStart(true), {
        passive: false,
      })
      lightnessElement.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      })
      lightnessElement.addEventListener('touchend', handleTouchEnd, { passive: false })
    }

    return () => {
      if (wheelElement) {
        wheelElement.removeEventListener('mousedown', handleMouseDown(false))
        wheelElement.removeEventListener('touchstart', handleTouchStart(false))
        wheelElement.removeEventListener('touchmove', handleTouchMove)
        wheelElement.removeEventListener('touchend', handleTouchEnd)
      }

      if (lightnessElement) {
        lightnessElement.removeEventListener('mousedown', handleMouseDown(true))
        lightnessElement.removeEventListener('touchstart', handleTouchStart(true))
        lightnessElement.removeEventListener('touchmove', handleTouchMove)
        lightnessElement.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [])

  const handleAction = (event: MouseEvent | TouchEvent) => {
    event.stopPropagation()
    event.preventDefault()

    if (!isDraggingLightness.current) {
      resetLightnessPicker()
    }

    updatePicker(event)
  }

  const resetLightnessPicker = () => {
    if (lightnessPicker.coordinates.x < 0) {
      setLightnessPicker({ position: { left: 0, top: 50 }, coordinates: { x: -1, y: 0 } })
      return
    }
    setLightnessPicker({ position: { left: 100, top: 50 }, coordinates: { x: 1, y: 0 } })
  }

  const updatePicker = (event: MouseEvent | TouchEvent) => {
    getSizes()

    if (isDragging.current) {
      const client = {
        x: event.type.startsWith('touch')
          ? (event as TouchEvent).touches[0].clientX
          : (event as MouseEvent).clientX,

        y: event.type.startsWith('touch')
          ? (event as TouchEvent).touches[0].clientY
          : (event as MouseEvent).clientY,
      }

      const mousePosition = getRelativeMousePositionToWheel(client.x, client.y, sizes.current)

      let coordinates = getNormalizedCoordinates(mousePosition)
      let position = getLeftAndTop(mousePosition, sizes.current)

      if (!pointIsInCercle(coordinates) || isDraggingLightness.current) {
        coordinates = getIntersectionPoint(coordinates)
        position = Color.coordinatesToPosition(coordinates)
      }
      let hsl: [number, number, number]

      if (isDraggingLightness.current) {
        hsl = Color.coordinatesToHsl(picker, { coordinates, position }) as [number, number, number]
        setLightnessPicker({ position, coordinates })
      } else {
        hsl = Color.coordinatesToHsl({ coordinates, position }, lightnessPicker) as [
          number,
          number,
          number,
        ]
        setPicker({ position, coordinates })
      }
      const [r, g, b] = Color.hslToRgb(...hsl)
      const color = Color.rgbToHex(r, g, b)
      setUserInput(color)
    }

    return
  }

  const getSizes = () => {
    if (isDraggingLightness.current) sizes.current = lightness.current?.getBoundingClientRect()
    else sizes.current = wheel.current?.getBoundingClientRect()
  }

  const getNormalizedCoordinates = (coordinates: TCoordinates) => {
    if (sizes.current)
      return {
        x: (coordinates.x - sizes.current.width / 2) / (sizes.current.width / 2),
        y: (sizes.current.height / 2 - coordinates.y) / (sizes.current.height / 2),
      }
    return { x: 0, y: 0 }
  }

  return (
    <section className="min-w-[200px] max-w-[350px] m-auto p-8 bg-gray-50 dark:bg-secondary-800 rounded-md space-y-8 shadow-[-8px_-8px_16px_4px_#00000040,_8px_8px_16px_4px_#00000040]">
      <div
        className="relative w-full p-2 m-auto rounded-full cursor-pointer dark:border dark:border-gray-50/20"
        id="lightness"
        style={{
          backgroundImage: `linear-gradient(hsl(0, 0%, 0%), hsl(${color.hsl[0]}, ${
            color.hsl[1] * 100
          }%, 50%), hsl(${color.hsl[0]}, ${color.hsl[1] * 100}%, 95%))`,
        }}
        ref={lightness}
      >
        <Picker
          {...lightnessPicker}
          style={{ height: '1rem', width: '1rem', backgroundColor: 'white' }}
        />
        <div className="w-full p-2 m-auto rounded-full pointer-events-auto bg-gray-50 dark:bg-gray-100">
          <div
            id="wheel"
            className="relative w-full m-auto rounded-full cursor-pointer max-w-80 aspect-square"
            ref={wheel}
          >
            <Picker {...picker} />
            {combinaisons.map((comb) => (
              <Picker
                {...comb}
                style={{ height: '6px', width: '6px', border: '1px solid white' }}
                key={`${combinaisonsType}-${comb.coordinates.x}-${comb.coordinates.y}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-8">
        <div className="">
          <h3 className="text-xs font-light text-gray-300">1.Choisissez une couleur</h3>
          <div className="flex flex-row gap-2">
            <span
              className="block w-12 h-12 rounded-full shrink-0 grow-0 "
              id="display"
              style={{ backgroundColor: color.hex }}
            ></span>
            <div className="flex-1 px-4 py-1">
              <input
                type="text"
                className="w-full h-full text-center bg-transparent border rounded-md dark:border-gray-50/10 border-gray-900/10"
                onChange={(event) => {}}
                onInput={handleInput}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyDown={handleInputKeyDown}
                value={userInput}
                id="colorInput"
              />
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="text-xs font-light text-gray-300">2.Combinaison</h3>
          <div className="w-full h-11">
            <select
              name=""
              id="combinaison"
              className="w-full h-full px-2 bg-transparent rounded-md outline-none dark:border-gray-50/10 border-gray-900/10"
              onChange={handleSelectChange}
            >
              <option value="complementary">Complémentaire</option>
              <option value="monochromatic">Monochrome</option>
              <option value="analogous">Analogue</option>
              <option value="triadic">Triadrique</option>
              <option value="tetradic">Tétraédrique</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wheel
