-- Seeds for employeeMgmtSys_DB
USE employeeMgmtSys_DB;

-- department values
INSERT INTO department (name)
VALUES ("sales"),("Engineering"),("Finance"),("Legal");

-- role values
INSERT INTO role (title,salary,department_id)
VALUES 
("Sales Lead", 40000,1),
("Sales person", 35000,1),
("Lead Engineering", 90000,2),
("Accountant", 70000, 3),
("lawyer", 50000, 4);

-- Eployee values
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES 
("Ana", "cruz"),
("marisol", "lopez"),
("maria", "martinez"),
("juana", "paulino");

SELECT * FROM department;
SELECT * FROM role;

-- All Roles left join
SELECT role.id, title,name salary 
FROM department
INNER JOIN role ON role.department_id=department.id;