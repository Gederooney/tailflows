'use client'
import React from 'react'
import { useColorUseCases } from '../context/ColorUseCases'
import Select from './Select'

const Controls = () => {
  const { colorUseCasesContextState, setColorUseCasesContextState } = useColorUseCases()

  const useCasesOptions = [
    { value: 'text', label: 'Text' },
    { value: 'bg', label: 'Background' },
    { value: 'border', label: 'Border' },
    { value: 'shadow', label: 'Shadow' },
    { value: 'highlight', label: 'Highlight' },
    { value: 'ring', label: 'Ring' },
    { value: 'decoration', label: 'Decoration' },
    { value: 'divide', label: 'Divide' },
    { value: 'accent', label: 'Accent' },
  ]
  const classTypeOptions = [
    { value: 'tailwind-class', label: 'Class Tailwindcss' },
    { value: 'hex', label: 'HEX' },
    { value: 'rgb', label: 'RGB' },
    { value: 'hsl', label: 'HSL' },
  ]

  const onChange = (key: keyof ColorUseCasesContextState) => (value: string) => {
    setColorUseCasesContextState((state) => ({ ...state, [key]: value }))
  }

  return (
    <div className="sticky bottom-0 left-0 w-full">
      <div className="mx-auto max-w-7xl py-6">
        <div className="flex items-center justify-center gap-4">
          <Select
            label=""
            value={colorUseCasesContextState.useCase}
            options={useCasesOptions}
            onChange={onChange('useCase')}
          />
          <Select
            label=""
            value={colorUseCasesContextState.classType}
            options={classTypeOptions}
            onChange={onChange('classType')}
          />
        </div>
      </div>
    </div>
  )
}

export default Controls
