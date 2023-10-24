import { ImageComponent } from "@/components/sanity/image";
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

  console.log(news[0]);

  return (
    <div className="container flex gap-10 py-24">
      {news.map((content) => {
        return <News key={content._id} content={content} />;
      })}
    </div>
  );
}
