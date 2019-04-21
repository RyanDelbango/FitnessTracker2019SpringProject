<template>
<div class="container-fluid shadow rounded">
    <div class="row" style="background-color: darkseagreen;">
        <div class="col">
            <h1 class="text-center" style="color: white; font-variant: small-caps;">Exercise Logs</h1>  
            <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;">
                <router-link :to="`/ExerciseLogs/${Globals.user.id}`" class="nav-link">
                    View My Exercise Logs
                </router-link>
            </div>
            <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;">
                <router-link :to="`/ExerciseLogs/create/${Globals.user.id}`" class="nav-link">
                    Create an Exercise Log
                </router-link>
            </div>
    <div class="w-100"><p></p></div>
    <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;" v-for="exerciselog in exerciselogs" :key="exerciselog.id">
        <router-link to="/About" class="nav-link">
        <ul class="list-unstyled" style="padding-top: 5px;">
            <li> 

                    <h4>
                        Log ID: {{exerciselog.log_id}}
                        <br>
                        {{exerciselog.firstName}}
                        {{exerciselog.lastName}}
                        <br>
                        Day: {{exerciselog.day}}
                        <br>
                        Month: {{exerciselog.month}}
                        <br>
                        Year: {{exerciselog.year}}
                        <br>
                        Weight: {{exerciselog.weight}}
                        <br>
                        Exercise Type: {{exerciselog.type}}
                        <br>
                        Minutes Exercised: {{exerciselog.minutes}}
                        <br>
                        Notes: {{exerciselog.notes}}
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
import { GetExerciseLogs } from "@/models/ExerciseLogs.js";

export default {
    data: ()=> ({
        Globals: Globals,
        exerciselogs: []
    }),
    async mounted(){
        this.exerciselogs = await GetExerciseLogs()
    }
}
</script>

<style>
</style>