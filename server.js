const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
require("console.table");
const db = require("./db");

initialize();

const initialize = () => {
  const textlogo = logo({ name: "Employee Manager" }).render();
  console.log(textlogo);
  department();
}

const department = () => {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees By Department",
        "View All Employees By Manager",
        "Add Employee",
        "Update Employee Manager",
        "Remove Employee",
        "Update Employee Role",
        "Add Role",
        "View All Roles",
        "Remove Role",
        "View All Departments",
        "Add Department",
        "Remove Department",
        "View Total Utilized Budget By Department",
        "Quit",
      ]
    }
  ]).then(res => {
    let choice = res.choice;
    switch (choice){
      case "View All Employees": 
        viewEmployees();
        break;
      case "View All Employees By Department":
        viewEmployeesByDepartment();
        break;
      case "View All Employees By Manager":
        viewEmployeesByManager();
        break;
      case "Add Employee":
        addEmployee();
        break;
      case "Update Employee Manager":
        updateEmployeeManager();
        break;
      case "Remove Employee":
        removeEmployee();
        break;
      case "Update Employee Role":
        updateEmployeeRole();
        break;
      case "Add Role":
        addRole();
        break;
      case "View All Roles":
        viewRoles();
        break;
      case "Remove Role":
        removeRole();
        break;
      case "View All Departments":
        viewDepartments();
        break;
      case "Add Department":
        addDepartment();
        break;
      case "Remove Department":
        removeDepartment();
        break;
      case "View Total Utilized Budget By Department":
        viewTotalUtilizedBudgetByDepartment();
        break;
      default: 
        quit();
    }
  })
}

// View all employees
const viewEmployees = () => {
  db.findAllEmployees()
  .then(([rows]) => {
    let employees = rows;
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));

    prompt([
      {
        
      }
    ])

  })
}

function viewEmployeesByDepartment(){
  db.findAllEmployees()
  .then(([rows]) => {
    let employees = rows;
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));

    prompt([
      {
        
      }
    ])

  })
}

function viewEmployeesByManager(){
  db.findAllEmployees()
  .then(([rows]) => {
    let employees = rows;
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));

    prompt([
      {
        
      }
    ])

  })
}

function addEmployee(){
  db.findAllEmployees()
  .then(([rows]) => {
    let employees = rows;
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));

    prompt([
      {
        
      }
    ])

  })
}

function updateEmployeeManager(){
  db.findAllEmployees()
  .then(([rows]) => {
    let employees = rows;
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));

    prompt([
      {
        
      }
    ])

  })
}

function removeEmployee(){
  db.findAllEmployees()
  .then(([rows]) => {
    let employees = rows;
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));

    prompt([
      {
        
      }
    ])

  })
}

function updateEmployeeRole(){
  db.findAllEmployees()
  .then(([rows]) => {
    let employees = rows;
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));

    prompt([
      {
        
      }
    ])

  })
}

function addRole(){
  db.findAllEmployees()
  .then(([rows]) => {
    let employees = rows;
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));

    prompt([
      {
        
      }
    ])

  })
}

function viewRoles(){
  db.findAllEmployees()
  .then(([rows]) => {
    let employees = rows;
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));

    prompt([
      {
        
      }
    ])

  })
}

function removeRole(){
  db.findAllEmployees()
  .then(([rows]) => {
    let employees = rows;
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));

    prompt([
      {
        
      }
    ])

  })
}

function viewDepartments(){
  db.findAllEmployees()
  .then(([rows]) => {
    let employees = rows;
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));

    prompt([
      {
        
      }
    ])

  })
}

function addDepartment(){
  db.findAllEmployees()
  .then(([rows]) => {
    let employees = rows;
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));

    prompt([
      {
        
      }
    ])

  })
}

function removeDepartment(){
  db.findAllEmployees()
  .then(([rows]) => {
    let employees = rows;
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));

    prompt([
      {
        
      }
    ])

  })
}

function viewTotalUtilizedBudgetByDepartment(){
  db.findAllEmployees()
  .then(([rows]) => {
    let employees = rows;
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));

    prompt([
      {
        
      }
    ])

  })
}

function quit(){
  db.findAllEmployees()
  .then(([rows]) => {
    let employees = rows;
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));

    prompt([
      {
        
      }
    ])

  })
}


 

// Try to add some additional functionality to your application, such as the ability to do the following:

// * Update employee managers.

// * View employees by manager.

// * View employees by department.

// * Delete departments, roles, and employees.

// * View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.
