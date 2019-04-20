import { api } from "./api";

export async function GetProfiles(){
    const  x  = await api("profiles")
    return x;
}
