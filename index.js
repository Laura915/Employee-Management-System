var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

// sql connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: " ",
  database: "employeeMgmtSys_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();
});

function start() {
  inquirer
    .prompt({
      type: "list",
      name: "main_questions",
      message: "What would you like to do?",
      choices: ["View All Departments","View All Roles","View All Employees"]
    })
    .then(ans=> {
     //switch statement that calls correct function 
      switch (ans.main_questions) {

        case "View All Departments":
          viewDepts();
          break;

        default:
          connection.end();
          break;
      }

    });
}

//view All Department function
function viewDepts() {
  const query="SELECT id, department.name as department FROM department;";
 
  connection.query(query, function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    start();
  });
}