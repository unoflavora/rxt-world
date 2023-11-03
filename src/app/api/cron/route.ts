import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";
import fetchTokenRate from "./actions/fetchTokenRate";

export async function GET() {
  const finalTokenRate = await fetchTokenRate();

  return NextResponse.json({ finalTokenRate });
}
