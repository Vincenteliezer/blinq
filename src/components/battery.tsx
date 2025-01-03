import { GeneralInfo } from "@/types/Generalnformation";
import React from "react";
import { Card } from "./ui/card";

interface BatteryProps {
  allInformation: GeneralInfo | null;
}

export default function Battery({ allInformation }: BatteryProps) {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-medium">Battery Information</h1>
      <div className="mt-4">
        <Card className="p-4 space-y-2">
          <p>Manufacturer: {allInformation?.battery?.manufacturer}</p>
          <p>Model: {allInformation?.battery?.model}</p>
          <p>Serial: {allInformation?.battery?.serial}</p>
          <p>
            Ac connected:{" "}
            {allInformation?.battery?.acConnected === true ? "Yes" : "No"}
          </p>
          <p>Capacity unit: {allInformation?.battery?.capacityUnit}</p>
          <p>Current capacity: {allInformation?.battery?.currentCapacity}</p>
          <p>Design capacity: {allInformation?.battery?.designedCapacity}</p>
          <p>
            Has battery:{" "}
            {allInformation?.battery?.hasBattery === true ? "Yes" : "No"}
          </p>
          <p>
            Is charging:{" "}
            {allInformation?.battery?.isCharging === true ? "Yes" : "No"}
          </p>
          <p>Max capacity: {allInformation?.battery?.maxCapacity}</p>
          <p>Percent: {allInformation?.battery?.percent}</p>
          <p>Time remaining: {allInformation?.battery?.timeRemaining}</p>
          <p>Type: {allInformation?.battery?.type}</p>
          <p>Voltage: {allInformation?.battery?.voltage}</p>
        </Card>
      </div>
    </div>
  );
}
