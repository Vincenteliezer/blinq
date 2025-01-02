import React from "react";
import { Card } from "../ui/card";

interface GeneralInfo {
  system: {
    manufacturer: string;
    version: string;
  };
}

interface SidebarHeaderProps {
  generalInformation: GeneralInfo | null;
}

export default function SidebarHeader({
  generalInformation,
}: SidebarHeaderProps) {
  return (
    <>
      <Card className="p-4 rounded-none border-x-0 shadow-none">
        <p className="font-bold text-xl tracking-widest">Blinq</p>
      </Card>

      <div className="p-4">
        <p className="tracking-wider text-2xl">
          {generalInformation?.system?.manufacturer}
        </p>
        <p className="text-sm text-muted-foreground">
          {generalInformation?.system?.version}
        </p>
      </div>
    </>
  );
}
