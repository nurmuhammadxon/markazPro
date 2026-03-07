import { Home, Users, GraduationCap, Settings, Layers, ChartNoAxesCombined, NotebookPen } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type SidebarItem = {
    title: string
    path: string
    icon: LucideIcon
}

export const sidebarItems: SidebarItem[] = [
    {
        title: "Bosh sahifa",
        path: "/dashboard",
        icon: Home,
    },
    {
        title: "O'qituvchilar",
        path: "/teachers",
        icon: GraduationCap,
    },
    {
        title: "Guruhlar",
        path: "/groups",
        icon: Layers,
    },
    {
        title: "O'quvchilar",
        path: "/students",
        icon: Users,
    },
    {
        title: "Sozlamalar",
        path: "/settings",
        icon: Settings,
    },
    {
        title: 'Moliya',
        path: '/finance',
        icon: ChartNoAxesCombined
    },
    {
        title: 'Hisobotlar',
        path: '/report',
        icon: NotebookPen
    }
]