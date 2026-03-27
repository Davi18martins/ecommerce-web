const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ifsuldeminas",
    database: "ecommerce",
});

exports.findByEmail = (email,callback) =>{
    
}