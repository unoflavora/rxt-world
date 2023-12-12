import { Suspense } from "react";
import { LoaderIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { sanityFetch } from "@/lib/sanity/lib/fetch";
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
} from "@/homeComponents/index";

export default async function Home() {
  const video = await sanityFetch<{ id: string }>({
    query: `*[_type == "homepageVideo"]{"id": file.asset._ref}[0]`,
    tags: ["homepageVideo"],
  });

  const id = video.id.replace("file-", "").replace("-mp4", "");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomeHeader fileId={id} />
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
