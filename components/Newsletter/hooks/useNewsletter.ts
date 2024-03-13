// useNewLetter.ts
import { useState, ChangeEvent, FormEvent } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

interface NewLetterState {
  email: string
  subscribed: boolean
  errorMessage: string | null
  loading: boolean
}

export interface IBid {
  name: string
  id: string
  message: string
  slug: string
}

const useNewsletter = (
  bid?: IBid
): {
  state: NewLetterState
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
} => {
  const [state, setState] = useState<NewLetterState>({
    email: '',
    subscribed: false,
    errorMessage: null,
    loading: false,
  })

  const { executeRecaptcha } = useGoogleReCaptcha()

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    setState({
      ...state,
      email,
      errorMessage: email.match(emailRegex) ? null : 'Email non valide',
    })
  }

  const optin = async () => {}
  const newletter = async () => {}

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!state.email.match(emailRegex)) {
      setState({ ...state, errorMessage: 'Invalid email format' })
      return
    }
    if (!executeRecaptcha) {
      setState({ ...state, errorMessage: 'Nous ne pouvons pas vérifier que vous êtes humain' })
      return
    }
    executeRecaptcha('contact').then((recaptchaToken) => sendForm(recaptchaToken))
    setState({ ...state, errorMessage: null })

    const sendForm = (recaptchaToken: string) => {
      const goAsync = async () => {
        try {
          setState({ ...state, loading: true })

          const { data } = await axios.post(
            `/api/newsletter`,
            { email: state.email, bid, recaptchaToken },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )

          if (data.error) {
            return setState({
              ...state,
              errorMessage: data.message,
              subscribed: false,
              loading: false,
            })
          }
          return setState({
            ...state,
            subscribed: true,
            loading: false,
            errorMessage: data.message,
            email: '',
          })
        } catch (error: unknown) {
          const message = (error as Error).message
          setState({ ...state, errorMessage: message, subscribed: false })
        }
      }

      goAsync()
    }
  }

  return { state, handleEmailChange, handleSubmit }
}

export default useNewsletter
