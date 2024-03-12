import React, { useEffect } from 'react'

const DisplayColor = ({ backgroundColor }: { backgroundColor: string }) => {
  return (
    <span className="block h-full rounded-full aspect-square" style={{ backgroundColor }}></span>
  )
}

export default DisplayColor
