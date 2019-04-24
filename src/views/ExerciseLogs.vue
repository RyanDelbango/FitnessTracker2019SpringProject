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
        <ul class="list-unstyled" style="padding-top: 5px;">
            <li> 

                    <h4>
                        <router-link :to="`/Profile/${exerciselog.id}`" class="nav-link">
                            {{exerciselog.firstName}}
                            {{exerciselog.lastName}}
                        </router-link>
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
                        <br>
                        <br>
                        <button class="btn btn-outline-success">
                            <router-link :to="`/comments/exercise/${exerciselog.log_id}`" class="nav-link">
                                View Comments
                            </router-link>
                        </button>
                        <br>
                        <br>
                        <button class="btn btn-outline-success">
                            <router-link :to="`/comments/exercise/${Globals.user.id}/${exerciselog.log_id}`" class="nav-link">
                                Add Comment
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
import { GetExerciseLogs } from "@/models/ExerciseLogs.js";

export default {
    data: ()=> ({
        Globals: Globals,
        exerciselogs: []
    }),
    async mounted(){
        this.exerciselogs = await GetExerciseLogs()
        // console.log(this.exerciselogs)
        Globals.log.id = this.exerciselogs
    }
}
</script>

<style>
</style>