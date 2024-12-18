import { use } from "react";
import { battery } from "systeminformation";

export default function BatteryInfo() {
  async function fetchBatteryData() {
    try {
      return await battery();
    } catch (error) {
      console.error("Failed to fetch battery information:", error);
      return null;
    }
  }

  const batteryData = use(fetchBatteryData());

  console.log("battery data", batteryData);

  if (!batteryData) {
    return <p>Failed to load CPU data.</p>;
  }

  return (
    <section>
      <ul>
        <pre>{JSON.stringify(batteryData, null, 2)}</pre>
      </ul>
    </section>
  );
}
