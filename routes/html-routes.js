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
    res.sendFile(path.join(__dirname, "../public/homePage.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/charity", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/charity.html"));
  });

  app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dashboardTemplate.html"));
  });

  app.get("/scholarship", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/scholarship.html"));
  });

  app.get("/peer-funding", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/peerFunding.html"));
  });

  app.get("/create-account", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createAccount.html"));
  });
};
