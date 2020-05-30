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
  startMainQues();
});

function startMainQues() {
  inquirer
    .prompt({
      type: "list",
      name: "main_questions",
      message: "What would you like to do?",
      choices: ["View All Departments", "View All Roles", "View All Employees", "Add Department", "Add Role"]
    })
    .then(ans => {
      //switch statement that calls correct function 
      switch (ans.main_questions) {

        case "View All Departments":
          const viewDeptQuery = "SELECT id, department.name as department FROM department;";
          views(viewDeptQuery);
          break;

        case "View All Roles":
          const viewroleQuery = "SELECT role.id, role.title as job_title ,department.name as department, salary FROM department INNER JOIN role ON role.department_id=department.id;";
          views(viewroleQuery);
          break;

        case "View All Employees":
          const viewEmpQuery = "SELECT employee.id, employee.first_name,employee.last_name,role.title as job_title,department.name as department, role.salary FROM department INNER JOIN role ON role.department_id=department.id INNER JOIN employee ON employee.role_id=role.id;";
          views(viewEmpQuery);
          break;

        case "Add Department":
          addDept();
          break;

        default:
          connection.end();
          break;
      }

    });
}
//views function 
function views(query) {
  connection.query(query, function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    startMainQues();
  });
}

//Add Dept function
function addDept() {
  inquirer
    .prompt({
      type: "input",
      name: "new_dept",
      message: "What is the name of the new department?"
    })
    .then(ans => {
      connection.query("INSERT INTO department SET ?", { name: ans.new_dept }, function (err, res) {
        if (err) throw err;
        // Log succesfully added new dept 
        console.log(`Added ${ans.new_dept} to the database`);
        startMainQues();
      });
    })
}

