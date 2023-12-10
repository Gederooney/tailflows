import React, { useRef, useState, useEffect } from 'react'
import chroma from 'chroma-js'
import Color from 'color'

function makeShadesHSL(hslArray, stepsCount) {
  const interval = 98 / stepsCount
  const shades = []

  for (let i = stepsCount; i > 0; i--) {
    const hsl = hslArray.slice()
    hsl[2] = interval * i
    // shades.push(hsl)
  }
  return shades
}

const PickerInput = ({
  className,
  name,
  value,
  onChange,
}: {
  className: string
  name: string
  value: string | number
  onChange: (v: number) => void
}) => {
  // const [value, setValue] = useState()
  const handleChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input id={name} name={name} onChange={handleChange} value={value} className={className} />
    </>
  )
}

const HueAlphaPicker = ({
  useCase,
  hue,
  alpha,
  onChange,
}: {
  useCase: 'hue' | 'alpha'
  hue: number
  alpha: number
  onChange: (number) => void
}) => {
  const [position, setPosition] = useState()

  const handleChange = (e: HTMLInputElement) => {
    if (useCase === 'hue') {
      onChange(+e.value)
    } else {
      onChange(+e.value)
    }
  }

  return (
    <div className="w-[300px] h-8 relative">
      <input
        className="w-full h-full opacity-0 absolute top-0 left-0 cursor-pointer"
        onChange={(e) => handleChange(e.target)}
        type="range"
        min={0}
        max={useCase === 'hue' ? 359 : 100}
        value={position}
        name="slider"
        id="slider"
        style={{ zIndex: 100 }}
      />
      <span
        style={{
          left: `${useCase === 'alpha' ? alpha : (hue * 100) / 360}%`,
          top: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: `${useCase === 'hue' ? ` hsl(${hue}, 100%, 50%)` : 'white'}`,
        }}
        className="absolute left-0 h-10 w-2 rounded-md border-2 border-gray-900 z-50 top-1/2 cursor-pointer pointer-events-none"
      ></span>
      <div id={useCase} className="h-full w-full overflow-hidden rounded-md">
        {useCase === 'alpha' ? (
          <>
            <div
              className="top-0 left-0 absolute w-full h-full rounded-md overflow-hidden"
              style={{
                inset: '0px',
                background:
                  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAARZJREFUOE9tUwsWwjAII3fo/U/YO6Ak/Db1+ZyjEJJAYWbHYPE1dzMDzOIZPxF3XIcrFklzxL8w2OGD1ZFHqMxkyoW5eYeJ2oARJsDURefMJg5usXng8ij6G053JP3ikHxhAtikUk2pOtKSOQkyGnBFuQyIxk6/IjIMSEcHDaeaW90zY2ErUyaSwVjNLhF1v1WxAZgv63DYeU2J00hNAK5YBdwrE4w9HP8dtIfJa/h/zMzl0cl7C0KiOusjaQ8bnhtWCIvuWQuYIqrNCEj4nGXp12tKaFOmfe5MF9eGPtHsADDPVdfS6r4s46dlgIznHK1WfVzQRLqEAvcKt1u6nnHZ3q7le4D8jLFvXk9Ed4XMeuJp8ff9A+OJh8DQ+vGnAAAAAElFTkSuQmCC") left center',
              }}
            ></div>
            <div
              className="w-full h-full absolute top-0 left-0 z-10 rounded-md overflow-hidden"
              style={{
                background: `linear-gradient(to right, hsla(${hue},100%, 50%, 0), hsla(${hue},100%, 50%, 1))`,
              }}
            ></div>
          </>
        ) : null}
      </div>
    </div>
  )
}

const SaturationAndLightnessPicker = ({
  hsla,
  onChange,
}: {
  hsla: { h: number; s: number; l: number; a: number }
  onChange: ({ x, y }: { x: number; y: number }) => void
}) => {
  const [isDragging, setIsDragging] = useState(false)

  const draggable = useRef(null)
  return (
    <div
      style={{ backgroundColor: `hsl(${hsla.h},100%, 50%)` }}
      className="w-[300px] h-[200px] rounded-md relative z-0 overflow-hidden drop-shadow-sm shadow-sm border pointer-events-none"
    >
      <span
        ref={draggable}
        style={{ left: `${hsla.s}%`, top: `${100 - hsla.l}%` }}
        className="h-4 w-4 z-40  inline-block rounded-full border-4 border-white absolute pointer-events-none  -translate-x-1/2 -translate-y-1/2"
      ></span>
      <div className="absolute z-10 top-0 left-0 h-full w-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <button
        onPointerDown={() => {
          setIsDragging(true)
        }}
        onPointerUp={() => {
          setIsDragging(false)
        }}
        onMouseMove={(e) => {
          if (isDragging) {
            const parent = (e.target as HTMLButtonElement).getBoundingClientRect()
            const movedBy = {
              x: ((e.clientX - parent.left) * 100) / parent.width,
              y: ((e.clientY - parent.top) * 100) / parent.height,
            }
            onChange(movedBy)
          }
        }}
        onClick={(e) => {
          const parent = (e.target as HTMLButtonElement).getBoundingClientRect()
          const movedBy = {
            x: ((e.clientX - parent.left) * 100) / parent.width,
            y: ((e.clientY - parent.top) * 100) / parent.height,
          }

          onChange(movedBy)
        }}
        className="absolute z-20 top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent pointer-events-auto cursor-pointer"
      ></button>
    </div>
  )
}

const Picker = () => {
  const [hsla, setHSLA] = useState({
    h: 190,
    s: 100,
    l: 70,
    a: 100,
  })

  const [color, setColor] = useState(new Color(`hsl(${hsla.h}, ${hsla.s}%, ${hsla.l}%)`))

  useEffect(() => {
    const inst = new Color(`hsl(${hsla.h}, ${hsla.s}%, ${hsla.l}%)`)
    setColor(inst)
  }, [hsla])

  const handleHueChange = (v: number) => {
    setHSLA((prev) => ({
      ...prev,
      h: Math.round(v),
    }))
  }
  const handleAlphaChange = (v: number) => {
    if (!(v >= 0 && v <= 100)) return
    setHSLA((prev) => ({
      ...prev,
      a: v,
    }))
  }

  const handleChangeStaBright = (v: { x: number; y: number }) => {
    v = {
      x: Math.round(v.x),
      y: Math.round(v.y),
    }

    setHSLA((prev) => ({
      ...prev,
      s: v.x,
      l: 100 - v.y,
    }))
  }

  return (
    <div className="flex gap-8 flex-col items-center md:flex-row">
      <SaturationAndLightnessPicker onChange={handleChangeStaBright} hsla={hsla} />
      <div className="flex flex-col gap-2 justify-between">
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <PickerInput
              value={color.hex()}
              onChange={() => null}
              name="Hex"
              className="text-xs h-8 w-24 rounded-md text-center"
            />
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col items-center">
              <PickerInput
                value={hsla.h}
                name="H"
                onChange={handleHueChange}
                className="text-xs h-8 w-10 rounded-md p-0 text-center"
              />
            </div>
            <div className="flex flex-col items-center">
              <PickerInput
                value={100 - Math.round(hsla.s / 2)}
                onChange={(e) => {}}
                name="S"
                className="text-xs h-8 w-10 rounded-md p-0 text-center"
              />
            </div>
            <div className="flex flex-col items-center">
              <PickerInput
                value={hsla.l}
                onChange={(e) => {
                  if (e < 0 || e > 100) return
                  setHSLA((prev) => ({
                    ...prev,
                    l: e,
                  }))
                }}
                name="L"
                className="text-xs h-8 w-10 rounded-md p-0 text-center"
              />
            </div>
            <div className="flex flex-col items-center">
              <PickerInput
                name="A"
                onChange={handleAlphaChange}
                className="text-xs h-8 w-10 rounded-md p-0 text-center"
                value={`${hsla.a}`}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <HueAlphaPicker alpha={hsla.a} hue={hsla.h} useCase="hue" onChange={handleHueChange} />
          <HueAlphaPicker
            alpha={hsla.a}
            hue={hsla.h}
            useCase="alpha"
            onChange={handleAlphaChange}
          />
        </div>
      </div>
    </div>
  )
}

export default Picker
