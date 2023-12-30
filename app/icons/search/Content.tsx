import React from 'react'
import icons from '../data.json'

const Content = ({ searchParams }: { searchParams: { name: string; id: string } }) => {
  const icon = icons.find((icon) => icon.id === searchParams.id)

  const iconData = {
    h: 96,
    w: 96,
  }

  return (
    <div className="max-w-7xl px-4 py-12 mx-auto">
      <div className="">
        <h1 className="uppercase font-medium text-sm">{icon.name.replaceAll('_', ' ')}</h1>
      </div>
      <div className="">
        <button
          type="button"
          className={`block border rounded-md p-2 shadow mx-auto w-${iconData.h} h-${iconData.h} box-border`}
        >
          <svg
            className={`h-full w-full fill-current`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={icon.viewBox}
            dangerouslySetInnerHTML={{ __html: icon.svg as string }}
          ></svg>
        </button>
      </div>
    </div>
  )
}

export default Content
