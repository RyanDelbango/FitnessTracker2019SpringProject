import { api, Globals } from "./api";

export async function GetMessages(){
    const  x  = await api("Messages")
    return x;
}

export async function GetMessagesUser(){
    const  x  = await api(`messages/${Globals.user.id}`)
    return x;
}
