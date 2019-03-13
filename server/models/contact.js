const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT FT_Users.id, firstName, lastName, email, phone, country, address, city, state, zip FROM FT_Users JOIN FT_Contacts on FT_Users.id = FT_Contacts.id", (err, data) => {
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

    
    edit(input, cb){
        conn.query("Replace INTO FT_Contacts (id, phone, address, city, state, country) VALUES (?)",
                    [[input.id, input.phone, input.address, input.city, input.state, input.country]],
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