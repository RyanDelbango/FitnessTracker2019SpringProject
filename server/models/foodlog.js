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

    total(id, cb){
        conn.query("SELECT SUM(bcalories + lcalories + dcalories) AS 'Total Calories' FROM FT_FoodLogs", id, (err, data) => {
        cb(err, data);
        })
    
    },

    average(id, cb){
        conn.query("SELECT month, year, AVG(bcalories + lcalories + dcalories) AS 'Average Calories Per Month' FROM FT_FoodLogs GROUP BY month, year", id, (err, data) => {
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