import React, { useContext, useEffect, useState } from 'react'

import { Number, Range } from '@/components/inputs'
import Wheel from '@/components/colors/Wheel'
import useEditPannel from '../hooks/useEditPanel'
import Palette from '../../generateur-nuances-couleurs-tailwind-css/Palette'
import StopBar from './StopBar'

const EditPanel = () => {
  const {
    activeStop,
    removeActiveColor,
    getData,
    disableRemoveColor,
    handleTogglePannel,
    togglePannel,
    rotation,
    onRotationChange,
    palette,
  } = useEditPannel()

  return (
    <>
      {!togglePannel ? (
        <button
          className="absolute top-2 right-2 flex items-center gap-2 px-2 py-1.5 rounded-md lg:hidden border border-gray-50/10 backdrop-blur-lg bg-gray-50/30 text-gray-50 text-xs"
          onClick={handleTogglePannel}
        >
          <span>Modifier</span>
          <span className="inline-block w-4 h-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full fill-current "
              viewBox="0 -960 960 960"
            >
              <path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z" />
            </svg>
          </span>
        </button>
      ) : null}
      <section
        className={`absolute top-1/2 -translate-y-1/2 space-y-4 border-l w-80 border-secondary-950/10 dark:border-gray-50/10  bg-white/20 z-[50]
        h-[500px] md:h-[600px] overflow-scroll rounded-lg backdrop-blur-md shadow-[-8px_-8px_16px_4px_#00000040,_8px_8px_16px_4px_#00000010] transition-all ease duration-300 text-gray-50  ${
          togglePannel
            ? 'right-1/2 md:right-10 lg:rigth-10 translate-x-1/2 md:translate-x-0'
            : '-right-full lg:right-10 translate-x-0'
        }`}
      >
        <div className="px-4 py-4 text-lg font-medium border-b border-gray-950/10 dark:border-gray-50/10">
          <h2 className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-2">
              Modification{' '}
              <span className="inline-block w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full fill-current "
                  viewBox="0 -960 960 960"
                >
                  <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
                </svg>
              </span>
            </span>
            <button className="inline-block w-4 h-4 lg:hidden" onClick={handleTogglePannel}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full fill-current "
                viewBox="0 0 512 512"
              >
                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
              </svg>
            </button>
          </h2>
        </div>
        <div className="w-full px-4 pb-12 space-y-4">
          <div className="text-right">
            <button
              className={`inline-flex items-center gap-2 ${
                disableRemoveColor ? null : 'disabled cursor-not-allowed'
              }`}
              onClick={removeActiveColor}
            >
              <span>Retirer</span>
              <span className="inline-block w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full fill-current "
                  viewBox="0 -960 960 960"
                >
                  <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
              </span>
            </button>
          </div>
          <div className="flex items-center gap-6">
            <h3>Rotation</h3>
            <div className="flex items-center gap-2 text-xs font-light text-gray-300">
              <Number
                style="text-center w-full h-full bg-transparent border border-gray-50/20 text-xs rounded-md"
                defaultValue={rotation}
                min={0}
                max={360}
                onChange={onRotationChange}
              />
              <span>deg</span>
            </div>
          </div>
          <div className="px-4 py-2 space-y-4 border rounded-md border-gray-50/20">
            <div className="relative py-4">
              <h3 className="mb-2 text-sm font-medium uppercase">Barre de couleurs</h3>
              <StopBar useCase="edit" />
            </div>
            <div className="">
              <h3 className="text-sm font-medium uppercase nb-2">Position (%)</h3>
              <Range
                lightColor="hsla(210,1%,98%,.5)"
                darkColor="hsla(210,1%,98%,.5)"
                min={0}
                max={100}
                hideLabel={true}
                handleChange={activeStop.updateActiveStopProperty('position')}
                label="Position"
                defaultValue={activeStop.stop.position.left}
              />
            </div>
          </div>
          <div className="">
            <h3 className="font-medium uppercase">Cercle chromatique</h3>
            <Wheel
              key={'gradient-generator-wheel'}
              style={{
                light: { bg: 'transparent', inputBg: 'transparent', textColor: '210,1%,98%' },
                dark: { bg: 'transparent', inputBg: 'transparent', textColor: '210,1%,98%' },
              }}
              getData={getData}
              color={activeStop.stop.color}
            />
          </div>
          {palette ? (
            <Palette
              shades={palette}
              classname="flex items-center justify-center w-full h-10 overflow-hidden rounded-lg"
            />
          ) : null}
        </div>
      </section>
    </>
  )
}

export default EditPanel
