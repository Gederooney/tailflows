import BlocksSection from '@/components/code/BlocksSection'
import React from 'react'

const data = [
  {
    height: 800,
    name: 'default',
    id: '',
    title: 'Template Connexion Épuré avec Tailwind CSS',
    description:
      "Ce template de page de connexion Tailwind CSS intègre une illustration SVG, des champs d'authentification clairs et des boutons d'action directe. Parfait pour un login immersif avec options OAuth, il associe fonctionnalité et esthétique moderne.",
    htmlBody: `
		<section class="flex w-screen h-screen">
      <div class="m-auto">
        <section class="border bg-gray-50">
          <div class="w-[300px] mx-auto space-y-6 p-6">
            <div class="text-[#002B2F] text-center w-full">
              <a aria-label="" href="https://tailflows.com" class="inline-flex items-center gap-1">
                <svg
                  class="h-7 w-7"
                  viewBox="0 0 180 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g opacity="1">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 90C0 40.2944 40.2944 0 90 0C139.706 0 180 40.2944 180 90C180 139.706 139.706 180 90 180H0.0538464C1.36573 177.832 3.1935 175.979 5.53709 174.44C9.35112 171.936 13.846 171.78 18.8198 171.61C26.4968 171.344 35.3185 171.038 44.556 162H89.9997C129.764 162 162 129.764 162 89.9997C162 50.2352 129.764 17.9997 89.9997 17.9997C50.2352 17.9997 17.9997 50.2352 17.9997 89.9997V147.988C12.5624 149.141 6.78205 151.789 0.847016 158.206C0.557418 158.519 0.275079 158.833 0 159.148V90Z"
                      fill="currentColor" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M89.9999 35.6603C59.989 35.6603 35.6603 59.989 35.6603 89.9999V142.606C37.7095 142.219 39.632 141.562 41.4074 140.396C48.0943 136.009 50.5823 129.059 48.8698 119.547C54.5266 128.22 56.1104 136.484 53.6213 144.34H89.9999C120.011 144.34 144.34 120.011 144.34 89.9999C144.34 59.989 120.011 35.6603 89.9999 35.6603Z"
                      fill="currentColor" />
                  </g>
                </svg>

                <span class="text-4xl font-bold leading-[.5] select-none">tailflows</span>
              </a>
            </div>
            <div class="">
              <h2 class="sr-only">Connexion</h2>
              <p class="text-xs font-light text-center">connectez vous avec:</p>
            </div>
            <div class="">
              <div class="flex items-center justify-center gap-4">
                <a
                  href="#"
                  class="inline-flex items-center justify-center w-12 h-12 border rounded-md">
                  <span class="inline-block w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full h-full fill-current"
                      viewBox="0 0 24 24">
                      <g
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2">
                        <path d="M0 0h24v24H0z" />
                        <path
                          fill="currentColor"
                          d="M18 2a1 1 0 0 1 .993.883L19 3v4a1 1 0 0 1-.883.993L18 8h-3v1h3a1 1 0 0 1 .991 1.131l-.02.112l-1 4a1 1 0 0 1-.858.75L17 15h-2v6a1 1 0 0 1-.883.993L14 22h-4a1 1 0 0 1-.993-.883L9 21v-6H7a1 1 0 0 1-.993-.883L6 14v-4a1 1 0 0 1 .883-.993L7 9h2V8a6 6 0 0 1 5.775-5.996L15 2z" />
                      </g>
                    </svg>
                  </span>
                </a>
                <a
                  href="#"
                  class="inline-flex items-center justify-center w-12 h-12 border rounded-md">
                  <span class="inline-block w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full h-full fill-current"
                      viewBox="0 0 24 24">
                      <g
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2">
                        <path d="M0 0h24v24H0z" />
                        <path
                          fill="currentColor"
                          d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1-1.265.06a6 6 0 1 0 2.103 6.836l.001-.004h-3.66a1 1 0 0 1-.992-.883L13 13v-2a1 1 0 0 1 1-1h6.945a1 1 0 0 1 .994.89c.04.367.061.737.061 1.11c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2" />
                      </g>
                    </svg>
                  </span>
                </a>
                <a
                  href="#"
                  class="inline-flex items-center justify-center w-12 h-12 border rounded-md">
                  <span class="inline-block w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full h-full fill-current"
                      viewBox="0 0 24 24">
                      <g
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2">
                        <path d="M0 0h24v24H0z" />
                        <path
                          fill="currentColor"
                          d="M16.083 2H12a1 1 0 0 0-1 1v11.5a1.5 1.5 0 1 1-2.519-1.1l.12-.1A1 1 0 0 0 9 12.5V8.174A1 1 0 0 0 7.77 7.2A7.5 7.5 0 0 0 9.5 22l.243-.005A7.5 7.5 0 0 0 17 14.5v-2.7l.311.153c1.122.53 2.333.868 3.59.993A1 1 0 0 0 22 11.95V7.917a1 1 0 0 0-.834-.986a5.005 5.005 0 0 1-4.097-4.096A1 1 0 0 0 16.083 2" />
                      </g>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="">
              <p class="text-xs font-light text-center">ou vos identifiants</p>
            </div>
            <form action="" class="w-full space-y-4">
              <div class="">
                <div class="relative">
                  <span
                    class="absolute block w-3 h-3 -translate-y-1/2 top-1/2 left-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full h-full fill-current"
                      viewBox="0 0 512 512">
                      <path
                        d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
                    </svg>
                  </span>
                  <label
                    for="email"
                    class="absolute text-xs -translate-y-1/2 pointer-events-none top-1/2 left-5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    class="w-full h-10 px-5 py-2 text-xs bg-transparent border rounded-md" />
                </div>
              </div>
              <div class="">
                <div class="text-right">
                  <div class="relative">
                    <span
                      class="absolute block w-3 h-3 -translate-y-1/2 top-1/2 left-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-full h-full fill-current"
                        viewBox="0 0 448 512">
                        <path
                          d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                      </svg>
                    </span>
                    <label
                      for="password"
                      class="absolute text-xs -translate-y-1/2 pointer-events-none top-1/2 left-5">
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      name="password"
                      class="w-full h-10 px-5 py-2 text-xs bg-transparent border rounded-md" />
                    <button
                      class="absolute w-4 h-4 -translate-y-1/2 right-1 top-1/2 togglePasswordVisibility">
                      <span class="inline-block w-4 h-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-full h-full fill-current"
                          viewBox="0 -960 960 960">
                          <path
                            d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <a href="" class="text-xs">Mot de passe oublié?</a>
                </div>
              </div>
              <div class="relative">
                <button
                  type="submit"
                  class="text-xs py-2 px-4 border bg-[#002B2F] w-1/2 text-center text-gray-50 rounded-md">
                  Se connecter
                </button>
              </div>
              <div class="relative">
                <div class="flex items-center">
                  <input
                    checked
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded" />
                  <label
                    for="checked-checkbox"
                    class="text-sm font-medium ms-2">
                    Se souvenir de moi
                  </label>
                </div>
              </div>
              <div class="">
                <p class="text-xs font-light text-center">
                  Vous n'avez pas de compte?
                  <a href="#" class="font-bold">Créez-en ici</a>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>`,
    script: `class Authentification {
        constructor() {
          this.inputs = document.querySelectorAll('input')
          this.togglePasswordVisibilityBtns = document.querySelectorAll(
            '.togglePasswordVisibility'
          )
          this.formData = {}
        }

        isValidEmail(email) {
          // write an email testing regex
          const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/
          return regex.test(email)
        }

        isValidPassword(password) {
          // write a regex to check if password is at least
          //8cha has a special char, an uppercase a lowercase and a number
          const regex = new RegExp(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
          )
          return regex.test(password)
        }

        isMatchPassword(confirmPassword) {
          return this.formData.password === confirmPassword
        }

        // login logic goes here
        login() {}

        // register logic goes here
        register() {}

        // handle input change
        handleChange(e) {
          const { name, value } = e.target

          this.formData[name] = value
          e.target.value = value
          if (!this.validationFunctions[name](value)) {
            e.target.classList.add('error')
          } else {
            e.target.classList.remove('error')
          }
        }

        // reset form
        reset() {
          this.inputs.forEach((input) => {
            input.value = ''
            input.classList.remove('error')
            if (input.name === 'password' || input.name === 'confirmPassword')
              input.type = 'password'
          })
          this.togglePasswordVisibilityBtns.forEach((btn) => {
            btn.classList.remove('active')
          })
          this.formData = {}
        }
        // switch between login and signup

        // init the authentification
        init() {
          // validation functions
          this.validationFunctions = {
            email: this.isValidEmail,
            password: this.isValidPassword,
            confirmPassword: this.isMatchPassword,
          }
          const btns = document.querySelectorAll('.toggle')
          btns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
              e.preventDefault()
              this.toggle()
              this.reset()
              this.action = this.action === 'login' ? 'signup' : 'login'
            })
          })

          // handleSubmit
          const submitBtns = document.querySelectorAll('button[type="submit"]')
          submitBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
              e.preventDefault()
              const fields = Object.keys(this.formData)

              //   check if all fields are filled
              if (
                (fields.length !== 2 && this.action === 'login') ||
                (fields.length !== 3 && this.action === 'signup')
              )
                return

              // check if all fields are valid
              const isInvalid = fields.some(
                (field) =>
                  !this.validationFunctions[field](this.formData[field])
              )

              if (isInvalid) return

              this.action === 'login' ? this.login() : this.register()
            })
          })

          // handle input change
          this.inputs.forEach((input) => {
            input.addEventListener('input', (e) => this.handleChange(e))
            input.addEventListener('focus', (e) => {
              document
                .querySelector(\`label[for="$\{e.target.name}"]\`)
                .classList.add('sr-only')
            })

            input.addEventListener('blur', (e) => {
              if (e.target.value !== '') {
                document
                  .querySelector(\`label[for="$\{e.target.name}"]\`)
                  .classList.add('sr-only')
              } else {
                document
                  .querySelector(\`label[for="$\{e.target.name}"]\`)
                  .classList.remove('sr-only')
              }
            })
          })

          //  togglePasswordVisibility
          this.togglePasswordVisibilityBtns.forEach((btn) => {
            btn.addEventListener('click', function (e) {
              e.preventDefault()
              const input = this.parentElement.querySelector('input')
              if (input.type === 'password') {
                input.type = 'text'
                this.classList.add('active')
              } else {
                input.type = 'password'
                this.classList.remove('active')
              }
            })
          })
        }
      }

      const auth = new Authentification()
			window.onload = auth.init()`,
  },
  {
    height: 800,
    name: 'default',
    id: '',
    title: 'Template Connexion Simple & Élégant Tailwind CSS',
    description:
      "Optez pour notre template de connexion, spécialement conçu pour offrir une expérience utilisateur simple et directe. Avec son design épuré et ses options de connexion rapide via les réseaux sociaux, ce template facilite l'accès à votre plateforme tout en maintenant un aspect professionnel et élégant.",
    htmlBody: `
    <section class="flex w-screen h-screen">
      <div class="m-auto">
        <section class="border bg-gray-50">
          <div class="w-[300px] mx-auto space-y-6 p-6">
            <div class="text-[#002B2F] text-center w-full">
              <a aria-label="" href="/" class="inline-flex items-center gap-1">
                <svg
                  class="h-7 w-7"
                  viewBox="0 0 180 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g opacity="1">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 90C0 40.2944 40.2944 0 90 0C139.706 0 180 40.2944 180 90C180 139.706 139.706 180 90 180H0.0538464C1.36573 177.832 3.1935 175.979 5.53709 174.44C9.35112 171.936 13.846 171.78 18.8198 171.61C26.4968 171.344 35.3185 171.038 44.556 162H89.9997C129.764 162 162 129.764 162 89.9997C162 50.2352 129.764 17.9997 89.9997 17.9997C50.2352 17.9997 17.9997 50.2352 17.9997 89.9997V147.988C12.5624 149.141 6.78205 151.789 0.847016 158.206C0.557418 158.519 0.275079 158.833 0 159.148V90Z"
                      fill="currentColor" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M89.9999 35.6603C59.989 35.6603 35.6603 59.989 35.6603 89.9999V142.606C37.7095 142.219 39.632 141.562 41.4074 140.396C48.0943 136.009 50.5823 129.059 48.8698 119.547C54.5266 128.22 56.1104 136.484 53.6213 144.34H89.9999C120.011 144.34 144.34 120.011 144.34 89.9999C144.34 59.989 120.011 35.6603 89.9999 35.6603Z"
                      fill="currentColor" />
                  </g>
                </svg>

                <span class="text-4xl font-bold leading-[.5] select-none"
                  >tailflows</span
                >
              </a>
            </div>
            <div class="">
              <h2 class="sr-only">Connexion</h2>
              <p class="text-xs font-light text-center">connectez vous avec:</p>
            </div>
            <div class="">
              <div class="space-y-3">
                <a
                  href=""
                  class="flex items-center justify-center w-full h-10 gap-2 text-sm border rounded-md bg-[#316FF6]">
                  <span class="inline-block w-4 h-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full h-full fill-current"
                      viewBox="0 0 24 24">
                      <g
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2">
                        <path d="M0 0h24v24H0z" />
                        <path
                          fill="currentColor"
                          d="M18 2a1 1 0 0 1 .993.883L19 3v4a1 1 0 0 1-.883.993L18 8h-3v1h3a1 1 0 0 1 .991 1.131l-.02.112l-1 4a1 1 0 0 1-.858.75L17 15h-2v6a1 1 0 0 1-.883.993L14 22h-4a1 1 0 0 1-.993-.883L9 21v-6H7a1 1 0 0 1-.993-.883L6 14v-4a1 1 0 0 1 .883-.993L7 9h2V8a6 6 0 0 1 5.775-5.996L15 2z" />
                      </g>
                    </svg>
                  </span>
                  <span> Facebook </span>
                </a>
                <a
                  href=""
                  class="flex items-center justify-center w-full h-10 gap-2 text-sm bg-[#EA4335] border rounded-md">
                  <span class="inline-block w-4 h-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full h-full fill-current"
                      viewBox="0 0 24 24">
                      <g
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2">
                        <path d="M0 0h24v24H0z" />
                        <path
                          fill="currentColor"
                          d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1-1.265.06a6 6 0 1 0 2.103 6.836l.001-.004h-3.66a1 1 0 0 1-.992-.883L13 13v-2a1 1 0 0 1 1-1h6.945a1 1 0 0 1 .994.89c.04.367.061.737.061 1.11c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2" />
                      </g>
                    </svg>
                  </span>
                  <span> Google </span>
                </a>
                <a
                  href=""
                  class="flex items-center justify-center w-full h-10 gap-2 text-sm border rounded-md bg-[#000000] text-gray-50">
                  <span class="inline-block w-4 h-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full h-full fill-current"
                      viewBox="0 0 24 24">
                      <g
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2">
                        <path d="M0 0h24v24H0z" />
                        <path
                          fill="currentColor"
                          d="M16.083 2H12a1 1 0 0 0-1 1v11.5a1.5 1.5 0 1 1-2.519-1.1l.12-.1A1 1 0 0 0 9 12.5V8.174A1 1 0 0 0 7.77 7.2A7.5 7.5 0 0 0 9.5 22l.243-.005A7.5 7.5 0 0 0 17 14.5v-2.7l.311.153c1.122.53 2.333.868 3.59.993A1 1 0 0 0 22 11.95V7.917a1 1 0 0 0-.834-.986a5.005 5.005 0 0 1-4.097-4.096A1 1 0 0 0 16.083 2" />
                      </g>
                    </svg>
                  </span>
                  <span> TikTok </span>
                </a>
              </div>
            </div>
            <div class="">
              <p class="text-xs font-light text-center">ou vos identifiants</p>
            </div>
            <form action="" class="w-full space-y-4">
              <div class="">
                <div class="relative">
                  <span
                    class="absolute block w-3 h-3 -translate-y-1/2 top-1/2 left-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full h-full fill-current"
                      viewBox="0 0 512 512">
                      <path
                        d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
                    </svg>
                  </span>
                  <label
                    for="email"
                    class="absolute text-xs -translate-y-1/2 pointer-events-none top-1/2 left-5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    class="w-full h-10 px-5 py-2 text-xs bg-transparent border rounded-md" />
                </div>
              </div>
              <div class="">
                <div class="text-right">
                  <div class="relative">
                    <span
                      class="absolute block w-3 h-3 -translate-y-1/2 top-1/2 left-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-full h-full fill-current"
                        viewBox="0 0 448 512">
                        <path
                          d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                      </svg>
                    </span>
                    <label
                      for="password"
                      class="absolute text-xs -translate-y-1/2 pointer-events-none top-1/2 left-5">
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      name="password"
                      class="w-full h-10 px-5 py-2 text-xs bg-transparent border rounded-md" />
                    <button
                      class="absolute w-4 h-4 -translate-y-1/2 right-1 top-1/2 togglePasswordVisibility">
                      <span class="inline-block w-4 h-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-full h-full fill-current"
                          viewBox="0 -960 960 960">
                          <path
                            d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <a href="" class="text-xs">Mot de passe oublié?</a>
                </div>
              </div>
              <div class="relative">
                <button
                  type="submit"
                  class="text-xs py-2 px-4 border bg-[#002B2F] w-1/2 text-center text-gray-50 rounded-md">
                  Se connecter
                </button>
              </div>
              <div class="relative">
                <div class="flex items-center">
                  <input
                    checked
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded" />
                  <label
                    for="checked-checkbox"
                    class="text-sm font-medium ms-2">
                    Se souvenir de moi
                  </label>
                </div>
              </div>
              <div class="">
                <p class="text-xs font-light text-center">
                  Vous n'avez pas de compte?
                  <a href="" class="font-bold">Créez-en ici</a>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>`,
    script: `class Authentification {
        constructor() {
          this.inputs = document.querySelectorAll('input')
          this.togglePasswordVisibilityBtns = document.querySelectorAll(
            '.togglePasswordVisibility'
          )
          this.formData = {}
        }

        isValidEmail(email) {
          // write an email testing regex
          const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/
          return regex.test(email)
        }

        isValidPassword(password) {
          // write a regex to check if password is at least
          //8cha has a special char, an uppercase a lowercase and a number
          const regex = new RegExp(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
          )
          return regex.test(password)
        }

        isMatchPassword(confirmPassword) {
          return this.formData.password === confirmPassword
        }

        // login logic goes here
        login() {}

        // register logic goes here
        register() {}

        // handle input change
        handleChange(e) {
          const { name, value } = e.target

          this.formData[name] = value
          e.target.value = value
          if (!this.validationFunctions[name](value)) {
            e.target.classList.add('error')
          } else {
            e.target.classList.remove('error')
          }
        }

        // reset form
        reset() {
          this.inputs.forEach((input) => {
            input.value = ''
            input.classList.remove('error')
            if (input.name === 'password' || input.name === 'confirmPassword')
              input.type = 'password'
          })
          this.togglePasswordVisibilityBtns.forEach((btn) => {
            btn.classList.remove('active')
          })
          this.formData = {}
        }
        // switch between login and signup

        // init the authentification
        init() {
          // validation functions
          this.validationFunctions = {
            email: this.isValidEmail,
            password: this.isValidPassword,
            confirmPassword: this.isMatchPassword,
          }
          const btns = document.querySelectorAll('.toggle')
          btns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
              e.preventDefault()
              this.toggle()
              this.reset()
              this.action = this.action === 'login' ? 'signup' : 'login'
            })
          })

          // handleSubmit
          const submitBtns = document.querySelectorAll('button[type="submit"]')
          submitBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
              e.preventDefault()
              const fields = Object.keys(this.formData)

              //   check if all fields are filled
              if (
                (fields.length !== 2 && this.action === 'login') ||
                (fields.length !== 3 && this.action === 'signup')
              )
                return

              // check if all fields are valid
              const isInvalid = fields.some(
                (field) =>
                  !this.validationFunctions[field](this.formData[field])
              )

              if (isInvalid) return

              this.action === 'login' ? this.login() : this.register()
            })
          })

          // handle input change
          this.inputs.forEach((input) => {
            input.addEventListener('input', (e) => this.handleChange(e))
            input.addEventListener('focus', (e) => {
              document
                .querySelector(\`label[for="$\{e.target.name}"]\`)
                .classList.add('sr-only')
            })

            input.addEventListener('blur', (e) => {
              if (e.target.value !== '') {
                document
                  .querySelector(\`label[for="$\{e.target.name}"]\`)
                  .classList.add('sr-only')
              } else {
                document
                  .querySelector(\`label[for="$\{e.target.name}"]\`)
                  .classList.remove('sr-only')
              }
            })
          })

          //  togglePasswordVisibility
          this.togglePasswordVisibilityBtns.forEach((btn) => {
            btn.addEventListener('click', function (e) {
              e.preventDefault()
              const input = this.parentElement.querySelector('input')
              if (input.type === 'password') {
                input.type = 'text'
                this.classList.add('active')
              } else {
                input.type = 'password'
                this.classList.remove('active')
              }
            })
          })
        }
      }

      const auth = new Authentification()
			window.onload = auth.init()`,
  },
  {
    height: 800,
    name: 'moderne',
    id: '',
    title: 'Template Inscription Moderne Tailwind CSS',
    description:
      "Ce template d'inscription se distingue par son design bifurqué, associant une zone de texte accueillante à gauche et un formulaire d'inscription clair à droite, le tout sur un fond élégant. Idéal pour les sites exigeant une expérience utilisateur fluide et engageante.",
    htmlBody: `<section class="w-full h-full bg-white">
    <script>
      tailwind.config = {
        theme: {
          extend: {
            container: {
              center: true,
              padding: '1rem',
            },
            colors: {
              dutchWhite: {
                100: '#fff3dd',
                200: '#fff1d7',
                300: '#ffefd1',
                400: '#ffedcc',
                500: '#ffebc6',
                600: '#e6d4b2',
                700: '#ccbc9e',
                800: '#b3a58b',
                900: '#998d77',
              },
              selectiveYellow: '#ffb100',
              amaranthanPink: '#f194b4',
              caribbeanCurrent: '#006C67',
              midnightGreen: '#003844',
            },
          },
        },
      }
    </script>
      <div class="grid grid-cols-1 lg:grid-cols-2 h-full w-full relative">
        <div class="md:h-full relative group order-2 lg:order-1" id="login">
        <style>
      html {
        overflow: hidden;
      }
      body {
        height: 100vh;
        width: 100vw;
        overflow: scroll;
      }
      input:not(:placeholder-shown) {
        border-color: #00384480;
      }
      input.error {
        border-color: #ff000050;
      }
    </style>
          <div
            class="absolute h-full w-full top-0 left-0 z-20 bg-gradient-to-bl from-[#66888f] from-10% to-[#001114] to-90% shadow-[0px_4px_16px_rgba(0,0,0,0.2), _0px_8px_24px_rgba(0,0,0,0.2), _0px_16px_56px_rgba(0,0,0,0.2)] overflow-hidden pointer-events-none group-[.active]:pointer-events-auto transition-opacity duration-1000 ease-in-out opacity-0 group-[.active]:opacity-100">
            <div
              class="relative h-full w-full flex flex-col items-center justify-center translate-x-full opacity-0 group-[.active]:translate-x-0 group-[.active]:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
              <div
                class="flex-1 flex flex-col items-center justify-center gap-8 lg:gap-16">
                <h2
                  class="text-4xl text-gray-50 text-center font-black font-sans">
                  <span class="lg:text-6xl"> Salut! </span> <br />
                </h2>
                <p
                  class="text-base px-6 max-w-md text-center text-gray-200 font-light text-sm">
                  Nous sommes heureux de vous aider à créer un compte. Nous vous
                  souhaitons une bonne journée. Si vous avez déjà un compte,
                  vous pouvez vous connecter en cliquant sur le bouton
                  ci-dessous.
                </p>
                <div class="">
                  <button
                    class="items-center justify-center w-full px-6 py-2.5 text-center text-gray-50 duration-200 bg-none inline-flex hover:bg-white hover:text-midnightGreen focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-midnightGreen toggle transition-all duration-500 ease-in-out"
                    type="button">
                    <span> Se connecter </span>
                    <span class="ml-4">
                      <svg
                        class="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10">
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <div class="mt-auto py-1.5 text-dutchWhite-700">
                <ul class="flex flex-row items-center justify-center gap-4">
                  <li>
                    <a
                      href="#"
                      class="text-xs hover:text-dutchWhite-900 transition-all duration-500 ease-in-out">
                      Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-xs hover:text-dutchWhite-900 transition-all duration-500 ease-in-out">
                      Politiques
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-xs hover:text-dutchWhite-900 transition-all duration-500 ease-in-out">
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="relative z-10 flex flex-col flex-1 px-4 py-10 bg-white lg:py-24 md:flex-none md:px-28 sm:justify-center md:h-full overflow-hidden">
            <div
              class="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4 group-[.active]:translate-x-full group-[.active]:opacity-0 transition-all duration-500 ease-in-out">
              <div class="flex flex-col gap-8">
                <div>
                  <h2
                    class="text-4xl text-midnightGreen text-center font-black font-sans">
                    Connexion
                  </h2>
                </div>
                <div
                  class="flex flex-row gap-8 items-center justify-center wrap">
                  <a
                    href=""
                    class="inline-flex items-center justify-center w-8 h-8 bg-transparent border border-midnightGreen text-midnightGreen">
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 8 19">
                      <path
                        fill-rule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147
                         4.147 0 0 0-4.142 
                         4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6
                          0 0 1 5.592 3h.543Z"
                        clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href=""
                    class="inline-flex items-center justify-center w-8 h-8 bg-transparent border border-midnightGreen text-midnightGreen">
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 19">
                      <path
                        fill-rule="evenodd"
                        d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841
                         8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0
                          0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0
                           0 0 9.09 3.4a5.882 5.882 0 0 0-.2 
                           11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3
                            11H9V8h8.34c.066.543.095 1.09.088 1.636-.086
                             5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                        clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href=""
                    class="inline-flex items-center justify-center w-8 h-8 bg-transparent border border-midnightGreen text-midnightGreen">
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20">
                      <path
                        stroke="currentColor"
                        d="M12.186 8.672 18.743.947h-2.927l-5.005 
                        5.9-4.44-5.9H0l7.434 9.876-6.986 
                        8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 
                        8.672Zm-2.267 2.671L8.544 9.515 
                        3.2 2.42h2.2l4.312 5.719 1.375 1.828 
                        5.731 7.613h-2.2l-4.699-6.237Z" />
                    </svg>
                  </a>
                </div>

                <p class="text-center text-xs text-dutchWhite-700">
                  Ou connectez vous avec votre compte
                </p>
              </div>
              <form autocomplete="off">
                <div class="mt-4 space-y-6">
                  <div class="relative col-span-full">
                    <label
                      class="block mb-3 text-sm font-medium text-gray-600 sr-only">
                      Email
                    </label>
                    <input
                      class="block w-full px-4 py-1.5 text-midnightGreen bg-white border-b border-gray-200 appearance-none placeholder:text-gray-300 focus:border-midnightGreen focus:outline-none focus:ring-midnightGreen text-xs placeholder:font-light"
                      placeholder="email@moi.com"
                      name="email"
                      type="email" />
                  </div>

                  <div class="col-span-full relative">
                    <label
                      class="block mb-3 text-sm font-medium text-gray-600 sr-only">
                      Mot de passe
                    </label>
                    <input
                      class="block w-full px-4 py-1.5 text-midnightGreen bg-white border-b border-gray-200 appearance-none placeholder:text-gray-300 focus:border-midnightGreen focus:outline-none focus:ring-midnightGreen text-xs placeholder:font-light"
                      placeholder="Mot de passe"
                      autocomplete="off"
                      name="password"
                      type="password" />
                    <button
                      class="group absolute right-0 top-1/2 -translate-y-1/2 togglePasswordVisibility"
                      type="button">
                      <span class="hidden group-[.active]:block" id="">
                        <svg
                          class="w-3 h-3 text-midnightGreen/50"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 18">
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1.933 10.909A4.357 4.357 
                            0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 
                            5.068 0 0 1 19 9c0 1-3 6-9 6-.314 
                            0-.62-.014-.918-.04M2 17 18 1m-5 
                            8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </span>
                      <span class="block group-[.active]:hidden">
                        <svg
                          class="w-3 h-3 text-midnightGreen/50"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 14">
                          <g
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2">
                            <path
                              d="M10 10a3 3 0 1 0 0-6 
                            3 3 0 0 0 0 6Z" />
                            <path
                              d="M10 13c4.97 0 9-2.686 
                              9-6s-4.03-6-9-6-9 2.686-9 
                              6 4.03 6 9 6Z" />
                          </g>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div class="col-span-full text-right">
                    <a
                      href="#"
                      class="text-xs text-midnightGreen underline text-dutchWhite-700 hover:text-dutchWhite-900 transition-all duration-500 ease-in-out">
                      Mot de passe oublié
                    </a>
                  </div>
                  <div class="col-span-full">
                    <button
                      class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-midnightGreen border border-midnightGreen inline-flex hover:bg-transparent hover:border-midnightGreen hover:text-midnightGreen focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-midnightGreen transition-all duration-500 ease-in-out"
                      type="submit">
                      Se connecter
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          class="md:h-full relative active group order-1 lg:order-2"
          id="signup">
          <div
            class="absolute h-full w-full top-0 left-0 z-20 bg-gradient-to-br from-[#66888f] from-10% to-[#001114] to-90% shadow-[0px_4px_16px_rgba(0,0,0,0.2),_0px_8px_24px_rgba(0,0,0,0.2),_0px_16px_56px_rgba(0,0,0,0.2)] overflow-hidden pointer-events-none group-[.active]:pointer-events-auto transition-opacity duration-1000 ease-in-out opacity-0 group-[.active]:opacity-100">
            <div
              class="relative h-full w-full flex flex-col items-center justify-center -translate-x-full opacity-0 group-[.active]:translate-x-0 group-[.active]:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
              <div
                class="flex-1 flex flex-col items-center justify-center gap-8 lg:gap-16">
                <h2
                  class="text-4xl text-gray-50 text-center font-black font-sans">
                  <span class="lg:text-6xl"> Bon retour! </span>
                </h2>
                <p
                  class="text-sm max-w-md text-center text-gray-200 font-light px-6">
                  Nous sommes heureux de vous revoir. Nous vous souhaitons une
                  bonne journée. Si vous n'avez pas de compte, vous pouvez en
                  créer un en cliquant sur le bouton ci-dessous.
                </p>
                <div class="">
                  <button
                    class="items-center justify-center w-full px-6 py-2.5 text-center text-gray-50 duration-200 bg-none inline-flex hover:bg-white hover:text-midnightGreen focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-midnightGreen toggle transition-all duration-500 ease-in-out"
                    type="button">
                    <span class="mr-4 rotate-180">
                      <svg
                        class="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10">
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </span>
                    <span> Créer un compte </span>
                  </button>
                </div>
              </div>
              <div class="mt-auto py-1.5 text-dutchWhite-700">
                <ul class="flex flex-row items-center justify-center gap-4">
                  <li>
                    <a
                      href="#"
                      class="text-xs hover:text-dutchWhite-900 transition-all duration-500 ease-in-out">
                      Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-xs hover:text-dutchWhite-900 transition-all duration-500 ease-in-out">
                      Politiques
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-xs hover:text-dutchWhite-900 transition-all duration-500 ease-in-out">
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="relative flex flex-col flex-1 px-4 py-10 bg-white lg:py-24 md:flex-none md:px-28 sm:justify-center md:h-full overflow-hidden">
            <div
              class="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4 group-[.active]:-translate-x-full group-[.active]:opacity-0 transition-all duration-500 ease-in-out">
              <div class="flex flex-col gap-8">
                <div>
                  <h2
                    class="text-4xl text-midnightGreen text-center font-black font-sans">
                    Créer un compte
                  </h2>
                </div>
                <div
                  class="flex flex-row gap-8 items-center justify-center wrap">
                  <a
                    href=""
                    class="inline-flex items-center justify-center w-8 h-8 bg-transparent border border-midnightGreen text-midnightGreen">
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 8 19">
                      <path
                        fill-rule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                        clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href=""
                    class="inline-flex items-center justify-center w-8 h-8 bg-transparent border border-midnightGreen text-midnightGreen">
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 19">
                      <path
                        fill-rule="evenodd"
                        d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                        clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href=""
                    class="inline-flex items-center justify-center w-8 h-8 bg-transparent border border-midnightGreen text-midnightGreen">
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20">
                      <path
                        stroke="currentColor"
                        d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z" />
                    </svg>
                  </a>
                </div>

                <p class="text-center text-xs text-dutchWhite-700">
                  Ou créer un compte avec votre email
                </p>
              </div>
              <form autocomplete="off">
                <div class="mt-4 space-y-6">
                  <div>
                    <label
                      class="block mb-3 text-sm font-medium text-gray-600 sr-only">
                      Email
                    </label>
                    <input
                      class="block w-full px-4 py-1.5 text-midnightGreen bg-white border-b border-gray-200 appearance-none placeholder:text-gray-300 focus:border-midnightGreen focus:outline-none focus:ring-midnightGreen text-xs placeholder:font-light"
                      placeholder="email@moi.com"
                      name="email"
                      type="email" />
                  </div>

                  <div class="col-span-full relative">
                    <label
                      class="block mb-3 text-sm font-medium text-gray-600 sr-only">
                      Mot de passe
                    </label>
                    <input
                      class="block w-full px-4 py-1.5 text-midnightGreen bg-white border-b border-gray-200 appearance-none placeholder:text-gray-300 focus:border-midnightGreen focus:outline-none focus:ring-midnightGreen text-xs placeholder:font-light"
                      placeholder="Mot de passe"
                      name="password"
                      autocomplete="off"
                      type="password" />
                    <button
                      class="group absolute right-0 top-1/2 -translate-y-1/2 togglePasswordVisibility togglePasswordVisibility"
                      type="button">
                      <span class="hidden group-[.active]:block" id="">
                        <svg
                          class="w-3 h-3 text-midnightGreen/50"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 18">
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </span>
                      <span class="block group-[.active]:hidden">
                        <svg
                          class="w-3 h-3 text-midnightGreen/50"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 14">
                          <g
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2">
                            <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path
                              d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                          </g>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div class="col-span-full relative">
                    <label
                      class="block mb-3 text-sm font-medium text-gray-600 sr-only">
                      Confirmer le mot de passe
                    </label>
                    <input
                      class="block w-full px-4 py-1.5 text-midnightGreen bg-white border-b border-gray-200 appearance-none placeholder:text-gray-300 focus:border-midnightGreen focus:outline-none focus:ring-midnightGreen text-xs placeholder:font-light"
                      placeholder="Confirmer le mot de passe"
                      autocomplete="off"
                      name="confirmPassword"
                      type="password" />
                    <button
                      class="group absolute right-0 top-1/2 -translate-y-1/2 togglePasswordVisibility togglePasswordVisibility"
                      type="button">
                      <span class="hidden group-[.active]:block" id="">
                        <svg
                          class="w-3 h-3 text-midnightGreen/50"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 18">
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </span>
                      <span class="block group-[.active]:hidden">
                        <svg
                          class="w-3 h-3 text-midnightGreen/50"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 14">
                          <g
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2">
                            <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path
                              d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                          </g>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div class="col-span-full">
                    <button
                      class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-midnightGreen border border-midnightGreen inline-flex hover:bg-transparent hover:border-midnightGreen hover:text-midnightGreen focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-midnightGreen transition-all duration-500 ease-in-out"
                      type="submit">
                      S'inscrire
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>`,
    script: `class Authentification {
        constructor() {
          this.login = document.getElementById('login')
          this.signup = document.getElementById('signup')
          this.action = 'login'
          this.inputs = document.querySelectorAll('input')
          this.togglePasswordVisibilityBtns = document.querySelectorAll(
            '.togglePasswordVisibility'
          )
          this.formData = {}
        }

        isValidEmail(email) {
          // write an email testing regex
          const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/
          return regex.test(email)
        }

        isValidPassword(password) {
          // write a regex to check if password is at least
          //8cha has a special char, an uppercase a lowercase and a number
          const regex = new RegExp(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
          )
          return regex.test(password)
        }

        isMatchPassword(confirmPassword) {
          return this.formData.password === confirmPassword
        }

        // login logic goes here
        login() {}

        // register logic goes here
        register() {}

        // handle input change
        handleChange(e) {
          const { name, value } = e.target

          this.formData[name] = value
          e.target.value = value
          if (!this.validationFunctions[name](value)) {
            e.target.classList.add('error')
          } else {
            e.target.classList.remove('error')
          }
        }

        // reset form
        reset() {
          this.inputs.forEach((input) => {
            input.value = ''
            input.classList.remove('error')
            if (input.name === 'password' || input.name === 'confirmPassword')
              input.type = 'password'
          })
          this.togglePasswordVisibilityBtns.forEach((btn) => {
            btn.classList.remove('active')
          })
          this.formData = {}
        }
        // switch between login and signup
        toggle() {
          this.action === 'login'
            ? (this.login.classList.add('active'),
              this.signup.classList.remove('active'))
            : (this.login.classList.remove('active'),
              this.signup.classList.add('active'))
        }
        // init the authentification
        init() {
          // validation functions
          this.validationFunctions = {
            email: this.isValidEmail,
            password: this.isValidPassword,
            confirmPassword: this.isMatchPassword,
          }
          const btns = document.querySelectorAll('.toggle')
          btns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
              e.preventDefault()
              this.toggle()
              this.reset()
              this.action = this.action === 'login' ? 'signup' : 'login'
            })
          })

          // handleSubmit
          const submitBtns = document.querySelectorAll('button[type="submit"]')
          submitBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
              e.preventDefault()
              const fields = Object.keys(this.formData)

              //   check if all fields are filled
              if (
                (field.length !== 2 && this.action === 'login') ||
                (field.length !== 3 && this.action === 'signup')
              )
                return

              // check if all fields are valid
              const isInvalid = fields.some(
                (field) =>
                  !this.validationFunctions[field](this.formData[field])
              )

              if (isInvalid) return

              this.action === 'login' ? this.login() : this.register()
            })
          })

          // handle input change
          this.inputs.forEach((input) => {
            input.addEventListener('input', (e) => this.handleChange(e))
          })

          //  togglePasswordVisibility
          this.togglePasswordVisibilityBtns.forEach((btn) => {
            btn.addEventListener('click', function (e) {
              e.preventDefault()
              const input = this.parentElement.querySelector('input')
              if (input.type === 'password') {
                input.type = 'text'
                this.classList.add('active')
              } else {
                input.type = 'password'
                this.classList.remove('active')
              }
            })
          })
        }
      }

      const auth = new Authentification()
      auth.init()`,
  },
  {
    height: 800,
    name: 'dynamique',
    id: '',
    title: 'Template Authentification Dynamique Tailwind CSS',
    description:
      "Ce template d'authentification allie esthétique et fonctionnalité, offrant une expérience utilisateur fluide avec une option de connexion rapide via les réseaux sociaux et un formulaire d'identification classique. Parfait pour des sites exigeant une entrée sécurisée et stylée.",
    htmlBody: `<section class="relative w-screen h-screen">
      <div
        class="absolute inset-0 z-0 bg-center bg-cover bg-auth grayscale"></div>
        <script>
      tailwind.config = {
        theme: {
          extend: {
            boxShadow: {
              oauthBtn:
                'inset -2px -2px 8px 0px rgba(0, 0, 0, 0.25), 2px 2px 8px 0px rgba(0, 0, 0, 0.25)',
            },
            backgroundImage: {
              auth: 'url("https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            },
          },
        },
      }
    </script>
      <div
        class="absolute space-x-2 text-xs font-bold -translate-x-1/2 md:hidden bottom-4 left-1/2 text-gray-50">
        <a href="">Politiques</a>
        <a href="">Terms</a>
        <a href="">Conditions</a>
      </div>
      <div class="h-full overflow-scroll">
        <div
          class="relative z-10 grid w-full min-h-full py-6 place-content-center">
          <div
            class="flex flex-row md:w-[760px] xl:w-[1008px] bg-white rounded-lg overflow-hidden">
            <section class="hidden md:block md:w-1/2 bg-[#0099A6]">
              <div
                class="relative flex items-center justify-center w-full h-full">
                <div class="w-[300px] mx-auto space-y-4 p-6 text-gray-50">
                  <h2 class="text-2xl font-extrabold text-center">
                    Bon retour
                  </h2>
                  <p class="text-sm leading-tight text-center">
                    Vous êtes sur le point de gérer toutes vos plate-formes
                    sociales du meme endroit avec retague.
                  </p>
                  <div
                    class="absolute space-x-2 text-xs font-bold -translate-x-1/2 bottom-4 left-1/2">
                    <a href="">Politiques</a>
                    <a href="">Terms</a>
                    <a href="">Conditions</a>
                  </div>
                </div>
              </div>
            </section>
            <section class="w-[300px] md:w-1/2 border bg-gray-50">
              <div class="w-[300px] mx-auto space-y-6 p-6">
                <div class="text-[#002B2F] text-center w-full">
                  <a href="" class="inline-block h-[40px]">
                    <svg
                      class="w-full h-full mx-auto"
                      viewBox="0 0 185 52"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.672 0.897143C21.5772 0.940349 22.4699 1.3076 23.1612 1.99891L35.9787 14.8164C42.1728 21.0105 42.1728 31.0531 35.9787 37.2471L23.1612 50.0647C21.6864 51.5395 19.2953 51.5395 17.8205 50.0647L5.00297 37.2471C-1.19109 31.0531 -1.19109 21.0105 5.00297 14.8164L17.8205 1.99891C18.5218 1.29767 19.4302 0.929857 20.3487 0.89548C20.4564 0.891449 20.5643 0.892003 20.672 0.897143ZM20.4908 10.0099L10.3436 20.1571C7.0991 23.4016 7.0991 28.662 10.3436 31.9065L20.4908 42.0537L30.6381 31.9065C33.8826 28.662 33.8826 23.4016 30.638 20.1571L20.4908 10.0099ZM25.6381 7.73051C26.0274 7.34123 26.0274 6.71009 25.6381 6.32081C25.2488 5.93154 24.6177 5.93154 24.2284 6.32082L20.551 9.99823L17.0577 6.50494C16.6684 6.11566 16.0373 6.11566 15.648 6.50494C15.2587 6.89422 15.2587 7.52536 15.648 7.91464L19.8299 12.0966C19.9111 12.1777 20.0027 12.242 20.1005 12.2893C20.4755 12.4821 20.9471 12.4215 21.2612 12.1074L25.6381 7.73051ZM15.345 44.2321C14.9557 44.6214 14.9557 45.2525 15.345 45.6418C15.7342 46.0311 16.3654 46.0311 16.7547 45.6418L20.4323 41.9642L23.9254 45.4572C24.3146 45.8465 24.9458 45.8465 25.3351 45.4572C25.7243 45.0679 25.7243 44.4368 25.3351 44.0475L21.1531 39.8656C21.0679 39.7804 20.9712 39.7139 20.8679 39.666C20.4954 39.4821 20.0319 39.5452 19.7218 39.8552L15.345 44.2321Z"
                        fill="currentColor" />
                      <path
                        d="M23.5512 23.6673H22.2555C21.7995 23.6673 21.4311 24.0356 21.4311 24.4916C21.4311 24.9475 21.7995 25.3159 22.2555 25.3159H25.5527C26.0087 25.3159 26.377 24.9475 26.377 24.4916V21.1943C26.377 20.7384 26.0087 20.37 25.5527 20.37C25.0968 20.37 24.7284 20.7384 24.7284 21.1943V22.5132L24.275 22.0599C22.021 19.8059 18.3683 19.8059 16.1143 22.0599C13.8603 24.3139 13.8603 27.9666 16.1143 30.2206C18.3683 32.4746 22.021 32.4746 24.275 30.2206C24.597 29.8986 24.597 29.3757 24.275 29.0537C23.953 28.7317 23.4301 28.7317 23.1081 29.0537C21.4981 30.6636 18.8886 30.6636 17.2787 29.0537C15.6687 27.4437 15.6687 24.8342 17.2787 23.2242C18.8886 21.6142 21.4981 21.6142 23.1081 23.2242L23.5512 23.6673Z"
                        fill="currentColor" />
                      <path
                        d="M57.5897 19.5714C58.1185 19.5714 58.6642 19.6164 59.2268 19.7065L59.5981 19.774L59.0074 26.0019C58.4673 25.8669 57.7191 25.7994 56.7626 25.7994C55.3449 25.7994 54.3041 26.1201 53.6402 26.7615C52.9763 27.4028 52.6444 28.3592 52.6444 29.6307V39.0317H46.0451V19.909H50.9566L51.9862 22.9639H52.3069C52.8582 21.9512 53.629 21.1355 54.6191 20.5166C55.6093 19.8865 56.5995 19.5714 57.5897 19.5714ZM71.514 39.3693C68.3409 39.3693 65.8655 38.5254 64.0877 36.8376C62.3324 35.1273 61.4547 32.6856 61.4547 29.5126C61.4547 26.3283 62.2705 23.8866 63.902 22.1875C65.5336 20.4435 67.8233 19.5714 70.7713 19.5714C73.7194 19.5714 75.981 20.3253 77.5563 21.8331C79.1316 23.3409 79.9192 25.5012 79.9192 28.3142V31.251H68.1215C68.1665 32.3199 68.5547 33.1582 69.2861 33.7658C70.0287 34.3734 71.0133 34.6772 72.2397 34.6772C73.4775 34.6772 74.5689 34.5703 75.5141 34.3565C76.4592 34.1428 77.5113 33.7658 78.6702 33.2257V37.9684C77.59 38.5198 76.5099 38.8911 75.4297 39.0824C74.3495 39.2737 73.0442 39.3693 71.514 39.3693ZM73.9275 27.099C73.905 26.1764 73.6406 25.4393 73.1343 24.888C72.6392 24.3367 71.9753 24.061 71.1427 24.061C70.3213 24.061 69.6574 24.3142 69.1511 24.8205C68.6447 25.3268 68.3465 26.0863 68.2565 27.099H73.9275ZM91.2274 19.909H95.9195V24.8542H91.2274V32.2974C91.2274 33.5351 91.8238 34.154 93.0165 34.154C93.9167 34.154 94.98 33.9346 96.2064 33.4958V38.306C95.3063 38.6998 94.4568 38.9699 93.6579 39.1161C92.859 39.2849 91.9194 39.3693 90.8393 39.3693C88.6451 39.3693 87.053 38.8348 86.0628 37.7659C85.0726 36.6857 84.5775 35.0092 84.5775 32.7363V24.8542H82.2652V22.1875L85.202 20.0947L86.9067 16.0777H91.2274V19.909ZM108.882 19.5714C111.335 19.5714 113.231 20.1847 114.57 21.4111C115.92 22.6376 116.595 24.331 116.595 26.4914V39.0317H112.021L110.755 36.5H110.62C109.709 37.614 108.797 38.3735 107.886 38.7786C106.975 39.1724 105.788 39.3693 104.325 39.3693C102.524 39.3693 101.107 38.8292 100.072 37.749C99.0363 36.6576 98.5187 35.1273 98.5187 33.1582C98.5187 31.1779 99.2107 29.6813 100.595 28.6687C101.99 27.656 104.06 27.0878 106.806 26.964L109.996 26.8627V26.5927C109.996 25.0174 109.219 24.2298 107.667 24.2298C106.271 24.2298 104.499 24.7023 102.35 25.6475L100.443 21.293C102.671 20.1453 105.484 19.5714 108.882 19.5714ZM105.253 32.9557C105.253 34.1259 105.878 34.711 107.126 34.711C107.937 34.711 108.623 34.4578 109.186 33.9515C109.748 33.4451 110.03 32.7869 110.03 31.9767V30.4915L108.51 30.559C106.339 30.6378 105.253 31.4367 105.253 32.9557ZM129.355 34.5422H132.528C136.815 34.5422 138.958 36.3481 138.958 39.96C138.958 42.2892 137.968 44.1008 135.988 45.3947C134.007 46.6887 131.217 47.3357 127.616 47.3357C124.905 47.3357 122.812 46.88 121.338 45.9686C119.875 45.0572 119.144 43.7576 119.144 42.0698C119.144 39.7744 120.561 38.3004 123.397 37.6477C122.823 37.4227 122.317 37.0289 121.878 36.4663C121.439 35.8924 121.22 35.3298 121.22 34.7785C121.22 34.2159 121.383 33.7039 121.709 33.2426C122.035 32.7813 122.716 32.2355 123.751 31.6054C122.75 31.1554 121.968 30.4634 121.405 29.5294C120.843 28.5843 120.561 27.4535 120.561 26.137C120.561 24.0666 121.27 22.4576 122.688 21.3099C124.106 20.1509 126.131 19.5714 128.764 19.5714C129.169 19.5714 129.805 19.6164 130.671 19.7065C131.538 19.7852 132.134 19.8527 132.46 19.909H139.127V23.0989L136.511 24.061C136.871 24.7248 137.051 25.4844 137.051 26.3395C137.051 28.4211 136.32 30.0245 134.857 31.1497C133.394 32.2749 131.245 32.8375 128.41 32.8375C127.734 32.8375 127.172 32.7925 126.722 32.7025C126.564 32.9951 126.486 33.2707 126.486 33.5295C126.486 33.8558 126.744 34.109 127.262 34.289C127.779 34.4578 128.477 34.5422 129.355 34.5422ZM128.832 23.234C127.47 23.234 126.789 24.2129 126.789 26.1707C126.789 28.1286 127.47 29.1075 128.832 29.1075C130.148 29.1075 130.806 28.1286 130.806 26.1707C130.806 24.2129 130.148 23.234 128.832 23.234ZM129.827 39.69H127.245C126.536 39.69 125.934 39.8531 125.439 40.1794C124.955 40.517 124.713 40.9389 124.713 41.4453C124.713 41.9629 125.006 42.3848 125.591 42.7111C126.176 43.0487 126.958 43.2175 127.937 43.2175C129.524 43.2175 130.801 43.0149 131.768 42.6099C132.736 42.216 133.22 41.7041 133.22 41.074C133.22 40.1513 132.089 39.69 129.827 39.69ZM160.647 39.0317H155.668L154.841 36.6519H154.452C153.901 37.5296 153.13 38.2047 152.14 38.6773C151.161 39.1386 150.008 39.3693 148.68 39.3693C146.565 39.3693 144.922 38.7561 143.752 37.5296C142.593 36.3031 142.013 34.5816 142.013 32.3649V19.909H148.613V30.3565C148.613 31.6279 148.793 32.5787 149.153 33.2088C149.513 33.839 150.092 34.154 150.891 34.154C152.028 34.154 152.838 33.7096 153.321 32.8206C153.805 31.9317 154.047 30.4183 154.047 28.2805V19.909H160.647V39.0317ZM174.436 39.3693C171.263 39.3693 168.787 38.5254 167.01 36.8376C165.254 35.1273 164.377 32.6856 164.377 29.5126C164.377 26.3283 165.192 23.8866 166.824 22.1875C168.455 20.4435 170.745 19.5714 173.693 19.5714C176.641 19.5714 178.903 20.3253 180.478 21.8331C182.053 23.3409 182.841 25.5012 182.841 28.3142V31.251H171.043C171.088 32.3199 171.477 33.1582 172.208 33.7658C172.951 34.3734 173.935 34.6772 175.162 34.6772C176.399 34.6772 177.491 34.5703 178.436 34.3565C179.381 34.1428 180.433 33.7658 181.592 33.2257V37.9684C180.512 38.5198 179.432 38.8911 178.352 39.0824C177.271 39.2737 175.966 39.3693 174.436 39.3693ZM176.849 27.099C176.827 26.1764 176.562 25.4393 176.056 24.888C175.561 24.3367 174.897 24.061 174.065 24.061C173.243 24.061 172.579 24.3142 172.073 24.8205C171.567 25.3268 171.268 26.0863 171.178 27.099H176.849Z"
                        fill="currentColor" />
                    </svg>
                  </a>
                </div>
                <div class="">
                  <h2 class="sr-only">Connexion</h2>
                  <p class="text-xs font-light text-center">
                    connectez vous avec:
                  </p>
                </div>
                <div class="">
                  <div class="flex items-center justify-center gap-4">
                    <a
                      href=""
                      class="inline-flex items-center justify-center w-12 h-12 rounded-md shadow-oauthBtn">
                      <span class="inline-block w-6 h-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-full h-full fill-current"
                          viewBox="0 0 24 24">
                          <g
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2">
                            <path d="M0 0h24v24H0z" />
                            <path
                              fill="currentColor"
                              d="M18 2a1 1 0 0 1 .993.883L19 3v4a1 1 0 0 1-.883.993L18 8h-3v1h3a1 1 0 0 1 .991 1.131l-.02.112l-1 4a1 1 0 0 1-.858.75L17 15h-2v6a1 1 0 0 1-.883.993L14 22h-4a1 1 0 0 1-.993-.883L9 21v-6H7a1 1 0 0 1-.993-.883L6 14v-4a1 1 0 0 1 .883-.993L7 9h2V8a6 6 0 0 1 5.775-5.996L15 2z" />
                          </g>
                        </svg>
                      </span>
                    </a>
                    <a
                      href=""
                      class="inline-flex items-center justify-center w-12 h-12 rounded-md shadow-oauthBtn">
                      <span class="inline-block w-6 h-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-full h-full fill-current"
                          viewBox="0 0 24 24">
                          <g
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2">
                            <path d="M0 0h24v24H0z" />
                            <path
                              fill="currentColor"
                              d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1-1.265.06a6 6 0 1 0 2.103 6.836l.001-.004h-3.66a1 1 0 0 1-.992-.883L13 13v-2a1 1 0 0 1 1-1h6.945a1 1 0 0 1 .994.89c.04.367.061.737.061 1.11c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2" />
                          </g>
                        </svg>
                      </span>
                    </a>
                    <a
                      href=""
                      class="inline-flex items-center justify-center w-12 h-12 rounded-md shadow-oauthBtn">
                      <span class="inline-block w-6 h-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-full h-full fill-current"
                          viewBox="0 0 24 24">
                          <g
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2">
                            <path d="M0 0h24v24H0z" />
                            <path
                              fill="currentColor"
                              d="M16.083 2H12a1 1 0 0 0-1 1v11.5a1.5 1.5 0 1 1-2.519-1.1l.12-.1A1 1 0 0 0 9 12.5V8.174A1 1 0 0 0 7.77 7.2A7.5 7.5 0 0 0 9.5 22l.243-.005A7.5 7.5 0 0 0 17 14.5v-2.7l.311.153c1.122.53 2.333.868 3.59.993A1 1 0 0 0 22 11.95V7.917a1 1 0 0 0-.834-.986a5.005 5.005 0 0 1-4.097-4.096A1 1 0 0 0 16.083 2" />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="">
                  <p class="text-xs font-light text-center">
                    ou vos identifiants
                  </p>
                </div>
                <form action="" class="w-full space-y-4">
                  <div class="">
                    <div class="relative">
                      <span
                        class="absolute block w-3 h-3 -translate-y-1/2 top-1/2 left-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-full h-full fill-current"
                          viewBox="0 0 512 512">
                          <path
                            d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
                        </svg>
                      </span>
                      <label
                        for="email"
                        class="absolute text-xs -translate-y-1/2 pointer-events-none top-1/2 left-5">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        class="w-full h-10 px-5 py-2 text-xs bg-transparent border rounded-md" />
                    </div>
                  </div>
                  <div class="">
                    <div class="text-right">
                      <div class="relative">
                        <span
                          class="absolute block w-3 h-3 -translate-y-1/2 top-1/2 left-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-full h-full fill-current"
                            viewBox="0 0 448 512">
                            <path
                              d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                          </svg>
                        </span>
                        <label
                          for="password"
                          class="absolute text-xs -translate-y-1/2 pointer-events-none top-1/2 left-5">
                          Mot de passe
                        </label>
                        <input
                          type="password"
                          name="password"
                          class="w-full h-10 px-5 py-2 text-xs bg-transparent border rounded-md" />
                        <button
                          class="absolute w-4 h-4 -translate-y-1/2 right-1 top-1/2 togglePasswordVisibility">
                          <span class="inline-block w-4 h-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-full h-full fill-current"
                              viewBox="0 -960 960 960">
                              <path
                                d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                            </svg>
                          </span>
                        </button>
                      </div>
                      <a href="" class="text-xs">Mot de passe oublié?</a>
                    </div>
                  </div>
                  <div class="relative">
                    <button
                      type="submit"
                      class="text-xs py-2 px-4 border bg-[#002B2F] w-1/2 text-center text-gray-50 rounded-md">
                      Se connecter
                    </button>
                  </div>
                  <div class="relative">
                    <div class="flex items-center">
                      <input
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded" />
                      <label
                        for="checked-checkbox"
                        class="text-sm font-medium ms-2">
                        Se souvenir de moi
                      </label>
                    </div>
                  </div>
                  <div class="">
                    <p class="text-xs font-light text-center">
                      Vous n'avez pas de compte?
                      <a href="" class="font-bold">Créez-en ici</a>
                    </p>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>`,
    script: `class Authentification {
        constructor() {
          this.inputs = document.querySelectorAll('input')
          this.togglePasswordVisibilityBtns = document.querySelectorAll(
            '.togglePasswordVisibility'
          )
          this.formData = {}
        }

        isValidEmail(email) {
          // write an email testing regex
          const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/
          return regex.test(email)
        }

        isValidPassword(password) {
          // write a regex to check if password is at least
          //8cha has a special char, an uppercase a lowercase and a number
          const regex = new RegExp(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
          )
          return regex.test(password)
        }

        isMatchPassword(confirmPassword) {
          return this.formData.password === confirmPassword
        }

        // login logic goes here
        login() {}

        // register logic goes here
        register() {}

        // handle input change
        handleChange(e) {
          const { name, value } = e.target

          this.formData[name] = value
          e.target.value = value
          if (!this.validationFunctions[name](value)) {
            e.target.classList.add('error')
          } else {
            e.target.classList.remove('error')
          }
        }

        // reset form
        reset() {
          this.inputs.forEach((input) => {
            input.value = ''
            input.classList.remove('error')
            if (input.name === 'password' || input.name === 'confirmPassword')
              input.type = 'password'
          })
          this.togglePasswordVisibilityBtns.forEach((btn) => {
            btn.classList.remove('active')
          })
          this.formData = {}
        }
        // switch between login and signup

        // init the authentification
        init() {
          // validation functions
          this.validationFunctions = {
            email: this.isValidEmail,
            password: this.isValidPassword,
            confirmPassword: this.isMatchPassword,
          }
          const btns = document.querySelectorAll('.toggle')
          btns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
              e.preventDefault()
              this.toggle()
              this.reset()
              this.action = this.action === 'login' ? 'signup' : 'login'
            })
          })

          // handleSubmit
          const submitBtns = document.querySelectorAll('button[type="submit"]')
          submitBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
              e.preventDefault()
              const fields = Object.keys(this.formData)

              //   check if all fields are filled
              if (
                (fields.length !== 2 && this.action === 'login') ||
                (fields.length !== 3 && this.action === 'signup')
              )
                return

              // check if all fields are valid
              const isInvalid = fields.some(
                (field) =>
                  !this.validationFunctions[field](this.formData[field])
              )

              if (isInvalid) return

              this.action === 'login' ? this.login() : this.register()
            })
          })

          // handle input change
          this.inputs.forEach((input) => {
            input.addEventListener('input', (e) => this.handleChange(e))
            input.addEventListener('focus', (e) => {
              document
                .querySelector(\`label[for="\${e.target.name}"]\`)
                .classList.add('sr-only')
            })

            input.addEventListener('blur', (e) => {
              if (e.target.value !== '') {
                document
                  .querySelector(\`label[for="\${e.target.name}"]\`)
                  .classList.add('sr-only')
              } else {
                document
                  .querySelector(\`label[for="\${e.target.name}"]\`)
                  .classList.remove('sr-only')
              }
            })
          })

          //  togglePasswordVisibility
          this.togglePasswordVisibilityBtns.forEach((btn) => {
            btn.addEventListener('click', function (e) {
              e.preventDefault()
              const input = this.parentElement.querySelector('input')
              if (input.type === 'password') {
                input.type = 'text'
                this.classList.add('active')
              } else {
                input.type = 'password'
                this.classList.remove('active')
              }
            })
          })
        }
      }

      const auth = new Authentification()
      auth.init()`,
  },
]

const Main = () => {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 bg-heroPatternLight dark:bg-heroPatternDark"></div>
        <div className="relative overflow-hidden bg-gradient-to-b from-transparent to-white to-[90%] py-12 space-y-8 dark:to-secondary-900">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            <div className="mx-auto mt-5 text-center max-w-7xl">
              <h2 className="block text-3xl font-bold text-gray-800 md:text-5xl lg:text-4xl dark:text-gray-200 max-w-2xl mx-auto">
                Templates d'Authentification Tailwind CSS: Connexion et Inscription
              </h2>
            </div>

            <div className="max-w-4xl mx-auto mt-5 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Découvrez notre collection de templates d'authentification Tailwind CSS, parfaits
                pour les pages de connexion, d'inscription et de récupération de mot de passe.
                <span className="sr-only">
                  Conçus pour s'intégrer harmonieusement à tout projet web, ces templates optimisent
                  l'expérience utilisateur tout en offrant sécurité et style.
                </span>{' '}
                Simplifiez le développement de vos formulaires d'authentification avec nos solutions
                prêtes à l'emploi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="py-16 mx-auto space-y-16 max-w-7xl">
        {data.map((block, index) => (
          <div className="space-y-8" key={`hero-${index}-${block.name}`}>
            <div className="px-4 mx-auto max-w-7xl">
              <h2 className="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group">
                {block.title}
              </h2>
              <p className="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
                {block.description}
              </p>
            </div>
            <BlocksSection {...block} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Main
