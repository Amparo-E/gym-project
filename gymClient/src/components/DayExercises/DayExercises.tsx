import { ExerciseCard } from "../ExerciseCard/ExerciseCard";
export const DayExercises = ({ routines }: any) => {
  return (  
    <>
      {routines.map((exercise: any, i: number) => (
         <ExerciseCard exercise={exercise} i={i}/>
      ))}
    </>
  );
};
