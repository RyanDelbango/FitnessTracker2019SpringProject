import { api, Globals } from "./api";

export async function GetProfiles(){
    const  x  = await api("profiles")
    return x;
}

export async function GetProfileUser(){
    const  x  = await api(`profiles/${Globals.profile.id}`)
    // console.log(x)
    return x;
}

export async function EditProfile(data){
    const x = await api(`profiles/edit/${Globals.user.id}`, data)
    return x;
}