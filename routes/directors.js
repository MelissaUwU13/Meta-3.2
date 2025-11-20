const express = require("express");
const directorsController = require("../controllers/directors.js");

const router = express.Router();

router.get("/", directorsController.getAllDirectors);
router.get("/:id/movies", directorsController.getMoviesByDirector);
router.post("/", directorsController.createDirector);

module.exports = router;
