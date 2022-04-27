INSERT INTO department (dpt_name)
VALUES ("Engineering"),
       ("Finance"),
       ("HR"),
       ("Sales");
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", "140000", 1),
       ("Software Engineer", "95000", 1),
       ("Account Manager", "120000", 2),
       ("Accountant", "75000", 2),
       ("HR Manager", "90000", 3),
       ("HR Administrator", "65000", 3),
       ("Sales Lead", "85000", 4),
       ("Salesperson", "70000", 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Brooke", "Williams", 1, null),
       ("David", "Garcia", 2, 1),
       ("Caleb", "Miller", 3, null),
       ("Lily", "Moore", 4, 2),
       ("Sally", "Harris", 5, null),
       ("Pamela", "Sanchez", 6, 3),
       ("Steven", "Young", 7, null),
       ("Kyle", "King", 8, 4);
       





