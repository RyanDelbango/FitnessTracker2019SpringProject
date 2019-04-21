import { api, Globals } from "./api";

export async function GetFriends(){
    const  x  = await api("friends")
    return x;
}

export async function GetFriendsUser(){
    const  x  = await api(`friends/${Globals.friend.id}`)
    return x;
}