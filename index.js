var mysql = require("mysql");
 
// sql connection
var connection = mysql.createConnection({
 host: "localhost",
 port: 3306,
 user: "root",
 password: " ",
 database: "employeeMgmtSys_DB"
});
 
// connect to the mysql server and sql database
connection.connect(function(err) {
 if (err) throw err;
 console.log("connected as id " + connection.threadId);

});
