import Sequelize from 'sequelize';

async function prueba(){

    const sequelize= new Sequelize(
    'peliculasAPI',
    'backenduser',
    'superpassword',
    {
        host:'localhost',
        dialect: 'mariadb'
    });

    try{
        const result = await sequelize.authenticate()
        if(result){
            console.log('Se conecto exitosamente');
        }
        await creaTablas(sequelize);
        await sequelize.close();
    }
    catch(error){
        console.log('Error de la BD', error);
    }
}


async function creaTablas(sequelize){

    const Pelicula = sequelize.define('peliculas',{
    nombre:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    idPelicula:{
        type:Sequelize.INTEGER,
        allowNull:true,
        unique:true
    },
    año:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    imagen:{
        type: Sequelize.BLOB,
        allowNull:true
    }
    });

    await Pelicula.sync({force:true});
}


//FALTA METER PARA AGREGAAAR, UNA FUNCION DEL ARCHIVO JS
prueba();