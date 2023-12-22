'use client'
import { createContext } from 'react'
import { ContextState } from './colors'

const intialState = {} as ContextState

const ColorContext = createContext<ContextState>(intialState)

export default ColorContext
