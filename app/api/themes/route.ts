import themes from '@/data/themes.json'

import { NextResponse, NextRequest } from 'next/server'
import { ReposInfos } from 'types'

const accessToken = process.env.GITHUB_ACCESS_TOKEN

async function getReposInfosFromGithub(reposUrl: string) {
  try {
    const res = await fetch(reposUrl)

    const data = await res.json()

    const {
      name,
      license,
      topics,
      watchers,
      subscribers_count,
      forks_count,
      open_issues,
      created_at,
      updated_at,
      pushed_at,
      git_url,
      clone_url,
      stargazers_count,
      default_branch,
      languages_url,
      contributors_url,
    } = data

    const languagesResponse = await fetch(languages_url, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    })

    const languages = await languagesResponse.json()
    const contributorsResponse = await fetch(contributors_url, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    })

    const contributors = (await contributorsResponse.json()).map(
      (c: { [key: string]: string }) => ({
        login: c.login,
        avatar: c.avatar_url,
      })
    )

    return {
      name,
      stargazers_count,
      forks_count,
      openIssues: open_issues,
      subscribers_count,
      default_branch,
      topics,
      license,
      created_at,
      updated_at,
      pushed_at,
      clone_url,
      git_url,
      watchers,
      languages,
      contributors_count: contributors.length,
      contributors,
    }
  } catch (error) {
    console.log(error.message)
    return null
  }
}

const handler = async (req: NextRequest, res: NextResponse) => {
  try {
    if (req.method !== 'GET' || !req.url)
      return NextResponse.json(
        {
          error: true,
          message: 'not allowed',
        },
        {
          status: 405,
        }
      )
    const parsedUrl = new URL(req.url)
    const queryParams = parsedUrl.searchParams

    const id = queryParams.get('id')

    if (!id) {
      return NextResponse.json({ error: true, message: `ThemeId is required` }, { status: 400 })
    }

    const theme = themes.find((theme) => theme.id === id)

    if (!theme) return NextResponse.json({ error: true, message: 'theme not found' })

    let reposInfos: ReposInfos | null = {} as ReposInfos

    if (theme.repos.length !== 0) {
      reposInfos = await getReposInfosFromGithub(theme.repos_api_url)
    }

    return NextResponse.json({ data: { ...theme, reposInfos } }, { status: 200 })
  } catch (error) {
    console.log(error.message)
    return NextResponse.json({ error: 'message' }, { status: 500 })
  }
}

export { handler as GET, handler as POST }
