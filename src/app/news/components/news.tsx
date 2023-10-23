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

export function News(props: { content: NewsType }) {
  const { content } = props;

  return (
    <Link href={`/news/${content.slug.current}`} className="max-w-sm ">
      <Card className="hover:bg-slate-200">
        <CardHeader>
          <CardTitle>{content.title}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <ImageComponent value={content.image} isInline={false} />
        </CardContent>
        <CardFooter>
          <p>{content.description}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
