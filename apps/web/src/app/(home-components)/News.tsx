import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { News } from "../news/components/news";
import { graphql } from "@/gql";
import { graphqlClient } from "@/lib/graphql-client";
import { News as NewsType } from "@/gql/graphql";
import Link from "next/link";

export default async function HomeNews() {
  const GetAllNews = graphql(`
    query GetAllNews {
      allNews {
        docs {
          id
          title
          description
          date
          image {
            id
            filename
            url
          }
          Url
        }
      }
    }
  `);

  const { allNews: news } = await graphqlClient.request(GetAllNews);

  if (news == null || news.docs == null) return;

  return (
    <div className="container w-full flex flex-col gap-5 py-10 text-tertiary xl:py-16">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-crimson text-white">
          Company News
        </h1>
        <Link href={"/news"}>
          <Button
            variant={"outline"}
            className="flex justify-center items-center gap-2"
          >
            READMORE <PlusCircleIcon className="-mt-0.5" size={15} />
          </Button>
        </Link>
      </div>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {news.docs.map((content, i) => {
          if (i < 3 && content)
            return <News key={content.title} news={content as NewsType} home />;
        })}
      </div>
    </div>
  );
}
