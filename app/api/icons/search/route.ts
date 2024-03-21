// Assurez-vous d'importer PrismaClient
import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

const handler = async (req: NextRequest) => {
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

    const parsedUrl = new URL(req.url)
    const searchTerm = parsedUrl.searchParams.get('term')

    if (!searchTerm) {
      return NextResponse.json(
        { error: true, message: `searchTerm is required` },
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    const searchWords = searchTerm
      .trim()
      .toLowerCase()
      .split(' ')
      .filter((word) => word !== '')

    if (searchWords.length === 0) {
      const icons = await prisma.icon.findMany({
        take: 200,
        orderBy: {
          popularity: 'desc',
        },
      })
      return NextResponse.json(
        { icons },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // Remarque : Adaptez cette partie selon votre schéma et la façon dont vous stockez les tags
    const icons = await prisma.icon.findMany({
      where: {
        tags: {
          hasEvery: searchWords,
        },
      },
      take: 200,
      orderBy: {
        popularity: 'desc',
      },
    })

    return NextResponse.json(
      { icons },
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
