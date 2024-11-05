import { SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem } from "@/components/ui/sidebar";
import { ILinkMenu } from "./menus";
import { createKey } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ISidebarSubMenus {
  subMenu: ILinkMenu
}
export function SidebarSubMenus({ subMenu }: ISidebarSubMenus) {
  return (
    <SidebarMenuSub key={createKey()}>
      <SidebarMenuSubItem key={createKey()}>
        <SidebarMenuButton asChild>
          <Link href={subMenu.url}>
            <subMenu.icon />
            <span>{subMenu.title}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuSubItem>

      <Button>Teste</Button>
    </SidebarMenuSub>
  )
}