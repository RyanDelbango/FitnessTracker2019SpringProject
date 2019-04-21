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
