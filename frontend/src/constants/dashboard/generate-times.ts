export default function generateTimes(start: string, end: string, step = 15) {
    const times: string[] = []

    const [startH, startM] = start.split(":").map(Number)
    const [endH, endM] = end.split(":").map(Number)

    let current = startH * 60 + startM
    const endTime = endH * 60 + endM

    while (current <= endTime) {
        const h = Math.floor(current / 60)
        const m = current % 60

        times.push(
            `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
        )

        current += step
    }

    return times
}