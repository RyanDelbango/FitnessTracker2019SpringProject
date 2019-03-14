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

    total(cb){
        conn.query("SELECT AVG(bcalories) FROM FT_FoodLogs", (err, data) => {
        cb(err, data);
        })
    
    },
    
    create(input, cb){
        if(!input.id){
            cb(Error('An id is required.'))
            console.log(Error);
            return;
        }
        conn.query("INSERT INTO FT_FoodLogs (id, day, month, year, bcalories, lcalories, dcalories, scalories, breakfast, lunch, dinner, snacks) VALUES (?)",
                    [[input.id, input.day, input.month, input.year, input.bcalories, input.lcalories, input.dcalories, input.scalories, input.breakfast, input.lunch, input.dinner, input.snacks]],
                    (err, data) => {
                        if (err) {
                            cb(err);
                            return;
                        }
                         cb(err,data);
                     }
        )
    },

    edit(input, cb){
        if(!input.log_id || !input.id){
            cb(Error('A log_id is required.'))
            console.log(Error);
            return;
        }
        conn.query("REPLACE INTO FT_FoodLogs (log_id, id, day, month, year, bcalories, lcalories, dcalories, scalories, breakfast, lunch, dinner, snacks) VALUES (?)",
        [[input.log_id, input.id, input.day, input.month, input.year, input.bcalories, input.lcalories, input.dcalories, input.scalories, input.breakfast, input.lunch, input.dinner, input.snacks]],
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