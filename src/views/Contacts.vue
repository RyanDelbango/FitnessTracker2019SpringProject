<template>
<div class="container-fluid shadow rounded">
    <div class="row" style="background-color: darkseagreen;">
        <div class="col">
            <h1 class="text-center" style="color: white; font-variant: small-caps;">Contact Information</h1>  
            <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;">
                <router-link :to="`Contacts/${Globals.user.id}`" class="nav-link">
                    View My Contact Information
                </router-link>
            </div>
            <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;">
                <router-link :to="`Contacts/Edit/${Globals.user.id}`" class="nav-link">
                    Edit My Contact Information
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
                            <router-link :to="`Contacts/${contact.id}`" class="nav-link">
                                Go to Contact Information
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
import { GetContacts } from "@/models/Contacts.js";

export default {
    data: ()=> ({
        Globals: Globals,
        contacts: []
    }),
    async mounted(){
        this.contacts = await GetContacts()
    }
}
</script>

<style>
</style>