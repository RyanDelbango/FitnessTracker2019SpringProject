<template>
<div class="container-fluid shadow rounded">
    <div class="row" style="background-color: darkseagreen;">
        <div class="col">
            <h1 class="text-center" style="color: white; font-variant: small-caps;">Profiles</h1>  
            <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;">
                <router-link :to="`Profile/${Globals.user.id}`" class="nav-link">
                    View My Profile
                </router-link>
            </div>
            <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;">
                <router-link :to="`Profile/Edit/${Globals.user.id}`" class="nav-link">
                    Edit My Profile
                </router-link>
            </div>
    <div class="w-100"><p></p></div>
    <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;" v-for="profile in profiles" :key="profile.id">
        
        <ul class="list-unstyled" style="padding-top: 5px;">
            <li> 
                    <h4>
                        {{profile.firstName}}
                        {{profile.lastName}}
                        <br>
                        Bio: {{profile.bio}}
                        <br>
                        Interests: {{profile.interests}}
                        <br>
                        Favorite Quotes: "{{profile.quotes}}"
                        <br>
                        Heroes: {{profile.heroes}}
                        <br>
                        <br>
                        <button class="btn btn-outline-success">
                            <router-link :to="`Profile/${profile.id}`" class="nav-link">
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
}
</script>

<style>
</style>