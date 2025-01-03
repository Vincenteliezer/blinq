// app/api/system-info/route.ts
import { getAllData } from "systeminformation";
import { NextResponse } from "next/server";

export async function GET() {
  const systemInfo = {
    data: await getAllData(),
  };
  return NextResponse.json(systemInfo);
}
