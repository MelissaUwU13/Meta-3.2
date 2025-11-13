import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "peliculasAPI",
  "backenduser",
  "superpassword",
  {
    host: "localhost",
    dialect: "mariadb",
  }
);

const Libro = sequelize.define("Libro", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descripcion: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  precio: {
    type: Sequelize.DECIMAL(0, 10),
    allowNull: false,
  },
});

const Autor = sequelize.define("Autor", {
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  apellido: {
    type: Sequelize.STRING,
    allowNull: false,
  }},{
    timestamps: false,
    name: {
      singular: "Autor",
      plural: "Autores",
  
    },
    tableName: "Autores",
  }
);

// Relación muchos a muchos entre Libro y Autor
Libro.belongsToMany(Autor, { through: "LibroAutor", as: "autores" });
Autor.belongsToMany(Libro, { through: "LibroAutor", as: "libros" });

async function crearLibroAutor() {
  try {
    await sequelize.sync({force: true});

    const libro = await Libro.create({
      titulo: "El señor de los anillos",
      descripcion: "Libro de fantasía",
      precio: 20.5,
    });

    const autor = await Autor.create({
      nombre: "J.R.R. Tolkien",
      apellido: "Tolkien",
    });

    // Asignar el Autor al Libro
    await libro.addAutores([autor]);

    console.log("Libro y Autor creados correctamente");
  } catch (error) {
    console.error("Error al crear Libro y Autor:", error);
  }
}

async function obtenerLibrosConAutores() {
  try {
    await sequelize.sync();

    const libros = await Libro.findAll({
      where:{
            precio:20.5,
        }
    },{
      include: {
        model: Autor,
        as: "autores",
      },
    });
    console.log("Libros con autores:", libros[0]);
    if (libros && libros.length > 0) {
      libros.forEach((libro) => {
        console.log("Título:", libro.titulo);
        console.log("Descripción:", libro.descripcion);
        console.log("Precio:", libro.precio);
        console.log("Autores:");
        libro.autores.forEach((autor) => {
          console.log(autor.nombre + " " + autor.apellido);
        });
        console.log("------------------");
      });
    }
  } catch (error) {
    console.error("Error al obtener libros con autores:", error);
  }
}

crearLibroAutor();
obtenerLibrosConAutores();