<template>
<div class="row">
    <div class="col-lg-6">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Edit Profile</h4>
        <div class="card-text">
            <form @submit.prevent="submit">
                <div class="form-group">
                  <label for="bio">Bio</label>
                  <input type="text" v-model="data.bio"
                    class="form-control" name="bio" id="bio" aria-describedby="helpbio" placeholder="Bio">
                  <small id="helpbio" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                  <label for="interests">Interests</label>
                  <input type="text" v-model="data.interests"
                    class="form-control" name="interests" id="interests" placeholder="Interests">
                </div>
                <div class="form-group">
                  <label for="quotes">Quotes</label>
                  <input type="text" v-model="data.quotes"
                    class="form-control" name="quotes" id="quotes" placeholder="Quotes">
                </div>
                <div class="form-group">
                  <label for="heroes">Heroes</label>
                  <input type="heroes" v-model="data.heroes"
                    class="form-control" name="heroes" id="heroes" placeholder="Heroes">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>
    </div>
    </div>
    <div class="col-lg-6">
      <div class="card border-success" v-if="newProfile">
        <div class="card-body">
          <h4 class="card-title">You've edited your profile!</h4>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import { Globals } from "@/models/api";
import { EditProfile } from "@/models/Profiles";

export default {
    data: ()=> ({
        data: {},
        newProfile: null
    }),
    methods: {
        async submit(){
            try {
              const m = await EditProfile(this.data);
              this.newProfile = m;
            } catch (error) {
              Globals.errors.push(error);
            }
        }
    }
}
</script>

<style>
</style> 