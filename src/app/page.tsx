"use client";

import Audio from "@/components/audio";
import Battery from "@/components/battery";
import Bluetooth from "@/components/bluetooth";
import Disks from "@/components/disks";
import SidebarHeader from "@/components/elements/sidebar-header";
import GeneralInfo from "@/components/general-info";
import Graphics from "@/components/graphics";
import Memory from "@/components/memory";
import Network from "@/components/network";
import Observers from "@/components/observers";
import Printer from "@/components/printer";
import Processes from "@/components/processes";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Usb from "@/components/usb";
import Wifi from "@/components/wifi";
import UseAllInfo from "@/hooks/use-all-info";
import {
  BatteryCharging,
  Binoculars,
  BluetoothIcon,
  Cpu,
  EthernetPort,
  HardDrive,
  Headphones,
  MemoryStick,
  Microchip,
  PcCase,
  PrinterIcon,
  UsbIcon,
  WifiIcon,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const { allInformation, isLoading } = UseAllInfo();

  const [activeTab, setActiveTab] = useState("general");

  const handleViewChange = (tab: string) => {
    setActiveTab(tab);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
              <Cpu />
              General
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("battery")}
            >
              <BatteryCharging size={28} />
              Battery
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("memory")}
            >
              <MemoryStick size={28} />
              Memory
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("network")}
            >
              <EthernetPort size={28} />
              Network
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("graphics")}
            >
              <PcCase size={28} />
              Graphics
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("audio")}
            >
              <Headphones size={28} />
              Audio
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("processes")}
            >
              <Microchip size={28} />
              Processes
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("disks")}
            >
              <HardDrive size={28} />
              Disks
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("usb")}
            >
              <UsbIcon size={28} />
              USB
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("printer")}
            >
              <PrinterIcon size={28} />
              Printer
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("bluetooth")}
            >
              <BluetoothIcon size={28} />
              Bluetooth
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("wifi")}
            >
              <WifiIcon size={28} />
              Wifi
            </Button>
          </div>

          <div>
            <Button
              className="w-full flex justify-start"
              variant="ghost"
              onClick={() => handleViewChange("observers")}
            >
              <Binoculars size={28} />
              Observers
            </Button>
          </div>
        </div>
      </ScrollArea>
      <ScrollArea className="col-span-9 p-4">

        {activeTab === "general" && (
          <GeneralInfo allInformation={allInformation} />
        )}
        {activeTab === "battery" && <Battery allInformation={allInformation} />}
        {activeTab === "memory" && <Memory />}
        {activeTab === "network" && <Network />}
        {activeTab === "graphics" && <Graphics />}
        {activeTab === "audio" && <Audio />}
        {activeTab === "observers" && <Observers />}
        {activeTab === "wifi" && <Wifi />}
        {activeTab === "usb" && <Usb />}
        {activeTab === "printer" && <Printer />}
        {activeTab === "bluetooth" && <Bluetooth />}
        {activeTab === "processes" && <Processes />}
        {activeTab === "disks" && <Disks />}
      </ScrollArea>
    </main>
  );
}
