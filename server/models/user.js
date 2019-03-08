const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT * FROM UserPass", (err, data) => {
            cb(err, data);  
        })
    
    },
    get(userid, cb){
        conn.query("SELECT * FROM UserPass WHERE userid=?", userid, (err, data) => {
            cb(err, data);  
        })
    
    },
    add(input, cb){
        //if(!input.Password.length < 8){
           // cb(Error('A Longer Password is Required'))
           // return;
       // }
        conn.query( "INSERT INTO UserPass (userid, passcode) VALUES (?)",
                    [[input.userid, input.passcode]],
                    (err, data) => {
                        if (err) {
                            cb(err);
                            return;
                        }
                        model.get(data.insertId, (err, data) => {
                            cb(err,data);
                        })
                         cb(err,data);
                     }
        )

    }
};

module.exports = model;