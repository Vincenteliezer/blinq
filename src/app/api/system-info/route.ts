import { cpu, osInfo, system, time } from "systeminformation";
import { NextResponse } from "next/server";

export async function GET() {
  const systemInfo = {
    cpu: await cpu(),
    system: await system(),
    osInfo: await osInfo(),
    time: await time(),
  };
  return NextResponse.json(systemInfo);
}
