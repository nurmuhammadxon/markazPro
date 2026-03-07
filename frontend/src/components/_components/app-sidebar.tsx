import {
    Sidebar,
    SidebarContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    useSidebar
} from "@/components/ui/sidebar"

import { sidebarItems } from "@/constants/sidebar"
import { NavLink } from "react-router-dom"

function AppSidebar() {
    const { state } = useSidebar()
    return (
        <Sidebar collapsible="icon">
            <div className="mb-4 mt-3">
                {state === "collapsed" ? (
                    <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-chart-4 text-white font-bold">
                        MP
                    </span>
                ) : (
                    <h1 className="text-xl font-bold ml-3">Markaz Pro</h1>
                )}
            </div>
            <SidebarContent>
                <SidebarMenu className="flex flex-col gap-2">
                    {sidebarItems.map((item) => {
                        const Icon = item.icon

                        return (
                            <SidebarMenuItem key={item.path}>
                                <NavLink to={item.path}>
                                    {({ isActive }) => (
                                        <SidebarMenuButton
                                            isActive={isActive}
                                            className="flex items-center gap-3 ml-2 w-[90%] data-[active=true]:bg-chart-3 data-[active=true]:text-primary-foreground"                                        >
                                            <Icon className="size-5!" />

                                            <span className="group-data-[collapsible=icon]:hidden text-base font-medium cursor-pointer">
                                                {item.title}
                                            </span>

                                        </SidebarMenuButton>
                                    )}
                                </NavLink>
                            </SidebarMenuItem>
                        )
                    })}
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar