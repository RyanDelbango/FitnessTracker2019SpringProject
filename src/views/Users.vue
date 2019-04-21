<template>
<div class="container-fluid shadow rounded">
    <div class="row" style="background-color: darkseagreen;">
        <div class="col">
            <h1 class="text-center" style="color: white; font-variant: small-caps;">Users</h1>  
    <div class="w-100"><p></p></div>
    <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;" v-for="user in users" :key="user.id">
        <router-link to="/About" class="nav-link">
        <ul class="list-unstyled" style="padding-top: 5px;">
            <li> 

                    <h4>
                        {{user.id}}
                        <br>
                        {{user.firstName}} {{user.lastName}}
                    </h4>
            </li>
        </ul>
        </router-link>
    </div>
    </div>
    </div>
</div>
</template>

<script>
import { Globals } from "@/models/api";
import { GetUsers } from "@/models/users.js";
export default {
    data: ()=> ({
        Globals: Globals,
        users: []
    }),
    async mounted(){
        this.users = await GetUsers()
    }
}
</script>

<style>
</style>