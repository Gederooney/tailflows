'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

const ProfileButton = () => {
  const { data } = useSession()

  return (
    <>
      {data && data.user && data.user.image ? (
        <button className="flex gap-1 items-center justify-center">
          <span className="">{data?.user?.name}</span>
          <img className="h-8 h-8 rounded-full" src={data?.user?.image} />
        </button>
      ) : null}
    </>
  )
}

export default ProfileButton
