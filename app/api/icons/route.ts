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

    const icons = JSON.parse(fs.readFileSync(join(__dirname, 'data/icons.json'), 'utf-8'))

    const sorted = (icons as Icon[]).sort((a, b) => b.popularity - a.popularity)

    return NextResponse.json({ data: sorted.slice(0, 200) })
  } catch (error: unknown) {
    console.log(error)
    return NextResponse.json({ error: 'message' }, { status: 500 })
  }
}

export { handler as GET, handler as POST }