<template>
<div class="container-fluid shadow rounded">
    <div class="row" style="background-color: darkseagreen;">
        <div class="col">
            <h1 class="text-center" style="color: white; font-variant: small-caps;">Profiles</h1>  
    <div class="w-100"><p></p></div>
    <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;" v-for="profile in profiles" :key="profile.id">
        
        <ul class="list-unstyled" style="padding-top: 5px;">
            <li> 

                    <h4>
                        <button @click="par">
                        <router-link :to="`Profile/${profile.id}`" class="nav-link">
                        {{profile.id}}
                        </router-link>
                        </button>
                        <br>
                        {{profile.firstName}}
                        {{profile.lastName}}
                        <br>
                        Email: {{profile.email}} 
                        <br>
                        Bio: {{profile.bio}}
                        <br>
                        Interests: {{profile.interests}}
                        <br>
                        Favorite Quotes: "{{profile.quotes}}"
                        <br>
                        Heroes: {{profile.heroes}}
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
import { GetProfiles } from "@/models/Profiles.js";

export default {
    data: ()=> ({
        Globals: Globals,
        profiles: []
    }),
    async mounted(){
        const x = await GetProfiles()
        this.profiles = x
    },
    methods: {
        par: function(){
            Globals.profile = this.profiles[3]
        }
    }
}
</script>

<style>
</style>