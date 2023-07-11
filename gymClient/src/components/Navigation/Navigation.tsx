import { useData } from "@/customHooks/useData";
import { ArrowBackward } from "../Icons/Icons";

export const Navigation = () => {
  const { data, setData, selectedDay, setSelectedDay, setUserSelectedExercise } =
    useData();
  const entries = Object.entries(data);

  const handleSelectDay = (day: string) => {
    setSelectedDay(day === selectedDay ? "" : day);
    setUserSelectedExercise([]);
  };

  return (
    <div className="flex items-center justify-center fixed bottom-0 left-0 w-screen flex shadow-2xl bg-[#161320] p-2 z-10">
      {entries.map(([day], i) => (
        <div
          key={i}
          className={`navbar_icon ${selectedDay === day && "bg-[#161320] rounded-lg text-[#f8ad64]"}`}
          onClick={() => handleSelectDay(day)}
        >
          {day}
        </div>
      ))}
      <button onClick={() => setData({})}><ArrowBackward/></button>
    </div>
  );
};
