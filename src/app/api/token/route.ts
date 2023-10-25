import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/rimaunangis/ohlc?vs_currency=usd&days=7",
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  );

  const data = (await res.json()) as string[];

  const series = data.map((a) => {
    return { x: new Date(data[0]), y: data.slice(1) };
  });

  return NextResponse.json({ series });
}
