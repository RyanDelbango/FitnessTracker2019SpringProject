const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT log_id, FT_Users.id, firstName, lastName, day, month, year, bcalories, lcalories, dcalories, scalories, breakfast, lunch, dinner, snacks FROM FT_Users JOIN FT_FoodLogs on FT_Users.id = FT_FoodLogs.id ORDER BY log_id", (err, data) => {
            cb(err, data);  
        })
    
    },

    get(id, cb){
        conn.query("SELECT firstName, lastName, day, month, year, bcalories, lcalories, dcalories, scalories, breakfast, lunch, dinner, snacks FROM FT_Users JOIN FT_FoodLogs on FT_Users.id = FT_FoodLogs.id WHERE FT_Users.id = ? ORDER BY log_id DESC", id, (err, data) => {
            cb(err, data); 
        })
    
    },

    getLog(log_id, cb){
        conn.query("SELECT FT_FoodLogs.log_id, firstName, lastName, day, month, year, bcalories, lcalories, dcalories, scalories, breakfast, lunch, dinner, snacks, COUNT(comment) AS 'Number of Comments' FROM FT_Users JOIN FT_FoodLogs on FT_Users.id = FT_FoodLogs.id JOIN FT_FoodComments on FT_FoodLogs.log_id = FT_FoodComments.log_id WHERE FT_FoodLogs.log_id = ? ORDER BY log_id DESC", log_id, (err, data) => {
            cb(err, data); 
        })
    
    },

    friends(id, cb){
        conn.query("SELECT FT_Friends.friend_id, firstName, lastName, day, month, year, bcalories, lcalories, dcalories, scalories, breakfast, lunch, dinner, snacks FROM FT_Users JOIN FT_FoodLogs on FT_Users.id = FT_FoodLogs.id JOIN FT_Friends on FT_Friends.friend_id = FT_Users.id WHERE FT_Friends.id = ? ORDER BY log_id DESC", id, (err, data) => {
            cb(err, data); 
        })
    
    },

    total(id, cb){
        conn.query("SELECT day, month, year, SUM(bcalories + lcalories + dcalories) AS 'Total Calories' FROM FT_FoodLogs WHERE id = ? GROUP BY day, month, year", id, (err, data) => {
        cb(err, data);
        })
    
    },

    average(id, cb){
        conn.query("SELECT month, year, AVG(bcalories + lcalories + dcalories) AS 'Average Calories Per Month' FROM FT_FoodLogs WHERE id = ? GROUP BY month, year", id, (err, data) => {
        cb(err, data);
        })
    
    },
    
    create(userid, input, cb){
        conn.query("INSERT INTO FT_FoodLogs (id, day, month, year, bcalories, lcalories, dcalories, scalories, breakfast, lunch, dinner, snacks) VALUES (?)",
                    [[userid, input.day, input.month, input.year, input.bcalories, input.lcalories, input.dcalories, input.scalories, input.breakfast, input.lunch, input.dinner, input.snacks]],
                    (err, data) => {
                        if (err) {
                            cb(err);
                            return;
                        }
                         cb(err,data);
                     }
        )
    },

    edit(userid, logid, input, cb){
        conn.query("REPLACE INTO FT_FoodLogs (id, log_id, day, month, year, bcalories, lcalories, dcalories, scalories, breakfast, lunch, dinner, snacks) VALUES (?)",
        [[userid, logid, input.day, input.month, input.year, input.bcalories, input.lcalories, input.dcalories, input.scalories, input.breakfast, input.lunch, input.dinner, input.snacks]],
                    (err, data) => {
                        if (err) {
                            cb(err);
                            return;
                        }
                         cb(err,data);
                     }
        )
    }
    
};

module.exports = model;