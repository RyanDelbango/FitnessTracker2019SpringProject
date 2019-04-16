const conn = require('./mysql_connection');
const bcrypt = require('bcrypt');

const model = {
    getAll(cb){
        conn.query("SELECT id, firstName, lastName FROM FT_Users", (err, data) => {
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

    async login(email, password){
        console.log(email, password)
        const data = await conn.query("SELECT id, firstName, lastName, email, password FROM FT_Users WHERE email = ? ", email);
        console.log(data[0])
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

    
    add(input, cb){
        console.log(input)
        if(input.password.length < 8){
            cb(Error('A Longer Password is Required'))
            return;
        }
        conn.query( "INSERT INTO FT_Users (firstName, lastName, email, password) VALUES (?)",
                    [[input.firstName, input.lastName, input.email, bcrypt.hashSync(input.password, 9)]],
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