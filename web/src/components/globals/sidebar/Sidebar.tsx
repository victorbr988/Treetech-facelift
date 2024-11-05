import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
  } from "@/components/ui/sidebar"
import { If } from "../condition/If"
import { menus } from "./menus"
import Link from "next/link"
import { createKey } from "next/dist/shared/lib/router/router"
import { SidebarRootMenus } from "./SidebarRootMenus"
import { SidebarSubMenus } from "./SidebarSubMenus"
  
  export function AppSidebar() {
    return (
      <Sidebar variant="floating" collapsible="icon">  
        <SidebarContent className="bg-slate-950 rounded-lg text-[#9290C3]">
          {
            menus.map((menu) => (
              <SidebarGroup key={menu.groupLink}>
                <If condition={menu.groupName.length > 0}>
                  <Link href={menu.groupLink}>
                    <SidebarGroupLabel className="text-gray-400">{ menu.groupName }</SidebarGroupLabel>
                  </Link>
                </If>
                <SidebarGroupContent key={menu.groupName}>
                  {
                    menu.links.map((rootMenu) => (
                      <SidebarRootMenus key={createKey()} menu={rootMenu}>
                        <If condition={typeof rootMenu.subLinks !== "undefined"}>
                          {
                            rootMenu!.subLinks!.map((subMenu) => (
                              <SidebarSubMenus key={createKey()} subMenu={subMenu} />
                            ))
                          }
                        </If>
                      </SidebarRootMenus>
                    ))
                  }
                </SidebarGroupContent>
              </SidebarGroup>
            ))
          }
        </SidebarContent>
      </Sidebar>
    )
  }
  