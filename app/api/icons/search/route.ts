import { Icon } from 'types'
import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import { join } from 'path'
import { __dirname } from 'global'

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

    const searchTerm = queryParams.get('term')

    if (!searchTerm) {
      return NextResponse.json({ error: true, message: `searchTerm is required` }, { status: 400 })
    }

    const searchWords = searchTerm
      .trim()
      .toLocaleLowerCase()
      .split(' ')
      .filter((word) => word !== '')

    const icons = JSON.parse(fs.readFileSync(join(__dirname, 'data/icons.json'), 'utf-8'))

    if (searchWords.length === 0)
      return NextResponse.json({
        icons: (icons as Icon[]).sort((a, b) => b.popularity - a.popularity).slice(0, 200),
      })

    const filteredIcons = (icons as Icon[]).filter((icon) =>
      searchWords.every((word) => icon.tags.some((tag) => tag.includes(word)))
    )

    return NextResponse.json({
      icons: filteredIcons.sort((a, b) => b.popularity - a.popularity),
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'message' }, { status: 500 })
  }
}

export { handler as GET, handler as POST }
