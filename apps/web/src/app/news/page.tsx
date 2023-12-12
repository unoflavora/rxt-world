import { News } from "./components/news";
import { graphql } from "@/gql";
import { graphqlClient } from "@/lib/graphql-client";
import { News as NewsType } from "@/gql/graphql";

export default async function Page() {
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

  return (
    <div className="container  gap-14 lg:px-24 pb-10 flex flex-col ">
      <h1 className="text-2xl font-bold">Company News</h1>

      {!news || !news.docs
        ? "No News"
        : news.docs.map((content) => {
            return (
              <News
                key={content?.title}
                news={content as NewsType}
                home={false}
                className="md:grid md:grid-cols-2"
              />
            );
          })}
    </div>
  );
}
