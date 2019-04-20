import { api } from "./api";

export async function GetContacts(){
    const  x  = await api("Contacts")
    return x;
}