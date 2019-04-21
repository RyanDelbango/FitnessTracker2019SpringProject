import { api, Globals } from "./api";

export async function GetExerciseLogs(){
    const  x  = await api("ExerciseLogs")
    return x;
}

export async function GetExerciseLogsUser(){
    const  x  = await api(`ExerciseLogs/${Globals.profile.id}`)
     console.log(x)
    return x;
}