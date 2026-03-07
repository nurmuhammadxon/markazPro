import { SidebarTrigger } from "@/components/ui/sidebar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import {
    Avatar,
    AvatarFallback
} from "@/components/ui/avatar"
import { UserRound } from "lucide-react"

function Header() {

    const user = {
        name: "Admin",
        role: "CEO"
    }

    const handleLogout = () => {
        console.log("logout")
    }

    return (
        <header className="flex h-16 items-center border-b px-6">

            <SidebarTrigger />

            <div className="ml-auto flex items-center gap-4">

                <div className="text-right">
                    <p className="text-sm font-medium">{user.name}</p>
                </div>

                <DropdownMenu>

                    <DropdownMenuTrigger>

                        <Avatar>
                            <AvatarFallback>
                                <UserRound />
                            </AvatarFallback>
                        </Avatar>

                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">

                        <DropdownMenuItem>
                            Profile
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={handleLogout}>
                            Logout
                        </DropdownMenuItem>

                    </DropdownMenuContent>

                </DropdownMenu>

            </div>

        </header>
    )
}

export default Header