export interface CryptoPrice {
  [key: string]: {
    inr: number
    inr_24h_change: number
    usd: number
    usd_24h_change: number
  }
}

export interface TeamMember {
  name: string
  position: string
  image: string
  description: string
}

export interface TrendingCoin {
  item: {
    id: string
    name: string
    symbol: string
    thumb: string
    data: {
      price: string
      price_change_percentage_24h: {
        usd: number
      }
      sparkline_in_7d: {
        price: number[]
      }
    }
  }
}

export interface CoinInfo {
  id: string
  symbol: string
  name: string
  description: {
    en: string
  }
  market_data: {
    current_price: {
      usd: number
      inr: number
    }
    price_change_percentage_24h: number
    low_24h: {
      usd: number
    }
    high_24h: {
      usd: number
    }
  }
}

