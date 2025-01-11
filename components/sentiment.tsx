import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, TrendingDown } from 'lucide-react'

export function Sentiment() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sentiment</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Key Events</h3>
            <div className="flex gap-4 overflow-x-auto pb-4">
              <Card className="min-w-[300px] bg-blue-50">
                <CardContent className="p-4 flex gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Lorem ipsum dolor sit amet</h4>
                    <p className="text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim 
                      tincidunt.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="min-w-[300px] bg-green-50">
                <CardContent className="p-4 flex gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <TrendingDown className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Lorem ipsum dolor sit amet</h4>
                    <p className="text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim 
                      tincidunt.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Analyst Estimates</h3>
            <div className="flex items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center">
                <span className="text-3xl font-bold text-green-600">76%</span>
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-8 text-sm text-gray-600">Buy</span>
                  <div className="flex-1 h-2 bg-green-500 rounded" />
                  <span className="w-8 text-sm text-gray-600">76%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-8 text-sm text-gray-600">Hold</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded" style={{ width: '8%' }} />
                  <span className="w-8 text-sm text-gray-600">8%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-8 text-sm text-gray-600">Sell</span>
                  <div className="flex-1 h-2 bg-red-500 rounded" style={{ width: '16%' }} />
                  <span className="w-8 text-sm text-gray-600">16%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

