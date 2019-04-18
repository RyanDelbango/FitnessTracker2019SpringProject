<template>
<div class="row">
    <div class="col-lg-6">
    <div class="card">
      <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <a class="nav-link active" href="">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Single Sign in</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h4 class="card-title">Register</h4>
        <p class="card-text">
            <form @submit.prevent="submit">
                <div class="form-group">
                  <label for="firstName">First Name</label>
                  <input type="text" v-model="data.firstName"
                    class="form-control" name="firstName" id="firstName" aria-describedby="helpfirstName" placeholder="First Name">
                  <small id="helpfirstName" class="form-text text-muted">If you have a middle name you can enter that too</small>
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name</label>
                  <input type="text" v-model="data.lastName"
                    class="form-control" name="lastName" id="lastName" aria-describedby="helplastName" placeholder="Last Name">
                  <small id="helplastName" class="form-text text-muted">Sir Name</small>
                </div>
                <div class="form-group">
                  <label for="email">E-Mail</label>
                  <input type="text" v-model="data.email"
                    class="form-control" name="email" id="email" aria-describedby="helpemail" placeholder="E-Mail">
                  <small id="helpemail" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" v-model="data.password"
                    class="form-control" name="password" id="password" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

      </div>
    </div>
    </div>
    <div class="col-lg-6">
      <div class="card border-success" v-if="newUser">
        <div class="card-body">
          <h4 class="card-title">Congrats! You've Registered</h4>
          <p class="card-text">
            {{newUser.firstName}} {{newUser.lastName}} 
          </p>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import { Register } from "@/models/users";
import { Globals } from "@/models/api";
export default {
    data: ()=> ({
        data: {},
        newUser: null
    }),
    methods: {
async submit(){
            try {
              const m = await Register(this.data);
              this.newUser= m ;
              // console.log(this.newUser)
            } catch (error) {
              Globals.errors.push(error);
            }
        }
    }
}
</script>

<style>
</style>