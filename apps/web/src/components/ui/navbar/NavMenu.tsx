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
              <ListItem href="/#nft" title="Farming with NFT"></ListItem>
              <ListItem href="/#streaming" title="Streaming TV"></ListItem>
              <ListItem
                href="/#dairy"
                title="E-Commerce Dairy Product"
              ></ListItem>
              <ListItem
                href="/#property"
                title="Property Development"
              ></ListItem>
              <ListItem href="/#metaverse" title="Metaverse World"></ListItem>
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
