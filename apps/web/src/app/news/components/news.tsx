import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { News } from "@/gql/graphql";
import Image from "next/image";

export function News(
  props: { news: News; home: boolean } & React.HTMLAttributes<HTMLDivElement>
) {
  const { news } = props;

  return (
    <Link
      target="_blank"
      href={news.Url ? news.Url : "/"}
      className={cn(
        `flex flex-col gap-5`,
        `${props.home && "transition-all hover:scale-105"}`,
        props.className
      )}
    >
      <Image
        src={news.image.url as string}
        width={500}
        height={100}
        className="object-cover object-center"
        alt={news.title}
      />
      <div className="w-full h-full flex flex-col gap-3 justify-between  items-start">
        <div className="w-full h-full flex flex-col gap-3">
          <h1
            className={cn(
              "font-bold text-white text-2xl",
              `${props.home && "text-base"}`
            )}
          >
            {news.title}
          </h1>
          <h2
            className={cn(
              "bg-white text-black p-2 w-fit",
              `${props.home && "bg-transparent text-tertiary"}`
            )}
          >
            {new Date(news.date).toLocaleDateString()}
          </h2>
          {!props.home && <p>{news.description}</p>}
        </div>
        {!props.home && <Button variant={"outline"}>SEE ARTICLE</Button>}
      </div>
    </Link>
  );
}
