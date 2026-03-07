import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"

type Props = {
  title: string
  value: number | string
  icon: LucideIcon
  link?: string
  color?: string
}

function StatsCard({ title, value, icon: Icon, link, color }: Props) {

  const card = (
    <Card className="p-4 hover:bg-muted transition cursor-pointer">
      <CardContent className="flex items-center justify-between p-0">

        <div>
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="text-xl font-bold">
            {value}
          </h2>
        </div>

        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="size-6 text-white" />
        </div>

      </CardContent>
    </Card>
  )

  if (link) {
    return <Link to={link}>{card}</Link>
  }

  return card
}

export default StatsCard