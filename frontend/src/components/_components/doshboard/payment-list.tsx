type Props = {
    data: {
        name: string
        value: number
        color: string
    }[]
}

function PaymentList({ data }: Props) {
    return (
        <div className="space-y-3">

            {data.map((item) => (

                <div
                    key={item.name}
                    className="flex items-center gap-4"
                >

                    <div className="flex items-center gap-2">

                        <div
                            className="w-3 h-3 rounded-full"
                            style={{ background: item.color }}
                        />

                        <span className="text-sm">
                            {item.name}
                        </span>

                    </div>

                    <span className="font-medium">
                        {item.value}
                    </span>

                </div>

            ))}

        </div>
    )
}

export default PaymentList