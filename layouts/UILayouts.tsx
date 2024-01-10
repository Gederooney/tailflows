import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const UILayouts = ({ children }: Props) => {
  return <>{children}</>
}
