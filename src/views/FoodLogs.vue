<template>
<div class="container-fluid shadow rounded">
    <div class="row" style="background-color: darkseagreen;">
        <div class="col">
            <h1 class="text-center" style="color: white; font-variant: small-caps;">Food Logs</h1>  
            <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;">
                <router-link :to="`/FoodLogs/${Globals.user.id}`" class="nav-link">
                    View My Food Logs
                </router-link>
            </div>
            <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;">
                <router-link :to="`/FoodLogs/create/${Globals.user.id}`" class="nav-link">
                    Create a Food Log
                </router-link>
            </div>
    <div class="w-100"><p></p></div>
    <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;" v-for="foodlog in foodlogs" :key="foodlog.id">
        <router-link to="/About" class="nav-link">
        <ul class="list-unstyled" style="padding-top: 5px;">
            <li> 

                    <h4>
                        Log ID: {{foodlog.log_id}}
                        <br>
                        {{foodlog.firstName}}
                        {{foodlog.lastName}}
                        <br>
                        Day: {{foodlog.day}}
                        <br>
                        Month: {{foodlog.month}}
                        <br>
                        Year: {{foodlog.year}}
                        <br>
                        Breakfast Calories: {{foodlog.bcalories}}
                        <br>
                        Lunch Calories: {{foodlog.lcalories}}
                        <br>
                        Dinner Calories: {{foodlog.dcalories}}
                        <br>
                        Snack Calories: {{foodlog.scalories}}
                        <br>
                        Breakfast: {{foodlog.breakfast}}
                        <br>
                        Lunch: {{foodlog.lunch}}
                        <br>
                        Dinner: {{foodlog.dinner}}
                        <br>
                        Snacks: {{foodlog.snacks}}
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
import { GetFoodLogs } from "@/models/FoodLogs.js";

export default {
    data: ()=> ({
        Globals: Globals,
        foodlogs: []
    }),
    async mounted(){
        this.foodlogs = await GetFoodLogs()
    }
}
</script>

<style>
</style>