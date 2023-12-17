import { Suspense } from "react";
import { LoaderIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Charts,
  MeetRimaunangis,
  Teams,
  Bitcoinland,
  Products,
  Media,
  HomeHeader,
  MarketTable,
  HomeNews,
} from "./(home-components)/index";
import { graphql } from "@/gql";
import { graphqlClient } from "@/lib/graphql-client";

const getHomeVideo = graphql(`
  query GetHomeVideo {
    HomeVideo {
      video {
        id
        url
        filename
      }
    }
  }
`);

export default async function Home() {
  const { HomeVideo } = await graphqlClient.request(getHomeVideo);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomeHeader fileUrl={HomeVideo?.video.url ?? "/"} />
      <Separator className="container z-0" />
      <MeetRimaunangis />
      <Teams />
      <Bitcoinland />
      <Charts />
      <Suspense
        fallback={
          <div className="min-h-screen w-full h-full flex justify-center items-center">
            <LoaderIcon className="animate-spin" size={30} />
          </div>
        }
      >
        <MarketTable />
      </Suspense>
      <Separator />
      <Products />
      <Media />
      <HomeNews />
    </main>
  );
}
