import { api } from "./api";

export async function GetExerciseLogs(){
    const  x  = await api("ExerciseLogs")
    return x;
}