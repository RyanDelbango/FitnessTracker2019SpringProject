const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT id, idTo, message FROM FT_Messages", (err, data) => {
            cb(err, data);  
        })
    
    },
    get(id, cb){
        conn.query("SELECT idTo, firstName, lastName, message FROM FT_Messages join FT_Users on FT_Messages.idTo = FT_Users.id WHERE FT_Messages.id=?", id, (err, data) => {
            cb(err, data);  
        })
    
    },

    search(input, cb){
        conn.query("SELECT id, idTo, message FROM FT_Messages WHERE message LIKE '%' ? '%' ", input.message, (err, data) => {
        cb(err, data);
        })
    
    },

    
    create(userid, idTo, input, cb){
        conn.query( "INSERT INTO FT_Messages (id, idTo, message) VALUES (?)",
                    [[userid, idTo, input.message]],
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