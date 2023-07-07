import { useData } from "@/customHooks/useData";
import { DayExercises } from "../DayExercises/DayExercises";
import { Navigation } from "../Navigation/Navigation";

export const DisplayData = () => {
  const { data, selectedDay } = useData();

  return (
    <>
      {selectedDay && <DayExercises routines={data[selectedDay]} />}
      <Navigation/>
    </>
  );
};
