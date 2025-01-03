"use client";

import Battery from "@/components/battery";
import SidebarHeader from "@/components/elements/sidebar-header";
import GeneralInfo from "@/components/general-info";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import UseAllInfo from "@/hooks/use-all-info";
import { useState } from "react";

export default function Home() {
  const { allInformation } = UseAllInfo();  

  const [activeTab, setActiveTab] = useState("general");

  const handleViewChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main className="h-screen grid grid-cols-12">
      <ScrollArea className="col-span-3 border-r-2">
        <SidebarHeader allInformation={allInformation} />

        <div className=" p-4 m-2">
          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("general")}
            >
              General
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("battery")}
            >
              Battery
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("storage")}
            >
              Memory
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("network")}
            >
              Network
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("graphics")}
            >
              Graphics
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("audio")}
            >
              Audio
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("processes")}
            >
              Processes
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("disks")}
            >
              Disks
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("usb")}
            >
              USB
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("printer")}
            >
              Printer
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("bluetooth")}
            >
              Bluetooth
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("wifi")}
            >
              Wifi
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("observers")}
            >
              Observers
            </Button>
          </div>
        </div>
      </ScrollArea>
      <ScrollArea className="col-span-9 p-4">
        {activeTab === "general" && (
          <GeneralInfo allInformation={allInformation} />
        )}
        {activeTab === "battery" && <Battery />}
      </ScrollArea>
    </main>
  );
}
