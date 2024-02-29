'use client'
import { Dispatch, SetStateAction, createContext } from 'react'

interface IState {
  hex: string
  palette: string[]
}
interface ContextState {
  context: IState
  setContext: Dispatch<SetStateAction<IState>>
}

const intialState = {} as ContextState

const ColorContext = createContext<ContextState>(intialState)

export default ColorContext
