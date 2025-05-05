"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { HeaderMobile } from "./HeaderMobile";

export default function Header() {
  const { tournament } = useParams();

  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dlzvlthdr/image/upload/v1713989304/webapp-tournament/tournaments_logos/wlzltte2wwzfwrrbafid.png"
            alt="logo"
            width={512}
            height={512}
            className="w-12 h-12"
          />
        </Link>
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  {tournament && (
                    <Link href={`/${tournament.toString()}`} passHref>
                      Categorie
                    </Link>
                  )}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className={cn("block lg:!hidden")}>
          <HeaderMobile />
        </div>
      </nav>
    </div>
  );
}
