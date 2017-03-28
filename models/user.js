'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    uuid: DataTypes.STRING,
    email: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};