<template>
<div class="row">
    <div class="col-lg-6">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Create a Comment</h4>
        <div class="card-text">
            <form @submit.prevent="submit">
                <div class="form-group">
                  <label for="comment">Comment</label>
                  <input type="text" v-model="data.comment"
                    class="form-control" name="comment" id="comment" aria-describedby="helpcomment" placeholder="Comment">
                  <small id="helpcomment" class="form-text text-muted"></small>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>
    </div>
    </div>
    <div class="col-lg-6">
      <div class="card border-success" v-if="newComment">
        <div class="card-body">
          <h4 class="card-title">You've created a comment!</h4>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import { Globals } from "@/models/api";
import { CreateExerciseComment } from "@/models/Comments";

export default {
    data: ()=> ({
        data: {},
        newComment: null
    }),
    async mounted(){
        Globals.log.id = this.$route.params.logid
    },
    methods: {
        async submit(){
            try {
              const m = await CreateExerciseComment(this.data);
              // console.log(this.data)
              this.newComment = m;
            } catch (error) {
              Globals.errors.push(error);
            }
        }
    }
}
</script>

<style>
</style> 