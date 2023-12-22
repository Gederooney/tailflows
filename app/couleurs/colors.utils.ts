import colors from './colors.json' assert { type: 'json' }
import nearestColor from 'nearest-color'
import chroma from 'chroma-js'
import Color from 'color'
import { ColorMode } from './colors'

export const nearest = nearestColor.from(
  colors.reduce((o, { name_fr, hex }) => Object.assign(o, { [name_fr]: hex }), {})
)

export function makeShadeNoMode(hslArray: number[], stepsCount: number): string[] {
  const interval = 98 / stepsCount
  const shades: number[][] = []

  for (let i = stepsCount; i > 0; i--) {
    const hsl = hslArray.slice()
    hsl[2] = interval * i
    shades.push(hsl)
  }
  return shades.map((hsl) => Color.hsl(hsl).hex())
}

export function makeShadesWithMode(hex: string, mode: ColorMode) {
  const chromaColor = chroma(hex)
  const whitest = chromaColor.set('hsl.l', 0.98)
  const blackest = chromaColor.set('hsl.l', 0.05)

  const shades = chroma.scale([whitest, chromaColor, blackest]).mode(mode).colors(30)
  return shades
}
