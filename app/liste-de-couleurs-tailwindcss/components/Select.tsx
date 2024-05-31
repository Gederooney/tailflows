import React from 'react'

const Select = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
}) => {
  return (
    <div>
      <label>{label}</label>
      <select
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
        }}
        className="border border-secondary-950/10 rounded-md px-2 py-2.5 w-40 bg-gray-200 dark:bg-secondary-800 dark:border-primary-100/10 text-xs font-light"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
