import React, { useContext } from 'react'
import ColorContext from './context'
import PickerFormInput from './PickerFormInput'
import { ColorMode } from './colors'
interface InputProps {
  name: string
  min?: number
  max?: number
  type: 'text' | 'number'
  value: string
}

const FormGroup = (props: InputProps) => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-row gap-1 items-center justify-start">
        <PickerFormInput {...props} />
      </div>
    </div>
  )
}

const Select = () => {
  const { state, setState } = useContext(ColorContext)
  return (
    <div className="w-full ">
      <div className="w-full flex flex-row items-center gap-1">
        <label htmlFor="colorspace" className="text-xs">
          Type
        </label>
        <select
          value={state.currentMode.toUpperCase()}
          onChange={(e) =>
            setState((prev) => {
              return { ...prev, currentMode: e.target.value.toLowerCase() as ColorMode }
            })
          }
          name="colorspace"
          id="colorspace"
          className="md:w-20 h-8 rounded-md text-xs text-center dark:bg-transparent focus:outline-none focus:ring-0 p-0 uppercase flex-1"
        >
          <option value="HSL">HSL</option>
          <option value="RGB">RGB</option>
          <option value="LAB">LAB</option>
        </select>
      </div>
    </div>
  )
}

const Controls = () => {
  const { state, setState } = useContext(ColorContext)
  const { mode, currentMode } = state

  const curr = mode[currentMode.toLowerCase()]

  const minmax = {
    hsl: {
      h: { min: 1, max: 259 },
      s: { min: 0, max: 100 },
      l: { min: 0, max: 100 },
    },
    rgb: {
      r: { min: 0, max: 255 },
      g: { min: 0, max: 255 },
      b: { min: 0, max: 255 },
    },
    lab: {
      l: { min: 0, max: 100 },
      a: { min: -128, max: 128 },
      b: { min: -128, max: 128 },
    },
  }

  const rtn = Object.keys(curr).map((key, index) => {
    let value = curr[key]
    if (currentMode === 'hsl' && index !== 0) value *= 100

    return (
      <FormGroup
        key={key + index}
        name={key}
        type="number"
        min={minmax[currentMode.toLowerCase()][key].min}
        max={minmax[currentMode.toLowerCase()][key].max}
        value={`${Math.round(value)}`}
      />
    )
  })
  return (
    <>
      {rtn}
      <FormGroup
        name="op"
        type="number"
        min={0}
        max={100}
        value={`${Math.round(state.alpha * 100)}`}
      />
    </>
  )
}

const WheelForm = () => {
  const { state } = useContext(ColorContext)

  return (
    <section className="inline-block md:h-[250px] mx-auto md:mx-0">
      <div className="h-full w-full">
        <div className="w-full flex flex-col gap-2 justify-between items-start h-full">
          <FormGroup name="hex" type="text" value={`#${state.hexToDisplay}`} />
          <div className="flex gap-2 flex-col items-end w-full">
            <Select />
            <Controls />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WheelForm
