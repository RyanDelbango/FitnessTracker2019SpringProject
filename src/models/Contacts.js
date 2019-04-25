import { api, Globals } from "./api";

export async function GetContacts(){
    const  x  = await api("Contacts")
    return x;
}

export async function GetContactUser(){
    const  x  = await api(`contacts/${Globals.contact.id}`)
    return x;
}

export async function GetContactsFriends(){
    const  x  = await api(`contacts/friends/${Globals.user.id}`)
    return x;
}

export async function EditContact(data){
    const x = await api(`contacts/edit/${Globals.user.id}`, data)
    return x;
}