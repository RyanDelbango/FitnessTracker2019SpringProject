<template>
<div class="container-fluid shadow rounded">
    <div class="row" style="background-color: darkseagreen;">
        <div class="col">
            <h1 class="text-center" style="color: white; font-variant: small-caps;">Comments</h1>  
    <div class="w-100"><p></p></div>
    <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;" v-for="comment in comments" :key="comment.id">
        <ul class="list-unstyled" style="padding-top: 5px;">
            <li> 

                    <h4>
                        Log ID: {{comment.log_id}}
                        <br>
                        <router-link :to="`/Profile/${comment.id}`" class="nav-link">
                            {{comment.firstName}}
                            {{comment.lastName}}
                        </router-link>
                        Comment: "{{comment.comment}}"
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
import { GetFoodComments } from "@/models/Comments.js";

export default {
    data: ()=> ({
        Globals: Globals,
        comments: []
    }),
    async mounted(){
        this.comments = await GetFoodComments()
    }
}
</script>

<style>
</style>