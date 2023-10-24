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

export function News(props: { content: NewsType; fixedSize?: boolean }) {
  const { content } = props;
  console.log(content);

  return (
    <Link href={`/news/${content.slug.current}`} className="w-full  ">
      <Card className="w-full hover:scale-105 transition-all ">
        <CardContent className="w-full ">
          <ImageComponent
            value={content.image}
            isInline={false}
            fixedSize={props.fixedSize}
          />
        </CardContent>
        <CardHeader>
          <CardTitle>{content.title}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardFooter>
          <p>{content.description}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
