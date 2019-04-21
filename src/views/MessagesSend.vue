<template>
<div class="row">
    <div class="col-lg-6">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Send {{profile[0].firstName}} {{profile[0].lastName}} a message.</h4>
                <div class="form-group">
                  <label for="message">Message</label>
                  <input type="text" v-model="data.message"
                    class="form-control" name="message" id="message" aria-describedby="helpmessage" placeholder="Message">
                  <small id="helpmessage" class="form-text text-muted"></small>
                </div>
        <div class="card-text">
            <form @submit.prevent="submit">
                <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;" v-for="profile in profiles" :key="profile.id">
                    {{profile.firstName}}
                    {{profile.lastName}}
                    <button class="btn btn-outline-success">
                        </button>
    </div>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
        </div>
      </div>
    </div>
    </div>
    <div class="col-lg-6">
      <div class="card border-success" v-if="newMessage">
        <div class="card-body">
          <h4 class="card-title">You sent a message!</h4>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import { Globals } from "@/models/api";
import { SendMessage } from "@/models/Messages";
import { GetProfileUser } from "@/models/Profiles.js";

export default {
    data: ()=> ({
        data: {},
        profile: null,
        newMessage: null
    }),
    async mounted(){
        Globals.profile.id = this.$route.params.idTo
        this.profile = await GetProfileUser()
    },
    methods: {
        async submit(){
            try {
              const m = await SendMessage(this.data);
              this.newMessage = m;
            } catch (error) {
              Globals.errors.push(error);
            }
        }
    }
}
</script>

<style>
</style> 