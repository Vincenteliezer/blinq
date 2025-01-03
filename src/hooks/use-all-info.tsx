"use client";
import { GeneralInfo } from "@/types/Generalnformation";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UseAllInfo() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [allInformation, setAllInformation] = useState<GeneralInfo | null>(
    null
  );

  useEffect(() => {
    const fetchAllGeneralInfoData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`/api/all-info`);
        const data = response.data.data;
        setAllInformation(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch CPU information:", error);
        setIsLoading(false);
      }
    };

    fetchAllGeneralInfoData();
  }, []);

  return { allInformation, isLoading };
}
