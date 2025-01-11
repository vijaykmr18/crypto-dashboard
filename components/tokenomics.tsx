import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Tokenomics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tokenomics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Initial Distribution</h3>
          <div className="flex items-center gap-8">
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#0040FF"
                  strokeWidth="20"
                  fill="none"
                  strokeDasharray="251.2"
                  strokeDashoffset="0"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#FAA002"
                  strokeWidth="20"
                  fill="none"
                  strokeDasharray="251.2"
                  strokeDashoffset="188.4"
                />
              </svg>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#0040FF] rounded-full" />
                <span>Crowdsale investors: 80%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#FAA002] rounded-full" />
                <span>Foundation: 20%</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc 
          dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At 
          metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh 
          sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet 
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at 
          curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate 
          ipsum aliquet odio nisi eu ac risus.
        </p>
      </CardContent>
    </Card>
  )
}

