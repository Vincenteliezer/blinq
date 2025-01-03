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
    speedmax: string;
    speedmin: string;
    stepping: string;
    vendor: string;
    voltage: string;
  };
  os: {
    platform: string;
    release: string;
  };
}
