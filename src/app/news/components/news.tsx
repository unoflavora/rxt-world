import { NewsType } from "@/types/news";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageComponent } from "@/components/sanity/image";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function News(props: {
  content: NewsType;
  fixedSize?: boolean;
  home?: boolean;
}) {
  const { content } = props;

  return (
    <Link
      href={content.url ? content.url : "/"}
      className={cn(
        `grid grid-cols-2 gap-5`,
        `${props.home && "flex flex-col transition-all hover:scale-105"}`
      )}
    >
      <ImageComponent
        value={content.image}
        isInline={false}
        fixedSize={props.fixedSize}
      />
      <div className="w-full h-full flex flex-col justify-between  items-start">
        <div className="w-full h-full flex flex-col gap-3">
          <h1
            className={cn(
              "font-bold text-white text-2xl",
              `${props.home && "text-base"}`
            )}
          >
            {content.title}
          </h1>
          <h2
            className={cn(
              "bg-white text-black p-2 w-fit",
              `${props.home && "bg-transparent text-tertiary"}`
            )}
          >
            {content.date}
          </h2>
          {!props.home && <p>{content.description}</p>}
        </div>
        {!props.home && <Button variant={"outline"}>SEE ARTICLE</Button>}
      </div>
    </Link>
  );
}
