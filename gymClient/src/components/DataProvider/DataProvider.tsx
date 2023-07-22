"use client";

import { DataContext } from "@/customHooks/useData";
import React, { useState, useEffect, use } from "react";

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState(null);
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [userSelectedExercise, setUserSelectedExercise] = useState<number[]>([]);

  useEffect(() => {
    const localData = window.localStorage.getItem('user')
    localData && setData(JSON.parse(localData))
  }, [])

  useEffect(() => {
    window.localStorage.setItem(
      'user',
      JSON.stringify(data)
    )
  }, [data])

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
