const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT id, idTo, message FROM FT_Messages", (err, data) => {
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

    
    create(input, cb){
        conn.query( "INSERT INTO FT_Messages (id, idTo, message) VALUES (?)",
                    [[input.id, input.idTo, input.message]],
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