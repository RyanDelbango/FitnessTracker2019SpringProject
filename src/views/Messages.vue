<template>
<div class="container-fluid shadow rounded">
    <div class="row" style="background-color: darkseagreen;">
        <div class="col">
            <h1 class="text-center" style="color: white; font-variant: small-caps;">Messages</h1>  
            <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;">
                <router-link :to="`Messages/${Globals.user.id}`" class="nav-link">
                    View My Messages
                </router-link>
            </div>
    <div class="w-100"><p></p></div>
    <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;" v-for="message in messages" :key="message.id">
        <ul class="list-unstyled" style="padding-top: 5px;">
            <li> 

                    <h4>
                        Sender ID: {{message.id}}
                        <br>
                        Recipient ID: {{message.idTo}}
                        <br>
                        Message: "{{message.message}}"
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
import { GetMessages } from "@/models/Messages.js";

export default {
    data: ()=> ({
        Globals: Globals,
        messages: []
    }),
    async mounted(){
        this.messages = await GetMessages()
    }
}
</script>

<style>
</style>