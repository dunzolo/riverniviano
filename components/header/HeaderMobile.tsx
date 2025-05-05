"use client";
import { useMenuContext } from "@/app/providers/MenuContextProvider";
import { NavItem } from "@/app/types/types";
import { Navbar } from "@/components/Navbar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const navItemsRoot: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: "home",
    label: "Home",
  },
];

export function HeaderMobile() {
  const [open, setOpen] = useState(false);

  const { menu_items } = useMenuContext();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className="!px-0">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Menù
            </h2>
            <SheetHeader className="sr-only">
              <SheetTitle>Sidebar</SheetTitle>
              <SheetDescription>Displays the mobile sidebar.</SheetDescription>
            </SheetHeader>
            <div className="space-y-1">
              <Navbar
                items={[...navItemsRoot, ...menu_items]}
                setOpen={setOpen}
              />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
