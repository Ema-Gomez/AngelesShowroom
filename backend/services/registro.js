const { crearCliente } = require("../models/clientes");
const { crearUsuario } = require("../models/usuarios");
const { enviarMail } = require("./../services/mail");
const sha1 = require("sha1");
const { v4: uuid } = require("uuid");

//Servicio para registro de usuario
const registrar = async ({nombre, apellido, email, telefono, nombreUsuario, password} = {}) => {
  try {
    const uid = uuid()
    const { insertId: idCliente } = await crearCliente({nombre, apellido, email, telefono,});
    const usuario = await crearUsuario({idCliente, nombreUsuario, password: sha1(password), uuid: uid});
    const mailObject = {
      email,
      message: `
          <h2>Gracias por registrarte ${nombre} ${apellido}</h2>
          <h3>No olvides verificar tu cuenta para seguir </h3>
          <a href=${process.env.URL_SERVER}:${process.env.PORT}/registro/verify/${uid}>Enlace mágico </a>
        `,
    };
    await enviarMail(mailObject); 
    return usuario;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { registrar };
