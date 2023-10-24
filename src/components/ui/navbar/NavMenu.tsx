"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ListItem } from "./listItem";
import { Separator } from "@/components/ui/separator";

export default function Navmenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-4 text-[#939393]">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:text-background focus:bg-accent ">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      RIMAUNANGIS
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Company Description
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Farming with NFT">
                Lorem Ipsum sit dot amet
              </ListItem>
              <ListItem href="/docs/installation" title="Streaming TV">
                Lorem Ipsum sit dot amet
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="E-Commerce Dairy Product"
              >
                Lorem Ipsum sit dot amet
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Property Development"
              >
                Lorem Ipsum sit dot amet
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <Separator orientation="vertical" className=" h-[24px]" />
        <NavigationMenuItem>
          <Link href="/#token" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Token Performance
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <Separator
          orientation="vertical"
          className=" h-[24px] bg-gradient-to-b from-background to-background via-primary"
        />
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
