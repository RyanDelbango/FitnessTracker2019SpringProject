<template>
<div class="container-fluid shadow rounded">
    <div class="row" style="background-color: darkseagreen;">
        <div class="col">
            <h1 class="text-center" style="color: white; font-variant: small-caps;">Friends</h1> 
            <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;">
                <router-link :to="`MyFriends/${Globals.user.id}`" class="nav-link">
                    View All Friends
                </router-link>
            </div> 
            <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;">
                <router-link :to="`MyFriends/search/name/${Globals.user.id}`" class="nav-link">
                    Search Friends
                </router-link>
            </div> 
    <div class="w-100"><p></p></div>
    <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;" v-for="contact in contacts" :key="contact.id">
        <ul class="list-unstyled" style="padding-top: 5px;">
            <li> 

                    <h4>
                            {{contact.firstName}}
                            {{contact.lastName}}
                        <br>
                        Email: {{contact.email}} 
                        <br>
                        Phone Number: {{contact.phone}}
                        <br>
                        Country: {{contact.country}}
                        <br>
                        Address: {{contact.address}}
                        <br>
                        City: {{contact.city}}
                        <br>
                        State: {{contact.state}}
                        <br>
                        Zip Code: {{contact.zip}}
                        <br>
                        <br>
                        <button class="btn btn-outline-success">
                            <router-link :to="`Profile/${contact.id}`" class="nav-link">
                                Go to Profile
                            </router-link>
                        </button>
                    </h4>
            </li>
        </ul>
    </div>
    </div>
    </div>
</div>
</template>

<script>
import { Globals } from "@/models/api";
import { GetFriends } from "@/models/Friends.js";
import { GetContactsFriends } from "@/models/Contacts.js";

export default {
    data: ()=> ({
        Globals: Globals,
        friends: [],
        contacts: []
    }),
    async mounted(){
        this.friends = await GetFriends()
        this.contacts = await GetContactsFriends()
        // console.log(this.contacts)
    }
}
</script>

<style>
</style>