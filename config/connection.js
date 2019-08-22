// Set up MySQL connection

var mysql = require("mysql");

var connection=
mysql.createConnection({
  host:"localhost",
  port: 3306,
  user:"antionne",
  password:"kaijacob18",
  database:"burgers"

});
// Make connection
connection.connect(function(err){
  if (err){
    console.error("error conneting: "+ err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;