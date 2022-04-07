SELECT x.manager_id, x.role_id, x.role_title, x.salary
FROM employee x
LEFT JOIN roles y
ON x.manager_id = y.mgr
WHERE y.mgr is null


const connection = require("connection");
class DB{
  constructor (connection){
    this.connection = connection;
  }
  findAllEmployees(){
    return this.connection.promise().query(
      "SELECT"
    )
  }
}
// queries
// findAllEmployees