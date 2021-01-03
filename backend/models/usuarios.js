const pool = require("../utils/bd");
const T_USUARIOS = "usuarios";

// Insertar usuario
const crearUsuario = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_USUARIOS, obj])
    .then((response) => response)
    .catch((e) => console.log(e));

//Funcion confirmacion Email
const confirmarEmail = async ({data, uid}) => {
  pool
    .query("UPDATE ?? SET ? WHERE uuid = ?", [T_USUARIOS, data, uid])
    .then((response) => response)
    .catch((e) => console.log(e));
}; 

//Actualizar tabla usuarios
const actualizarUsuario = (obj, id) =>
  pool
    .query("UPDATE ?? SET ? WHERE id = ?",[T_USUARIOS, obj, id])
    .then((result) => {result; console.log(result)})
    .catch((e) => console.log(e))


const traerUsuario = ({ nombreUsuario, password }) =>
pool
  .query("SELECT id FROM ?? WHERE nombreUsuario = ? and password = ? and habilitado = 1 and deshabilitado = 0 and admin = 0", [T_USUARIOS, nombreUsuario, password])
  .then((result) => result)
  .catch((e) => console.log(e));


//Traer solo los administradores
const traerAdmin = ({ usuario, password }) =>
  pool
    .query(
      "SELECT id FROM ?? WHERE nombreUsuario = ? and password = ? and habilitado = 1 and deshabilitado = 0 and admin = 1",
      [T_USUARIOS, usuario, password]
    )
    .then((result) => result)
    .catch((e) => e);
  
module.exports = {crearUsuario, confirmarEmail, actualizarUsuario,traerUsuario ,traerAdmin};