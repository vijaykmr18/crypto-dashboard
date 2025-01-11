import { getTrendingCoins } from '@/lib/api'

export async function GET() {
  try {
    const data = await getTrendingCoins()
    return Response.json(data)
  } catch (error) {
    return Response.json({ error: 'Failed to fetch trending coins' }, { status: 500 })
  }
}

