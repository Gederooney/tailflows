import React from 'react'

interface RangeProps {
  label: string
  handleChange: (value: number) => void
  min?: number
  max?: number
  step?: number
}

const Range = ({ label, handleChange, min, max, step }: RangeProps) => {
  return (
    <div>
      <div>
        <label htmlFor={`input-range-${label}`}>{label}</label>
        <input
          id={`input-range-${label}`}
          name={label}
          type="range"
          min={min ?? 0}
          max={max ?? 100}
          step={step ?? 1}
        />
      </div>
    </div>
  )
}

export default Range
