import { api, Globals } from "./api";

export async function GetProfiles(){
    const  x  = await api("profiles")
    return x;
}

export async function GetProfileUser(){
    const  x  = await api(`profiles/${Globals.user.id}`)
    return x;
}

export async function GetProfileOtherUser(){
    const  x  = await api(`profiles/${Globals.profile.id}`)
    // console.log(x)
    return x;
}