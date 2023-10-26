import prisma from "@/lib/db/prisma";
import { Series } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/rimaunangis/ohlc?vs_currency=usd&days=1",
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  );

  const data = (await res.json()) as any[][];

  const series: Series = await prisma.series.create({
    data: { createdAt: new Date() },
  });
  console.log(series.id);

  await Promise.all(
    data.map((point) => {
      return prisma.stockPrice.create({
        data: {
          date: new Date(point[0]),
          data: point.slice(1),
          seriesId: series.id,
        },
      });
    })
  );

  const finalData = await prisma.series.findFirst({
    where: { id: series.id },
    include: { price: true },
  });

  return NextResponse.json({ finalData });
}

// import { NextResponse } from "next/server";

// export async function S() {
//   const res = await fetch(
//     "https://api.coingecko.com/api/v3/coins/rimaunangis/ohlc?vs_currency=usd&days=7",
//     {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//       },
//     }
//   );

//   const data = (await res.json()) as string[];

//   const series = data.map((point) => {

//     return { x: new Date(point[0]), y: point.slice(1) };
//   });

//   return NextResponse.json({ series });
// }
