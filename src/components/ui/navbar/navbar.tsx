"use client";
import Link from "next/link";
import Navmenu from "./NavMenu";
import NavMenuMobile from "./NavMenuMobile";
import { useVisibleOnScrollUp } from "@/hooks/useVisibleScroll";

export default function Navbar() {
  const visible = useVisibleOnScrollUp();
  return (
    <nav
      className={`fixed w-full transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-24"
      }`}
    >
      <div className="w-full container py-5 flex justify-between  ">
        <Link
          href="/"
          className="bg-white py-0 px-2 md:px-8 text-black flex justify-center items-center"
        >
          LOGO
        </Link>

        <div className="w-fit h-full max-sm:hidden">
          <Navmenu />
        </div>

        <div className="w-fit h-full sm:hidden">
          <NavMenuMobile />
        </div>
      </div>
    </nav>
  );
}
