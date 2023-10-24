import Link from "next/link";
import Navmenu from "./NavMenu";
import NavMenuMobile from "./NavMenuMobile";

export default function Navbar() {
  return (
    <nav className="w-full ">
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
