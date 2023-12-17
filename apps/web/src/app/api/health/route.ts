import { NextResponse } from "next/server";

export function GET(req: Request, res: Response) {
  return NextResponse.json(
    { uptime: process.uptime(), status: "ok", timestamp: Date.now() },
    { status: 200 }
  );
}
