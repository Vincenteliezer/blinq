import React from "react";
import { Card } from "./ui/card";

interface GeneralInfo {
  system: {
    manufacturer: string;
    version: string;
  };
  cpu: {
    brand: string;
    cores: number;
    efficiencyCores: number;
    family: string;
    governor: string;
    manufacturer: string;
    model: string;
    performanceCores: number;
    physicalCores: number;
    processors: number;
    revision: string;
    socket: string;
    speed: string;
    speedmax: string;
    speedmin: string;
    stepping: string;
    vendor: string;
    voltage: string;
  };
  osInfo: {
    platform: string;
    release: string;
  };
}

interface SidebarHeaderProps {
  generalInformation: GeneralInfo | null;
}

export default function GeneralInfo({
  generalInformation,
}: SidebarHeaderProps) {
  return (
    <div className="space-y-4 mt-10">
      <h1 className="text-2xl font-medium">General Information</h1>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <p className="text-xl font-medium">System Information</p>
          <div className="mt-4">
            <p>Manufacturer: {generalInformation?.system?.manufacturer}</p>
            <p>Version: {generalInformation?.system?.version}</p>
          </div>
        </Card>

        <Card className="p-4">
          <p className="text-xl font-medium">OS Information</p>
          <div className="mt-4">
            <p>Platform: {generalInformation?.osInfo?.platform}</p>
            <p>Release: {generalInformation?.osInfo?.release}</p>
          </div>
        </Card>
      </div>

      <Card className="p-4">
        <p className="text-xl font-medium">CPU Information</p>
        <p>Manufacturer: {generalInformation?.cpu?.brand}</p>
        <p>Cores: {generalInformation?.cpu?.cores}</p>
        <p>efficiencyCores: {generalInformation?.cpu?.efficiencyCores}</p>
        <p>Family: {generalInformation?.cpu?.family}</p>
        <p>Governor: {generalInformation?.cpu?.governor}</p>
        <p>Manufacturer: {generalInformation?.cpu?.manufacturer}</p>
        <p>Model: {generalInformation?.cpu?.model}</p>
        <p>PerformanceCores: {generalInformation?.cpu?.performanceCores}</p>
        <p>PhysicalCores: {generalInformation?.cpu?.physicalCores}</p>
        <p>Processors: {generalInformation?.cpu?.processors}</p>
        <p>Revision: {generalInformation?.cpu?.revision}</p>
        <p>Socket: {generalInformation?.cpu?.socket}</p>
        <p>Speed: {generalInformation?.cpu?.speed}</p>
        <p>Speedmax: {generalInformation?.cpu?.speedmax}</p>
        <p>Speedmin: {generalInformation?.cpu?.speedmin}</p>
        <p>Stepping: {generalInformation?.cpu?.stepping}</p>
        <p>Vendor: {generalInformation?.cpu?.vendor}</p>
        <p>Voltage: {generalInformation?.cpu?.voltage}</p>
      </Card>
    </div>
  );
}
