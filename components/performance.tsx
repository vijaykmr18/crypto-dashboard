import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface PerformanceProps {
  low24h: number
  high24h: number
  currentPrice: number
}

export function Performance({ low24h, high24h, currentPrice }: PerformanceProps) {
  const range = high24h - low24h
  const position = ((currentPrice - low24h) / range) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Today's Low</span>
              <span>Today's High</span>
            </div>
            <div className="relative h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded">
              <div 
                className="absolute w-2 h-4 bg-black -top-1 transform -translate-x-1"
                style={{ left: `${position}%` }}
              />
            </div>
            <div className="flex justify-between text-sm font-medium">
              <span>${low24h.toLocaleString()}</span>
              <span>${high24h.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

