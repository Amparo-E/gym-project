import { useData } from "@/customHooks/useData";
import { DayExercises } from "../DayExercises/DayExercises";

export const DisplayData = () => {
  const { data, selectedDay, setSelectedDay } = useData();
  const entries = Object.entries(data);

  const handleSelectDay = (day: string) => setSelectedDay(day === selectedDay ? "" : day);

  return (
    <div className="min-h-screen">
      <div className="fixed bottom-0 left-0 w-screen h-16 flex bg-gray-900 text-white shadow">
        {entries.map(([day], i) => (
          <div key={i } className={`navbar_icon ${ selectedDay === day && 'bg-green-800 rounded-xl text-white'}`} onClick={() => handleSelectDay(day)}>
          {day}
        </div>
        ))}
      </div>
      {selectedDay && <DayExercises routines={data[selectedDay]} />}
    </div>

  );
};
