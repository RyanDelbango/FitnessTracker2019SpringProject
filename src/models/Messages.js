import { api } from "./api";

export async function GetMessages(){
    const  x  = await api("Messages")
    return x;
}