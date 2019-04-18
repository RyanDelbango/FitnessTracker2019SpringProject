const API_ROOT = process.env.API_ROOT || "http://localhost:3000/";

export const Globals = {
    user: null
}

export function login(){
    Globals.user = {  }
}

export async function api(url){
    const x = await fetch(API_ROOT + url);
    return await x.json();
}
