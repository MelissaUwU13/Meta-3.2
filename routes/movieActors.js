const express = require("express");
const movieActorsController = require("../controllers/movieActors.js");

const router = express.Router();

router.get("/:movieId/actors", movieActorsController.getActorsByMovie);
router.post("/:movieId/actors", movieActorsController.addActorToMovie);

module.exports = router;
