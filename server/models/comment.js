const conn = require('./mysql_connection');

const model = {

    async getAllE(){
        return await conn.query("SELECT log_id, firstName, lastName, comment FROM FT_ExerciseComments JOIN FT_Users on FT_ExerciseComments.id = FT_Users.id");
    },

    async getE(log_id){
        return await conn.query("SELECT log_id, firstName, lastName, comment FROM FT_ExerciseComments JOIN FT_Users on FT_ExerciseComments.id = FT_Users.id WHERE log_id = ?", log_id);
    },

    async getAllF(){
        return await conn.query("SELECT log_id, firstName, lastName, comment FROM FT_FoodComments JOIN FT_Users on FT_FoodComments.id = FT_Users.id");
    },

    async getF(log_id){
        return await conn.query("SELECT log_id, firstName, lastName, comment FROM FT_FoodComments JOIN FT_Users on FT_FoodComments.id = FT_Users.id WHERE log_id = ?", log_id);
    },

    async createE(userid, log_id, input){
        return await conn.query("INSERT INTO FT_ExerciseComments (id, log_id, comment) VALUES (?)",
                    [[userid, log_id, input.comment]]);
    },
    
    async createF(userid, log_id, input){
        return await conn.query("INSERT INTO FT_FoodComments (id, log_id, comment) VALUES (?)",
                    [[userid, log_id, input.comment]]);
    }
};

module.exports = model;