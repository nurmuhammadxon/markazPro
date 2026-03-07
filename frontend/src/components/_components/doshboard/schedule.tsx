import generateTimes from "@/constants/dashboard/generate-times"
import { useNavigate } from "react-router-dom"

type Lesson = {
    id: string
    groupName: string
    teacher: string
    room: string
    start: string
    end: string
}

type Props = {
    lessons: Lesson[]
}

const times = generateTimes("08:00", "20:00", 15)

const rooms = ["101", "103"]

function Schedule({ lessons }: Props) {

    const navigate = useNavigate()

    return (
        <div className="w-full overflow-x-auto border rounded-xl bg-background">

            <div className="flex min-w-max flex-col">

                {/* HEADER */}
                <div className="flex border-b">

                    <div className="w-40 shrink-0 p-3 font-medium border-r">
                        Xonalar / Soat
                    </div>

                    {times.map((time) => (
                        <div
                            key={time}
                            className="w-20 shrink-0 text-center text-sm border-r py-2"
                        >
                            {time}
                        </div>
                    ))}

                </div>

                {/* ROOMS */}

                {rooms.map((room) => (

                    <div key={room} className="flex border-b relative">

                        <div className="w-40 shrink-0 p-3 border-r font-medium">
                            {room}
                        </div>

                        {times.map((_, i) => (
                            <div key={i} className="w-20 shrink-0 h-16 border-r" />
                        ))}

                        {lessons
                            .filter((l) => l.room === room)
                            .map((lesson) => {

                                const startIndex = times.indexOf(lesson.start)
                                const endIndex = times.indexOf(lesson.end)

                                const width = (endIndex - startIndex) * 80

                                return (
                                    <div
                                        key={lesson.id}
                                        onClick={() => navigate(`/groups/${lesson.id}`)}
                                        className="absolute top-2 bg-muted rounded-md p-2 text-xs shadow cursor-pointer"
                                        style={{
                                            left: `${150 + startIndex * 80}px`,
                                            width: `${width}px`
                                        }}
                                    >
                                        <div className="font-medium">
                                            {lesson.groupName}
                                        </div>

                                        <div className="text-muted-foreground">
                                            {lesson.teacher}
                                        </div>
                                    </div>
                                )
                            })}

                    </div>

                ))}

            </div>

        </div>
    )
}

export default Schedule