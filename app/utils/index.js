'use strict';

var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(module.filename);
var utils     = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var util = require('./', file)
    var utilName = file.slice(0, -3)
    utils[utilName] = util
  });

module.exports = utils;
