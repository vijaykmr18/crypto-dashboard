const COINGECKO_API = 'https://api.coingecko.com/api/v3'

export async function getCoinPrice(coinId: string) {
  const res = await fetch(
    `${COINGECKO_API}/simple/price?ids=${coinId}&vs_currencies=usd,inr&include_24h_change=true`,
    { next: { revalidate: 60 } }
  )
  if (!res.ok) throw new Error('Failed to fetch price')
  return res.json()
}

export async function getTrendingCoins() {
  const res = await fetch(`${COINGECKO_API}/search/trending`, 
    { next: { revalidate: 300 } }
  )
  if (!res.ok) throw new Error('Failed to fetch trending coins')
  return res.json()
}

export async function getCoinInfo(coinId: string) {
  const res = await fetch(
    `${COINGECKO_API}/coins/${coinId}?localization=false&tickers=false&community_data=false&developer_data=false`,
    { next: { revalidate: 300 } }
  )
  if (!res.ok) throw new Error('Failed to fetch coin info')
  return res.json()
}

