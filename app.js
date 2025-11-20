const express = require("express");

// Importar rutas en CommonJS
const directorsRoutes = require("./routes/directors");
const actorsRoutes = require("./routes/actors");
const movieActorsRoutes = require("./routes/movieActors");
const movieRoutes = require("./routes/movies"); 

// Base de datos
const db = require("./models");
db.sequelize.sync();

const app = express();
app.use(express.json());

// Endpoints
app.use("/api/movies", movieRoutes);
app.use("/api/directors", directorsRoutes);
app.use("/api/actors", actorsRoutes);

// movieActors también cuelga desde /api/movies
app.use("/api/movies", movieActorsRoutes);

const PORT = 3000;

// Manejo de errores genérico
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

// Ruta base
app.get("/", (req, res) => {
  res.json({ message: "CineBase API - alive 🎬" });
});

// Servidor
const server = app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

server.on("error", (error) =>
  console.log(`Error en el servidor: ${error}`)
);
