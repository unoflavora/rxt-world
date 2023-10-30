import { client } from "@/lib/sanity/client";
import { NewsType } from "@/types/news";
import Link from "next/link";
import { News } from "./components/news";

export default async function Page() {
  const news = await client.fetch<NewsType[]>(`*[_type == "news"]`, {
    next: {
      revalidate: 0,
    },
  });

  return (
    <div className="container  gap-10 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {news.map((content) => {
        return <News key={content._id} content={content} fixedSize />;
      })}
    </div>
  );
}
