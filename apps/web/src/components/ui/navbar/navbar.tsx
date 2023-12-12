"use client";
import Link from "next/link";
import Navmenu from "./NavMenu";
import NavMenuMobile from "./NavMenuMobile";
import { useVisibleOnScrollUp } from "@/hooks/useVisibleScroll";
import Logo from "../logo";

export default function Navbar() {
  const visible = useVisibleOnScrollUp();
  return (
    <nav
      className={`fixed bg-black z-20 w-full transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-24"
      }`}
    >
      <div className="w-full container py-5 flex justify-between  ">
        <Link href="/">
          <Logo />
        </Link>

        <div className="w-fit h-full max-sm:hidden ">
          <Navmenu />
        </div>

        <div className="w-fit h-full sm:hidden">
          <NavMenuMobile />
        </div>
      </div>
    </nav>
  );
}
