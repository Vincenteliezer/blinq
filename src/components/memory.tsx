import { use } from "react";
import { mem } from "systeminformation";

export default function MemoryInfo() {
  async function fetchCpuData() {
    try {
      return await mem();
    } catch (error) {
      console.error("Failed to fetch CPU information:", error);
      return null;
    }
  }

  const memoryData = use(fetchCpuData());

  console.log("cpu data", memoryData);

  if (!memoryData) {
    return <p>Failed to load CPU data.</p>;
  }

  return (
    <section>
      <pre className="flex flex-col">{JSON.stringify(memoryData, null, 2)}</pre>
    </section>
  );
}
