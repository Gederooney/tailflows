import { useContext, useRef, useCallback, MouseEvent, useEffect, useState } from 'react'
import Context from '../Context'
import { TCoordinates } from '@/components/colors'
import { coordinatesToPosition, getIntersectionTCoordinates } from '@/lib/colors.utils'
import { convertRange } from '@/lib/utils'
import { debounce } from 'lodash'

const useLinearGradient = () => {
  const [isDragging, setIsDragging] = useState(false)
  const { context, setContext } = useContext(Context)
  const { dragger, stopsBar } = context

  const offset = 20

  const getPercentage = useCallback(() => {
    if (stopsBar.scale >= 1) {
      return convertRange(
        0,
        100 * stopsBar.scale,
        -offset * stopsBar.scale,
        100 + offset * stopsBar.scale
      )
    }
    return convertRange(
      0,
      100 * stopsBar.scale,
      offset - offset * stopsBar.scale,
      100 - (offset - offset * stopsBar.scale)
    )
  }, [stopsBar.scale])()

  const image = `linear-gradient(${stopsBar.rotation}deg, <--value-->)`

  const background = stopsBar.stops
    .sort((a, b) => a.position.left - b.position.left)
    .reduce((acc, curr, index) => {
      acc += `${curr.color} ${getPercentage(curr.position.left * stopsBar.scale)}%`

      if (index !== stopsBar.stops.length - 1) acc += ', '
      return acc
    }, ``)

  const centerRef = useRef<HTMLSpanElement>(null)
  const draggerRef = useRef<HTMLButtonElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)

  const handleEvents = useCallback((mouse: TCoordinates) => {
    const center = getCenterLeftTop()

    if (circleRef.current && center) {
      const circle = circleRef.current

      const x = mouse.x - center.left
      const y = mouse.y - center.top

      let radius = Math.sqrt(x * x + y * y)

      const coordinates = getIntersectionTCoordinates(getNormalizedCoordinates({ x, y }, radius))

      if (radius < 64) {
        circle.style.height = `8rem`
        radius = 64
      } else if (radius > 192) {
        circle.style.height = `24rem`
        radius = 192
      }

      circle.style.height = `${(2 * radius) / 16}rem`

      setContext((prev) => ({
        ...prev,
        dragger: {
          ...prev.dragger,
          coordinates,
          position: coordinatesToPosition(coordinates),
        },
        stopsBar: {
          ...prev.stopsBar,
          radius,
          scale: radius / prev.stopsBar.width,
          rotation: 360 - getRotation(coordinates),
        },
      }))
    }
  }, [])

  const handleMouseMove = debounce((e: unknown) => {
    const event = e as MouseEvent<HTMLElement>
    event.stopPropagation()
    const mouse = { x: event.clientX, y: event.clientY }
    handleEvents(mouse)
  }, 10)

  const handleTouchMove = debounce((e: unknown) => {
    const event = e as TouchEvent
    const mouse = { x: event.touches[0].clientX, y: event.touches[0].clientY }
    handleEvents(mouse)
  })

  const handleDrag = (e: unknown) => {
    const event = e as MouseEvent | TouchEvent
    if (!('touches' in event)) {
      event.preventDefault()
      event.stopPropagation()
    }
    setIsDragging(true)
  }

  useEffect(() => {
    const handleMouseUp = (event: unknown) => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousemove', handleMouseMove)
      setIsDragging(false)
    }

    const handleTouchEnd = (event: unknown) => {
      document.removeEventListener('touchend', handleTouchEnd)
      document.removeEventListener('touchmove', handleTouchMove)
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)

      document.addEventListener('touchend', handleTouchEnd)
      document.addEventListener('touchmove', handleTouchMove)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)

      document.removeEventListener('touchend', handleTouchEnd)
      document.removeEventListener('touchmove', handleTouchMove)
    }
  }, [isDragging, handleMouseMove])

  const getNormalizedCoordinates = (mouse: TCoordinates, radius: number) => {
    return {
      x: mouse.x / radius,
      y: -mouse.y / radius,
    }
  }

  const getRotation = ({ x, y }: TCoordinates) => {
    const angleRadians = Math.atan2(y, x)
    let angleDegrees = angleRadians * (180 / Math.PI)
    if (angleDegrees < 0) {
      angleDegrees += 360
    }

    return angleDegrees
  }

  const getCenterLeftTop = () => {
    if (centerRef.current) {
      const rect = centerRef.current.getBoundingClientRect()
      return { left: rect.left + rect.width / 2, top: rect.top + rect.height / 2 }
    }
    return null
  }

  return {
    background: image.replace('<--value-->', background),
    circleRef,
    centerRef,
    draggerRef,
    handleDrag,
    dragger,
  }
}

export default useLinearGradient
