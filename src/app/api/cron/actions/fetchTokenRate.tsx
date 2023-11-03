import prisma from "@/lib/db/prisma";
import { Series, StockPrice } from "@prisma/client";

export default async function fetchTokenRate() {
  try {
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
    var dbData: Series;

    try {
      dbData = await prisma.series.findFirstOrThrow();
    } catch {
      dbData = await prisma.series.create({ data: { createdAt: new Date() } });
    }

    const series: Series & { price: StockPrice[] } = await prisma.series.update(
      {
        where: { id: dbData.id },
        data: {
          createdAt: new Date(),
        },
        include: {
          price: true,
        },
      }
    );

    await Promise.all(
      data.map((point, i) => {
        const ohlcData = {
          date: new Date(point[0]),
          data: point.slice(1),
          seriesId: series.id,
        };

        if (i < series.price.length)
          return prisma.stockPrice.update({
            where: { id: series.price[i].id },
            data: ohlcData,
          });

        return prisma.stockPrice.create({ data: ohlcData });
      })
    );

    await Promise.all(
      series.price.map((price, y) => {
        if (y > data.length - 1)
          return prisma.stockPrice.delete({ where: { id: price.id } });
      })
    );

    return prisma.series.findFirst({
      where: { id: series.id },
      include: { price: true },
    });
  } catch (e) {
    console.log(e);
    return { error: e };
  }
}
