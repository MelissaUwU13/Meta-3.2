'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      actor.belongsToMany(models.Movie,{
        as:"Movies",
        through:"MovieActors",
        foreignKey:"actorId"
      })
    }
  }

  actor.init({
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
    unique: true
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
    modelName:'Actor',
    tableName:'Actores',
    name:{
      singular:'Actor',
      plural:'Actores'
    }
  });

  return actor;
};