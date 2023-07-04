import { useData } from "@/customHooks/useData";

export const DayExercises = ({ routines }: any) => {
  const { userSelectedExercise, setUserSelectedExercise } = useData();

  const backgroundChange = (selectedExercise: number[], index: number) => {
    if (selectedExercise.includes(index)) return "bg-green-200";
    else return 'bg-[#263141] text-white'
      // return "bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white";
  };

  const handleSelectedExercise = (index: number) => {
    return setUserSelectedExercise(
      userSelectedExercise.includes(index)
        ? userSelectedExercise.filter((inx: any) => inx !== index)
        : [...userSelectedExercise, index]
    );
  };

  return (
    <div className="flex flex-wrap justify-center py-4 m-4">
      {routines.map((exercise: any, index: number) => (
        <div
          key={index}
          onClick={() => handleSelectedExercise(index)}
          className={`flex flex-col justify-around m-1 px-2 w-36 h-40 rounded-xl cursor-pointer shadow ${backgroundChange(userSelectedExercise, index)}`}
        >
          <p>{exercise.ejercicios}</p>
          <p>Series: {exercise.series}</p>
          <p>Repeticiones: {exercise.repeticiones}</p>
          <div className="w-full bg-[#f8ad64] h-px"></div>
        </div>
      ))}
    </div>
  );
};
