import { v4 as uuidv4 } from "uuid";
import { GoHome } from "react-icons/go";

export const adminNav = [
    {
        id: uuidv4(),
        name: "Dashboard",
        icon: GoHome,
        path: "/admin",
        end: true,
    },
    {
        id: uuidv4(),
        name: "Teachers",
        icon: GoHome,
        path: "/admin/teachers",
    },
    {
        id: uuidv4(),
        name: "Students",
        icon: GoHome,
        path: "/admin/students",
    },
    {
        id: uuidv4(),
        name: "News add",
        icon: GoHome,
        path: "/admin/news",
    },
];