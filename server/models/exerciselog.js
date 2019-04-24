const conn = require('./mysql_connection');

const model = {
    async getAll(){
        return await conn.query("SELECT log_id, FT_Users.id, firstName, lastName, day, month, year, weight, type, minutes, notes FROM FT_Users JOIN FT_ExerciseLogs on FT_Users.id = FT_ExerciseLogs.id ORDER BY log_id DESC");
    },
    
    async get(id){
        return await conn.query("SELECT log_id, FT_Users.id, firstName, lastName, day, month, year, weight, type, minutes, notes FROM FT_Users JOIN FT_ExerciseLogs on FT_Users.id = FT_ExerciseLogs.id WHERE FT_Users.id = ? ORDER BY log_id DESC", id);
    },

    async getLog(log_id){
        return await conn.query("SELECT FT_ExerciseLogs.log_id, FT_Users.id, firstName, lastName, day, month, year, weight, type, minutes, notes, COUNT(comment) AS 'number' FROM FT_Users JOIN FT_ExerciseLogs on FT_Users.id = FT_ExerciseLogs.id JOIN FT_ExerciseComments on FT_ExerciseLogs.log_id = FT_ExerciseComments.log_id WHERE FT_ExerciseLogs.log_id = ?", log_id);
    },

    async friends(id){
        return await conn.query("SELECT log_id, FT_Friends.friend_id, firstName, lastName, day, month, year, weight, type, minutes, notes FROM FT_Users JOIN FT_ExerciseLogs on FT_Users.id = FT_ExerciseLogs.id JOIN FT_Friends on FT_Users.id = FT_Friends.friend_id WHERE FT_Friends.id = ?", id);
    },

    async searchType(input){
        return await conn.query("SELECT log_id, FT_Users.id, firstName, lastName, type, day, month, year FROM FT_ExerciseLogs join FT_Users on FT_ExerciseLogs.id = FT_Users.id WHERE type = ? ", input.type);
    },

    async averageW(id){
        return await conn.query("SELECT month, year, AVG(weight) AS 'Average weight' FROM FT_ExerciseLogs WHERE id=? GROUP BY month, year", id);
    },

    async averageT(id){
        return await conn.query("SELECT month, year, AVG(minutes) AS 'Average time exercising in minutes' FROM FT_ExerciseLogs WHERE id=? GROUP BY month, year", id);
    },
    
    async create(userid, input){
        return await conn.query("INSERT INTO FT_ExerciseLogs (id, day, month, year, weight, minutes, type, notes) VALUES (?)",
                    [[userid, input.day, input.month, input.year, input.weight, input.minutes, input.type, input.notes]]);
    },

    async edit(userid, logid, input){
        return await conn.query("REPLACE INTO FT_ExerciseLogs (id, log_id, day, month, year, weight, minutes, type, notes) VALUES (?)",
                    [[userid, logid, input.day, input.month, input.year, input.weight, input.minutes, input.type, input.notes]]);
    }
    
};

module.exports = model;