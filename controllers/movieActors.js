const { Movie, Actor, MovieActor } = require("../models");

// Obtener actores de una película
const getActorsByMovie = async (req, res, next) => {
  try {
    const movieId = parseInt(req.params.movieId, 10);

    const found = await Movie.findByPk(movieId);

    if (!found)
      return next({ status: 404, message: "Movie not found", code: 404 });

    const relations = await MovieActor.findAll({
      where: { movieId }
    });

    const actorIds = relations.map(r => r.actorId);

    const actors = await Actor.findAll({
      where: { id: actorIds }
    });

    const result = actors.map(a => {
      const rel = relations.find(r => r.actorId === a.id);
      return { ...a.dataValues, characterName: rel.characterName };
    });

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: "Error al obtener actores de la película" });
  }
};

// Agregar actor a una película
const addActorToMovie = async (req, res, next) => {
  try {
    const movieId = parseInt(req.params.movieId, 10);

    const found = await Movie.findByPk(movieId);

    if (!found)
      return next({ status: 404, message: "Movie not found", code: 404 });

    const { actorId, characterName } = req.body;

    if (!actorId || !characterName)
      return next({ status: 400, message: "Missing actorId or characterName", code: 400 });

    const parsedActorId = parseInt(actorId, 10);

    const foundActor = await Actor.findByPk(parsedActorId);
    if (!foundActor)
      return next({ status: 422, message: "Actor does not exist", code: 422 });

    const exists = await MovieActor.findOne({
      where: { movieId, actorId: parsedActorId }
    });

    if (exists)
      return next({ status: 409, message: "Actor already in movie", code: 409 });

    const newRelation = await MovieActor.create({
      movieId,
      actorId: parsedActorId,
      characterName
    });

    res.status(201).json(newRelation);

  } catch (error) {
    res.status(500).json({ error: "Error al agregar actor a la película" });
  }
};

module.exports = {
  getActorsByMovie,
  addActorToMovie
};
