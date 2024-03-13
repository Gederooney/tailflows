const SearchButton = () => {
  return (
    <button className="flex items-center justify-center w-6 h-6 overflow-hidden text-xs border rounded-md shadow-none cursor-pointer md:h-8 md:w-60 dar md:justify-between md:px-2 drop-shadow-none dark:border-gray-50/10">
      <span className="inline-flex items-center gap-2 text-xs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="currentColor"
          className="w-3 h-3 text-gray-900 dark:text-gray-50/50"
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
        <span className="hidden md:inline">Rechercher</span>
      </span>
      <span className="items-center hidden md:inline-flex">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-3 h-3 text-gray-900 dark:text-gray-50/50"
            viewBox="0 -960 960 960"
          >
            <path d="M260-120q-58 0-99-41t-41-99q0-58 41-99t99-41h60v-160h-60q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99v60h160v-60q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41h-60v160h60q58 0 99 41t41 99q0 58-41 99t-99 41q-58 0-99-41t-41-99v-60H400v60q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T320-260v-60h-60q-25 0-42.5 17.5T200-260q0 25 17.5 42.5T260-200Zm440 0q25 0 42.5-17.5T760-260q0-25-17.5-42.5T700-320h-60v60q0 25 17.5 42.5T700-200ZM400-400h160v-160H400v160ZM260-640h60v-60q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Zm380 0h60q25 0 42.5-17.5T760-700q0-25-17.5-42.5T700-760q-25 0-42.5 17.5T640-700v60Z" />
          </svg>
        </span>
        k
      </span>
    </button>
  )
}

export default SearchButton
