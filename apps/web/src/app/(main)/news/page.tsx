import { NewsType } from "@/types/news";
import { News } from "./components/news";
import { sanityFetch } from "@/lib/sanity/lib/fetch";

export default async function Page() {
  const news = await sanityFetch<NewsType[]>({
    query: `*[_type == "news"]`,
    tags: ["news"],
  });

  return (
    <div className="container  gap-14 lg:px-24 pb-10 flex flex-col ">
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
