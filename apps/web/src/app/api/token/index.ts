import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    var res = await prisma.series.findFirstOrThrow({
      orderBy: {
        id: "desc",
      },
      take: 1,
      include: {
        price: true,
      },
    });

    const data = res.price.map((price) => {
      return { x: price.date, y: price.data };
    });

    return { data };
  } catch (e) {
    console.error(e);
    return { data: null, error: e };
  }
}
