INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Brooke", "Williams", 1),
       ("David", "Garcia", 2),
       ("Caleb", "Miller", 3),
       ("Lily", "Moore", 4),
       ("Sally", "Harris", 5),
       ("Pamela", "Sanchez", 6),
       ("Steven", "Young", 7),
       ("Kyle", "King", 8);

INSERT INTO employee (manager_id, role_id)
VALUES (true, 1),
       (false, 2),
       (true, 3),
       (false, 4),
       (false, 5),
       (false, 6),
       (true, 7),
       (true, 8);

INSERT INTO roles (title, salary, department_id)
VALUES ("Lead Engineer", "140000", 1),
VALUES ("Software Engineer", "95000", 5),
       ("Account Manager", "120000", 3),
       ("Accountant", "75000", 4),
       ("HR Manager", "90000", 7),
       ("HR Administrator", "65000", 2),
       ("Sales Lead", "85000", 8),
       ("Salesperson", "70000", 6);

INSERT INTO department (dpt_name)
VALUES ("Engineering"),
       ("Engineering"),
       ("Finance"),
       ("Finance");
       ("HR");
       ("HR");
       ("Sales");
       ("Sales");



