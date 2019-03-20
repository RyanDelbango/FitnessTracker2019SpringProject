const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT FT_Users.id, friend_id FROM FT_Users JOIN FT_Friends on FT_Users.id = FT_Friends.id", (err, data) => {
            cb(err, data);  
        })
    
    },
    
    get(id, cb){
        conn.query("SELECT FT_Users.id, firstName, lastName FROM FT_Users JOIN FT_Friends on FT_Users.id = FT_Friends.friend_id WHERE FT_Friends.id = ?", id, (err, data) => {
            cb(err, data);  
        })
    
    },

    searchlastName(input, cb){
        conn.query("SELECT FT_Users.id, firstName, lastName FROM FT_Users JOIN FT_Friends on FT_Users.id = FT_Friends.friend_id WHERE (FT_Friends.id, lastName) = (?) ", [[input.id, input.lastName]], (err, data) => {
        cb(err, data);
        })
    
    },

    browse(input, cb){
        conn.query("SELECT FT_Users.id, firstName, lastName FROM FT_Users JOIN FT_Friends on FT_Users.id = FT_Friends.friend_id WHERE (FT_Friends.id) = (?) ", [[input.id]], (err, data) => {
        cb(err, data);
        })
    
    },
    
    add(userid, friendid, cb){
        conn.query( "REPLACE INTO FT_Friends (id, friend_id) VALUES (?)",
                    [[userid, friendid]],
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