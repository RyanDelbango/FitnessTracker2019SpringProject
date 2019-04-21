import { api, Globals } from "./api";

export async function GetContacts(){
    const  x  = await api("Contacts")
    return x;
}

export async function GetContactUser(){
    const  x  = await api(`contacts/${Globals.contact.id}`)
    return x;
}
