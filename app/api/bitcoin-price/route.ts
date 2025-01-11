import { getBitcoinPrice } from '@/lib/api'

export async function GET() {
  try {
    const data = await getBitcoinPrice()
    return Response.json(data)
  } catch (error) {
    return Response.json({ error: 'Failed to fetch Bitcoin price' }, { status: 500 })
  }
}

