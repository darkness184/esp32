// information.model.js
'use strict';
const { MqttClient } = require('mqtt');
var dbConn = require('../../config/db.config');

//information object create

var information = {};

information.getAll = function (result) {
  dbConn.query("Select * from test", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('datas : ', res);
      result(null, res);
    }
  });
};

information.get_temp_humi = function(result){
  dbConn.query("SELECT data FROM `temp_humi` ORDER BY id DESC LIMIT 1", function(err,res){
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('datas : ', res);
      result(null, res);
    }
  });
}

information.insert = function(data, result){
  dbConn.query("INSERT INTO temp_humi (`id`, `data`, `time`) VALUES (NULL, '?', CURRENT_TIMESTAMP);", data, function(err,res){
    if (err) {
      comsole.log("error:", err);
      result(null,err);
    } else {
      console.log("Insert successtion:", res);
      result(null,res);
    }
  })
}

information.create = function (data, result) {
  dbConn.query("insert into test ?", data, function (err, res) {
    dbConn.release();
    if (err) {
      console.log("bug: ", err);
      result(null, err);
    } else {
      console.log('Create db test success: ', res);
      result(null, res);
    }
  })
}

information.update = function (data, result) {
  dbConn.query('update test set ? where id = ?', [data, data.id], function (err, res) {
    dbConn.release();
    if (err) {
      console.log("bug: ", err);
      result(null, err);
    } else {
      console.log('update db test success: ', res);
      result(null, res);
    }
  });
};

information.read = function (id, result) {
  dbConn.query('select * from test where id=?', [id], function (err, res) {
    dbConn.release();
    if (err) {
      console.log("bug: ", err);
      result(null, err);
    } else {
      console.log('read db: ', res);
      result(null, res);
    }
  });
};

information.delete = function (id, result) {
  dbConn.query('delete from test where id = ?', [id], function (err, res) {
    dbConn.release();
    if (err) {
      console.log("bug: ", err);
      result(null, err);
    } else {
      console.log('Delete db: ', res);
      result(null, res);
    }
  });
};

module.exports = information;
