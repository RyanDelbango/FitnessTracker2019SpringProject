<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top" style="background-color: seagreen">
        <router-link class="navbar-brand" to="/" >
            <img alt="Vue logo" src="https://image.flaticon.com/icons/png/128/1599/1599270.png" height="30">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/About" active-class="active">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Contacts" active-class="active">Contacts</router-link>
                </li>
                <!-- <li class="nav-item">
                    <router-link class="nav-link" to="/Contacts" active-class="active">Contacts</router-link>
                </li> -->
                <li class="nav-item">
                    <router-link class="nav-link" to="/Profile/user" active-class="active">Profile</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/ExerciseLogs" active-class="active">Exercise</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/FoodLogs" active-class="active">Food</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Users" active-class="active">Users</router-link>
                </li>                
                <li class="nav-item">
                    <router-link class="nav-link" to="/MyFriends" active-class="active">Friends</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Messages" active-class="active">Messages</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/ExerciseComments" active-class="active">EComments</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/FoodComments" active-class="active">FComments</router-link>
                </li>
            </ul>
            <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto" v-if="!Globals.user">
                <li class="nav-item ">
                    <router-link to="/Login" class="nav-link" active-class="active" exact>Login</router-link>
                </li>
                <li class="nav-item ">
                    <router-link to="/Register" class="nav-link">Register</router-link>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto list-unstyled" v-if="Globals.user"><li style="color: white">Welcome {{Globals.user.firstName}} {{Globals.user.lastName}}</li></ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { Globals } from "@/models/api";
export default {
    data: ()=>({
        Globals: Globals
    }),
    methods: {
        
    }
}
</script>

<style>
</style>