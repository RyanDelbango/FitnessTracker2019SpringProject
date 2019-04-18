import { api, Globals } from "./api";

export async function GetFriends(){
    const  x  = await api("users")
    return x;
}

export async function Register(data){
    // console.log(data)
    const  x  = await api("users/register", data)
    // console.log(x)
    return x;
} 

export async function Login(data){
    const x = await api("users/login", data)
    Globals.user = x.user;
    return x;
}

