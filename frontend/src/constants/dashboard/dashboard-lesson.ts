import { v4 as uuidv4 } from "uuid"
type lessonsProps = {
    id: string,
    groupName: string,
    teacher: string,
    room: string,
    start: string,
    end: string
}

export const lessons: lessonsProps[] = [
    {
        id: uuidv4(),
        groupName: "English A1",
        teacher: "Ali",
        room: "101",
        start: "09:00",
        end: "10:30"
    }
]