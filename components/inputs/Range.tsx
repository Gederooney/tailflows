import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'

interface RangeProps {
  label: string
  handleChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  hideLabel?: boolean
  defaultValue?: number
  lightColor: string
  darkColor: string
}

const Range = ({
  label,
  handleChange,
  min,
  max,
  step,
  hideLabel,
  defaultValue,
  lightColor,
  darkColor,
}: RangeProps) => {
  const [value, setValue] = useState<number>(defaultValue ?? 0)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setValue(+value)
    handleChange(+value)
  }

  useEffect(() => {
    if (defaultValue) setValue(defaultValue)
  }, [defaultValue])
  return (
    <div>
      <div>
        <label
          className={`${hideLabel ? 'sr-only' : 'not-sr-only'}`}
          htmlFor={`input-range-${label}`}
        >
          {label}
        </label>

        <div className="flex items-center w-full gap-4">
          {min !== undefined ? <span>{min}</span> : null}
          <div
            className="relative w-full"
            // @ts-ignore
            style={{ '--lightColor': lightColor, '--darkColor': darkColor }}
          >
            <span
              className={`absolute block w-full h-1 -translate-y-1/2 rounded-full cursor-pointer bg-[var(--lightColor)] dark:bg-[var(--darkColor)] top-1/2 pointer-events-none`}
            ></span>

            <span
              className="absolute inline-block w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none bg-gray-50 top-1/2"
              style={{ left: `${value}%` }}
            ></span>
            <input
              value={value}
              type="range"
              name={`input-range-${label}`}
              className="w-full h-full opacity-0 cursor-pointer"
              min={min ?? 0}
              max={max ?? 100}
              step={step ?? 1}
              onChange={onChange}
              id={`input-range-${label}`}
            />
          </div>
          {max ? <span>{max}</span> : null}
        </div>
      </div>
    </div>
  )
}

export default Range
