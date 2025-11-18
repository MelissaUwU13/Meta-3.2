'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class director extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  director.init({
   id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  birthYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  birthPlace: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  notableAwards: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
  },{
    sequelize,
    modelName:'Director',
    tableName:'Directores',
    name:{
      singular:'Director',
      plural:'Directores'
    }
  });
};