<template>
<div class="row">
    <div class="col-lg-6">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Create a Food Log</h4>
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
                  <label for="bcalories">Breakfast Calories</label>
                  <input type="number" v-model="data.bcalories"
                    class="form-control" name="bcalories" id="bcalories" placeholder="500">
                </div>
                <div class="form-group">
                  <label for="lcalories">Lunch Calories</label>
                  <input type="number" v-model="data.lcalories"
                    class="form-control" name="lcalories" id="lcalories" placeholder="600">
                </div>
                <div class="form-group">
                  <label for="dcalories">Dinner Calories</label>
                  <input type="number" v-model="data.dcalories"
                    class="form-control" name="dcalories" id="dcalories" placeholder="700">
                </div>
                <div class="form-group">
                  <label for="scalories">Snack Calories</label>
                  <input type="number" v-model="data.scalories"
                    class="form-control" name="scalories" id="scalories" placeholder="400">
                </div>
                <div class="form-group">
                  <label for="breakfast">Breakfast</label>
                  <input type="text" v-model="data.breakfast"
                    class="form-control" name="breakfast" id="breakfast" placeholder="Eggs">
                </div>
                <div class="form-group">
                  <label for="lunch">Lunch</label>
                  <input type="text" v-model="data.lunch"
                    class="form-control" name="lunch" id="lunch" placeholder="Tuna Salad">
                </div>
                <div class="form-group">
                  <label for="dinner">Dinner</label>
                  <input type="text" v-model="data.dinner"
                    class="form-control" name="dinner" id="dinner" placeholder="Steak">
                </div>
                <div class="form-group">
                  <label for="snacks">Snacks</label>
                  <input type="text" v-model="data.snacks"
                    class="form-control" name="snacks" id="snacks" placeholder="Hummus">
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
          <h4 class="card-title">You've created a food log!</h4>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import { Globals } from "@/models/api";
import { CreateFoodLog } from "@/models/FoodLogs";

export default {
    data: ()=> ({
        data: {},
        newLog: null
    }),
    methods: {
        async submit(){
            try {
              const m = await CreateFoodLog(this.data);
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