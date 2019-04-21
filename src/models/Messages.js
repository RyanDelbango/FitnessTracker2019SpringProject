import { api, Globals } from "./api";

export async function GetMessages(){
    const  x  = await api("Messages")
    return x;
}

export async function GetMessagesUser(){
    const  x  = await api(`messages/${Globals.user.id}`)
    return x;
}

export async function SendMessage(data){
    const x = await api(`messages/sendmessage/${Globals.user.id}/${Globals.profile.id}`, data)
    return x;
}
