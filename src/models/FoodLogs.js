import { api } from "./api";

export async function GetFoodLogs(){
    const  x  = await api("FoodLogs")
    return x;
}