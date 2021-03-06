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
  // TEST ROUTE
  app.get("/api/testytesterson", (req, res) => {
    res.json({
      stuff: "This is stuff from the server!"
    });
  });

  // GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Charity.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // POST route for saving a new post
  // routes are auto created?  I changed user, charityName, amount to just req.body
  
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Charity.create(req.body
    )
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
  
  app.post("/api/posts/peer", function(req, res) {
    console.log(req.body);
    db.PeerFunding.create(req.body
    )
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });


  app.post("/api/posts/reinburse", function(req, res) {
    console.log(req.body);
    db.Reinbursement.create(req.body
    )
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });



  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Charity.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
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
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};
