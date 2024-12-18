import { use } from "react";
import { cpu } from "systeminformation";

export default function CpuInfo() {

  async function fetchCpuData() {
    try {
      return await cpu();
    } catch (error) {
      console.error("Failed to fetch CPU information:", error);
      return null;
    }
  }

  const cpuData = use(fetchCpuData()); 

  console.log("cpu data", cpuData);

  if (!cpuData) {
    return <p>Failed to load CPU data.</p>;
  }

  return (
    <section>
      <ul>
        <pre>{JSON.stringify(cpuData, null, 2)}</pre>
      </ul>
    </section>
  );
}
