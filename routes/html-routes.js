var path = require("path");
var cookieParser = require('cookie-parser');
var Users = require("../models/admin.js");
var HighCastle = require("../models/highcastle.js");
const requestIp = require('request-ip');
const bcrypt = require("bcryptjs");
const { longStackTraces } = require("bluebird");



module.exports = function(app) {
    app.use(cookieParser());
    app.use(requestIp.mw())
    app.get("/", function(req, res) {
      res.render("index");
    });
  
    app.get("/about", function(req, res) {
        res.render("about");
    });

    app.get("/portfolio", function(req, res) {
        const remoteIp = req.clientIp;
        console.log(remoteIp);
        HighCastle.create({
          address: remoteIp,
          port: req.connection.remotePort,
          DateTime: new Date(),
        }).then(function(results) {
        })
        res.render("portfolio");
    });

    app.get("/contact", function(req, res) {
        res.render("contact");
    });

    app.get("/admin", function(req, res) {
        res.render("admin");
    });

    app.post("/admin", function(req, res) {
        Users.findOne({
            where: {
                username: req.body.username,
            }      
            }).then(function(result) {
                if (result) {
                    bcrypt.compare(req.body.password, result.password, function(err, authenticated) {
                        if (authenticated) {
                            HighCastle.findAll({}).then(function(data) {
                                res.json(data);  
                            });
                        }
                    });
                } 
                else {
                    res.sendStatus(404);
                }
            });

      });

      app.use(function(req, res){
        res.redirect("/");
      });
  };
  