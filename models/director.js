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
      director.hasMany(models.Movie,{
        as:"Movies",
        foreignKey:"directorId"
      })
    }
  }
  director.init({
   id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  birthPlace: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  notableAwards: {
    type: DataTypes.STRING,
    allowNull: false,
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

  return director;
};