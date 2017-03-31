'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn('Users', 'email', {
      type:Sequelize.STRING,
      unique: false,
      allowNull: true
    });
  }
};
