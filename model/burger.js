var orm = require("../config/orm.js");

var burger = {
  all: function(callback){
    orm.all("burgers", function(res){
      callback(res);
    });
  },
//The variables cols and vals are arrays.

  create: function(col, val, callback){
    orm.create("burger", cols, vals, function(res){
      callback(res);
    });
  },

  update: function(condition, id, callback){
    orm.update("update", condition, id, function(res){
      callback(res);
    });
  }


};


//Export the database functions for the controller (burgersController.js).
module.exports = burger;