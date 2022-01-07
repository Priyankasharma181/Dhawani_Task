const mysql = require("mysql")
const dbConn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Pink@123',
    database : 'UserDetail'
  });
  dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });
  module.exports = dbConn;