import React from 'react'

const Section = () => {
  return (
    <div className="pt-20 bg-white">
      <div className="relative sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl"></div>

          <svg
            className="absolute top-0 hidden -ml-3 left-1/2"
            width="404"
            height="392"
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"></rect>
          </svg>
        </div>
        <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative px-6 py-10 overflow-hidden shadow-xl rounded-3xl bg-secondary-600 sm:px-12 sm:py-20">
            <div className="relative">
              <div className="mb-12 sm:text-center">
                <h2 className="text-4xl font-bold text-white tracking-tight sm:text-4.5xl font-display">
                  Recevez une notification lorsque nous <br />
                  postons de nouvelles fonctionalités
                </h2>
                {/* <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-400">
                  Twice a month I share the best Tailwind templates, UI kits and components in{' '}
                  <strong>my newsletter</strong>. <strong>525</strong> Tailwind hackers find it
                  useful. I'd love you to join.
                </p> */}
              </div>
              <form
                data-controller="newsletter"
                data-newsletter-target="form"
                className="sm:mx-auto sm:max-w-lg sm:flex"
                action="#"
                accept-charset="UTF-8"
                method="post"
              >
                <input
                  type="hidden"
                  name="authenticity_token"
                  value="mehG3JeITfmd-jvgTa_FLaTsQtmrIz9hy9aEA5cvpi4z-S9ig7ioCP07U6hOaWUUmCUl64Y8r9ft25GpxSruVA"
                  autoComplete="off"
                />
                <div className="relative w-full max-w-xl mx-auto bg-white rounded-full h-14 lg:max-w-none">
                  <input
                    className="w-full py-0 pl-5 pr-16 bg-transparent border-2 border-gray-100 rounded-full shadow-md outline-none h-14 sm:pl-6 sm:pr-32 hover:outline-none focus:ring-secondary-200 focus:border-secondary-200"
                    data-newsletter-target="email"
                    required
                    placeholder="nom@mail.com"
                    autoComplete="off"
                    type="email"
                    name="member[email]"
                    id="member[email]"
                  />
                  <button
                    type="submit"
                    className="absolute inline-flex items-center h-12 p-4 text-sm text-white transition duration-150 duration-300 ease-in-out rounded-r-full rounded-bl-full outline-none right-1 top-1 bg-secondary-600 sm:py-2 sm:px-6 sm:rounded-full sm:text-base sm:font-medium hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="-ml-0.5 sm:-ml-1 sm:mr-2 h-5 w-5"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                      <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"></path>
                    </svg>
                    <span className="hidden sm:inline-block">Joindre</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
