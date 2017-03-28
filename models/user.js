'use strict';

var uuidV4 = require('uuid/v4')

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
  User.beforeCreate('addUuid', function addUuid(create, options){
    create.uuid = uuidV4()
    return create
  })
  return User;
};
