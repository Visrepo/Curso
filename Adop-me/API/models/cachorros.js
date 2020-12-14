'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cachorros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cachorros.init({
    Nombre: DataTypes.STRING,
    sexo: DataTypes.STRING,
    edad: DataTypes.STRING,
    porte: DataTypes.STRING,
    temperamento: DataTypes.STRING,
    saude: DataTypes.STRING,
    foto: DataTypes.STRING,
    adoptado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Cachorros',
  });
  return Cachorros;
};