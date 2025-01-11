export async function GET() {
  try {
    const [priceRes, infoRes] = await Promise.all([
      fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24h_change=true',
        { next: { revalidate: 60 } }
      ),
      fetch(
        'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=true',
        { next: { revalidate: 300 } }
      )
    ])

    if (!priceRes.ok || !infoRes.ok) {
      throw new Error('Failed to fetch Bitcoin data')
    }

    const [price, info] = await Promise.all([
      priceRes.json(),
      infoRes.json()
    ])

    return Response.json({ price, info })
  } catch (error) {
    return Response.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
}

