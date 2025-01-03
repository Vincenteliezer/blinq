"use client";
import { GeneralInfo } from "@/types/Generalnformation";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UseAllInfo() {
  const [allInformation, setAllInformation] = useState<GeneralInfo | null>(
    null
  );

  useEffect(() => {
    const fetchAllGeneralInfoData = async () => {
      try {
        const response = await axios.get(`/api/all-info`);
        const data = response.data.data;
        setAllInformation(data);
      } catch (error) {
        console.error("Failed to fetch CPU information:", error);
      }
    };

    fetchAllGeneralInfoData();
  }, []);

  return { allInformation };
}
