import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { TCombinaisonsType } from '..'

const CombinaisonSelect = ({
  type,
  onTypeChange,
  style,
  borderColor,
}: {
  style?: string
  type: TCombinaisonsType
  onTypeChange: (value: string) => void
  borderColor?: string
}) => {
  const [value, setValue] = useState<TCombinaisonsType>(type)
  const onChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target
      setValue(value as TCombinaisonsType)
      onTypeChange(value)
    },
    [onTypeChange]
  )

  useEffect(() => {
    if (type !== value) {
      setValue(type)
    }
  }, [type, value])

  return (
    <select
      name=""
      id="combinaison"
      className={`w-full h-full text-sm rounded-md focus:outline-0 focus:ring-0 text-center ${
        style !== undefined
          ? style
          : 'text-center text-gray-600 border  border-gray-950/10 focus:ring-0 focus:border-gray-950/20 dark:border-gray-50/10 dark:bg-transparent dark:text-gray-400'
      }`}
      {...(borderColor !== undefined
        ? {
            style: {
              border: `1px solid hsla(var(${borderColor}), 0.1)`,
              color: `hsla(var(${borderColor}), 0.75)`,
            },
          }
        : null)}
      onChange={onChange}
    >
      <option value="complementary">Complémentaire</option>
      <option value="monochromatic">Monochrome</option>
      <option value="analogous">Analogue</option>
      <option value="triadic">Triadrique</option>
      <option value="tetradic">Tétraédrique</option>
    </select>
  )
}

export default CombinaisonSelect
