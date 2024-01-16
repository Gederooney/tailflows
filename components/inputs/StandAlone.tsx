'use client'
import React, { useEffect, useState } from 'react'

const TextArea = () => {
  const [rowsCount, setRowsCount] = useState(0)

  const handleInput = (e) => {
    const target = e.target as HTMLTextAreaElement
    const rowsCount = target.value.split('\n').length
    setRowsCount((prev) => {
      if (prev !== rowsCount) {
        target.style.height = `${24 * (rowsCount - 1) + 44}px`
      }
      return rowsCount
    })
  }
  return (
    <div>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your message {rowsCount}
      </label>
      <textarea
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            const form = e.currentTarget.closest('form')
            if (form) form.requestSubmit()
            return false
          }
        }}
        id="message"
        name="message"
        onInput={handleInput}
        style={{
          height: '44px',
          maxHeight: '200px',
        }}
        className="block px-2.5 py-[10px] w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  )
}

export default TextArea
