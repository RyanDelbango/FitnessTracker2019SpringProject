const conn = require('./mysql_connection');
const bcrypt = require('bcrypt');

const model = {
    async getAll(){
        return await conn.query("SELECT id, firstName, lastName FROM FT_Users");
        },
    
    async get(id){
        return await conn.query("SELECT id, firstName, lastName FROM FT_Users WHERE id=?", id);  
    },

    async search(input){
        return await conn.query("SELECT id, firstName, lastName FROM FT_Users WHERE lastName = ? ", input.lastName);
    },

    async login(email, password){
        // console.log(email, password)
        const data = await conn.query("SELECT id, firstName, lastName, email, password FROM FT_Users WHERE email = ? ", email);
        // console.log(data[0])
        if(data.length == 0){
            throw Error('User Not Found');
        }
        const x = await bcrypt.compare(password, data[0].password);
        if(x){
            return data[0];
        }else{
            throw Error('Wrong Password');
        }
    },

    
    async add(input){
        // console.log(input)
        if(input.password.length < 8){
            throw Error('A Longer Password is Required')
        }
        const hashedPassword = await bcrypt.hash(input.password, 9)
        const data = await conn.query( "INSERT INTO FT_Users (firstName, lastName, email, password) VALUES (?)",
                    [[input.firstName, input.lastName, input.email, hashedPassword]]);
                    console.log(data)
                    return data;
    }
};

module.exports = model;