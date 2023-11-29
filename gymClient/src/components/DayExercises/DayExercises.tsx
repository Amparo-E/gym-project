import { ExerciseCard } from "../ExerciseCard/ExerciseCard";
export const DayExercises = ({ routines }: any) => {
  return (  
    <div className="flex flex-wrap">
      {routines.map((exercise: any, i: number) => (
         <ExerciseCard exercise={exercise} i={i}/>
      ))}
    </div>
  );
};
