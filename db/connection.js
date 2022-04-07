// Import and require mysql2
const mysql = require('mysql2');


// Connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'iarabejo3',
    // TODO: Add MySQL password here
    password: 'iarabejo3!',
    database: 'company_db'
  });
connection.connect(function (err){
  if (err) throw err;
});

module.exports = connection;



