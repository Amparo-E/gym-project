import { useState } from "react";

export const DayExercises = ({ routines }: any) => {
  const [selectedExercise, setselectedExercise] = useState<number | null>(null)

  const backgroundChange = (selectedExercise: number, index: number) => {
    if(selectedExercise === index) return 'bg-green-200'
    else return 'bg-red-200'
  };

  return (
    <div className="flex flex-wrap border m-6 p-4">
      {routines.map((exercise: any, index: number) => (
        <div
          key={index}
          onClick={() => setselectedExercise(index)}
          className={`flex flex-col border justify-around border-black m-2 px-2 w-40 h-44 rounded-lg ${backgroundChange(selectedExercise!, index)}`}
        >
          <p>{exercise.ejercicios}</p>
          <p>Series: {exercise.series}</p>
          <p>Repeticiones: {exercise.repeticiones}</p>
        </div>
      ))}
    </div>
  );
};
