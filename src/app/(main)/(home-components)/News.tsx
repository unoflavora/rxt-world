import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import { News } from "../news/components/news";
import { NewsType } from "@/types/news";
import { client } from "@/lib/sanity/lib/client";

export default async function HomeNews() {
  const news = await client.fetch<NewsType[]>(
    `*[_type == "news"]`,
    {},
    {
      headers: {
        Authorization: "bearer " + process.env.SANITY_SECRET,
      },
      next: {
        tags: ["news"],
      },
    }
  );
  return (
    <div className="container w-full flex flex-col gap-5 py-10 text-tertiary xl:py-16">
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
            return <News key={content._id} content={content} fixedSize home />;
        })}
      </div>
    </div>
  );
}
