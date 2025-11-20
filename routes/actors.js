const express = require("express");
const actorsController = require("../controllers/actors.js");

const router = express.Router();

router.get("/", actorsController.getAllActors);
router.get("/:id/movies", actorsController.getMoviesByActor);
router.post("/", actorsController.createActor);

module.exports = router;

