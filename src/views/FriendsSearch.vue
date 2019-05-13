<template>
<div class="row">
    <div class="col-lg-6">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Search Friends</h4>
        <p class="card-text">
            <form @submit.prevent="submit">
                <div class="form-group">
                  <label for="lastName">Search by Last Name</label>
                  <input type="lastName" v-model="data.lastName"
                    class="form-control" name="search" id="search" placeholder="Last Name">
                <v-select :value="data.lastName" @search="fetchOptions" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

      </div>
    </div>
    </div>
    <div class="col-lg-6">
      <div v-if="friends">
    <div class="card mb-3 col-sm-6 mx-auto shadow" style="text-align: center; background-color: white; opacity: .9;" v-for="friend in friends" :key="friend.id">
        <ul class="list-unstyled" style="padding-top: 5px;">
            <li> 

                    <h4>
                            {{friend.firstName}}
                            {{friend.lastName}}
                    </h4>
                        <button class="btn btn-outline-success">
                            <router-link :to="`/Profile/${friend.id}`" class="nav-link">
                                Go to Profile
                            </router-link>
                        </button>
            </li>
        </ul>
    </div>
      </div>
    </div>
</div>
</template>

<script>
import { SearchFriends } from "@/models/Friends";
import { Globals } from "@/models/api";
export default {
    data: ()=> ({
        data: {},
        friends: null
    }),
    methods: {
async submit(){
            try {
              const m = await SearchFriends(this.data);
              this.friends= m ;
              // console.log(this.newUser)
            } catch (error) {
              Globals.errors.push(error);
            }
        },
        async fetchOptions (search, loading) {
            loading(true)
            console.log(this.data[0]) 
            search = await SearchFriends(this.data)
            this.friends = search 
            loading(false) 
        }
    }
}
</script>

<style>
</style>