const conn = require('./mysql_connection');

const model = {
    async getAll(){
        return await conn.query("SELECT log_id, FT_Users.id, firstName, lastName, day, month, year, bcalories, lcalories, dcalories, scalories, breakfast, lunch, dinner, snacks FROM FT_Users JOIN FT_FoodLogs on FT_Users.id = FT_FoodLogs.id ORDER BY log_id DESC");
    },

    async get(id){
        return await conn.query("SELECT log_id, firstName, lastName, day, month, year, bcalories, lcalories, dcalories, scalories, breakfast, lunch, dinner, snacks FROM FT_Users JOIN FT_FoodLogs on FT_Users.id = FT_FoodLogs.id WHERE FT_Users.id = ? ORDER BY log_id DESC", id);
    },

    async getLog(log_id){
        return await conn.query("SELECT FT_FoodLogs.log_id, firstName, lastName, day, month, year, bcalories, lcalories, dcalories, scalories, breakfast, lunch, dinner, snacks, COUNT(comment) AS 'Number of Comments' FROM FT_Users JOIN FT_FoodLogs on FT_Users.id = FT_FoodLogs.id JOIN FT_FoodComments on FT_FoodLogs.log_id = FT_FoodComments.log_id WHERE FT_FoodLogs.log_id = ?", log_id);
    },

    async friends(id){
        return await conn.query("SELECT FT_Friends.friend_id, firstName, lastName, day, month, year, bcalories, lcalories, dcalories, scalories, breakfast, lunch, dinner, snacks FROM FT_Users JOIN FT_FoodLogs on FT_Users.id = FT_FoodLogs.id JOIN FT_Friends on FT_Friends.friend_id = FT_Users.id WHERE FT_Friends.id = ? ORDER BY log_id DESC", id);
    },

    async total(id){
        return await conn.query("SELECT day, month, year, SUM(bcalories + lcalories + dcalories + scalories) AS 'Total' FROM FT_FoodLogs WHERE id = ? GROUP BY day, month, year", id);
    },

    async average(id){
        return await conn.query("SELECT month, year, AVG(bcalories + lcalories + dcalories) AS 'Average' FROM FT_FoodLogs WHERE id = ? GROUP BY month, year", id);
    },
    
    async create(userid, input){
        return await conn.query("INSERT INTO FT_FoodLogs (id, day, month, year, bcalories, lcalories, dcalories, scalories, breakfast, lunch, dinner, snacks) VALUES (?)",
                    [[userid, input.day, input.month, input.year, input.bcalories, input.lcalories, input.dcalories, input.scalories, input.breakfast, input.lunch, input.dinner, input.snacks]])
    },

    async edit(userid, logid, input){
        return await conn.query("REPLACE INTO FT_FoodLogs (id, log_id, day, month, year, bcalories, lcalories, dcalories, scalories, breakfast, lunch, dinner, snacks) VALUES (?)",
        [[userid, logid, input.day, input.month, input.year, input.bcalories, input.lcalories, input.dcalories, input.scalories, input.breakfast, input.lunch, input.dinner, input.snacks]]);
    }
};

module.exports = model;