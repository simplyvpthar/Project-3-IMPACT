// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    db.Charity.findAll({
      where: {
        charityname: req.params.charityname
      }
    })
      .then(function(dbCharity) {
        res.json(dbCharity);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Charity.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbCharity) {
        res.json(dbCharity);
      });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Charity.create({
      user: req.body.user,
      charityname: req.body.charityname,
      amount: req.body.amount
    })
      .then(function(dbCharity) {
        res.json(dbCharity);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Charity.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbCharity) {
        res.json(dbCharity);
      });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Charity.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbCharity) {
        res.json(dbCharity);
      });
  });
};
