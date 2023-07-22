import { useData } from "@/customHooks/useData";
import { DayExercises } from "../DayExercises/DayExercises";
import { Navigation } from "../Navigation/Navigation";
import { useEffect, useState } from "react";

export const DisplayData = () => {
  const { data, selectedDay } = useData();

  return (
    <>
      <Navigation/>
      {selectedDay && <DayExercises routines={data[selectedDay]} />}
    </>
  );
};
