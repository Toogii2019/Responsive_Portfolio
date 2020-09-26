var path = require("path");
var cookieParser = require('cookie-parser');


module.exports = function(app) {
    app.use(cookieParser());
    app.get("/", function(req, res) {
      res.render("index");
    });
  
    app.get("/about", function(req, res) {
        res.render("about");
    });

    app.get("/portfolio", function(req, res) {
        res.render("portfolio");
    });

    app.get("/contact", function(req, res) {
        res.render("contact");
    });
  };
  