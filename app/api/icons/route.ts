import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

const handler = async (req: NextRequest) => {
  try {
    if (req.method !== 'GET') {
      return NextResponse.json({ error: true, message: 'not allowed' }, { status: 405 })
    }

    const icons = await prisma.icon.findMany({
      take: 200,
      orderBy: {
        popularity: 'desc',
      },
    })

    return NextResponse.json({ data: icons })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  }
}

export { handler as GET, handler as POST }
