import themes from '@/data/themes.json'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(req)
    if (req.method === 'GET') {
      return NextResponse.json({ value: 'test' }, { status: 200 })
    }
    return NextResponse.json({ POST: 'test' }, { status: 400 })
  } catch (error) {
    console.log(error.message)
    return NextResponse.json({ error: 'message' }, { status: 500 })
  }
}

export { handler as GET, handler as POST }
