import { getCoinPrice } from '@/lib/api'

export async function GET(
  request: Request,
  { params }: { params: { coinId: string } }
) {
  try {
    const data = await getCoinPrice(params.coinId)
    return Response.json(data)
  } catch (error) {
    return Response.json({ error: 'Failed to fetch price' }, { status: 500 })
  }
}

