import { useData } from "@/customHooks/useData";

export const DayExercises = ({ routines }: any) => {
  const { userSelectedExercise, setUserSelectedExercise } = useData();

  const backgroundChange = (selectedExercise: number[], index: number) => {
    if (selectedExercise.includes(index)) return "bg-[#f8ad64]";
    else return 'bg-gray-200'
  };

  const handleSelectedExercise = (index: number) => {
    return setUserSelectedExercise(
      userSelectedExercise.includes(index)
        ? userSelectedExercise.filter((inx: any) => inx !== index)
        : [...userSelectedExercise, index]
    );
  };

  return (
    <div className="flex flex-wrap justify-center py-4 mt-4">
      {routines.map((exercise: any, index: number) => (
        <div
          key={index}
          onClick={() => handleSelectedExercise(index)}
          className={`flex flex-col justify-evenly m-1 px-2 w-40 h-44 rounded-xl cursor-pointer shadow bg-[#263141] text-white`}
        >
          <p className="font-sans font-medium text-sm">{exercise.ejercicios}</p>
          <p>Series: {exercise.series}</p>
          <p>Repeticiones: {exercise.repeticiones}</p>
          <div className={`w-full h-1 rounded-lg transition ease-linear delay-200 ${backgroundChange(userSelectedExercise, index)}`}></div>
        </div>
      ))}
    </div>
  );
};
