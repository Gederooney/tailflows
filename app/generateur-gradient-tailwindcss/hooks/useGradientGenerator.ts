import { useState } from 'react'
import * as GradientContext from '../Context'
import { v4 as uuidv4 } from 'uuid'
const useGradientGenerator = () => {
  const uniqueId = uuidv4()
  const [context, setContext] = useState<GradientContext.IContextState>({
    dragger: {
      coordinates: { x: 1, y: 0 },
      position: { left: 100, top: 50 },
    },
    stopsBar: {
      activeStopId: uniqueId,
      width: 6 * 16,
      rotation: 0,
      stops: [
        { id: uniqueId, position: { left: 0, top: 1 }, color: '#ac2ed1' },
        { id: uuidv4(), position: { left: 100, top: 1 }, color: '#D92727' },
      ],
      scale: 1,
    },
  })

  return { context, setContext }
}

export default useGradientGenerator
