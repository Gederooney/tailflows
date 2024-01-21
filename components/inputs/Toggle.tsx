import React from 'react'

interface ToggleProps {
  label: string
  onChange: (value: boolean) => void
  defaultValue?: boolean
}

const Toggle = ({ label, onChange }: ToggleProps) => {
  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={(e) => onChange((e.target as HTMLInputElement).checked)}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        <span className="text-sm font-medium text-gray-900 ms-3 dark:text-gray-300">{label}</span>
      </label>
    </div>
  )
}

export default Toggle
