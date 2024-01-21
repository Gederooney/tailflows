import React, { useState } from 'react'

interface TextProps {
  label?: string
  onChange: (value: string) => void
  defaultValue?: string
  style?: string
}

const Text = ({ label, onChange, style, defaultValue }: TextProps) => {
  const [value, setValue] = useState('')
  const handleChange = () => {}
  return (
    <div className="">
      <div className="">
        {label ? <label htmlFor={`input-Number-${label}`}>{label}</label> : null}
        <input
          id={`input-Number-${label}`}
          onChange={handleChange}
          name={label}
          type="text"
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

export default Text
