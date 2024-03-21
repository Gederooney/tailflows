import axios from 'axios'
import { Icon } from 'types'

export const fetchIconById = async (id: string) => {
  try {
    const { BASE_URL } = process.env
    const { data } = await axios.get(`${BASE_URL}/api/icons/${id}`)
    return data.icon as Icon
  } catch (error) {
    console.log(error)
    return null
  }
}

export const fetchDefaultIcons = async () => {
  try {
    const { BASE_URL } = process.env
    const url = `${BASE_URL}/api/icons`

    const res = await fetch(url, {
      method: 'GET',
    })
    if (!res.ok) return [] as Icon[]
    const { data } = await res.json()
    return data as Icon[]
  } catch (error) {
    console.log(error.message)
    return [] as Icon[]
  }
}
