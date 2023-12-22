import React, { useContext } from 'react'
import ColorContext from './context'
import chroma from 'chroma-js'
import { brightnessToPickerCoordinates, hslToPickerCoordinates } from '@/utils/colors'

interface InputProps {
  name: string
  min?: number
  max?: number
  type: 'text' | 'number'
  value: string
}

function isHexCharacter(char: string): boolean {
  const hexRegex = /^[0-9A-Fa-f]$/
  return hexRegex.test(char)
}

function padHexToSixCharacters(input: string): string {
  const hexChars = '0123456789ABCDEF'
  let paddedString = input.toUpperCase()

  // Remove '#' if it exists at the beginning of the string
  if (paddedString.startsWith('#')) {
    paddedString = paddedString.slice(1)
  }

  while (paddedString.length < 6) {
    const randomHexChar = hexChars.charAt(Math.floor(Math.random() * hexChars.length))
    paddedString += randomHexChar
  }

  return `#${paddedString.slice(0, 6)}` // Return string starting with '#', ensuring 6 characters
}

function isValidHexColor(input: string): boolean {
  // Regular expression pattern to match a valid hex color code
  const hexColorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/

  return hexColorRegex.test(input)
}

const PickerFormInput = ({ name, min, max, type, value }: InputProps) => {
  const { state, setState } = useContext(ColorContext)

  const { currentMode } = state
  const css =
    'md:w-20 h-8 rounded-md text-xs text-center dark:bg-transparent focus:outline-none focus:ring-0 p-0 uppercase flex-1'

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'op') {
      return setState((prev) => ({
        ...prev,
        alpha: +value / 100,
      }))
    }
    let newValue
    if (e.target.type === 'number') {
      if (isNaN(+value) || +value < (min as number)) newValue = min
      else if (+value > (max as number)) newValue = max
      else newValue = +value

      if (name !== 'h' && currentMode === 'hsl') newValue /= 100

      return setState((prev) => ({
        ...prev,
        mode: {
          ...prev['mode'],
          [prev.currentMode]: {
            ...prev['mode'][prev.currentMode],
            [name.toLowerCase()]: newValue,
          },
        },
      }))
    } else {
      if (
        (state.hexToDisplay === '' && !value.length) ||
        value
          .slice(1)
          .split('')
          .some((c) => !isHexCharacter(c)) ||
        value.slice(1).length > 6
      )
        return

      const newColor = chroma(padHexToSixCharacters(value))
      const hsl = newColor.hsl()
      const rgb = newColor.rgb()
      const lab = newColor.lab()
      const hex = newColor.hex().slice(1)

      if (isNaN(hsl[0])) hsl[0] = 0

      const { coords, position } = hslToPickerCoordinates(hsl[0], hsl[1] * 100, state.wheelRadius)

      const brightPicker = brightnessToPickerCoordinates(hsl[2], state.alphaPickerRadius)

      setState((prev) => {
        return {
          ...prev,
          hex,
          hexToDisplay: value.slice(1),
          mode: {
            ...prev.mode,
            hsl: { h: hsl[0], s: hsl[1], l: hsl[2] },
            rgb: { r: rgb[0], g: rgb[1], b: rgb[2] },
            lab: { l: lab[0], a: lab[1], b: lab[2] },
          },
          picker: {
            coords,
            position,
          },
          brightPicker: {
            ...brightPicker,
          },
        }
      })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    return isHexCharacter(e.key)
  }
  switch (type) {
    case 'number':
      return (
        <>
          <label htmlFor={name} className="uppercase text-xs w-8 text-right inline-block">
            {name}
          </label>
          <input
            autoComplete="off"
            readOnly
            onChange={onChange}
            className={css}
            name={name}
            id={name}
            min={min}
            max={max}
            type={type}
            value={value}
          />
        </>
      )
    case 'text':
      return (
        <>
          <label htmlFor={name} className="uppercase text-xs w-8 text-right inline-block">
            {name}
          </label>
          <input
            onChange={onChange}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            className={css}
            name={name}
            id={name}
            min={min}
            max={max}
            type={type}
            value={value}
          />
        </>
      )
  }
}

export default PickerFormInput
