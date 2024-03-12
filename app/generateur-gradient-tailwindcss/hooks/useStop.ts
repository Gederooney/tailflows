import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import Context from '../Context'
import { IStopProps } from '../components/Stop'
import { TCoordinates } from '@/components/colors'

const useStop = ({ stop, updateStop, setActiveStop, toggleIsDragging }: IStopProps) => {
  const { context } = useContext(Context)
  const { rotation } = context.stopsBar
  const [isMouseDown, setIsMouseDown] = useState(false)
  const parentRectRef = useRef<DOMRect | null>(null)

  const left = stop.position.left

  const handleMoveEvents = useCallback(
    (client: TCoordinates) => {
      if (parentRectRef.current) {
        let x: number, y: number
        const parent = parentRectRef.current
        const mouse = client

        if ((rotation >= 0 && rotation <= 90) || (rotation >= 270 && rotation <= 360)) {
          x = mouse.x - parent.left
        } else {
          x = parent.right - mouse.x
        }

        if (rotation >= 0 && rotation <= 180) {
          y = mouse.y - parent.top
        } else {
          y = parent.bottom - mouse.y
        }

        x < 0 ? (x = 0) : x
        y < 0 ? (y = 0) : y

        const left =
          (Math.sqrt(x * x + y * y) * 100) /
          Math.sqrt(parent.width * parent.width + parent.height * parent.height)

        updateStop({
          ...stop,
          position: { ...stop.position, left: left < 0 ? 0 : left > 100 ? 100 : left },
        })
      }
    },
    [rotation, updateStop, stop]
  )

  const handleMouseMove = useCallback(
    (e: unknown) => {
      const event = e as MouseEvent
      event.stopPropagation()
      event.preventDefault()
      const client = { x: event.clientX, y: event.clientY }
      handleMoveEvents(client)
    },
    [rotation, updateStop, stop]
  )

  const handleTouchMove = useCallback(
    (e: unknown) => {
      const event = e as TouchEvent
      const client = { x: event.touches[0].clientX, y: event.touches[0].clientY }

      handleMoveEvents(client)
      console.log('this')
    },
    [rotation, updateStop, stop]
  )

  useEffect(() => {
    let timeout: number

    const handleMouseUp = (e: unknown) => {
      setIsMouseDown(false)
      timeout = setTimeout(() => {
        toggleIsDragging(false)
        if (timeout) clearInterval(timeout)
      }, 50) as unknown as number
      const event = e as MouseEvent
      event.preventDefault()
      event.stopPropagation()

      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    const handleTouchEnd = (e: unknown) => {
      const event = e as TouchEvent

      setIsMouseDown(false)
      timeout = setTimeout(() => {
        toggleIsDragging(false)
        if (timeout) clearInterval(timeout)
      }, 50) as unknown as number

      document.removeEventListener('touchend', handleTouchEnd)
      document.removeEventListener('touchmove', handleTouchMove)
    }

    if (isMouseDown) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)

      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)

      document.removeEventListener('touchend', handleTouchEnd)
      document.removeEventListener('touchmove', handleTouchMove)
    }
  }, [isMouseDown, handleMouseMove, handleTouchMove, toggleIsDragging])

  const handleMouseDown = useCallback(
    (e: unknown) => {
      setActiveStop()
      toggleIsDragging(true)
      setIsMouseDown(true)

      const event = e as MouseEvent
      const target = event.target as HTMLButtonElement

      event.preventDefault()
      event.stopPropagation()

      if (target.parentElement) parentRectRef.current = target.parentElement.getBoundingClientRect()
    },
    [setActiveStop, toggleIsDragging]
  )

  const onTouch = useCallback(
    (e: unknown) => {
      const event = e as TouchEvent
      const target = event.target as HTMLButtonElement

      setActiveStop()
      toggleIsDragging(true)
      setIsMouseDown(true)

      if (target.parentElement) parentRectRef.current = target.parentElement.getBoundingClientRect()
    },
    [setActiveStop, toggleIsDragging]
  )

  return {
    handleMouseDown,
    onTouch,
    isMouseDown,
    left,
    isActive: context.stopsBar.activeStopId === stop.id,
  }
}

export default useStop
