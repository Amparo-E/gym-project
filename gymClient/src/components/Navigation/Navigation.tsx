import { useData } from "@/customHooks/useData";
import { ArrowBackward } from "../Icons/Icons";

export const Navigation = () => {
  const { data, setData, selectedDay, setSelectedDay, setUserSelectedExercise } = useData();
  const entries = Object.entries(data);
  console.log(entries);
  

  const handleSelectDay = (day: string) => {
    setSelectedDay(day === selectedDay ? "" : day);
    setUserSelectedExercise([]);
  };

  return (
      <div className="flex items-center justify-evenly w-screen max-w-[600px] bg-orange-400 text-white py-3 mb-6 rounded-full mx-auto z-10 shadow-md">
        {entries.map(([day], i) => (
          <div key={i} className={`navbar_icon ${selectedDay === day ? "bg-orange-300 rounded-2xl -translate-y-1" : "bg-orange-500"}`} onClick={() => handleSelectDay(day)}>
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


