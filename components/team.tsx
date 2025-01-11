import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import type { TeamMember } from '@/types/crypto'

interface TeamProps {
  members: TeamMember[]
}

export function Team({ members }: TeamProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Id consequat et donec consequat.
        </p>
        {members.map((member) => (
          <Card key={member.name} className="bg-blue-50">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="text-center md:w-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-lg mx-auto mb-2"
                  />
                  <h4 className="font-medium">{member.name}</h4>
                  <p className="text-sm text-gray-600">{member.position}</p>
                </div>
                <p className="flex-1 text-gray-600">{member.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}

