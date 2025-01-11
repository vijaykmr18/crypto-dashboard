import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface AboutProps {
  name: string
  description: string
}

export function About({ name, description }: AboutProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About {name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">What is {name}?</h3>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg space-y-4">
          <div className="flex items-start gap-6">
            <Image
              src="/placeholder.svg"
              alt="Calculate your profits"
              width={200}
              height={160}
              className="rounded-lg"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Calculate your Profits</h3>
              <Button size="lg">Check Now →</Button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white space-y-4">
          <div className="flex items-start gap-6">
            <Image
              src="/placeholder.svg"
              alt="Get Started with KoinX"
              width={200}
              height={160}
              className="rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">Get Started with KoinX for FREE</h3>
              <p className="mb-4">
                With our range of features that you can equip for free, KoinX allows you to be more 
                educated and aware of your tax reports.
              </p>
              <Button variant="secondary" size="lg">Get Started for FREE →</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

