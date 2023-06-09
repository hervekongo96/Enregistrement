const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    key:'',
    database:'recrutement'
})

db.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Masambukidi");
    }
});

module.exports = db;