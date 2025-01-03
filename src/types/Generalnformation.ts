export interface GeneralInfo {
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
    speedmax: number;
    speedmin: string;
    stepping: string;
    vendor: string;
    voltage: string;
  };
  os: {
    platform: string;
    release: string;
  };
  battery: {
    acConnected: boolean;
    capacityUnit: string;
    currentCapacity: number;
    cycleCount: number;
    designedCapacity: number;
    hasBattery: boolean;
    isCharging: boolean;
    manufacturer: string;
    maxCapacity: number;
    model: string;
    percent: number;
    serial: string;
    timeRemaining: number;
    type: string;
    voltage: number;
  };
  mem: {
    active: number;
    available: number;
    free: number;
    total: number;
    buffers: number;
    buffcache: number;
    swaptotal: number;
    swapused: number;
    swapfree: number;
    slab: number;
    used: number;
    writeback: number;
    cached: number;
    dirty: number;
  };
}
