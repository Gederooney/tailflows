import { prisma } from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

const handler = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    if (req.method !== 'GET' || !req.url) {
      return NextResponse.json(
        {
          error: true,
          message: 'not allowed',
        },
        {
          status: 405,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
    }

    const { id } = params

    if (!id) {
      return NextResponse.json(
        { error: true, message: `id is required` },
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    const icon = await prisma.icon.findUnique({
      where: {
        id,
      },
    })

    return NextResponse.json(
      { icon },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'An error occurred' },
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}

export { handler as GET, handler as POST }
