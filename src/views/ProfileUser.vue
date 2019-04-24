<template>
<div class="container-fluid shadow rounded">
    <div class="row" style="background-color: darkseagreen;">
        <div class="col">
            <h1 class="text-center" style="color: white; font-variant: small-caps;">Profile</h1>  
    <div class="w-100"><p></p></div>
    <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;" v-for="profile in profiles" :key="profile.id">
        <ul class="list-unstyled" style="padding-top: 5px;">
            <li> 

                    <h4>
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
                        <br>
                        <br>
                        <button class="btn btn-outline-success">
                            <router-link :to="`/MyFriends/${Globals.user.id}/${Globals.friend.id}`" class="nav-link">
                                Add Friend
                            </router-link>
                        </button>
                        <br>
                        <br>
                        <button class="btn btn-outline-success">
                            <router-link :to="`/Messages/${Globals.user.id}/${Globals.profile.id}`" class="nav-link">
                                Send Message
                            </router-link>
                        </button>
                        <br>
                        <br>
                        <button class="btn btn-outline-success">
                            <router-link :to="`/ExerciseLogs/${Globals.profile.id}`" class="nav-link">
                                View Exercise Logs
                            </router-link>
                        </button>
                        <br>
                        <br>
                        <button class="btn btn-outline-success">
                            <router-link :to="`/FoodLogs/${Globals.profile.id}`" class="nav-link">
                                View Food Logs
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
import { GetProfileUser } from "@/models/Profiles.js";

export default {
    data: ()=> ({
        Globals: Globals,
        profiles: []
    }),
    async mounted(){
        Globals.profile.id = this.$route.params.userid
        Globals.friend.id = this.$route.params.userid
        this.profiles = await GetProfileUser()
    }
}
</script>

<style>
</style>