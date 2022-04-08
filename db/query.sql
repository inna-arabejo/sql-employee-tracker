SELECT roles.id, roles.title, roles.salary
FROM roles
JOIN department ON role.department_id = department.name;

SELECT employee.id, employee.first_name, employee.last_name
FROM employee
JOIN roles ON employees.role_id = role.title

SELECT
  e.first_name + "" + e.last_name employee,
  m.first_name + "" + m.last_name manager_id
FROM
  employee e
INNER JOIN employee m ON m.id = e.manager_id;

-- // const connection = require("connection");
-- // class DB{
-- //   constructor (connection){
-- //     this.connection = connection;
-- //   }
-- //   findAllEmployees(){
-- //     return this.connection.promise().query(
-- //       "SELECT"
-- //     )
-- //   }
-- // }
-- // queries
-- // findAllEmployees