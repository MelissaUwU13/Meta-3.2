import Sequelize from 'sequelize';

const sequelize= new Sequelize(
    'peliculasAPI',
    'backenduser',
    'superpassword',
    {
        host:'localhost',
        dialect: 'mariadb'
    }
);

sequelize
.authenticate()
.then(()=>{
    console.log("Se conecto exitosamente");
})
.then(()=>{
    cierra();
})
.catch(err=>{
    console.error('Error al conectarse a al BD:',err);
})


const cierra = async function () {
    await sequelize.close();
}