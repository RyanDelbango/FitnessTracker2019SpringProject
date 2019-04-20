import { api } from "./api";

export async function GetFriends(){
    const  x  = await api("friends")
    return x;
}