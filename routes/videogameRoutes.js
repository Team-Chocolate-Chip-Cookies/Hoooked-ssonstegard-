// /routes/addVideogame.js
// A route used to add Videogames to the DB

var db = require("../db/models");

module.exports = function (app) {
    // Reads all Videogames from the DB
    app.get("/api/allVideogames/", function (req, res) {
        db.Videogame.findAll({})
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
    // Searches all Videogames from the DB for a specific title
    app.get("/api/findVideogame/:title", function (req, res) {
        db.Videogame.findAll({
            where: {
              title: req.params.title
            }
          })
            .then(function(dbPost) {
              res.json(dbPost);
            });
    });
    // Adds a new Videogame
    app.post("/api/addVideogame", function (req, res) {
        db.Videogame.create({
            title: req.body.title,
            rating: req.body.rating,
            cover: req.body.cover,
            category: req.body.category,
            synopsis: req.body.synopsis
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
}