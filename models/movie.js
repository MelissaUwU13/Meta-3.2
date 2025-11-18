'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.belongsToMany(models.Actor,{
        as:"Actores",
        through:"MovieActors",
        foreignKey:"movieId"
      })
    }
  }
  movie.init({
   id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  releaseYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  directorId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
  },{
    sequelize,
    modelName:'Movie',
    tableName:'Movies',
    name:{
      singular:'Movie',
      plural:'Movies'
    }
  });
};