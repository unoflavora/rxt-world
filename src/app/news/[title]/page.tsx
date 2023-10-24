import { PortableText } from "@portabletext/react";
import { NewsType } from "@/types/news";
import { client } from "@/lib/sanity/client";
import components from "@/components/sanity";
import { ImageComponent } from "@/components/sanity/image";

export default async function Page({ params }: { params: { title: string } }) {
  const news = await client.fetch<NewsType>(
    `*[_type == "news" && slug.current=="${params.title}"][0]`,
    {
      next: {
        revalidate: 0,
      },
    }
  );

  return (
    <div className="container bg-slate-700 flex justify-center items-center flex-col gap-5 py-24">
      <h1 className="font-semibold text-xl">{news.title}</h1>
      <ImageComponent value={news.image} isInline={false} />
      <PortableText value={news.body} components={components} />,
    </div>
  );
}
