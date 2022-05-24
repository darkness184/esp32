// information.controller.js 
'use strict';
const information = require('../models/information.model');

exports.getAll = function (req, res) {
  information.getAll(function (err, information) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', information);
    res.send(information);
  });
};

exports.create = function (req, res) {
  console.log('Controller:', req);
  information.create(req.body, function (err, information) {
    if (err)
      res.send(err);
    console.log('res', information);
    res.send(information);
  })
}

exports.update = function (req, res) {
  console.log('Controller:', req);
  information.update(req.body, function (err, information) {
    if (err)
      res.send(err);
    console.log('res', information);
    res.send(information);
  })
}

exports.read = function (req, res) {
  console.log('Controller', req);
  information.read(req.body, function (err, information) {
    if (err)
      res.send(err);
    console.log('res', information);
    res.send(information);
  })
}

exports.delete = function (req, res) {
  console.log('Controller', req)
  information.delete(rqe.body, function (err, information) {
    if (err)
      res.send(err);
    console.log('res', information);
    res.send(information);
  })
}