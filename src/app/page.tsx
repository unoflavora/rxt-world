import { Separator } from "@/components/ui/separator";
import { client } from "@/lib/sanity/client";
import { NewsType } from "@/types/news";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import { News } from "./news/components/news";
import MeetRimaunangis from "./(home-components)/MeetRimaunangis";
import Teams from "./(home-components)/MeetTeams";
import Bitcoinland from "./(home-components)/SeeBitcoin";
import Charts from "./(home-components)/Charts";
import Products from "./(home-components)/Products";
import Media from "./(home-components)/Media";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const news = await client.fetch<NewsType[]>(`*[_type == "news"]`, {
    next: {
      revalidate: 1,
    },
  });

  return (
    <main className="flex min-h-screen flex-col gap-10 items-center justify-between">
      <div className="w-full h-screen   bg-[url('/bg/grid.svg')] overflow-visible bg-cover bg-center bg-no-repeat flex  justify-center bg-fixed ">
        <div className="container z-10 px-4  grid grid-flow-row grid-rows-2 pt-32 md:py-56 lg:py-72 gap-10 lg:gap-24 ">
          <article className=" flex flex-col text-center gap-6 justify-center items-center  font-semibold  ">
            <h1 className="text-2xl md:text-3xl xl:text-6xl font-crimson">
              Bitcoin Land: RXT&apos;s Vision for Malaysia
            </h1>
            <h2 className="text-lg md:text-2xl xl:text-4xl text-tertiary">
              Transforming the Penang, Malaysia Waterfront into Asia&apos;s
              Premier Tech Hub
            </h2>
          </article>
          <div className="bg-[#262217] flex w-full md:h-[350%] max-h-[32rem] justify-center  text-center items-center">
            <h1 className="text-6xl font-semibold">GIF</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <Separator className=" z-0" />
      </div>

      <MeetRimaunangis />
      <Teams />
      <Bitcoinland />
      <Charts />
      <Separator />
      <Products />
      <Media />

      <div className="container w-full flex flex-col gap-5 text-tertiary xl:py-16">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-crimson text-white">
            Company News
          </h1>
          <Link href={"/news"}>
            <Button
              variant={"outline"}
              className="flex justify-center items-center gap-2"
            >
              READMORE <PlusCircleIcon className="-mt-0.5" size={15} />
            </Button>
          </Link>
        </div>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {news.map((content, i) => {
            if (i < 3)
              return (
                <News key={content._id} content={content} fixedSize home />
              );
          })}
        </div>
      </div>
    </main>
  );
}
