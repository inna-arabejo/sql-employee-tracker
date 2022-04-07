const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
require("console.table");
const db = require("./db");

initialize();

function initialize(){
  const textlogo = logo({ name: "Employee Manager" }).render();
  console.log(textlogo);
  department();
}

function department(){
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Employees",
          value: "VIEW_EMPLOYEES"
        },
        {
          name: "View All Employees By Department",
          value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
        },
        {
          name: "View All Employees By Manager",
          value: "VIEW_EMPLOYEES_BY_MANAGER"
        },
        {
          name: "Add Employee",
          value: "ADD_EMPLOYEE"
        },
        {
          name: "Update Employee Manager",
          value: "UPDATE_EMPLOYEE_MANAGER"
        },
        {
          name: "Remove Employee",
          value: "REMOVE_EMPLOYEE"
        },
        {
          name: "Update Employee Role",
          value: "VIEW_EMPLOYEES"
        },
        {
          name: "Add Role",
          value: "VIEW_EMPLOYEES"
        },
        {
          name: "View All Roles",
          value: "VIEW_EMPLOYEES"
        },
        {
          name: "Remove Role",
          value: "VIEW_EMPLOYEES"
        },
        {
          name: "View All Departments",
          value: "VIEW_EMPLOYEES"
        },
        {
          name: "Add Department",
          value: "VIEW_EMPLOYEES"
        },
        {
          name: "Remove Department",
          value: "VIEW_EMPLOYEES"
        },
        {
          name: "View Total Utilized Budget By Department",
          value: "VIEW_EMPLOYEES"
        },
        {
          name: "Quit",
          value: "QUIT"
        }
      ]
    }
  ]).then(res => {
    let choice = res.choice;
    switch (choice){
      case "VIEW_EMPLOYEES": 
      viewEmployees();
      break;
      case "":
      functionName();
      break;
      case "":
      functionName();
      break;
      case "":
      functionName();
      break;
      case "":
      functionName();
      break;
      default: 
      quit();
    }
  })
}


 

// Try to add some additional functionality to your application, such as the ability to do the following:

// * Update employee managers.

// * View employees by manager.

// * View employees by department.

// * Delete departments, roles, and employees.

// * View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.
