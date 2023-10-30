import { client } from "@/lib/sanity/client";
import { NewsType } from "@/types/news";
import Link from "next/link";
import { News } from "./components/news";

export default async function Page() {
  const news = await client.fetch<NewsType[]>(`*[_type == "news"]`, {
    next: {
      revalidate: 1,
    },
  });

  return (
    <div className="container  gap-14 p-24 flex flex-col ">
      <h1 className="text-2xl font-bold">Company News</h1>
      {news.map((content) => {
        return <News key={content._id} content={content} fixedSize />;
      })}
    </div>
  );
}
