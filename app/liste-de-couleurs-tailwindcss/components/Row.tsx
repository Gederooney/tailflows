import React from 'react'
import Button from './Button'

const Row = ({
  color,
  name,
}: {
  color: { [key: string]: { hex: string; rgb: string; hsl: string } }
  name: string
}) => {
  return (
    <div className="grid grid-cols-12 gap-0 px-2 lg:px-4">
      <div className="-rotate-90 md:rotate-0 md:aspect-square col-span-1 flex items-center text-sm font-light">
        {name}
      </div>
      {Object.entries(color).map(([key, value]) => {
        return (
          <div key={name + key} className="h-20 md:h-auto md:aspect-square relative">
            <Button name={name} value={value} index={key} />
          </div>
        )
      })}
    </div>
  )
}

export default Row
