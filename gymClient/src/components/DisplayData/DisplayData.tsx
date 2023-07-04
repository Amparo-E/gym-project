import { useData } from "@/customHooks/useData";
import { DayExercises } from "../DayExercises/DayExercises";

export const DisplayData = () => {
  const {
    data,
    selectedDay,
    setSelectedDay,
    setUserSelectedExercise,
  } = useData();
  const entries = Object.entries(data);

  const handleSelectDay = (day: string) => {
    setSelectedDay(day === selectedDay ? "" : day);
    setUserSelectedExercise([])
  }

  return (
    <div className="min-h-screen max-w-screen overflow-hidden bg-[#161320] pb-16">
      {selectedDay && <DayExercises routines={data[selectedDay]} />}
      <div className="fixed bottom-0 left-0 w-screen flex shadow rounded-lg bg-[#263142] z-10">
        {entries.map(([day], i) => (
          <div
            key={i}
            className={`navbar_icon ${selectedDay === day && "bg-[#161320] rounded-lg text-white"}`}
            onClick={() => handleSelectDay(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};
