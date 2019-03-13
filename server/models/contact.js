const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT FT_Users.id, firstName, lastName, email, phone, country, address, city, state, zip FROM FT_Users JOIN FT_Contacts on FT_Users.id = FT_Contacts.id", (err, data) => {
            cb(err, data);  
        })
    
    },
    get(id, cb){
        conn.query("SELECT FT_Users.id, firstName, lastName, email, phone, country, address, city, state, zip FROM FT_Users JOIN FT_Contacts on FT_Users.id = FT_Contacts.id where FT_Users.id = ?", id, (err, data) => {
            cb(err, data);  
        })
    
    },

    searchState(input, cb){
        conn.query("SELECT FT_Users.id, firstName, lastName, city, state FROM FT_Users JOIN FT_Contacts on FT_Users.id = FT_Contacts.id where state = ?", input.state, (err, data) => {
        cb(err, data);
        })
    
    },

    searchCity(input, cb){
        conn.query("SELECT FT_Users.id, firstName, lastName, email, phone, country, address, city, state, zip FROM FT_Users JOIN FT_Contacts on FT_Users.id = FT_Contacts.id where city = ?", input.city, (err, data) => {
        cb(err, data);
        })
    
    },


    
    edit(input, cb){
        if(!input.id){
            cb(Error('An id is required.'))
            console.log(Error);
            return;
        }
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