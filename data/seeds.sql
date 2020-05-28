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
INSERT INTO employee (first_name,last_name,role_id)
VALUES 
("Ana", "cruz",1),
("marisol", "lopez",3),
("maria", "martinez",2),
("juana", "paulino",5);

-- Display all departments 
SELECT * FROM department;

-- Display all Roles 
SELECT role.id, role.title as job_title ,department.name as department, salary 
FROM department
INNER JOIN role ON role.department_id=department.id;

-- Display all employees
SELECT employee.id, employee.first_name,employee.last_name,role.title as job_title,department.name as department, role.salary
FROM department
INNER JOIN role ON role.department_id=department.id
INNER JOIN employee ON employee.role_id=role.id;

-- Update employee roles
UPDATE role
SET title= "Sales Associate"
WHERE title ="sales person";
