import { TCombinaisonsType, TCoordinates, THsl, TPosition } from '.'

export class Color {
  // Liste de tous les caractères hexadécimaux possibles
  static hexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

  static getHue({ x, y }) {
    const angleRad = Math.atan2(y, x)
    let angleDeg = (angleRad * 180) / Math.PI

    if (angleDeg < 0) {
      angleDeg += 360
    }

    angleDeg = (360 - angleDeg + 90) % 360
    return angleDeg
  }

  static getSaturation({ x, y }) {
    const saturation = Math.sqrt(x * x + y * y)
    return saturation * 100
  }

  static coordinatesToPosition(coordinates: TCoordinates) {
    const { x, y } = coordinates

    return { left: 50 * x + 50, top: -50 * (y - 1) }
  }

  static coordinatesToHsl(
    picker: {
      coordinates: TCoordinates
      position: TPosition
    },
    lightness: {
      coordinates: TCoordinates
      position: TPosition
    }
  ) {
    const hue = this.getHue(picker.coordinates)
    const saturation = this.getSaturation(picker.coordinates)
    return [hue, saturation, ((1 - lightness.coordinates.y) / 2) * 100]
  }

  static hexToHsl(hex: string) {
    let r = 0,
      g = 0,
      b = 0
    if (hex.length == 4) {
      r = parseInt(hex[1] + hex[1], 16)
      g = parseInt(hex[2] + hex[2], 16)
      b = parseInt(hex[3] + hex[3], 16)
    } else if (hex.length == 7) {
      r = parseInt(hex[1] + hex[2], 16)
      g = parseInt(hex[3] + hex[4], 16)
      b = parseInt(hex[5] + hex[6], 16)
    }

    // Puis convertir RGB en HSL
    r /= 255
    g /= 255
    b /= 255
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b)
    let h,
      s,
      l = (max + min) / 2

    if (max == min) {
      h = s = 0 // Achromatique
    } else {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
      }
      h /= 6
    }

    h = Math.round(h * 360)
    s = Math.round(s * 100)
    l = Math.round(l * 100)

    return [h, s, l]
  }

  static hslToCoordinates(h: number, s: number, l: number) {
    let angleDeg = h - 90
    angleDeg *= -1
    const angleRad = (angleDeg * Math.PI) / 180

    const saturationNormalized = s / 100
    const x = Math.cos(angleRad) * saturationNormalized
    const y = Math.sin(angleRad) * saturationNormalized

    return { x, y }
  }

  static hexToCoordinates(hex: string) {
    // Convertir hex en HSL
    const [h, s, l] = this.hexToHsl(hex)
    const { x, y } = this.hslToCoordinates(h, s, l)

    return { x, y }
  }

  static hslToRgb(h: number, s: number, l: number) {
    s /= 100
    l /= 100

    const k = (n: number) => (n + h / 30) % 12
    const a = s * Math.min(l, 1 - l)
    const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))

    return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)]
  }

  static rgbToHex(r: number, g: number, b: number) {
    const toHex = (c: number) => {
      const hex = c.toString(16)
      return hex.length == 1 ? '0' + hex : hex
    }

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
  }

  static coordinatesToHex(coordinates: TCoordinates) {
    // Supposons que lightness est déjà calculé ou donné
    const h = this.getHue(coordinates)
    const s = this.getSaturation(coordinates)
    const l = 50 // Supposons que lightness est directement la valeur de luminosité

    // Convertir HSL en RGB
    const [r, g, b] = this.hslToRgb(h, s, l)

    // Convertir RGB en HEX
    return this.rgbToHex(r, g, b)
  }

  static getOppositeCoordinates({ x, y }) {
    return { x: -x, y: -y }
  }

  static getCombinaisonElementsCoordinates(
    combinaisonsType: TCombinaisonsType,
    hex: string,
    pickerCoordinates: TCoordinates
  ) {
    const [hue, saturation, lightness] = this.hexToHsl(hex)

    const hueRadian = Math.atan2(pickerCoordinates.y, pickerCoordinates.x)
    const [r, g, b] = this.hslToRgb((hue + 180) % 360, saturation, lightness)

    if (combinaisonsType === 'complementary') {
      const coordinates = this.getOppositeCoordinates(pickerCoordinates)
      const position = this.coordinatesToPosition(coordinates)

      return [
        {
          coordinates,
          position,
          hex: this.rgbToHex(r, g, b),
        },
      ]
    }

    if (combinaisonsType === 'monochromatic') {
      let newSaturation: number
      if (saturation / 100 < 0.5) newSaturation = Math.min((saturation / 100) * 2, 1)
      else if (saturation / 100 > 0.5) newSaturation = saturation / 200
      else newSaturation = 0.98

      const x = newSaturation * Math.cos(hueRadian)
      const y = newSaturation * Math.sin(hueRadian)

      const position = this.coordinatesToPosition({ x, y })

      const [r, g, b] = this.hslToRgb(hue, newSaturation * 100, lightness)

      return [
        {
          coordinates: { x, y },
          position,
          hex: this.rgbToHex(r, g, b),
        },
      ]
    }

    if (combinaisonsType === 'analogous') {
      const offset = (30 * Math.PI) / 180

      const analogousHue1 = hueRadian + offset
      const analogousHue2 = hueRadian - offset

      const analogousCoordinates1 = {
        x: Math.cos(analogousHue1) * (saturation / 100),
        y: Math.sin(analogousHue1) * (saturation / 100),
      }

      const analogousCoordinates2 = {
        x: Math.cos(analogousHue2) * (saturation / 100),
        y: Math.sin(analogousHue2) * (saturation / 100),
      }

      const analogousPosition1 = this.coordinatesToPosition(analogousCoordinates1)
      const analogousPosition2 = this.coordinatesToPosition(analogousCoordinates2)

      const [r1, g1, b1] = this.hslToRgb((hue + 30) % 360, saturation, lightness)

      const [r2, g2, b2] = this.hslToRgb((hue - 30) % 360, saturation, lightness)

      return [
        {
          coordinates: analogousCoordinates1,
          position: analogousPosition1,
          hex: this.rgbToHex(r1, g1, b1),
        },
        {
          coordinates: analogousCoordinates2,
          position: analogousPosition2,
          hex: this.rgbToHex(r2, g2, b2),
        },
      ]
    }

    const steps = combinaisonsType === 'triadic' ? 3 : 4
    const rtn: { position: TPosition; coordinates: TCoordinates; hex: string }[] = []
    const offset = ((360 / steps) * Math.PI) / 180
    for (let i = 1; i < steps; i++) {
      const x = (saturation / 100) * Math.cos(hueRadian + i * offset)
      const y = (saturation / 100) * Math.sin(hueRadian + i * offset)

      const position = this.coordinatesToPosition({
        x,
        y,
      })

      const [r, g, b] = this.hslToRgb((hue + i * (360 / steps)) % 360, saturation, lightness)

      rtn.push({
        coordinates: { x, y },
        position,
        hex: this.rgbToHex(r, g, b),
      })
    }
    return rtn
  }

  static padColorHex(hex: string) {
    // S'assure que la chaîne commence par '#'
    if (!hex.startsWith('#')) {
      hex = '#' + hex
    }

    while (hex.length < 7) {
      hex += this.hexChars[Math.floor(Math.random() * this.hexChars.length)]
    }

    return hex
  }
}
