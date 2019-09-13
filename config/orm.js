//Import MySQL connection.
var connection = require("./connection.js");

// Helper function loops through and creates an array of question marks and turns it into a string.

function printQuestionMarks(num) {
  var arr = [];
  
  for (var i = 0; i < num; i++){
    arr.push("?");
  }
  return arr.toString();
}
//Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob){
var arr = [];

//Loop through the keys and push the key/value as a string int arr
for (var key in ob){

  var value = ob[key];
  if (Object.hasOwnProperty.call(ob, key)){
    if (typeof value === "string" && value.indexOf(" ") >=0){
      value = "'" + value + "'";
    }
    arr.push(key + "=" + value);
  }
}
return arr.toString();
}

//Create methods that will execute the necessary MySQL command in the controllers

var orm = {
  selectAll: function(table, callback){
    var queryString = "SELECT * FROM" + table + ";"
    console.log(queryString);
    connection.query(queryString, function(error,result){
      if(error){
        
        throw error 
      }
          callback(result);
    });
  },
  insertOne:function(table, col, vals, callback){
    var queryString = "INSERT INTO" + table;

    queryString += " (";
    queryString += col.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString +=
    printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);
  },
  updateOne: function(table, objColVals, id, callback) {
    var queryString = "UPDATE " + table;

    queryString += "  SET ";
    queryString += this.objToSql(objColVals);
    queryString += " WHERE ";
    queryString += id;

    console.log(queryString);
    connection.query(queryString, function(error, result){
      if (error) {
        throw error;
      }

      callback(result);
    });
  }
}

//Export the orm object for model (burger.js)
module.exports=orm;





