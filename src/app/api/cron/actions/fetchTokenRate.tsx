import prisma from "@/lib/db/prisma";

export default async function fetchTokenRate() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/rimaunangis/ohlc?vs_currency=usd&days=1",
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
      next: {
        revalidate: 0,
      },
    }
  );

  const data = (await res.json()) as any[][];

  const series: any = await prisma.series.create({
    data: { createdAt: new Date() },
  });

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

  return prisma.series.findFirst({
    where: { id: series.id },
    include: { price: true },
  });
}
