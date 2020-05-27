-- Seeds for employeeMgmtSys_DB
USE employeeMgmtSys_DB;

-- Eployee values
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES 
("Ana", "cruz",4,5);

-- role values
INSERT INTO role (title,salary,department_id)
VALUES 
("sales", 80000,4);

-- department values
INSERT INTO department (name)
VALUES 
("sales");

SELECT * FROM department;