const { prompt } = require('inquirer');
// const mysql = require('mysql2');
const connection = require('./db/connection')
// const config = require("./config/connection");
const db = require("./db")
require('console.table');


// // Connect to database
// const connection = mysql.createConnection(
//   {
//     host: 'localhost',
//     user: '',
//     password: '',
//     database: 'company_db'
//   });
  
// connection.connect(function(err) {
//   if(err) throw err;
//   initialize();
// })


// Starts program
const initialize = () => {
  console.log('=================================================================================');
  console.log('                             Employee Tracker                                    ');
  console.log('=================================================================================');
  promptUser();
  }
  
  

function promptUser() {
  prompt([
  {
    type: 'list',
    name: 'choice',
    message: 'What would you like to do?',
    choices: [
      {  
        name: 'View All Departments',
        value: 'VIEW_DEPARTMENTS'
      },
      {  
        name: 'View All Roles',
        value: 'VIEW_ROLES'
      },
      {  
        name: 'View All Employees',
        value: 'VIEW_EMPLOYEES'
      },

      {  
        name: 'Add Department',
        value: 'ADD_DEPARTMENTS'
      },
      {  
        name: 'Add Role',
        value: 'ADD_ROLE'
      },
      {  
        name: 'Add Employee',
        value: 'ADD_EMPLOYEE'
      },
      {  
        name: 'Update Employee Role',
        value: 'UPDATE_EMPLOYEE_ROLE'
      },
      {  
        name: 'Quit',
        value: 'QUIT'
      }
    ]
  }
  ]).then (function(res) {
    switch(res.choice) {
      case 'VIEW_DEPARTMENTS':
        viewDepartments();
        break;
      case 'VIEW_ROLES':
        viewRoles();
        break;
      case 'VIEW_EMPLOYEES': 
        viewEmployees();
        break;
      case 'ADD_DEPARTMENTS':
        addDepartment();
        break;
      case 'ADD_ROLE':
        addRole();
        break;
      case 'ADD_EMPLOYEE':
        addEmployee();
        break;
      case 'UPDATE_EMPLOYEE_ROLE':
        updateEmployeeRole();
        break;
      default:
        quit();
        console.log("You have finished.")
    }

  })
}

// ------------------------------------------------- VIEW ------------------------------------------------------------

// View all departments
const viewDepartments = () => {
  return connection.query('SELECT department.id, department.dpt_name * FROM department', (err, res) => {
    if(err) throw err;
    console.table(res);
    promptUser();
  })
}

// View all roles
const viewRoles = () => {
  connection.query('SELECT * FROM role', (err, res) => {
    if(err) throw err;
    console.table(res);
    promptUser();
  })
}

// View all employees
const viewEmployees = () => {
  connection.query('SELECT * FROM employees', (err, res) => {
    if(err) throw err;
    console.table(res);
    promptUser();
  })
}
  
// // View total utilized budget by department
// const viewTotalUtilizedBudgetByDepartment = () => {
//   connection.query(`SELECT dpt_name AS department, 
//                     COUNT(employee.role_id) AS employee, 
//                     SUM(salary) AS 'total utilized budget'
//                     FROM department
//                     JOIN role ON department.id = role.department_id 
//                     JOIN employee ON employee.role_id = role.id GROUP by dpt_name`, (err, res) => {
//     if(err) throw err;
//     console.table(res);
//     promptUser();
//   })
// }
  
  // ------------------------------------------------- ADD ------------------------------------------------------------
  
  // Add employee
async function addEmployee() {
  const res = await prompt([
    {
      type: "input",
      name: "firstName",
    message: "What is the employee's first name?"
  },
  {
    type: "input",
    name: "lastName",
    message: "What is the employee's last name?"
  }
  ])

  const sqlRole = await connection.promise().query('SELECT id, title FROM role');
  const roles = sqlRole[0].map(({ id, title }) => ({value: id, name: title }));

  const findRole = await prompt([
    {
      type: 'list',
      name: 'empRole',
      message: "What is the employee's role?",
      choices: roles
    }
  ])

  const sqlManager = await connection.promise().query(`SELECT first_name, last_name, manager_id FROM employee`);
  const managers = sqlManager[0].map(({ manager_id, first_name, last_name }) => ({ value: manager_id, name: first_name + ' ' + last_name }));

  managers.push({value: null, name: 'Null'})

  const inquireManager = await prompt([
    {
      type: 'list',
      name: 'empManager',
        message: "Who is the employee's manager?",
        choices: managers
      }
    ])
    
  connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES (?, ?, ?, ?)`, [res.firstName, res.lastName, findRole.empRole, inquireManager.empManager], (err, results) => {
    if(err) throw err;
    console.log('You have successfully added the new employee.')
    viewEmployees();
  })
  
}
  
  // Add a New Role
async function addRole() {
  const res = await prompt([
  {
      name: 'newRole',
      type: 'input',
      message: 'What is the name of your new role?',
      validate: title => title ? true : 'Please enter the new role.'
    },
    {
      name: 'newSalary',
      type: 'input',
      message: 'What is the salary of this new role?',
      validate: salary => isNaN(salary) || !(salary) ? 'Please enter a salary' : true
    }
  ]);
  
  const findRes = await connection.promise().query(`SELECT id, dpt_name * FROM department`);
  const deptNamesArray = findRes[0].map(({ id, dpt_name }) => ({value: id, name: dpt_name}));
  
  const askDpt = await prompt([
    {
      name: 'departmentName',
      type: 'list',
      message: 'Which department is this new role in?',
      choices: deptNamesArray
    }
  ])
  
  connection.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [res.newRole, res.newSalary, askDpt.departmentName], (err, res) => {
    if (err) throw err;
      console.log(` ${res.title} role was successfully created.`);
    viewRoles();
  });
    
}


// Add a New Department
async function addDepartment() {
  const res = await prompt([
    {
      name: 'newDepartment',
      type: 'input',
      message: 'What is the name of your new Department?'
    }
  ])
      
  connection.query(`INSERT INTO department (department_name) VALUES (?)`, res.newDepartment, (error, res) => {
    if (error) throw error;
    console.log(res.newDepartment + 'Department successfully created!');
    viewDepartments();
  });
    
};  
    
    // ------------------------------------------------- UPDATE ------------------------------------------------------------
    
    // Update an Employee's Role
async function updateEmployeeRole() {
  const empRole = await connection.promise().query(`SELECT id, first_name, last_name FROM employee`);
  const employees = empRole[0].map(({ id, first_name, last_name }) => ({ value: id, name: `${first_name} ${last_name}` }))
  
  const updateNewRole = await connection.promise().query(`SELECT id, title FROM role`);
  const rolesChoice = updateNewRole[0].map(({ id, title }) => ({value: id, name: title }));
  
  const res = await prompt([
    {
      name: 'employee',
      type: 'list',
      message: 'Which employee has a new role?',
      choices: employees
    },
    {
      name: 'role',
      type: 'list',
      message: 'What is their new role?',
      choices: rolesChoice
    }
  ])
  
  connection.query(`UPDATE employee SET role_id = ? WHERE id = ?`, [res.role, res.employee,], (err) => {
    if (err) throw err;
    console.log('Employee Role Updated');
    viewEmployees();
  })
}

// Quit employee database
function quit() {
  connection.end();
  console.log('Exited Employee Database.')
}

initialize();
// ------------------------------------------------- DELETE ------------------------------------------------------------

// // Delete a Role
// async function removeRole() {
//   const sqlRole = await connection.promise().query(`SELECT id, title FROM role`);
//   const rolesArray = sqlRole[0].map(({ id, title }) => ({value: id, name: title }));
  
//   const resRole = await prompt([
//     {
//       name: 'chosenRole',
//       type: 'list',
//       message: 'Which role would you like to remove?',
//       choices: rolesArray
//     }
//   ])
  
//   connection.query(`DELETE FROM role WHERE role.id = ?`, resRole.chosenRole, (err, res) => {
//     if (err) throw err;
//     console.log('Role successfully removed.');
//     viewRoles();
//     });
//   };
  
//   // Delete a Department
// async function removeDepartment() {
//   const findRes = await connection.promise().query(`SELECT id, dpt_name FROM department`);
//   const deptNamesArray = findRes[0].map(({ id, dpt_name }) => ({value: id, name: dpt_name}));
  
//   const dptChoices = await prompt([
//     {
//       type: "list",
//       name: "dpt",
//       message: "Which department would you like to delete?",
//       choices: deptNamesArray
//     }
//   ])
  
//     connection.promise().query(`DELETE FROM department WHERE department.id = ?`, dptChoices.dpt, (err, res) => {
//       if (err) throw err;
//       console.log('Department successfully removed.');
//       viewDepartments();
//     });
//   };
  




//     // View employees by department
// async function viewEmployeesByDepartment() {
//   const findRes = await connection.promise().query('SELECT id, dpt_name FROM department');
//   const deptNamesArray = findRes[0].map(({ id, dpt_name }) => ({value: id, name: dpt_name}));
  
//     const dptChoices = await prompt([
//       {
//           type: "list",
//           name: "dpt",
//           message: "Which department would you like to view?",
//           choices: deptNamesArray
//       }
//     ])
    
//     connection.query(`SELECT CONCAT(employee.first_name, " ", employee.last_name) AS employee, 
//                       title AS role FROM employee JOIN role ON role ON employee.role_id = role.id 
//                       JOIN department ON role.department_id = department.id 
//                       WHERE department.id = ?`, 
//                       dptChoices.dpt, (err, res) => {
//       if(err) throw err;
//       console.table(res);
//       promptUser();
//     })
//   }

// // Update an Employee's Manager
// const updateEmployeeManager = () => {
    //     let sQueryL = `SELECT employee.id, 
    //                   employee.first_name, 
    //                   employee.last_name, 
    //                   employee.manager_id
    //                   FROM employee`;
    //      connection.promise().query(sQueryL, (err, res) => {
      //       let employeeNamesArray = [];
      //       res.forEach((employee) => {employeeNamesArray.push(`${employee.first_name} ${employee.last_name}`);});
      
      //       inquirer.prompt([
        //           {
          //             name: 'chosenEmployee',
          //             type: 'list',
          //             message: 'Which employee has a new manager?',
          //             choices: employeeNamesArray
//           },
//           {
  //             name: 'newManager',
//             type: 'list',
//             message: 'Who is their manager?',
//             choices: employeeNamesArray
//           }
//         ])
//         .then((answer) => {
//           let employeeId, managerId;
//           res.forEach((employee) => {
//             if (
//               answer.chosenEmployee === `${employee.first_name} ${employee.last_name}`
//             ) {
//               employeeId = employee.id;
//             }

//             if (
//               answer.newManager === `${employee.first_name} ${employee.last_name}`
//             ) {
//               managerId = employee.id;
//             }
//           });

//           if (validate.isSame(answer.chosenEmployee, answer.newManager)) {
         
//             console.log(`Invalid Manager Selection`);
//           } else {
//             let sQueryL = `UPDATE employee SET employee.manager_id = ? WHERE employee.id = ?`;
//             connection.query(
//               sQueryL,
//               [managerId, employeeId],
//               (err) => {
//                 if (err) throw err;
//                 console.log(`Employee Manager Updated`);
//                 company();
//               }
//             );
//           }
//         });
//     });
// };

// -------------------------------------- REMOVE --------------------------------------------------------

// // Delete an Employee
// const removeEmployee = () => {
//     connection.promise().query('SELECT employee.id, employee.first_name, employee.last_name FROM employee', (err, res) => {
//       if (err) throw err;
//       let employeeNamesArray = [];
//       reponse.forEach((employee) => {employeeNamesArray.push(`${employee.first_name} ${employee.last_name}`);});
//       inquirer.prompt([
//           {
//             name: 'chosenEmployee',
//             type: 'list',
//             message: 'Which employee would you like to remove?',
//             choices: employeeNamesArray
//           }
//         ])
//         .then((answer) => {
//           let employeeId;

//           res.forEach((employee) => {
//             if (
//               answer.chosenEmployee ===
//               `${employee.first_name} ${employee.last_name}`
//             ) {
//               employeeId = employee.id;
//             }
//           });

//           connection.query('DELETE FROM employee WHERE employee.id = ?', [employeeId], (err) => {
//             if (err) throw err;
//             console.log(`Employee Successfully Removed`));
//             viewEmployees();
//           });

  
//   };


// ends database connection