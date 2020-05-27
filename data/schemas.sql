-- schemas for employeeMgmtSys_DB
DROP DATABASE IF EXISTS employeeMgmtSys_DB;
CREATE DATABASE employeeMgmtSys_DB;
USE employeeMgmtSys_DB;

-- employee table
CREATE TABLE employee(
  id INTEGER NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER(10) NULL,
  manager_id INTEGER(10) NULL,
  PRIMARY KEY (id)
);
-- role table
CREATE TABLE role (
  id INTEGER NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NULL,
  department_id INTEGER(10) NULL,
  PRIMARY KEY (id)
);
-- department table
CREATE TABLE department(
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

