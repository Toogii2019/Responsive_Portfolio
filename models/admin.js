var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "hounted_users" model that matches up with DB
var User = sequelize.define("user", {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
});

// Syncs with DB
User.sync();

// Makes the hounted_users Model available for other files (will also create a table)

module.exports = User;