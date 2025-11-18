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
    id: DataTypes.STRING,
    movieId: DataTypes.STRING,
    actorId: DataTypes.STRING,
    characterName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movieActor',
  });
  return movieActor;
};