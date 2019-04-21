<template>
<div class="row">
    <div class="col-lg-6">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Add as {{profile[0].firstName}} {{profile[0].lastName}} a friend?</h4>
        <div class="card-text">
            <form @submit.prevent="submit">
                <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;" v-for="profile in profiles" :key="profile.id">
                    {{profile.firstName}}
                    {{profile.lastName}}
                    <button class="btn btn-outline-success">
                        </button>
    </div>
                <button type="submit" class="btn btn-primary">Add Friend</button>
            </form>
        </div>
      </div>
    </div>
    </div>
    <div class="col-lg-6">
      <div class="card border-success" v-if="newFriend">
        <div class="card-body">
          <h4 class="card-title">You've got a new friend!</h4>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import { Globals } from "@/models/api";
import { AddFriend } from "@/models/Friends";
import { GetProfileUser } from "@/models/Profiles.js";

export default {
    data: ()=> ({
        data: {},
        profile: null,
        newFriend: null
    }),
    async mounted(){
        Globals.profile.id = this.$route.params.friendid
        Globals.friend.id = this.$route.params.friendid
        this.profile = await GetProfileUser()
    },
    methods: {
        async submit(){
            try {
              const m = await AddFriend(this.data);
              this.newFriend = m;
            } catch (error) {
              Globals.errors.push(error);
            }
        }
    }
}
</script>

<style>
</style> 