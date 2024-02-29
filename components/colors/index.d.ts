export type TCoordinates = { x: number; y: number }
export type TPosition = { top: number; left: number }

export interface IWheelState {
  isDragging: boolean
  mode: null | 'touch' | 'mouse'
  isDraggingLightness: boolean
  picker: {
    coordinates: TCoordinates
    position: TPosition
  }
  lightnessPicker: {
    coordinates: TCoordinates
    position: TPosition
  }
}

type THsl = [number, number, number]

export type TCombinaisonsType =
  | 'complementary'
  | 'monochromatic'
  | 'analogous'
  | 'triadic'
  | 'tetradic'

export interface IInitialWheelState {
  colorHex: string
  picker: { coordinates: TCoordinates; position: TPosition }
  lightnessPicker: { coordinates: TCoordinates; position: TPosition }
  combinaisonType: TCombinaisonsType
  palette: {
    elements: { coordinates: TCoordinates; position: TPosition }[]
    colors: string[]
  }
}
