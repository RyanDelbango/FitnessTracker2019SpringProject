const conn = require('./mysql_connection');

 const model = {
    async getAll(){
        return await conn.query("SELECT id, idTo, message FROM FT_Messages");
    },
    
    async get(id){
        return await conn.query("SELECT idTo, firstName, lastName, message FROM FT_Messages join FT_Users on FT_Messages.idTo = FT_Users.id WHERE FT_Messages.id=?", id);
    },

    async friends(id){
        return await conn.query("SELECT FT_Friends.friend_id, firstName, lastName, message FROM FT_Users JOIN FT_Messages on FT_Users.id = FT_Messages.id JOIN FT_Friends on FT_Users.id = FT_Friends.friend_id WHERE FT_Friends.id = ?", id);
    },

    async search(input){
        return await conn.query("SELECT id, idTo, message FROM FT_Messages WHERE message LIKE '%' ? '%' ", input.message);
    },

    
    async create(userid, idTo, input){
        return await conn.query( "INSERT INTO FT_Messages (id, idTo, message) VALUES (?)",
                    [[userid, idTo, input.message]]);
    }
};

module.exports = model;