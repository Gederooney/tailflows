import { useCallback, useEffect, useState } from 'react'
import { TCombinaisonsType, TCoordinates } from '..'
import { Color } from '../Color'

const useWheel = (color: string, getData: (data: { color: string; palette: string[] }) => void) => {
  const [picker, setPicker] = useState<TCoordinates>(Color.hexToCoordinates(color))
  const [lightness, setLightness] = useState<TCoordinates>(
    Color.hslTolightnessCoordinates(Color.hexToHsl(color))
  )

  const [hex, setHex] = useState(
    Color.rgbToHexV2(Color.hslToRgbV2(Color.coordinatesToHslV2(picker, lightness)))
  )
  const [combinaisonType, setCombinaisonType] = useState<TCombinaisonsType>('complementary')
  const [combinaisons, setCombinaisons] = useState(() => {
    const comb = Color.getCombinaisonElementsCoordinates(combinaisonType, hex, picker)

    return comb.map((c) => ({ coordinates: c.coordinates, color: c.hex }))
  })

  const handlePicker = (coordinates: TCoordinates) => {
    const color = Color.coordinatesToHex(coordinates)
    const palette = [color]
    setPicker(coordinates)
    setHex(color)
    const comb = Color.getCombinaisonElementsCoordinates(combinaisonType, color, coordinates).map(
      (c) => {
        palette.push(c.hex)
        return { coordinates: c.coordinates, color: c.hex }
      }
    )
    setCombinaisons(comb)

    if (lightness.x !== 1 && lightness.x !== -1) {
      if (lightness.x >= 0) setLightness({ x: 1, y: 0 })
      else setLightness({ x: -1, y: 0 })
    }

    getData({ color, palette })
  }
  const handleLightness = (coordinates: TCoordinates) => {
    const color = Color.rgbToHexV2(Color.hslToRgbV2(Color.coordinatesToHslV2(picker, coordinates)))
    const palette = [color]

    setLightness(coordinates)
    setHex(color)
    Color.getCombinaisonElementsCoordinates(combinaisonType, color, picker).map((c) =>
      palette.push(c.hex)
    )

    getData({ color, palette })
  }

  const getUserInput = (value: string) => {
    const coordinates = Color.hexToCoordinates(value)
    const lightness = Color.hslTolightnessCoordinates(Color.hexToHsl(value))
    setPicker(coordinates)
    setLightness(lightness)
    const color = Color.padColorHex(value)
    setHex(color)
    const palette = [color]

    const comb = Color.getCombinaisonElementsCoordinates(combinaisonType, value, coordinates).map(
      (c) => {
        palette.push(c.hex)
        return { coordinates: c.coordinates, color: c.hex }
      }
    )
    setCombinaisons(comb)
    getData({ color, palette })
  }

  const onCombinaisonTypeChange = useCallback(
    (value: TCombinaisonsType) => {
      setCombinaisonType(value)

      const palette = [hex]

      const comb = Color.getCombinaisonElementsCoordinates(value, hex, picker).map((c) => {
        palette.push(c.hex)
        return { coordinates: c.coordinates, color: c.hex }
      })
      setCombinaisons(comb)
      getData({ color: hex, palette })
    },
    [hex, picker, getData]
  )

  useEffect(() => {
    if (color !== hex) {
      const picker = Color.hexToCoordinates(color)
      const lightness = Color.hslTolightnessCoordinates(Color.hexToHsl(color))

      setPicker(picker)
      setLightness(lightness)
      setHex(color)
      const palette = [color]
      const comb = Color.getCombinaisonElementsCoordinates(combinaisonType, color, picker).map(
        (c) => {
          palette.push(c.hex)
          return { coordinates: c.coordinates, color: c.hex }
        }
      )
      setCombinaisons(comb)
      getData({ color, palette })
    }
  }, [color])

  return {
    hex,
    lightness,
    picker,
    handleLightness,
    handlePicker,
    combinaisons,
    getUserInput,
    onCombinaisonTypeChange,
    combinaisonType,
  }
}

export default useWheel
