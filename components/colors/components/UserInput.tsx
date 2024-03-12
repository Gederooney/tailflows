import React, { useCallback, useState, ClipboardEvent, useEffect } from 'react'
import { Color } from '../Color'

const UserInput = ({
  value,
  getColor,
  style,
  borderColor,
}: {
  style?: string
  value: string
  getColor: (color: string) => void
  borderColor?: string
}) => {
  const [localValue, setLocalValue] = useState<string>(value)
  const [lastPaddedValue, setLastPaddedValue] = useState<string>(value)

  useEffect(() => {
    if (lastPaddedValue !== value) {
      setLocalValue(value)
    }
  }, [value, lastPaddedValue])

  const onInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let value = event.target.value

      if (!value.startsWith('#')) {
        value = '#' + value.replace(/#/g, '')
      } else {
        value = '#' + value.slice(1).replace(/#/g, '')
      }

      value = value.replace(/[^#a-fA-F0-9]/g, '')

      if (value.length > 7) {
        value = value.substring(0, 7)
      }

      setLocalValue(value.toLowerCase())
      const generatedColor = Color.padColorHex(value)
      getColor(generatedColor)
      setLastPaddedValue(generatedColor)
    },
    [getColor]
  )

  const onInputFocus = useCallback((event) => {
    if (event.target.value === '') {
      event.target.value = '#'
    }
  }, [])

  const onInputKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement

    if (
      (event.ctrlKey || event.metaKey) &&
      (event.key === 'c' || event.key === 'v' || event.key === 'x')
    ) {
      return
    }

    if (event.key === 'Backspace' && target.value === '#') {
      event.preventDefault()
      return false
    }

    if (
      event.key !== 'Backspace' &&
      !Color.hexChars.includes(event.key.toUpperCase()) &&
      !(event.ctrlKey || event.metaKey)
    ) {
      event.preventDefault()
      return false
    }
  }, [])

  const onInputBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    if (target.value === '') {
      setLocalValue('#')
    }
  }, [])

  const onPaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault()

    const pasteText = event.clipboardData.getData('text').trim()

    let value = pasteText
    if (!value.startsWith('#')) {
      value = '#' + value.replace(/#/g, '')
    } else {
      value = '#' + value.slice(1).replace(/#/g, '')
    }

    value = value.replace(/[^#a-fA-F0-9]/g, '')

    if (value.length > 7) {
      value = value.substring(0, 7)
    }

    const processedValue = value.toLowerCase()
    setLocalValue(processedValue)
    const generatedColor = Color.padColorHex(processedValue)
    getColor(generatedColor)
    setLastPaddedValue(generatedColor)
  }

  return (
    <div className="flex-1">
      <input
        onChange={(event) => {}}
        onInput={onInput}
        onFocus={onInputFocus}
        onKeyDown={onInputKeyDown}
        onPaste={onPaste}
        onBlur={onInputBlur}
        type="text"
        className={`w-full h-full text-sm rounded-md focus:outline-0 focus:ring-0 text-center ${
          style !== undefined
            ? style
            : ' text-gray-600 border  border-gray-950/10 focus:ring-0 focus:border-gray-950/20 dark:border-gray-50/10 dark:bg-transparent dark:text-gray-400'
        }`}
        {...(borderColor !== undefined
          ? {
              style: {
                border: `1px solid hsla(var(${borderColor}), 0.1)`,
                color: `hsla(var(${borderColor}), 0.75)`,
              },
            }
          : null)}
        value={localValue}
      />
    </div>
  )
}

export default UserInput
