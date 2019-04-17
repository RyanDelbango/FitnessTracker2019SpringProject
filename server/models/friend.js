const conn = require('./mysql_connection');

const model = {
    async getAll(){
        return await conn.query("SELECT FT_Users.id, friend_id FROM FT_Users JOIN FT_Friends on FT_Users.id = FT_Friends.id");
    },
    
    async get(id){
        return await conn.query("SELECT FT_Users.id, firstName, lastName FROM FT_Users JOIN FT_Friends on FT_Users.id = FT_Friends.friend_id WHERE FT_Friends.id = ?", id);
    },

    async searchlastName(id, input){
        return await conn.query("SELECT FT_Users.id, firstName, lastName FROM FT_Users JOIN FT_Friends on FT_Users.id = FT_Friends.friend_id WHERE (FT_Friends.id, lastName) = (?) ", [[id, input.lastName]]);
    },
    
    async add(userid, friendid, cb){
        return await conn.query( "REPLACE INTO FT_Friends (id, friend_id) VALUES (?)",
                    [[userid, friendid]]);      
    }
};

module.exports = model;