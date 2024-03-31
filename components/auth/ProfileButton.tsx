'use client'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { signOut } from 'next-auth/react'

const ProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { status, data } = useSession()
  if (data) {
    const { image, name } = data.user as { image: string; name: string }
    return (
      <>
        {status === 'authenticated' && image ? (
          <div className="relative z-[20000]">
            <button
              className="flex gap-1 items-center justify-center"
              onClick={(e) => {
                e.preventDefault()
                setIsOpen((prev) => !prev)
              }}
            >
              <span className="">{name.split(' ')[0]}</span>
              <img className="h-8 h-8 rounded-full" src={image} />
            </button>

            <ul
              className={`absolute top-full w-60 right-0 bg-gray-100/20 backdrop-blur-3xl rounded-lg p-2 space-y-2 border  dark:bg-white/10 border-secondary-900/10 transition-all ease-in-out duration-300 ${
                isOpen
                  ? 'opacity-100 pointer-events-auto translate-y-4'
                  : 'opacity-0 pointer-events-none translate-y-0'
              }`}
            >
              <li>
                <div className="">
                  <div className="flex items-center justify-center mt-2 gap-2 text-xs">
                    <button
                      className="flex items-center gap-1 border px-3 py-1.5 rounded-md bg-[#24292e] text-gray-50 border-gray-950/10 dark:border-gray-50/10"
                      onClick={(e) => signOut()}
                    >
                      <span className="inline-block">Déconnexion</span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        ) : null}
      </>
    )
  }

  return null
}

export default ProfileButton
