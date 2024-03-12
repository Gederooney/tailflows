import { TCoordinates, TPosition } from '@/components/colors'
import { Dispatch, SetStateAction, createContext } from 'react'
import { IStop } from './components/Stop'

export interface IContextState {
  dragger: {
    coordinates: TCoordinates
    position: TPosition
  }
  stopsBar: {
    activeStopId: string
    width: number
    stops: IStop[]
    rotation: number
    scale: number
  }
}

interface IInitialState {
  context: IContextState
  setContext: Dispatch<SetStateAction<IContextState>>
}

const Context = createContext<IInitialState>({} as IInitialState)

export default Context
