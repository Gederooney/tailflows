import { useContext, useMemo, useState } from 'react'
import GradientContext from '../Context'
import { coordinatesToPosition } from '@/lib/colors.utils'

const useEditPannel = () => {
  const [palette, setPalette] = useState<string[]>(['#fafafe'])
  const [togglePannel, setTogglePannel] = useState(false)
  const { context, setContext } = useContext(GradientContext)
  const { stopsBar } = context
  const { activeStopId, stops } = stopsBar

  const activeStop = useMemo(() => {
    return stops.find((stop) => stop.id === activeStopId) || stops[0]
  }, [activeStopId, stops])

  const updateActiveStopProperty = (property: string) => (value: string | number) => {
    setContext((prevContext) => {
      const updatedStopsBar = { ...prevContext.stopsBar }
      updatedStopsBar.stops = updatedStopsBar.stops.map((stop) => {
        if (stop.id === updatedStopsBar.activeStopId) {
          if (property === 'position')
            return { ...stop, position: { ...stop.position, left: value as number } }
          else return { ...stop, [property]: value }
        }
        return stop
      })

      return { ...prevContext, stopsBar: updatedStopsBar }
    })
  }

  const removeActiveColor = (e: unknown) => {
    const event = e as MouseEvent
    event.preventDefault()
    if (stopsBar.stops.length > 2) {
      const stops = stopsBar.stops.filter((stop) => stop.id !== activeStopId)
      setContext((prev) => ({
        ...prev,
        stopsBar: { ...prev.stopsBar, stops, activeStopId: stops[0].id },
      }))
    }
    return
  }

  const getData = (data: { color: string; palette: string[] }) => {
    setPalette((prev) => data.palette)
    setContext((prev) => {
      const { activeStopId, stops } = prev.stopsBar
      const activeStop = stops.find((stop) => stop.id === activeStopId)
      if (activeStop) {
        activeStop.color = data.color
        const newStops = [...stops.filter((stop) => stop.id !== activeStopId), activeStop]
        return { ...prev, stopsBar: { ...prev.stopsBar, stops: newStops } }
      }
      return prev
    })
  }

  const handleTogglePannel = (event) => {
    event.preventDefault()
    event.stopPropagation()
    setTogglePannel(!togglePannel)
  }

  const onRotationChange = (value: number) => {
    const x = Math.cos(((360 - value) * Math.PI) / 180)
    const y = Math.sin(((360 - value) * Math.PI) / 180)

    setContext((prev) => ({
      ...prev,
      stopsBar: { ...prev.stopsBar, rotation: value },
      dragger: {
        ...prev.dragger,
        coordinates: { x, y },
        position: coordinatesToPosition({ x, y }),
      },
    }))
  }

  return {
    activeStop: {
      stop: activeStop,
      updateActiveStopProperty,
    },
    removeActiveColor,
    getData,
    disableRemoveColor: stopsBar.stops.length > 2,
    handleTogglePannel,
    togglePannel,
    rotation: stopsBar.rotation,
    onRotationChange,
    palette,
  }
}

export default useEditPannel
