'use client'
import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react'

export interface ColorUseCasesContextState {
  useCase:
    | 'text'
    | 'bg'
    | 'border'
    | 'shadow'
    | 'highlight'
    | 'ring'
    | 'decoration'
    | 'divide'
    | 'accent'
  classType: 'hex' | 'rgb' | 'hsl' | 'tailwind-class'
}

interface IColorUseCasesContext {
  colorUseCasesContextState: ColorUseCasesContextState
  setColorUseCasesContextState: Dispatch<SetStateAction<ColorUseCasesContextState>>
}

export const ColorUseCasesContext = createContext<IColorUseCasesContext>({
  colorUseCasesContextState: { useCase: 'text', classType: 'tailwind-class' },
  setColorUseCasesContextState: () => {},
})

interface ColorUseCasesProviderProps {
  children: ReactNode
}

const ColorUseCasesProvider: React.FC<ColorUseCasesProviderProps> = ({ children }) => {
  const [context, setContext] = useState<ColorUseCasesContextState>({
    useCase: 'text',
    classType: 'tailwind-class',
  })

  return (
    <ColorUseCasesContext.Provider
      value={{ colorUseCasesContextState: context, setColorUseCasesContextState: setContext }}
    >
      {children}
    </ColorUseCasesContext.Provider>
  )
}

export const useColorUseCases = () => {
  return useContext(ColorUseCasesContext)
}

export default ColorUseCasesProvider
