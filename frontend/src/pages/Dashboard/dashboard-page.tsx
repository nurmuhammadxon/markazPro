import Schedule from "@/components/_components/doshboard/schedule"
import StatsCard from "@/components/_components/doshboard/stats-card"
import { stats } from "@/constants/dashboard/dashboard-stats"
import { financeStats } from "@/constants/dashboard/dashboard-finance"
import { lessons } from "@/constants/dashboard/dashboard-lesson"
import PaymentList from "@/components/_components/doshboard/payment-list"
import { paymentData } from "@/constants/dashboard/dashboard-paynet"

function DashboardPage() {
  return (
    <div className="max-w-6xl w-full text- flex flex-col gap-5">
      <div className="grid grid-cols-3 gap-4">

        {stats.map((item) => (
          <StatsCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
            link={item.link}
            color={item.color}
          />
        ))}

      </div>
      <Schedule lessons={lessons} />
      <div className="grid grid-cols-4 gap-4 mt-6">

        {financeStats.map((item) => (
          <StatsCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
            color={item.color}
          />
        ))}

      </div>

      <PaymentList data={paymentData} />
    </div>
  )
}

export default DashboardPage