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

const Usuario = sequelize.define('Usuario', {
  nombre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

const Cuenta = sequelize.define('Cuenta', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
{
    tableName:'Cuentas'
});


Usuario.hasMany(Cuenta, { 
  as: 'cuentas',
  foreignKey: 'usuarioId' 
});

Cuenta.belongsTo(Usuario, { 
  as: 'usuario',
  foreignKey: 'usuarioId'
});

// Usuario.hasMany(Cuenta);
// Cuenta.belongsTo(Usuario);


async function crearUsuarioConCuenta() {
  try {
    await sequelize.sync({ force: true }); 

    const usuario = await Usuario.create({
      nombre: 'John Doe',
      email: 'john.doe@example.com'
    });

    const cuenta = await Cuenta.create({
      username: 'johndoe',
      password: 'password123',
      //usuarioId: usuario.id // Set the foreign key directly
    });

    await usuario.addCuentas([cuenta]);

    console.log('Usuario y Cuenta creados correctamente');
  } catch (error) {
    console.error('Error al crear Usuario y Cuenta:', error);
  }
}

async function obtenerUsuarioConCuenta() {
  try {
    const usuario = await Usuario.findOne(1, {
      where: {
        email:'john.doe@password.com'
      }
    },
    {include:[{
        model: Cuenta,
        as: 'cuentas' 
      }]
    });

    if (usuario) {
      console.log('Nombre:', usuario.nombre);
      console.log('Email:', usuario.email);
      
      if (usuario.cuentas && usuario.cuentas.length > 0) {
        console.log('Username:', usuario.cuentas[0].username);
        console.log('Password:', usuario.cuentas[0].password);
      } else {
        console.log('No se encontraron cuentas para este usuario');
      }
    } else {
      console.log('Usuario no encontrado');
    }
  } catch (error) {
    console.error('Error al obtener Usuario y Cuenta:', error);
  }
}

crearUsuarioConCuenta().then(() => {
  setTimeout(obtenerUsuarioConCuenta, 1000);
});