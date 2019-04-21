<template>
<div class="row">
    <div class="col-lg-6">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Create a Exercise Log</h4>
        <div class="card-text">
            <form @submit.prevent="submit">
                <div class="form-group">
                  <label for="day">Day</label>
                  <input type="text" v-model="data.day"
                    class="form-control" name="day" id="day" aria-describedby="helpday" placeholder="31">
                  <small id="helpday" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                  <label for="month">Month</label>
                  <input type="text" v-model="data.month"
                    class="form-control" name="month" id="month" placeholder="12">
                </div>
                <div class="form-group">
                  <label for="year">Year</label>
                  <input type="text" v-model="data.year"
                    class="form-control" name="year" id="year" placeholder="2018">
                </div>
                <div class="form-group">
                  <label for="weight">Weight</label>
                  <input type="number" v-model="data.weight"
                    class="form-control" name="weight" id="weight" placeholder="145">
                </div>
                <div class="form-group">
                  <label for="minutes">Minutes</label>
                  <input type="number" v-model="data.minutes"
                    class="form-control" name="minutes" id="minutes" placeholder="20">
                </div>
                <div class="form-group">
                  <label for="type">Type</label>
                  <input type="text" v-model="data.type"
                    class="form-control" name="type" id="type" placeholder="Hiking">
                </div>
                <div class="form-group">
                  <label for="notes">Notes</label>
                  <input type="text" v-model="data.notes"
                    class="form-control" name="notes" id="notes" placeholder="I ran in the woods.">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>
    </div>
    </div>
    <div class="col-lg-6">
      <div class="card border-success" v-if="newLog">
        <div class="card-body">
          <h4 class="card-title">You've created an exercise log!</h4>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import { Globals } from "@/models/api";
import { CreateExerciseLog } from "@/models/ExerciseLogs";

export default {
    data: ()=> ({
        data: {},
        newLog: null
    }),
    methods: {
        async submit(){
            try {
              const m = await CreateExerciseLog(this.data);
              this.newLog = m;
            } catch (error) {
              Globals.errors.push(error);
            }
        }
    }
}
</script>

<style>
</style> 