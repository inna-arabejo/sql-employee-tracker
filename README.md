# Employee Tracker

  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

  ## Description
  Create a Content Management System that allow users to easily view and interact with information stored in databases. Using the command-line, users can use CMS interface to manage a company's employee database, using Node.js, Inquirer packages, and MySQL. In the employee database, users are able to view and manage departments, roles, and employees in the company.

  ## Table of Contents
  * [Installation](#installation)
  * [Task](#task)
  * [Screenshots](#screenshots)
  * [Video](#video)
  * [Sources](#sources)
  * [License](#license)
  * [Questions](#questions)

  ### Installation
  Please install the following dependencies in the terminal to run the application. 
  1. [npm inquirer package](https://www.npmjs.com/package/inquirer)
  2. [npm mysql2 package](https://www.npmjs.com/package/mysql2)
  3. [npm console.table package](https://www.npmjs.com/package/console.table)
  4. For Windows user: [Windows(x86, 32-bit), MSI Installer](https://dev.mysql.com/downloads/installer/)
  5. For Mac user: [See guide for installing MySQL on Mac.](https://dev.mysql.com/doc/mysql-macos-excerpt/5.7/en/macos-installation.html)

  ### Task
  In order to use this application, the following requirements are met when:
  ```md
  - I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

  - WHEN I choose to view all departments:
  THEN I am presented with a formatted table showing department names and department ids.

  - WHEN I choose to view all roles:
  THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role.

  - WHEN I choose to view all employees:
  THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.

  - WHEN I choose to add a department:
  THEN I am prompted to enter the name of the department and that department is added to the database.

  - WHEN I choose to add a role:
  THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database.

  - WHEN I choose to add an employee:
  THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database.

  - WHEN I choose to update an employee role:
  THEN I am prompted to select an employee to update and their new role and this information is updated in the database.
  ```

  ### Screenshots
  ![]()
  ![]()
  ![]()

  ### Video

  [](./.mp4)

  ### Tests
  To begin using MySQL Workbench, you must connect to the terminal by typing "`mysql -u root -p`". It will then prompt you to enter your password.
  
  To generate user-input in the command-line, type "`node index.js`".

  ### License
  This project is covered under MIT.

  ### Questions
  For inquiries about the repo, you can find me through GitHub at [inna-arabejo](https://github.com/inna-arabejo). 
  For any additional questions, you can reach me through my email at [iarabejo3@gmail.com](mailto:iarabejo3@gmail.com).