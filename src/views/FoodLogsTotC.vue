<template>
<div class="container-fluid shadow rounded">
    <div class="row" style="background-color: darkseagreen;">
        <div class="col">
            <h1 class="text-center" style="color: white; font-variant: small-caps;">My Daily Total Calories</h1>  
    <div class="w-100"><p></p></div>
    <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;" v-for="foodlog in foodlogs" :key="foodlog.id">
        <ul class="list-unstyled" style="padding-top: 5px;">
            <li> 

                    <h4>
                            Total Calories: {{foodlog.Total}}
                            <br>
                            Day: {{foodlog.day}}
                            <br>
                            Month: {{foodlog.month}}
                            <br>
                            Year: {{foodlog.year}}
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
import { GetFoodLogsTotC } from "@/models/FoodLogs.js";

export default {
    data: ()=> ({
        Globals: Globals,
        foodlogs: []
    }),
    async mounted(){
        this.foodlogs = await GetFoodLogsTotC()
        // console.log(this.foodlogs)
    }
}
</script>

<style>
</style>