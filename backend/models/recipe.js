'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  recipe.init({
    name: DataTypes.STRING,
    instructions: DataTypes.STRING,
    equipment: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    servings: DataTypes.STRING,
    details: DataTypes.STRING,
    author: DataTypes.INTEGER,
    ratings: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'recipe',
  });
  return recipe;
};