var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "hounted_users" model that matches up with DB
var HighCastle = sequelize.define("highcastle", {
  address: Sequelize.STRING,
  port: Sequelize.STRING,
  DateTime: Sequelize.DATE,
});

// Syncs with DB
HighCastle.sync();

// Makes the hounted_users Model available for other files (will also create a table)

module.exports = HighCastle;