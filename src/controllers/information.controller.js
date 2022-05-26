// information.controller.js 
'use strict';
const information = require('../models/information.model');

exports.getAll = function(req, res) {
    information.getAll(function(err, information) {
      console.log('controller')
      if (err)
      res.send(err);
      console.log('res', information);
      res.send(information);
    });
};

exports.create = function(req, res) {
  information.create(function(err, information){
    console.log('Controller')
    if(err)
    res.send(err);
    console.log('res', information);
    res.send(information);
  })
}

exports.update = function(req, res) {
  console.log('Controller :',req.body.Name);
  res.send(null);
  // information.update(function(err, information){
  //   if(err)
  //   res.send(err);
  //   console.log('res', information);
  //   res.send(information);
  // })
}

exports.read = function(req, res) {
  information.read(function(err, information){
    console.log('Controller')
    if(err)
    res.send(err);
    console.log('res', information);
    res.send(information);
  })
}

exports.delete = function(req, res) {
  information.delete(function(err, information){
    console.log('Controller')
    if(err)
    res.send(err);
    console.log('res', information);
    res.send(information);
  })
}
