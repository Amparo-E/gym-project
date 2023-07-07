import { useData } from "@/customHooks/useData";

export const Navigation = () => {
  const { data, selectedDay, setSelectedDay, setUserSelectedExercise } =
    useData();
  const entries = Object.entries(data);

  const handleSelectDay = (day: string) => {
    setSelectedDay(day === selectedDay ? "" : day);
    setUserSelectedExercise([]);
  };

  return (
    <div className="fixed bottom-0 left-0 w-screen flex shadow bg-[#263141] z-10">
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
  );
};
