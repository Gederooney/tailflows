import { useContext, useCallback, useState, useEffect } from 'react'
import Context from '../Context'
import { IStop } from '../components/Stop'
import { v4 as uuidv4 } from 'uuid'
import { Color } from '@/components/colors/Color'

const useStopbar = () => {
  const [isDragging, setIsDragging] = useState(false)
  const { context, setContext } = useContext(Context)
  const { stopsBar } = context

  const { rotation } = stopsBar

  const handleAddStop = (e: unknown) => {
    if (isDragging) return
    const event = e as MouseEvent
    event.preventDefault()
    event.stopPropagation()

    if (stopsBar.stops.length >= 6) return

    let x: number
    const parent = (event.target as HTMLElement).getBoundingClientRect()
    const mouse = { x: event.clientX, y: event.clientY }

    if ((rotation >= 0 && rotation <= 90) || (rotation >= 270 && rotation <= 360)) {
      x = mouse.x - parent.left
    } else {
      x = parent.right - mouse.x
    }

    if (x > 0) {
      const left = (x * 100) / parent.width
      const uniqueId = uuidv4()
      const uniqueColor = Color.padColorHex('#')
      const stop: IStop = {
        id: uniqueId,
        position: { left, top: 1 },
        color: uniqueColor,
      }
      setContext((prev) => ({
        ...prev,
        stopsBar: {
          ...prev.stopsBar,
          stops: [...prev.stopsBar.stops, stop],
          activeStopId: uniqueId,
        },
      }))

      // getData here
    }
  }

  const updateStops = (index: number) => (stop: IStop) => {
    const newStops = stopsBar.stops.filter((s) => s.id !== stop.id)

    if (stop.id === context.stopsBar.activeStopId) {
      setContext((prev) => ({
        ...prev,
        stopsBar: { ...prev.stopsBar, stops: [...newStops, stop] },
      }))
    }
  }

  const setActiveStop = useCallback(
    (id: string) => () => {
      const stop = context.stopsBar.stops.find((stop) => stop.id === id)
      if (stop) {
        setContext((prev) => {
          if (id !== prev.stopsBar.activeStopId)
            return { ...prev, stopsBar: { ...prev.stopsBar, activeStopId: id } }

          return prev
        })
      }
    },
    [setContext, context.stopsBar.stops]
  )
  const toggleIsDragging = (value: boolean) => setIsDragging(value)

  return {
    handleAddStop,
    updateStops,
    setActiveStop,
    rotation,
    stopsBar,
    isDragging,
    toggleIsDragging,
  }
}
export default useStopbar
