const { Movie, Director } = require("../models");
const { Op } = require("sequelize");

const getAllMovies = async (req, res) => {
  try {
    const { genre, minRating, minYear, maxYear } = req.query;

    const where = {};

    if (genre) {
      where.genre = { [Op.like]: `%${genre}%` };
    }

    if (minRating) {
      where.rating = { [Op.gte]: parseFloat(minRating) };
    }

    if (minYear || maxYear) {
      where.releaseYear = {};

      if (minYear) {
        where.releaseYear[Op.gte] = parseInt(minYear);
      }
      if (maxYear) {
        where.releaseYear[Op.lte] = parseInt(maxYear);
      }
    }

    const movies = await Movie.findAll({ where });
    res.json(movies);

  } catch (error) {
    res.status(500).json({ error: "Error al obtener películas" });
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const found = await Movie.findByPk(req.params.id);

    if (!found)
      return next({ status: 404, message: "Movie not found", code: 404 });

    res.json(found);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener película" });
  }
};

const createMovie = async (req, res, next) => {
  try {
    const { id, title, releaseYear, directorId } = req.body;

    if (!id || !title || !releaseYear || !directorId)
      return next({ status: 400, message: "Missing required fields", code: 400 });

    const existing = await Movie.findByPk(id);
    if (existing)
      return next({ status: 409, message: "Movie already exists", code: 409 });

    const directorExists = await Director.findByPk(directorId);
    if (!directorExists)
      return next({ status: 422, message: "Director does not exist", code: 422 });

    const newMovie = await Movie.create(req.body);

    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: "Error al crear película" });
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const found = await Movie.findByPk(req.params.id);

    if (!found)
      return next({ status: 404, message: "Movie not found", code: 404 });

    await found.update(req.body);

    res.json(found);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar película" });
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const found = await Movie.findByPk(req.params.id);

    if (!found)
      return next({ status: 404, message: "Movie not found", code: 404 });

    await found.destroy();

    res.json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar película" });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
};
