<template>
<div class="row">
    <div class="col-lg-6">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Edit Contact Information</h4>
        <div class="card-text">
            <form @submit.prevent="submit">
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input type="text" v-model="data.phone"
                    class="form-control" name="phone" id="phone" aria-describedby="helpphone" placeholder="111-111-1111">
                  <small id="helpphone" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                  <label for="country">Country</label>
                  <input type="text" v-model="data.country"
                    class="form-control" name="country" id="country" placeholder="USA">
                </div>
                <div class="form-group">
                  <label for="address">Address</label>
                  <input type="text" v-model="data.address"
                    class="form-control" name="address" id="address" placeholder="Address">
                </div>
                <div class="form-group">
                  <label for="city">City</label>
                  <input type="city" v-model="data.city"
                    class="form-control" name="city" id="city" placeholder="City">
                </div>
                <div class="form-group">
                  <label for="state">State</label>
                  <input type="state" v-model="data.state"
                    class="form-control" name="state" id="state" placeholder="State">
                </div>
                <div class="form-group">
                  <label for="zip">Zipcode</label>
                  <input type="zip" v-model="data.zip"
                    class="form-control" name="zip" id="zip" placeholder="11111">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>
    </div>
    </div>
    <div class="col-lg-6">
      <div class="card border-success" v-if="newContact">
        <div class="card-body">
          <h4 class="card-title">You've edited your profile!</h4>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import { Globals } from "@/models/api";
import { EditContact } from "@/models/Contacts";

export default {
    data: ()=> ({
        data: {},
        newContact: null
    }),
    methods: {
        async submit(){
            try {
              const m = await EditContact(this.data);
              this.newContact = m;
            } catch (error) {
              Globals.errors.push(error);
            }
        }
    }
}
</script>

<style>
</style> 