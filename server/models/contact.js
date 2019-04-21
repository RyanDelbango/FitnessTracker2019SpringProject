const conn = require('./mysql_connection');

const model = {
    async getAll(){
        return await conn.query("SELECT FT_Users.id, firstName, lastName, email, phone, country, address, city, state, zip FROM FT_Users JOIN FT_Contacts on FT_Users.id = FT_Contacts.id");
    },
    
    async get(id){
        return await conn.query("SELECT FT_Users.id, firstName, lastName, email, phone, country, address, city, state, zip FROM FT_Users JOIN FT_Contacts on FT_Users.id = FT_Contacts.id WHERE FT_Users.id = ?", id);
    },

    async friends(id){
        return await conn.query("SELECT FT_Friends.friend_id, firstName, lastName, email, phone, country, address, city, state, zip FROM FT_Users JOIN FT_Contacts on FT_Users.id = FT_Contacts.id JOIN FT_Friends on FT_Users.id = FT_Friends.friend_id WHERE FT_Friends.id = ?", id);
    },

    async searchState(input){
        return await conn.query("SELECT FT_Users.id, firstName, lastName, city, state FROM FT_Users JOIN FT_Contacts on FT_Users.id = FT_Contacts.id WHERE state = ?", input.state);
    },

    async searchCity(input){
        return await conn.query("SELECT FT_Users.id, firstName, lastName, country, address, city, state, zip FROM FT_Users JOIN FT_Contacts on FT_Users.id = FT_Contacts.id WHERE city = ?", input.city);
    },

    async edit(userid, input){
        return await conn.query("Replace INTO FT_Contacts (id, phone, address, city, state, country, zip) VALUES (?)",
                    [[userid, input.phone, input.address, input.city, input.state, input.country, input.zip]]);
    }

};

module.exports = model;