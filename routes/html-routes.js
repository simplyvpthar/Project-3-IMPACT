// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/homepage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

  app.get("/charity", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/charity.html"));
  });

  app.get("/scholarship", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/scholarApp.html"));
  });

  app.get("/sign-up", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signUp.html"));
  });
};
