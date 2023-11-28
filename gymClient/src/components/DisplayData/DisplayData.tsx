import { useData } from "@/customHooks/useData";
import { DayExercises } from "../DayExercises/DayExercises";
import { Navigation } from "../Navigation/Navigation";
import { useEffect, useState } from "react";

export const DisplayData = () => {
  const { data, selectedDay } = useData();

  return (
    <div className="flex flex-col items-center justify-center max-w-[800px]  mx-auto ">
      <Navigation/>
      <div className="flex flex-wrap justify-center py-4 mt-2">
          {selectedDay && <DayExercises routines={data[selectedDay]} />}
      </div>
    </div>
  );
};
