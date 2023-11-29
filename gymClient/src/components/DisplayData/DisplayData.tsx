import { useData } from "@/customHooks/useData";
import { DayExercises } from "../DayExercises/DayExercises";
import { Navigation } from "../Navigation/Navigation";
import { CardTips } from "../CardTips/CardTips";


export const DisplayData = () => {
  const { data, selectedDay } = useData();

  return (
    <div className="h-screen mx-auto">
    <h2 className="text-4xl font-medium pl-12 pt-16">Select your workout</h2>
      <div className="flex flex-col items-center h-full pt-20">
        <div className="flex justify-center mx-10 ">
            {selectedDay && <DayExercises routines={data[selectedDay]} />}
            <CardTips/>
        </div>
        <div className="pt-40">
          <Navigation/>
        </div>
      </div>
    </div>
  );
};
