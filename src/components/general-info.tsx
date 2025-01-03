import React from "react";
import { Card } from "./ui/card";
import type { GeneralInfo } from "@/types/Generalnformation";

interface SidebarHeaderProps {
  allInformation: GeneralInfo | null;
}

export default function GeneralInfo({ allInformation }: SidebarHeaderProps) {
  console.log(allInformation);

  return (
    <div className="space-y-4 mt-10">
      <h1 className="text-2xl font-medium">General Information</h1>
      <h1 className="text-2xl font-medium">{}</h1>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <p className="text-xl font-medium">System Information</p>
          <div className="mt-4">
            <p>Manufacturer: {allInformation?.system?.manufacturer}</p>
            <p>Version: {allInformation?.system?.version}</p>
          </div>
        </Card>

        <Card className="p-4">
          <p className="text-xl font-medium">OS Information</p>
          <div className="mt-4">
            <p>Platform: {allInformation?.os.platform}</p>
            <p>Release: {allInformation?.os?.release}</p>
          </div>
        </Card>
      </div>

      <Card className="p-4">
        <p className="text-xl font-medium">CPU Information</p>
        <p>Manufacturer: {allInformation?.cpu?.brand}</p>
        <p>Cores: {allInformation?.cpu?.cores}</p>
        <p>efficiencyCores: {allInformation?.cpu?.efficiencyCores}</p>
        <p>Family: {allInformation?.cpu?.family}</p>
        <p>Governor: {allInformation?.cpu?.governor}</p>
        <p>Manufacturer: {allInformation?.cpu?.manufacturer}</p>
        <p>Model: {allInformation?.cpu?.model}</p>
        <p>PerformanceCores: {allInformation?.cpu?.performanceCores}</p>
        <p>PhysicalCores: {allInformation?.cpu?.physicalCores}</p>
        <p>Processors: {allInformation?.cpu?.processors}</p>
        <p>Revision: {allInformation?.cpu?.revision}</p>
        <p>Socket: {allInformation?.cpu?.socket}</p>
        <p>Speed: {allInformation?.cpu?.speed}</p>
        <p>Speedmax: {allInformation?.cpu?.speedmax}</p>
        <p>Speedmin: {allInformation?.cpu?.speedmin}</p>
        <p>Stepping: {allInformation?.cpu?.stepping}</p>
        <p>Vendor: {allInformation?.cpu?.vendor}</p>
        <p>Voltage: {allInformation?.cpu?.voltage}</p>
      </Card>
    </div>
  );
}
