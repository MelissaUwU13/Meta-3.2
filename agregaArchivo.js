const db=require('../modules/database/db');

db.Pelicula.create({
    nombre:"superman",
    idPelicula:1,
    año:2025,
    imagen: imagenData
}).then(()=>{
    console.log('Pelicula creada');
}).catch(err => {
    console.log(err);
}).then(()=>{
    console.log('Cerrando conexion');
    db.sequelize.close();
})