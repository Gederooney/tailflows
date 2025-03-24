import React, { useEffect } from 'react'
import Circle from './components/Circle'
import Picker, { PickerType } from './components/Picker'
import DisplayColor from './components/DisplayColor'
import UserInput from './components/UserInput'
import CombinaisonSelect from './components/CombinaisonSelect'
import useWheel from './hooks/useWheel'

const Wheel = ({
  color,
  getData,
  withShadow,
  style,
}: {
  color: string
  withShadow?: boolean
  getData: (data: { color: string; palette: string[] }) => void
  style?: {
    light: {
      bg: string
      inputBg: string
      textColor: string
    }
    dark: {
      bg: string
      inputBg: string
      textColor: string
    }
  }
}) => {
  const {
    picker,
    lightness,
    handlePicker,
    handleLightness,
    hex,
    combinaisonType,
    onCombinaisonTypeChange,
    getUserInput,
    combinaisons,
  } = useWheel(color, getData)

  return (
    // @ts-ignore
    <section
      className={`m-auto min-w-[200px] max-w-[350px] space-y-8 rounded-md   px-2 py-8 ${
        withShadow
          ? 'bg-gray-50 shadow-[-8px_-8px_16px_4px_#00000040,_8px_8px_16px_4px_#00000040] dark:bg-secondary-800'
          : null
      }`}
      {...(style !== undefined
        ? {
            style: {
              '--lightBg': style.light.bg,
              '--lightInputBg': style.light.inputBg,
              '--lightTextColor': style.light.textColor,
              '--darkBg': style.dark.bg,
              '--darkInputBg': style.dark.inputBg,
              '--darkTextColor': style.dark.textColor,
            },
          }
        : null)}
    >
      <div className="relative m-auto aspect-square w-full cursor-pointer rounded-full p-2 dark:border dark:border-gray-50/20">
        <Circle color={hex} getCoordinates={handleLightness} key="lightnessbg" isLightness={true} />
        <Picker coordinates={lightness} type={PickerType.LIGHTNESSPICKER} key="lightness-picker" />
        <div className="pointer-events-auto relative m-auto h-full w-full rounded-full bg-gray-50 p-2 dark:bg-gray-100">
          <div className="relative h-full w-full rounded-full">
            <Circle key="wheelBg" getCoordinates={handlePicker} isLightness={false} />
            <Picker coordinates={picker} type={PickerType.COLORWHEELPICKER} key="color-picker" />

            {combinaisons.map((c, index) => (
              <Picker
                coordinates={c.coordinates}
                type={PickerType.COMBINAISONPICKER}
                key={`combinaisonpicker-${index}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4 ">
        <div className="">
          <h3
            className={`text-sm ${
              style
                ? 'text-[$var(--lightTextColor)] dark:text-[$var(--DarkTextColor)]'
                : 'text-gray-400'
            }`}
          >
            1. Entrez une couleur
          </h3>
          <div className="flex h-12 gap-4">
            <DisplayColor backgroundColor={hex} />
            <UserInput
              {...(style !== undefined
                ? {
                    borderColor: '--lightTextColor',
                    style:
                      'bg-[$var(--lightInputBg)] dark:bg-[$var(--darkInputBg)] text-current focus:outline-none',
                  }
                : null)}
              getColor={getUserInput}
              value={hex}
            />
          </div>
        </div>
        <div className="h-12">
          <h3
            className={`text-sm ${
              style
                ? 'text-[$var(--lightTextColor)] dark:text-[$var(--DarkTextColor)]'
                : 'text-gray-400'
            }`}
          >
            2. Choisissez une combinaison
          </h3>
          <CombinaisonSelect
            {...(style !== undefined
              ? {
                  borderColor: '--lightTextColor',
                  style:
                    'bg-[$var(--lightInputBg)] dark:bg-[$var(--darkInputBg)] text-current focus:outline-none',
                }
              : null)}
            onTypeChange={onCombinaisonTypeChange}
            type={combinaisonType}
          />
        </div>
      </div>
    </section>
  )
}

export default Wheel
