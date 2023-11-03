import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";
import fetchTokenRate from "./actions/fetchTokenRate";
import fetchMarketRate from "./actions/fetchMarketRate";

export const dynamic = "force-dynamic";

export async function GET() {
  const finalTokenRate = await fetchTokenRate();

  const dailyExchangeRate = await fetchMarketRate();

  return NextResponse.json({ finalTokenRate, dailyExchangeRate });
}
