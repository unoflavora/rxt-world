import { Separator } from "@/components/ui/separator";
import { client } from "@/lib/sanity/client";
import { NewsType } from "@/types/news";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import { News } from "./news/components/news";

export default async function Home() {
  const news = await client.fetch<NewsType[]>(`*[_type == "news"]`, {
    next: {
      revalidate: 0,
    },
  });

  return (
    <main className="flex min-h-screen flex-col gap-10 items-center justify-between">
      <div className="w-full h-screen   bg-[url('/bg/grid.svg')] overflow-visible bg-cover bg-center bg-no-repeat flex  justify-center bg-fixed ">
        <div className="container z-10 px-4  grid grid-flow-row grid-rows-2 pt-32 md:py-56 gap-10 ">
          <article className=" flex flex-col text-center gap-6 justify-center items-center  font-semibold  ">
            <h1 className="text-2xl md:text-3xl xl:text-6xl">
              Bitcoin Land: RXT&apos;s Vision for Malaysia
            </h1>
            <h2 className="text-lg md:text-2xl xl:text-4xl">
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

      <div className="container w-full flex flex-col gap-5 text-tertiary xl:py-16">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-xl md:text-3xl">Company News</h1>
          <Link href={"/news"}>
            <h2 className="text-sm md:text-base inline-flex gap-2 hover:text-tertiary/30 transition-colors ">
              READMORE <PlusCircleIcon />
            </h2>
          </Link>
        </div>
        <div className="flex gap-10">
          {news.map((content) => {
            return <News key={content._id} content={content} />;
          })}
        </div>
      </div>
    </main>
  );
}
