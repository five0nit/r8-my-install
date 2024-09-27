import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const posts = await prisma.post.findMany({
    include: {
      user: true,
      company: true,
    },
  })
  return NextResponse.json(posts)
}

export async function POST(request: Request) {
  const body = await request.json()
  const post = await prisma.post.create({
    data: body,
  })
  return NextResponse.json(post)
}
