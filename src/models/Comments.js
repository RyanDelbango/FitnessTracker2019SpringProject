import { api, Globals } from "./api";

export async function GetFoodComments(){
    const  x  = await api("comments/food")
    return x
}

export async function GetFoodCommentsLog(){
    const  x  = await api(`comments/food/${Globals.log.id}`)
    return x;
}

export async function GetExerciseComments(){
    const  x  = await api("comments/exercise")
    return x
}

export async function GetExerciseCommentsLog(){
    const  x  = await api(`comments/exercise/${Globals.log.id}`)
    return x;
}

export async function CreateExerciseComment(data){
    const x = await api(`comments/exercise/${Globals.user.id}/${Globals.log.id}`, data)
    return x;
}
