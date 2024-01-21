'use client'
import React, { useState } from 'react'

interface NumberProps {
  label?: string
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  defaultValue?: number
  style?: string
}

const Number = ({ label, onChange, min, max, step, defaultValue, style }: NumberProps) => {
  const [value, setValue] = useState(0)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    if (isNaN(+value) || (max && +value > max) || (min && +value < min)) return
    setValue(+value)
    onChange(+value)
  }
  return (
    <div className="">
      <div className="">
        {label ? <label htmlFor={`input-Number-${label}`}>{label}</label> : null}
        <input
          id={`input-Number-${label}`}
          onChange={handleChange}
          name={label}
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          className={
            style ??
            'text-center w-full h-full bg-transparent border border-secondary-950/10 text-xs rounded-md'
          }
        />
      </div>
    </div>
  )
}

export default Number
