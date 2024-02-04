'use client'
import { StandAloneTextArea as Input } from '@/components/inputs'
import React from 'react'

const Page = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div>
      <form action="" className="max-w-screen-sm" onSubmit={handleSubmit}>
        <Input />
      </form>
    </div>
  )
}

export default Page
