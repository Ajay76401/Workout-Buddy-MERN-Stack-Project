import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";


export const useWorkoutsContext = () =>{
    const context = useContext(WorkoutContext)
    
    if(!context){
        throw Error("useWorkoutContext Must be Used in WorkoutContext Provider")
    }
    return context

}