import { useData } from "@/customHooks/useData";

interface Exercise {
    "ejercicios": string,
    "series": number,
    "repeticiones": number,
}

interface Props {
    exercise: Exercise,
    i: number

}
export const ExerciseCard = ({ exercise, i }: Props) => {
    const { ejercicios, series, repeticiones } = exercise
    const { userSelectedExercise, setUserSelectedExercise } = useData();

    const backgroundChange = (selectedExercise: number[], index: number) => {
      if (selectedExercise.includes(index)) return "bg-[#7076fe]";
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
        <div
          key={i}
          onClick={() => handleSelectedExercise(i)}
          className={`flex flex-col justify-evenly m-1 px-2 w-40 h-44 rounded-xl cursor-pointer shadow bg-[#4b556b] text-white`}
        >
          <p className="font-sans font-medium text-sm">{ejercicios}</p>
          <p>Series: {series}</p>
          <p>Repeticiones: {repeticiones}</p>
          <div className={`w-full h-1 rounded-lg transition ease-linear delay-200 ${backgroundChange(userSelectedExercise, i)}`}></div>
        </div>
    )
}

// #737E9D