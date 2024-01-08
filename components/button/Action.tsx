import React, { useEffect, useMemo } from 'react'

function ActionButton({
  children,
  classname,
  actionMethod,
  sucessChildren,
}: {
  classname: string
  children: React.ReactNode
  sucessChildren: React.ReactNode
  actionMethod: () => void
}) {
  const [clicked, setClicked] = React.useState(false)

  useEffect(() => {
    let timeout: null | number = null
    if (clicked) {
      timeout = setTimeout(() => setClicked(false), 2000) as unknown as number
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [clicked])

  return (
    <button
      type="button"
      className={`${classname} ${clicked ? 'disabled' : null}`}
      onClick={(e) => {
        actionMethod()
        setClicked((prev) => true)
      }}
    >
      {clicked ? sucessChildren : children}
    </button>
  )
}

export default ActionButton
