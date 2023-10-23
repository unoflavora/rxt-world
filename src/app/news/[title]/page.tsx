import { PortableText } from "@portabletext/react";
import { NewsType } from "@/types/news";
import { client } from "@/lib/sanity/client";
import components from "@/components/sanity";

export default async function Page({ params }: { params: { title: string } }) {
  const news = await client.fetch<NewsType>(`*[_type == "news"][0]`, {
    next: {
      revalidate: 3600,
    },
  });

  return (
    <div className="container flex justify-center items-center flex-col">
      <h1>{news.title}</h1>
      <PortableText value={news.body} components={components} />,
    </div>
  );
}
