const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT FT_Users.id, firstName, lastName, log_id, date, type, minutes, notes, friend_id FROM FT_Users JOIN FT_ExerciseLogs on FT_Users.id = FT_ExerciseLogs.id", (err, data) => {
            cb(err, data);  
        })
    
    },
    get(id, cb){
        conn.query("SELECT id, firstName, lastName FROM FT_Users WHERE id=?", id, (err, data) => {
            cb(err, data);  
        })
    
    },

    search(input, cb){
        conn.query("SELECT firstName, lastName FROM FT_Users WHERE lastName = ? ", input.lastName, (err, data) => {
        cb(err, data);
        })
    
    },

    login(input, cb){
        conn.query("SELECT id, firstName, lastName, email FROM FT_Users WHERE (email, password) = (?) ", [[input.email, input.password]], (err, data) => {
            if (data.length == 0){
                 cb(err)
            }
            else{
                cb(err, data)}      
            })
    },

    
    create(input, cb){
        if(!input.id){
            cb(Error('An id is required.'))
            console.log(Error);
            return;
        }
        conn.query("INSERT INTO FT_ExerciseLogs (id, date, minutes, type, friend_id, notes) VALUES (?)",
                    [[input.id, input.date, input.minutes, input.type, input.friend_id, input.notes]],
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