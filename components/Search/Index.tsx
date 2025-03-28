/**
 * @author Rony Gedeon Yebadokpo
 * @date 16/11/2023
 * @description Search component
 */

'use client'
import React, { useState, useEffect, useRef } from 'react'

interface SearchProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  value: string
  placeholder?: string
  btnText?: string
  label?: string
  searchHistory?: string[]
  HistoryComponent?: React.FC<{ history: string }>
}

type PropsWithHistoryComponent = SearchProps & {
  searchHistory: string[]
  HistoryComponent: React.FC<{ history: string }>
}

const Search = ({
  handleSearch,
  inputOnly,
  buttonTexte,
}: {
  handleSearch: (value: string) => void
  inputOnly?: boolean
  buttonTexte: string
}) => {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const form = useRef<HTMLFormElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isFocused) {
      // document.addEventListener('click', listenToWindowClick)
    }
    window.addEventListener('keydown', listenToEscKey)
    window.addEventListener('scroll', listenScroll)
    return () => {
      // document.removeEventListener('click', listenToWindowClick)
      window.removeEventListener('keydown', listenToEscKey)
      window.removeEventListener('scroll', listenScroll)
    }
    window.addEventListener('scroll', listenScroll)
  }, [isFocused])

  // useEffect(() => {
  //   handleSearch(value)
  // }, [value])

  const listenToWindowClick = () => {
    if (isFocused) {
      setIsFocused(false)
    }
  }
  const listenToEscKey = (e) => {
    if (form.current)
      if (e.key === 'Escape') {
        setIsFocused(false)
        form.current.querySelector('input')?.blur()
      }
  }

  const isElementAtTop = () => {
    if (form.current) {
      const elementRect = form.current.getBoundingClientRect()
      return elementRect.top <= 0
    }
    return false
  }

  const listenScroll = (e) => {
    if (isFocused && isElementAtTop()) {
      setIsFocused(false)
      if (form.current) form.current.querySelector('input')?.blur()
    }
  }

  function handleCloseSearch() {
    if (bgRef.current) {
      bgRef.current.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()

        setIsFocused(false)
      })
    }
  }

  if (inputOnly) {
    return (
      <section className="z-20 py-4 ">
        <div className="container">
          <div className={`h-[50px] ${isFocused ? 'rounded-t-sm' : ''}`}>
            <form
              ref={form}
              className={`h-full relative z-50 max-w-screen-sm mx-auto`}
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault()
                handleSearch(value)
              }}
            >
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                'label'
              </label>
              <div className="relative h-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className={`w-4 h-4 ${
                      isFocused ? 'text-secondary-900' : 'text-gray-500 dark:text-gray-50/50'
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  name="q"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="none"
                  id="default-search"
                  onFocus={() => setIsFocused(true)}
                  value={value}
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue((prev) => e.target.value)
                  }}
                  tabIndex={0}
                  className={`block w-full h-full p-4 pl-10 text-xs lg:text-sm outline-none focus:outline-none focus:border-secondary-50/50 focus:ring-0 rounded-full bg-transparent text-current border-secondary-900/10 dark:border-gray-50/10`}
                  role="searchbox"
                  spellCheck="false"
                  aria-label={'Trouver une icone'}
                  title={'Trouver une icone'}
                  aria-autocomplete="list"
                  placeholder={'Trouver une icone...'}
                  aria-controls="search-results"
                  required
                />
                <button
                  type="submit"
                  title="Trouver une icone, une catégorie ou un tag"
                  aria-label="Trouver une icone, une catégorie ou un tag"
                  tabIndex={-1}
                  className="text-white lg:text-sm  absolute right-2.5 bottom-1/2 translate-y-1/2 bg-secondary-500 hover:bg-secondary-800 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium rounded-full text-xs px-4 py-2 dark:bg-secondary-600 dark:hover-bg-secondary-700 dark:focus-ring-secondary-800 dark:text-gray-50/50"
                >
                  {buttonTexte}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="z-20 py-4 ">
      <div className="container">
        <div
          onClick={() => setIsFocused(false)}
          tabIndex={-1}
          role="button"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === 'Space') {
              setIsFocused(false)
            }
          }}
          className={`fixed inset-0 cursor-pointer transition-opacity z-30 ${
            isFocused
              ? 'bg-slate-950/40 opacity-100 pointer-events-auto'
              : 'bg-transparent opacity-0 pointer-events-none'
          }`}
        ></div>
        <div className={`h-[50px] ${isFocused ? 'rounded-t-sm' : ''}`}>
          <form
            ref={form}
            className={`h-full relative z-50 max-w-screen-sm mx-auto ${
              isFocused ? 'rounded-t-sm overflow-hidden' : ''
            }`}
            onSubmit={(e) => {
              setIsFocused(false)
            }}
            autoComplete="off"
          >
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              'label'
            </label>
            <div className="relative h-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className={`w-4 h-4 ${
                    isFocused ? 'text-secondary-900' : 'text-gray-500 dark:text-gray-50/50'
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                name="q"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                id="default-search"
                onFocus={() => setIsFocused(true)}
                value={value}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleSearch(value)
                  setValue(e.target.value)
                }}
                tabIndex={0}
                className={`block w-full h-full p-4 pl-10 text-xs lg:text-sm outline-none focus:outline-none focus:border-secondary-50/50 focus:ring-0  ${
                  isFocused
                    ? 'rounded-t-md bg-gray-50 text-secondary-950 border border-transparent'
                    : 'rounded-full bg-transparent text-current border-secondary-900/10 dark:border-gray-50/10'
                }`}
                role="searchbox"
                spellCheck="false"
                aria-label={'Trouver une icone'}
                title={'Trouver une icone'}
                aria-autocomplete="list"
                placeholder={'Trouver une icone...'}
                aria-controls="search-results"
                required
              />
              <button
                type="submit"
                title="Trouver une icone, une catégorie ou un tag"
                aria-label="Trouver une icone, une catégorie ou un tag"
                tabIndex={-1}
                className="text-white lg:text-sm  absolute right-2.5 bottom-1/2 translate-y-1/2 bg-secondary-500 hover:bg-secondary-800 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium rounded-full text-xs px-4 py-2 dark:bg-secondary-600 dark:hover-bg-secondary-700 dark:focus-ring-secondary-800 dark:text-gray-50/50"
              >
                {buttonTexte}
              </button>
            </div>
          </form>
          {isFocused && (
            <div
              className={
                'relative z-50 max-w-screen-sm mx-auto bg-white h-96 overflow-auto rounded-b-md'
              }
            >
              <div className="flex flex-col w-full h-full gap-0 px-2 overflow-scroll hide-scrollbar">
                {/* {searchHistory?.map((history, index) => (
                  <div
                    key={history}
                    className={`w-full h-16 shrink-0 grow-0 ${
                      index !== searchHistory.length - 1 ? 'border-b' : ''
                    }`}
                  >
                    <HistoryComponent history={history} />
                  </div>
                ))} */}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Search
