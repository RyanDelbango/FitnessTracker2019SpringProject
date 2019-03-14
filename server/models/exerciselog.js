const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT log_id, FT_Users.id, firstName, lastName, day, month, year, weight, type, minutes, notes FROM FT_Users JOIN FT_ExerciseLogs on FT_Users.id = FT_ExerciseLogs.id", (err, data) => {
            cb(err, data);  
        })
    
    },
    get(id, cb){
        conn.query("SELECT log_id, FT_Users.id, firstName, lastName, day, month, year, weight, type, minutes, notes FROM FT_Users JOIN FT_ExerciseLogs on FT_Users.id = FT_ExerciseLogs.id WHERE FT_Users.id = ?", id, (err, data) => {
            cb(err, data); 
        })
    
    },

    friends(id, cb){
        conn.query("SELECT log_id, FT_Friends.friend_id, firstName, lastName, day, month, year, weight, type, minutes, notes FROM FT_Users JOIN FT_ExerciseLogs on FT_Users.id = FT_ExerciseLogs.id JOIN FT_Friends on FT_Users.id = FT_Friends.friend_id WHERE FT_Friends.id = ?", id, (err, data) => {
            cb(err, data); 
        })
    
    },

    searchType(input, cb){
        conn.query("SELECT log_id, FT_Users.id, firstName, lastName, type, day, month, year FROM FT_ExerciseLogs join FT_Users on FT_ExerciseLogs.id = FT_Users.id WHERE type = ? ", input.type, (err, data) => {
        cb(err, data);
        })
    
    },

    averageW(id, cb){
        conn.query("SELECT AVG(weight) AS 'Average weight' FROM FT_ExerciseLogs", id, (err, data) => {
        cb(err, data);
        })
    
    },

    averageT(id, cb){
        conn.query("SELECT AVG(minutes) AS 'Average time exercising in minutes' FROM FT_ExerciseLogs", id, (err, data) => {
        cb(err, data);
        })
    
    },
    
    create(userid, input, cb){
        conn.query("INSERT INTO FT_ExerciseLogs (id, day, month, year, weight, minutes, type, notes) VALUES (?)",
                    [[userid, input.day, input.month, input.year, input.weight, input.minutes, input.type, input.notes]],
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
        conn.query("REPLACE INTO FT_ExerciseLogs (id, log_id, day, month, year, weight, minutes, type, notes) VALUES (?)",
                    [[userid, logid, input.day, input.month, input.year, input.weight, input.minutes, input.type, input.notes]],
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