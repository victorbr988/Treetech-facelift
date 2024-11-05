import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { createKey } from "next/dist/shared/lib/router/router"
import Link from "next/link"
import { ReactNode } from "react"
import { ILinkMenu } from "./menus"

interface ISidebarRootMenus {
  menu: ILinkMenu
  children: ReactNode
}

export function SidebarRootMenus({ children, menu }: ISidebarRootMenus) {
    const { title, url, icon: Icon, subLinks = [] } = menu
    return (
      <Collapsible key={createKey()} className="group/collapsible">
        <SidebarMenuItem key={menu.title}>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton className="hover:bg-[#9290C3] active:bg-[#9290C3]" tooltip={title} asChild>
              {
                subLinks.length > 0 ? (
                  <div className="cursor-pointer">
                    <Icon />
                    <span>{title}</span>
                  </div>
                ): (
                  <Link href={url}>
                    <Icon />
                    <span>{title}</span>
                  </Link>
                )
              }
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            { children }
        </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    )
}