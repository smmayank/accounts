'use strict';

var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);
var config = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var aquired = require('./' + file);
    var name = file.slice(0, -3);
    config[name] = aquired;
  });

module.exports = config;
