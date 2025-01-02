import axios from "axios";
import { useEffect, useState } from "react";

interface SystemInfo {
  manufacturer: string;
  version: string;
}
interface GeneralInfo {
  system: SystemInfo;
}

export default function useGeneralInfo() {
  const [generalInformation, setGeneralInformation] = useState<GeneralInfo | null>(null);

  useEffect(() => {
    const fetchSystemData = async () => {
      try {
        const response = await axios.get(`/api/system-info`);
        const data = response.data;
        setGeneralInformation(data);
      } catch (error) {
        console.error("Failed to fetch CPU information:", error);
      }
    };

    fetchSystemData();
  }, []);

  return { generalInformation };
}
