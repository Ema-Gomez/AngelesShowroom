const pool = require("./../utils/bd");
const T_PRODUCTOS_IMAGENES = "productos_imagenes"

//Insertar imagen
const crearImagen = (obj) =>
pool
  .query("INSERT INTO ?? SET ?", [T_PRODUCTOS_IMAGENES, obj])
  .then((response) => response)
  .catch((e) => console.log(e));

//Traer imagen segun idProducto
const traerImagen = (idProducto) => 
pool
  .query("SELECT id, uid FROM ?? WHERE idProducto = ?", [T_PRODUCTOS_IMAGENES, idProducto])
  .then((result) => result)
  .catch((e) =>console.log(e));

//Modificar imagen
const actualizarImagen = (obj, idProducto) =>
    pool
      .query("UPDATE ?? SET ? WHERE idProducto = ?",[T_PRODUCTOS_IMAGENES, obj, idProducto])
      .then((result) => {result; console.log(result)})
      .catch((e) => console.log(e))

//Eliminar imagenes por idProducto
const eliminarImagen = (idProducto) =>
  pool
    .query("DELETE FROM ?? WHERE idProducto = ?", [T_PRODUCTOS_IMAGENES, idProducto])
    .then((result) => result)
    .catch((e) => console.log(e))

module.exports = {crearImagen ,traerImagen, actualizarImagen, eliminarImagen}