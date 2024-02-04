import React from 'react'

const Section = () => {
  return (
    <div className="max-w-6xl px-4 pb-10 mx-auto my-4 sm:px-6 lg:px-8 md:pb-2">
      <div className="relative p-5 bg-gray-100 rounded-xl sm:py-16 before:absolute before:top-0 before:start-0 before:bg-heroPatternLight before:bg-top before:bg-cover before:h-full before:z-0 dark:bg-secondary-800 dark:before:bg-heroPatternDark before:w-full ">
        <div className="relative z-10 max-w-xl mx-auto text-center">
          <div className="mb-5">
            <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Rejoins nous</h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Ne manque aucune de nos actualités
            </p>
          </div>

          <div id="mc_embed_signup">
            <form
              action="https://praline.us10.list-manage.com/subscribe/post?u=eddd28397383718c2f15e15c2&amp;id=b97f8fe839"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate={true}
            >
              <div id="mc_embed_signup_scroll">
                <div className="grid gap-3 sm:flex">
                  <input
                    type="email"
                    // value=""
                    name="EMAIL"
                    id="mce-EMAIL"
                    className="block w-full text-sm border-gray-200 rounded-lg focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:placeholder:text-gray-400"
                    placeholder="mail@nom.com"
                  />
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    value="Envoyer"
                    className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white border border-transparent rounded-lg bg-primary-600 gap-x-2 hover:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div id="mce-responses" className="mt-3 text-gray-500 dark:text-gray-400">
                  <div className="hidden response" id="mce-error-response"></div>
                  <div className="hidden response" id="mce-success-response"></div>
                </div>

                <div className="absolute left-[-5000px]" aria-hidden="true">
                  <input
                    type="text"
                    name="b_eddd28397383718c2f15e15c2_b97f8fe839"
                    tabIndex={-1}
                    // value=""
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
