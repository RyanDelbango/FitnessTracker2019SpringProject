<template>
<div class="container-fluid shadow rounded">
    <div class="row" style="background-color: darkseagreen;">
        <div class="col">
            <h1 class="text-center" style="color: white; font-variant: small-caps;">Friendships</h1> 
            <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;">
                <router-link :to="`MyFriends/${Globals.user.id}`" class="nav-link">
                    View My Friends
                </router-link>
            </div> 
    <div class="w-100"><p></p></div>
    <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;" v-for="friend in friends" :key="friend.id">
        <ul class="list-unstyled" style="padding-top: 5px;">
            <li> 

                    <h4>
                        User 1: "{{friend.id}}"
                        User 2: "{{friend.friend_id}}"
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
export default {
    data: ()=> ({
        Globals: Globals,
        friends: []
    }),
    async mounted(){
        this.friends = await GetFriends()
    }
}
</script>

<style>
</style>