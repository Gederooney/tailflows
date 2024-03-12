'use client'
import React, { useState } from 'react'
import * as GradientContext from './Context'
import Linear from './components/Linear'
import EditPanel from './components/EditPanel'
import { v4 as uuidv4 } from 'uuid'
import useGradientGenerator from './hooks/useGradientGenerator'

const Page = () => {
  const { context, setContext } = useGradientGenerator()

  return (
    <GradientContext.default.Provider value={{ context, setContext }}>
      <div className="absolute inset-0 overflow-hidden">
        <Linear />
        <EditPanel />
      </div>
    </GradientContext.default.Provider>
  )
}

export default Page
