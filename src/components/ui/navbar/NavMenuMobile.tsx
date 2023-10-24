"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Menu, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ListItem } from "./listItem";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "../navigation-menu";
import Navmenu from "./NavMenu";

import { ChevronsUpDown, Plus, X } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

export default function NavMenuMobile() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Products", path: "/your-path" },
    { title: "Token Performance", path: "/your-path" },
    { title: "Contact Us", path: "/your-path" },
  ];

  return (
    <div className="relative w-full ">
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent className="list-none py-10 gap-8 flex flex-col">
          <Products />
          <h4 className=" font-semibold">Token Performance</h4>
          <h4 className=" font-semibold">Contact Us</h4>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function Products() {
  const [isOpen, setIsOpen] = React.useState(false);
  const products = [
    { title: "Farming with NFT", path: "/your-path" },
    { title: "Streaming TV", path: "/your-path" },
    { title: "E-Commerce Dairy Products", path: "/your-path" },
    { title: "Property Development", path: "/your-path" },
  ];

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2 transition-all"
    >
      <div className="flex items-center justify-between space-x-4 4">
        <h4 className=" font-semibold">Products</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            {isOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}

            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="flex flex-col gap-2">
        {products.map((product) => (
          <Link key={product.title} href="/">
            <div className="rounded-md border px-4 py-3  text-sm">
              {product.title}
            </div>
          </Link>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
