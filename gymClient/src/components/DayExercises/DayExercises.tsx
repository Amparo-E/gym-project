import { ExerciseCard } from "../ExerciseCard/ExerciseCard";
export const DayExercises = ({ routines }: any) => {
  return (  
    <div className="flex flex-wrap justify-center py-4 mt-2">
      {routines.map((exercise: any, i: number) => (
         <ExerciseCard exercise={exercise} i={i}/>
        
      ))}
    </div>
  );
};
