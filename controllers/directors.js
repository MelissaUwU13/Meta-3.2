const { Director, Movie } = require("../models");

// Obtener todos los directores
const getAllDirectors = async (req, res) => {
  try {
    const { nationality, minBirthYear } = req.query;

    const where = {};
    if (nationality) where.nationality = nationality;
    if (minBirthYear) where.birthYear = { gte: parseInt(minBirthYear) };

    const directors = await Director.findAll({ where });

    res.json(directors);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener directores" });
  }
};

// Obtener películas de un director
const getMoviesByDirector = async (req, res, next) => {
  try {
    const found = await Director.findByPk(req.params.id);

    if (!found)
      return next({ status: 404, message: "Director not found", code: 404 });

    const movies = await Movie.findAll({
      where: { directorId: req.params.id }
    });

    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener películas del director" });
  }
};

// Crear director
const createDirector = async (req, res, next) => {
  try {
    const { id, name, birthYear } = req.body;

    if (!id || !name || !birthYear)
      return next({ status: 400, message: "Missing required fields", code: 400 });

    const exists = await Director.findByPk(id);

    if (exists)
      return next({ status: 409, message: "Director already exists", code: 409 });

    const newDirector = await Director.create(req.body);

    res.status(201).json(newDirector);
  } catch (error) {
    res.status(500).json({ error: "Error al crear director" });
  }
};

module.exports = {
  getAllDirectors,
  getMoviesByDirector,
  createDirector
};
