const conn = require('./mysql_connection');

const model = {
    async getAll(){
        return await conn.query("SELECT FT_Users.id, firstName, lastName, email, bio, interests, quotes, heroes FROM FT_Users JOIN FT_Profiles on FT_Users.id = FT_Profiles.id");
    },
    
    async get(id){
        return conn.query("SELECT FT_Users.id, firstName, lastName, email, bio, interests, quotes, heroes FROM FT_Users JOIN FT_Profiles on FT_Users.id = FT_Profiles.id WHERE FT_Users.id = ?", id);
    },

    async edit(userid, input){
        const data = await conn.query("Replace INTO FT_Profiles (id, bio, interests, quotes, heroes) VALUES (?)",
                    [[userid, input.bio, input.interests, input.quotes, input.heroes]])
                        return data;
                     }
};

module.exports = model;