import { AlertCircle, Clock, FileText, GraduationCap, Layers, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react"

type Props = {
    title: string
    value: number
    icon: LucideIcon
    link: string,
    color: string
}

export const stats: Props[] = [
    {
        title: "Guruhlar",
        value: 12,
        icon: Layers,
        link: "/groups",
        color: "bg-emerald-600"
    },
    {
        title: "O'quvchilar",
        value: 245,
        icon: Users,
        link: "/students",
        color: "bg-cyan-500"

    },
    {
        title: "O'qituvchilar",
        value: 14,
        icon: GraduationCap,
        link: "/teachers",
        color: "bg-blue-400"
    },
    {
        title: "Imtihonlar",
        value: 8,
        icon: FileText,
        link: "/exams",
        color: "bg-amber-300"
    },
    {
        title: "Qarzdorlar",
        value: 21,
        icon: AlertCircle,
        link: "/students",
        color: "bg-red-500"

    },
    {
        title: "To'lov yaqin",
        value: 17,
        icon: Clock,
        link: "/students",
        color: "bg-amber-500"
    }
]