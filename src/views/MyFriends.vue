<template>
<div class="container shadow rounded " style="width: 30rem; border:1px solid darkseagreen">
    <div class="row" style="background-color: darkseagreen">
        <div class="col">
            <h1 class="text-center" style="color: white; font-variant: small-caps;">{{Globals.user.firstName}}'s Friends</h1>  
    <div class="w-100"><p></p></div>
    <div class="card mb-3 col mx-auto shadow" style="width: 18rem; text-align: center; background-color: white; opacity: .9;" v-for="friend in friends" :key="friend.id">
        <ul class="list-inline" style="padding-top: 18px">
            <li class="list-inline-item" ><h5 style="color: seagreen;">{{friend.firstName}} {{friend.lastName}}</h5></li>
        </ul>
    </div>
    </div>
    </div>
</div>
</template>

<script>
import { Globals } from "@/models/api";
import { GetFriends } from "@/models/users.js";
GetFriends();
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