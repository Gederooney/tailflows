import { useCallback, useEffect, useRef } from 'react'
import { TCoordinates } from '..'
import {
  getIntersectionTCoordinates,
  getRelativeMousePosition,
  pointIsInCercle,
} from '@/lib/colors.utils'

const useCircle = (isLightness: boolean, getCoordinates: (coordinates: TCoordinates) => void) => {
  const circleRef = useRef<HTMLDivElement>(null)
  const getActionCoordinates = useCallback(
    (event: MouseEvent | TouchEvent) => {
      event.stopPropagation()
      event.preventDefault()

      const sizes = getSizes()
      const client = getClient(event)
      const mousePosition = getRelativeMousePosition(client.x, client.y, sizes)

      const coordinates = getNormalizedCoordinates(mousePosition, sizes as DOMRect)

      if (isLightness || !pointIsInCercle(coordinates)) {
        return getIntersectionTCoordinates(coordinates)
      }

      return coordinates
    },
    [isLightness]
  )

  const onMouseMove = useCallback(
    (e: unknown) => {
      const event = e as MouseEvent
      getCoordinates(getActionCoordinates(event) as TCoordinates)
    },
    [getActionCoordinates, getCoordinates]
  )

  const cleanUp = useCallback(
    (e: unknown) => {
      const event = e as MouseEvent
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', cleanUp)

      if (circleRef.current) {
        circleRef.current.style.cursor = 'pointer'
      }
    },
    [onMouseMove]
  )

  const onMouseDown = useCallback(
    (e: unknown) => {
      const event = e as MouseEvent
      getCoordinates(getActionCoordinates(event) as TCoordinates)
      if (circleRef.current) {
        circleRef.current.style.cursor = 'none'
      }
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', cleanUp)
    },
    [cleanUp, onMouseMove, getCoordinates, getActionCoordinates]
  )

  const onTouch = useCallback(
    (e: unknown) => {
      const event = e as TouchEvent
      getCoordinates(getActionCoordinates(event) as TCoordinates)
    },
    [getCoordinates, getActionCoordinates]
  )

  useEffect(() => {
    const circle = circleRef.current

    if (circle) {
      circle.addEventListener('mousedown', onMouseDown, {
        passive: false,
      })
      circle.addEventListener('touchstart', onTouch, {
        passive: false,
      })
      circle.addEventListener('touchmove', onTouch, {
        passive: false,
      })

      return () => {
        circle.removeEventListener('mousedown', onMouseDown)
        circle.removeEventListener('touchstart', onTouch)
        circle.removeEventListener('touchmove', onTouch)
      }
    }
  }, [onTouch, onMouseDown])

  function getSizes() {
    if (circleRef.current) return circleRef.current.getBoundingClientRect()
  }

  function getClient(event: MouseEvent | TouchEvent) {
    return {
      x: event.type.startsWith('touch')
        ? (event as TouchEvent).touches[0].clientX
        : (event as MouseEvent).clientX,

      y: event.type.startsWith('touch')
        ? (event as TouchEvent).touches[0].clientY
        : (event as MouseEvent).clientY,
    }
  }

  function getNormalizedCoordinates(coordinates: TCoordinates, sizes: DOMRect) {
    return {
      x: (coordinates.x - sizes.width / 2) / (sizes.width / 2),
      y: (sizes.height / 2 - coordinates.y) / (sizes.height / 2),
    }
  }

  return {
    circleRef,
  }
}

export default useCircle
