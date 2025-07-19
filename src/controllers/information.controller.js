// information.controller.js 
'use strict';
const information = require('../models/information.model');


exports.getAll = function(req, res) {
    console.log('controller:', res.body);
    information.getAll(function(err, information) {
        if (err)
            res.send(err);
        console.log('res', information);
        res.send(information);
    });
};

exports.get_temp_humi = function(req, res) {
    console.log('controller:', res.body);
    information.get_temp_humi(function(err, information) {
        if (err)
            res.send(err);
        console.log('res', information);
        res.send(information);
    });
}

exports.create = function(req, res) {
    console.log('Controller:', req.body)
    information.create(req.body, function(err, information) {
        if (err)
            res.send(err);
        console.log('res', information);
        res.send(information);
    })
}

exports.insert = function(req, res) {
    console.log('Controller:', req.body.data)
    console.log('type: ', typeof req.body.data);
    information.insert(req.body.data, function(err, information) {
        if (err)
            res.send(err);
        console.log('res', information);
        res.send(information);
    })
}

exports.update = function(req, res) {
    console.log('Controller :', req.body);
    res.send(null);
    information.update(req.body, function(err, information) {
        if (err)
            res.send(err);
        console.log('res', information);
        res.send(information);
    })
}

exports.read = function(req, res) {
    console.log('Controller:', req.body)
    information.read(req.body, function(err, information) {
        if (err)
            res.send(err);
        console.log('res', information);
        res.send(information);
    })
}

exports.delete = function(req, res) {
    console.log('Controller:', req.body)
    information.delete(req.body, function(err, information) {
        if (err)
            res.send(err);
        console.log('res', information);
        res.send(information);
    })
}