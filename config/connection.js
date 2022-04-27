const mysql = require('mysql2');

// // Enable access to .env variables
// require('dotenv').config();

// Use environment variables to connect to database
const connection = mysql.createConnection(
  // process.env.DB_USER,
  // process.env.DB_PASSWORD,
  // process.env.DB_NAME,
  
  {
    host: 'localhost',
    user: 'iarabejo3',
    password: 'iarabejo3!',
    database: 'company_db'
  }
);
connection.connect(function (err){
  if (err) throw err;
});

module.exports = connection;

