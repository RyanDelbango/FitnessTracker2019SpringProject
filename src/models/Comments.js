import { api } from "./api";

export async function GetFoodComments(){
    const  x  = await api("comments/food")
    return x
}

export async function GetExerciseComments(){
    const  x  = await api("comments/exercise")
    return x
}
