import { use } from "react";
import { versions } from "systeminformation";

export default function VersionsInfo() {
  async function fetchCpuData() {
    try {
      return await versions();
    } catch (error) {
      console.error("Failed to fetch CPU information:", error);
      return null;
    }
  }

  const versionsData = use(fetchCpuData());

  console.log("cpu data", versionsData);

  if (!versionsData) {
    return <p>Failed to load CPU data.</p>;
  }

  return (
    <section>
      <pre className="flex flex-col">{JSON.stringify(versionsData, null, 2)}</pre>
    </section>
  );
}
