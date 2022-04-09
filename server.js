const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const cTable = require("console.table");
const connection = require("./config/connection");

initialize();

const initialize = () => {
  const textlogo = logo({ name: "Employee Manager" }).render();
  console.log(textlogo);
  company();
}

const company = () => {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "View All Employees By Department",
        "View All Employees By Manager",
        "Add Department",
        "Remove Department",
        "Add Role",
        "Remove Role",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "View Total Utilized Budget By Department",
        "Quit",
      ]
    }
  ]).then(res => {
    let choice = res.choice;
    switch (choice){
      case "View All Departments":
        viewDepartments();
        break;
      case "View All Roles":
        viewRoles();
        break;
      case "View All Employees": 
        viewEmployees();
        break;
      case "View All Employees By Department":
        viewEmployeesByDepartment();
        break;
      case "View Total Utilized Budget By Department":
        viewTotalUtilizedBudgetByDepartment();
        break;
      case "Add Department":
        addDepartment();
        break;
      case "Remove Department":
        removeDepartment();
        break;
      case "Add Role":
        addRole();
        break;
      case "Remove Role":
        removeRole();
        break;
      case "Add Employee":
        addEmployee();
        break;
      case "Remove Employee":
        removeEmployee();
        break;
      case "Update Employee Role":
        updateEmployeeRole();
        break;
      case "Update Employee Manager":
        updateEmployeeManager();
        break;
      default:
        "Quit"; 
        quit();
    }
  })
}

// View all departments
const viewDepartments = () => {
  let sQueryL = `SELECT department.id AS id,   
              department.dpt_name AS 'department' FROM department`;
    connection.promise().query(sQueryL, (err, res) => {
      if(err) throw err;
        console.table(res);
      company();
  })
}

// View all roles
const viewRoles = () => {
  let sQueryL = `SELECT roles.id, 
              roles.title,   
              department.dpt_name AS 'department' 
              FROM roles
              INNER JOIN department ON roles.department_id = department.id`;
    connection.promise().query(sQueryL, (err, res) => {
      if(err) throw err;
      res.forEach((roles) => {
        console.log(roles.title);
      });
      company();
  })
}

// View all employees
const viewEmployees = () => {
  let sQueryL = `SELECT employee.id, 
              employee.first_name, 
              employee.last_name, 
              roles.title, 
              department.dpt_name AS 'department', 
              roles.salary
              FROM department, roles, employee
              WHERE department.id = roles.department_id
              AND roles.id = employee.role_id
              ORDER BY employee.id`;
    connection.promise().query(sQueryL, (err, res) => {
      if(err) throw err;
        console.table(res);
      company();
  })
}

// View employees by department
const viewEmployeesByDepartment = () => {
  let sQueryL = `SELECT employee.first_name, 
              employee.last_name, 
              department.dpt_name AS 'department' 
              FROM employee
              LEFT JOIN roles ON employee.role_id = roles.id
              LEFT JOIN department ON roles.department_id = department.id`;
    connection.query(sQueryL, (err, res) => {
      if(err) throw err;
        console.table(res);
      company();
  })
}

// View total utilized budget by department
const viewTotalUtilizedBudgetByDepartment = () => {
  let sQueryL = `SELECT department_id AS id, 
              department.dpt_name AS 'department', 
              SUM(salary) AS 'total utilized budget'
              FROM roles
              INNER JOIN department ON roles.department_id = department.id GROUP BY roles.department_id`;
    connection.query(sQueryL, (err, res) => {
      if(err) throw err;
        console.table(res);
      company();
  })
}








 
