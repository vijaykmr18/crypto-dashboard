import { Card, CardContent } from "@/components/ui/card"

interface PerformanceProps {
  low24h: number
  high24h: number
  currentPrice: number
}

export function PerformanceSection({ low24h, high24h, currentPrice }: PerformanceProps) {
  const range = high24h - low24h
  const position = ((currentPrice - low24h) / range) * 100

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Performance</h2>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Today's Low</span>
            <span>Today's High</span>
          </div>
          <div className="relative h-2">
            <div className="absolute w-full h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
            <div 
              className="absolute w-4 h-4 bg-white border-2 border-black rounded-full -mt-1 transform -translate-x-1/2"
              style={{ left: `${position}%` }}
            />
          </div>
          <div className="flex justify-between text-sm">
            <span>${low24h.toLocaleString()}</span>
            <span>${high24h.toLocaleString()}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-500">
            <span>52W Low</span>
            <span>52W High</span>
          </div>
          <div className="relative h-2">
            <div className="absolute w-full h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
          </div>
          <div className="flex justify-between text-sm">
            <span>$16,930.22</span>
            <span>$49,343.83</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Fundamentals</h3>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="gray" className="opacity-60">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
              <text x="10" y="14" textAnchor="middle" fill="currentColor" fontSize="12">i</text>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                { label: "Bitcoin Price", value: `$${currentPrice.toLocaleString()}` },
                { label: "24h Low / 24h High", value: `$${low24h.toLocaleString()} / $${high24h.toLocaleString()}` },
                { label: "7d Low / 7d High", value: "$44,109.47 / $48,637.83" },
                { label: "Trading Volume", value: "$24,143,518,137" },
                { label: "Market Cap Rank", value: "#1" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-500">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                { label: "Market Cap", value: "$925,691,242,544" },
                { label: "Market Cap Dominance", value: "44.26%" },
                { label: "Volume / Market Cap", value: "0.0249" },
                { label: "All-Time High", value: "$69,044.77" },
                { label: "All-Time Low", value: "$67.81" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-500">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

