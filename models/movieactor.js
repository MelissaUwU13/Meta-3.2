'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movieActor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  movieActor.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  actorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  characterName: {
    type: DataTypes.STRING,
    allowNull: false,
  }
  },{
    sequelize,
    modelName:'MovieActor',
    tableName:'MovieActores',
    name:{
      singular:'MovieActor',
      plural:'MovieActores'
    }
  });

  return movieActor;
};