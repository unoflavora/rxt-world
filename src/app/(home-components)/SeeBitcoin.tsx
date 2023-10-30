import { Button } from "@/components/ui/button";
import MapScene from "./ThreeMap";
import Link from "next/link";

export default function Bitcoinland() {
  return (
    <div className="w-full h-full  bg-[url('/bg/grid-2d.svg')] bg-cover text-white">
      <div className="container flex flex-col gap-8 justify-start py-20">
        <div className="p-2 px-4 self-start text-2xl md:text-4xl xl:text-6xl text-center bg-white text-black font-bold font-crimson">
          BITCOIN LAND
        </div>
        <div className="w-full relative justify-center items-end text-4xl">
          <div className="w-full h-[46rem] bg-white">
            <MapScene />
          </div>
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-background w-[80%] max-w-[46rem]  py-7 px-14 flex max-sm:flex-col max-sm:justify-center max-sm:gap-2 justify-between items-center">
            <h1 className="text-base text-tertiary">EXPLORE MORE</h1>
            <Link href="https://www.bitcoinland.com" target="_blank">
              <Button variant={"outline"} className="font-semibold">
                VIEW ON BITCOIN LAND
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
