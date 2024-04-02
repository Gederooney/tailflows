import { Theme, ReposInfos } from 'types'

export async function getTheme({ id, slug }: { id?: string; slug?: string }) {
  try {
    const { BASE_URL } = process.env

    let url = `${BASE_URL}/api/themes?`

    if (id) url += `id=${id}&`
    if (slug) url += `slug=${slug}`

    const res = await fetch(url, {
      method: 'GET',
      next: { revalidate: 3600 * 24 },
    })
    if (!res.ok) return null

    const { data } = await res.json()

    return data as Theme & { reposInfos: ReposInfos }
  } catch (error) {
    console.log(error.message)
    return null
  }
}
