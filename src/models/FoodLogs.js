import { api, Globals } from "./api";

export async function GetFoodLogs(){
    const  x  = await api("FoodLogs")
    return x;
}

export async function GetFoodLogsUser(){
    const  x  = await api(`FoodLogs/${Globals.profile.id}`)
    // console.log(x)
    return x;
}

export async function GetFoodLogsTotC(){
    const  x  = await api(`FoodLogs/totalcalories/${Globals.user.id}`)
    // console.log(x)
    return x;
}

export async function CreateFoodLog(data){
    const x = await api(`FoodLogs/create/${Globals.user.id}`, data)
    return x;
}
