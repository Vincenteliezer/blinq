// app/api/system-info/route.ts
import { cpu, osInfo, system } from "systeminformation";
import { NextResponse } from "next/server";

export async function GET() {
  const systemInfo = {
    cpu: await cpu(),
    system: await system(),
    osInfo: await osInfo(),
  };
  return NextResponse.json(systemInfo);
}
