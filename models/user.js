'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    uuid: {
      type: DataTypes.UUID,
      unique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4()
    },
    email: {
      type :DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate:{
        isEmail: true
      }
    },
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
