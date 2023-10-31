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
import HomeHeader from "./(home-components)/Header";

export default async function Home() {
  const news = await client.fetch<NewsType[]>(`*[_type == "news"]`, {
    next: {
      revalidate: 1,
    },
  });

  return (
    <main className="flex min-h-screen flex-col gap-10 items-center justify-between">
      <HomeHeader />
      <Separator className="container z-0" />
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
