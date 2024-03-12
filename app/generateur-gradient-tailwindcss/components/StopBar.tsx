import React from 'react'
import Stop from './Stop'
import useStopbar from '../hooks/useStopBar'

const StopBar = ({ useCase }: { useCase: 'main' | 'edit' }) => {
  const { stopsBar, handleAddStop, updateStops, setActiveStop, toggleIsDragging } = useStopbar()

  return useCase === 'main' ? (
    <div
      onClick={stopsBar.stops.length >= 6 ? () => {} : handleAddStop}
      role="button"
      tabIndex={-1}
      onKeyDown={() => {}}
      className={`absolute left-1/2 w-1/2  z-[1] origin-left top-1/2 h-2 flex ${
        stopsBar.stops.length >= 6 ? 'cursor-default' : 'cursor-crosshair'
      }`}
      style={{ transform: `translate(0, -50%) rotate(${stopsBar.rotation}deg)` }}
    >
      <div className="relative w-full h-px  border-t-[1px]   border-gray-950/10 m-auto dark:border-gray-50/30">
        {stopsBar.stops.map((stop, key) => (
          <Stop
            toggleIsDragging={toggleIsDragging}
            setActiveStop={setActiveStop(stop.id)}
            key={`stop-${stop.id}`}
            stop={stop}
            updateStop={updateStops(key)}
          />
        ))}
      </div>
    </div>
  ) : (
    <div
      onClick={stopsBar.stops.length >= 6 ? () => {} : handleAddStop}
      role="button"
      tabIndex={-1}
      onKeyDown={() => {}}
      className={`relative w-full  z-[1] origin-left top-1/2 h-2 flex ${
        stopsBar.stops.length >= 6 ? 'cursor-default' : 'cursor-crosshair'
      }`}
    >
      <div className="relative w-full h-px  border-t-[1px]   border-gray-950/10 m-auto dark:border-gray-50/30">
        {stopsBar.stops.map((stop, key) => (
          <Stop
            toggleIsDragging={toggleIsDragging}
            setActiveStop={setActiveStop(stop.id)}
            key={`stop-${stop.id}`}
            stop={stop}
            updateStop={updateStops(key)}
          />
        ))}
      </div>
    </div>
  )
}

export default StopBar
