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
    <div className="flex items-center justify-evenly w-screen mt-6 max-w-[600px]">
      {entries.map(([day], i) => (
        <div
          key={i}
          className={`navbar_icon ${selectedDay === day && "bg-[#7076fe] text-white rounded-lg"}`}
          onClick={() => handleSelectDay(day)}
        >
          {day}
        </div>
      ))}
      <button onClick={() => {
        setData(null)
        setSelectedDay('')
        }}>
          <ArrowBackward/>
          </button>
    </div>
  );
};


