"use client";

import { DataContext } from "@/customHooks/useData";
import React, { useState } from "react";

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState({});
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [userSelectedExercise, setUserSelectedExercise] = useState<number[]>(
    []
  );
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        selectedDay,
        setSelectedDay,
        userSelectedExercise,
        setUserSelectedExercise,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
