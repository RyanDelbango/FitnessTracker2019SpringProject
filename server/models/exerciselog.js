const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT log_id, FT_Users.id, firstName, lastName, day, month, year, weight, type, minutes, notes FROM FT_Users JOIN FT_ExerciseLogs on FT_Users.id = FT_ExerciseLogs.id", (err, data) => {
            cb(err, data);  
        })
    
    },
    get(id, cb){
        conn.query("SELECT log_id, FT_Users.id, firstName, lastName, day, month, year, weight, minutes, notes FROM FT_Users JOIN FT_ExerciseLogs on FT_Users.id = FT_ExerciseLogs.id WHERE FT_Users.id = ?", id, (err, data) => {
            cb(err, data); 
        })
    
    },

    searchType(input, cb){
        conn.query("SELECT log_id, FT_Users.id, firstName, lastName, type, day, month, year FROM FT_ExerciseLogs join FT_Users on FT_ExerciseLogs.id = FT_Users.id WHERE type = ? ", input.type, (err, data) => {
        cb(err, data);
        })
    
    },
    
    create(input, cb){
        if(!input.id){
            cb(Error('An id is required.'))
            console.log(Error);
            return;
        }
        conn.query("INSERT INTO FT_ExerciseLogs (id, day, month, year, weight, minutes, type, notes) VALUES (?)",
                    [[input.id, input.day, input.month, input.year, input.weight, input.minutes, input.type, input.notes]],
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
        conn.query("REPLACE INTO FT_ExerciseLogs (log_id, id, day, month, year, weight, minutes, type, notes) VALUES (?)",
                    [[input.log_id, input.id, input.day, input.month, input.year, input.weight, input.minutes, input.type, input.notes]],
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