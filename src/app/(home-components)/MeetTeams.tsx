import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Teams() {
  return (
    <div className="w-full h-full py-20 bg-white min-h-screen text-black">
      <div className="container flex flex-col gap-8 justify-start">
        <div className="grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-2 justify-center items-center">
          <div className="w-full h-[46rem] bg-background text-white flex justify-center items-center text-4xl">
            3D team member
          </div>
          <div className="flex flex-col gap-2 md:px-6">
            <h1 className="text-2xl  bg-black text-white font-crimson uppercase p-2">
              THE TEAMS
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              laoreet ut orci ut dictum. Maecenas ipsum neque, hendrerit sit
              amet augue eget, accumsan finibus diam. Mauris ut dui magna.
              Suspendisse potenti. Mauris dapibus purus sed odio efficitur, eu
              posuere enim interdum. Quisque in massa imperdiet, ultricies neque
              vel, mattis nibh. Proin sed pharetra urna, a malesuada nisl.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Donec scelerisque risus quis
              erat blandit, vel aliquam ex sagittis. Aenean tempus vulputate
              magna, iaculis rutrum diam finibus eu. Aenean quis porttitor
              massa. In rhoncus a lorem sed condimentum.
            </p>
            <Link href="/our-team">
              <Button className="border-black text-black bg-transparent border w-fit font-bold hover:bg-black hover:border-white hover:text-white">
                SEE FULL TEAM
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
