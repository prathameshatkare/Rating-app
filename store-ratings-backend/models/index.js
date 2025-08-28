const sequelize = require("../config/db");
const User = require("./User");
const Store = require("./Store");
const Rating = require("./Rating");

sequelize
  .sync({ alter: true })
  .then(() => console.log("Models synced with DB"))
  .catch((err) => console.log(err));

module.exports = { User, Store, Rating };
