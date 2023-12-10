'use client'
import { useState, useRef, useEffect } from 'react'
import Picker from './Picker'
import WheelView from './Wheel'

const Page = () => {
  const [color, setColor] = useState({
    hex: '#f376bb',
    alpha: 100,
  })

  const handleChange = (color, e) => {
    console.log(color)
    setColor(color)
  }
  return (
    <div className="max-w-7xl px-4 py-12">
      <section>
        {/* <Picker /> */}
        <WheelView />
      </section>
      <section></section>
    </div>
  )
}

export default Page
