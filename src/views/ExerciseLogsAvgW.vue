<template>
<div class="container-fluid shadow rounded">
    <div class="row" style="background-color: darkseagreen;">
        <div class="col">
            <h1 class="text-center" style="color: white; font-variant: small-caps;">My Average Monthly Weight</h1>  
    <div class="w-100"><p></p></div>
    <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;" v-for="exerciselog in exerciselogs" :key="exerciselog.id">
        <ul class="list-unstyled" style="padding-top: 5px;">
            <li> 

                    <h4>
                            Average Weight: {{exerciselog.Average}}
                            <br>
                            Month: {{exerciselog.month}}
                            <br>
                            Year: {{exerciselog.year}}
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
import { GetExerciseLogsAvgW } from "@/models/ExerciseLogs.js";

export default {
    data: ()=> ({
        Globals: Globals,
        exerciselogs: []
    }),
    async mounted(){
        this.exerciselogs = await GetExerciseLogsAvgW()
        // console.log(this.exerciselogs)
    }
}
</script>

<style>
</style>