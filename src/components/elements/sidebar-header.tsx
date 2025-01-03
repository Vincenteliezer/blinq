import React from "react";
import { Card } from "../ui/card";
import { GeneralInfo } from "../../types/Generalnformation";

interface SidebarHeaderProps {
  allInformation: GeneralInfo | null;
}

export default function SidebarHeader({ allInformation }: SidebarHeaderProps) {
  return (
    <>
      <Card className="p-4 rounded-none border-x-0 shadow-none">
        <p className="font-bold text-xl tracking-widest">Blinq</p>
      </Card>

      <div className="p-4">
        <p className="tracking-wider text-2xl">{allInformation?.system.manufacturer}</p>
        <p className="text-sm text-muted-foreground">
          {allInformation?.system.version}
        </p>
      </div>
    </>
  );
}
