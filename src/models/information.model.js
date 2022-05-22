// information.model.js
'use strict';
var dbConn = require('../../config/db.config');

//information object create

var information = function(information){
  this.id     = information.id;
  this.data     = information.data;
};

information.getAll = function (result) {
    dbConn.query("Select * from test", function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          console.log('datas : ', res);
          result(null, res);
        }
    });
};
module.exports= information;
