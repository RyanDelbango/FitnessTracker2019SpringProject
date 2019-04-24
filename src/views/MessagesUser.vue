<template>
<div class="container-fluid shadow rounded">
    <div class="row" style="background-color: darkseagreen;">
        <div class="col">
            <h1 class="text-center" style="color: white; font-variant: small-caps;">My Messages</h1>  
    <div class="w-100"><p></p></div>
    <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;" v-for="message in messages" :key="message.id">
        <ul class="list-unstyled" style="padding-top: 5px;">
            <li> 

                    <h4>
                        From:
                        {{message.firstName}}
                        {{message.lastName}}
                        <br>
                        <br>
                        Message: {{message.message}} 
                        <br>
                        <br>
                        <button class="btn btn-outline-success">
                            <router-link :to="`/Messages/${Globals.user.id}/${message.id}`" class="nav-link">
                                Reply
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
import { GetMessagesUser } from "@/models/Messages.js";

export default {
    data: ()=> ({
        Globals: Globals,
        messages: []
    }),
    async mounted(){
        this.messages = await GetMessagesUser()
    }
}
</script>

<style>
</style>