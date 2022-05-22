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
