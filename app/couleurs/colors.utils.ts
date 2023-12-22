import colors from './colors.json' assert { type: 'json' }
import nearestColor from 'nearest-color'
import chroma from 'chroma-js'
import Color from 'color'
import { ColorMode } from './colors'
import { Point, Position } from './colors'

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

export function coordsToHue({ x, y }: Point) {
  const angleRad = Math.atan2(y, x)
  let angleDeg = (angleRad * 180) / Math.PI

  if (angleDeg < 0) {
    angleDeg += 360
  }

  angleDeg = 360 - angleDeg + 90
  angleDeg %= 360
  return angleDeg
}

export function coordsTobrightness({ x, y }: Point, radius: number) {
  const l = (radius - y) / (radius * 2)

  return l
}

/**
 * @name hstString
 * @param color hsl values array
 * @returns hsl string
 */
export function hslString(color: number[]) {
  const colorStr = color
    .map((c, i) => {
      if (i === 0 || i === color.length - 1) return `${c}`
      return `${c * 100}%`
    })
    .join(', ')

  return `hsla(${colorStr})`
}

/**
 * @name getPosition
 * @param p Point
 * @param radius
 * @returns position Point
 */
export function getPosition(p: Point, radius: number): Position {
  const w = radius * 2
  return {
    left: (p.x * 100) / w,
    top: (p.y * 100) / w,
  }
}

/**
 * @name getCoordinates
 * @param p Point
 * @param radius number
 * @returns q Point
 */
export function getCoordinates(p: Point, radius: number) {
  return {
    x: p.x - radius,
    y: radius - p.y,
  }
}

/**
 * @name getSaturation
 * @param p Point
 * @param radius number
 * @desc return the sturation of the color at position p in the cercle of radius
 * @returns number
 */
export function getSaturation(p: Point, radius: number) {
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
export function pIsInCercle(p: Point, r: number) {
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
export function findIntersectionPoint(p: Point, r: number) {
  // distance to center
  const d = Math.sqrt(p.x * p.x + p.y * p.y)
  const x = (p.x * r) / d
  const y = (p.y * r) / d

  return { x, y }
}

export function getHuePositionAndCoordinates(point: Point, radius: number) {
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

export function hslToPickerCoordinates(angle: number, distanceFromCenter: number, radius: number) {
  const angleRadius = (angle * Math.PI) / 180

  let x = Math.sin(angleRadius) * distanceFromCenter
  let y = Math.cos(angleRadius) * distanceFromCenter

  if (!pIsInCercle({ x, y }, radius)) {
    const coords = findIntersectionPoint({ x, y }, radius)
    x = coords.x
    y = coords.y
  }

  const position = getPosition({ x: x + radius, y: radius - y }, radius)

  return {
    coords: { x, y },
    position: { left: Math.round(position.left), top: Math.round(position.top) },
  }
}

export function brightnessToPickerCoordinates(brightness: number, radius: number) {
  const y = radius - brightness * radius * 2
  let x = Math.sqrt(radius * radius - y * y)
  if (isNaN(x)) x = 0
  return {
    coords: { x, y },
    position: getPosition({ x: x + radius, y: radius - y }, radius),
  }
}
