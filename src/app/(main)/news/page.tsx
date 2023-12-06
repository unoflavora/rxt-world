import { NewsType } from "@/types/news";
import { News } from "./components/news";
import { client } from "../../../lib/sanity/lib/client";

export default async function Page() {
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
    <div className="container  gap-14 lg:px-24 flex flex-col ">
      <h1 className="text-2xl font-bold">Company News</h1>
      {news.map((content) => {
        return (
          <News
            key={content._id}
            content={content}
            fixedSize
            className="md:grid md:grid-cols-2"
          />
        );
      })}
    </div>
  );
}
