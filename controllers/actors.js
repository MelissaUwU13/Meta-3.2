const { Actor, Movie, MovieActor } = require("../models");
const { Op } = require("sequelize");

// Obtener todos los actores
const getAllActors = async (req, res) => {
  try {
    const { nationality, minBirthYear } = req.query;

    const where = {};

    if (nationality) where.nationality = nationality;
    if (minBirthYear) where.birthYear = { [Op.gte]: parseInt(minBirthYear) };

    const actors = await Actor.findAll({ where });

    res.json(actors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener actores" });
  }
};

// Obtener películas de un actor
const getMoviesByActor = async (req, res, next) => {
  try {
    const found = await Actor.findByPk(req.params.id);

    if (!found)
      return next({ status: 404, message: "Actor not found", code: 404 });

    const relations = await MovieActor.findAll({
      where: { actorId: req.params.id }
    });

    const movieIds = relations.map(r => r.movieId);

    const movies = await Movie.findAll({
      where: { id: movieIds }
    });

    const result = movies.map(m => {
      const rel = relations.find(r => r.movieId === m.id);
      return { ...m.dataValues, characterName: rel.characterName };
    });

    res.json(result);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener películas del actor" });
  }
};

// Crear actor
const createActor = async (req, res, next) => {
  try {
    const { id, name, birthYear } = req.body;

    if (!id || !name || !birthYear)
      return next({ status: 400, message: "Missing required fields", code: 400 });

    const existing = await Actor.findByPk(id);

    if (existing)
      return next({ status: 409, message: "Actor already exists", code: 409 });

    const newActor = await Actor.create(req.body);

    res.status(201).json(newActor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear actor" });
  }
};

module.exports = {
  getAllActors,
  getMoviesByActor,
  createActor
};
