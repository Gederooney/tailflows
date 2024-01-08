import { Dispatch, SetStateAction } from 'react'

export type Point = {
  x: number
  y: number
}

export type Position = {
  top: number
  left: number
}

type Picker = { position: Position; coords: Point }

export interface WheelView {
  isDraggingHue: boolean
  color: string | number[]
  isDraggingBrightness: boolean
  wheelBg: string
  brightness: number
  picker: Picker
  brightPicker: Picker
  wheelRadius: number
  alphaPickerRadius: number
}

export type ColorMode = 'hsl' | 'lab' | 'hex' | 'rgb' | 'lch' | 'hsv' | 'cymk'

export interface Color {
  hex: string
  hexToDisplay: string
  currentMode: ColorMode
  alpha: number
  mode: {
    hsl: {
      h: number
      s: number
      l: number
    }
    rgb: {
      r: number
      g: number
      b: number
    }
    lab: {
      l: number
      a: number
      b: number
    }
  }
}
type ContextState = {
  state: Color & WheelView
  setState: Dispatch<SetStateAction<Color & WheelView>>
}
