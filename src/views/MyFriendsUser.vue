<template>
<div class="container-fluid shadow rounded">
    <div class="row" style="background-color: darkseagreen;">
        <div class="col">
            <h1 class="text-center" style="color: white; font-variant: small-caps;">My Friends</h1>  
    <div class="w-100"><p></p></div>
    <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;" v-for="friend in friends" :key="friend.id">
        <ul class="list-unstyled" style="padding-top: 5px;">
            <li> 

                    <h4>
                        {{friend.firstName}}
                        {{friend.lastName}}
                        <br>
                        <br>
                        <button class="btn btn-outline-success">
                            <router-link :to="`/Profile/${friend.id}`" class="nav-link">
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
import { GetFriendsUser } from "@/models/Friends.js";

export default {
    data: ()=> ({
        Globals: Globals,
        friends: []
    }),
    async mounted(){
        Globals.friend.id = this.$route.params.userid
        this.friends = await GetFriendsUser()
        // console.log(this.friends)
    }
}
</script>

<style>
</style>