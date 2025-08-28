const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Store = sequelize.define("Store", {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
});

module.exports = Store;
