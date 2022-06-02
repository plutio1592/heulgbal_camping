'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    customer_id: DataTypes.STRING,
    business_number: DataTypes.INTEGER,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    business_name: DataTypes.STRING,
    business_address: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    email_authorization: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};