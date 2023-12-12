import prisma from "@/lib/db/prisma";
import { MarketData } from "@prisma/client";
import dynamic from "next/dynamic";

const Table = dynamic(() => import("./Table"), { ssr: false });

export default async function MarketTable() {
  const data: MarketData[] = await prisma.marketData.findMany();

  return (
    <div className="container flex flex-col gap-10 justify-center items-center bg-zinc-900 py-10">
      <h1 className="text-3xl text-white font-bold self-start">
        RIMAUNANGIS Markets
      </h1>
      <Table data={data} />
    </div>
  );
}
