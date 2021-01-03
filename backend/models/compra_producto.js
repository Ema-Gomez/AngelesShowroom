//Tabla intermedia entre tabla productos y tabla compra

const pool = require('../utils/bd');
const T_COMPRA_PRODUCTOS = 'compra_producto'

//Instertar la compra de un producto
const crearCompraProd = (obj) => 
    pool
        .query("INSERT INTO ?? SET ?", [T_COMPRA_PRODUCTOS, obj])
        .then((response) => response)
        .catch((e) => console.log(e));

//Modificar la compra (cantidad)
const actualizarCompraProd = (obj, id) =>
    pool
      .query("UPDATE ?? SET ? WHERE id = ?",[T_COMPRA_PRODUCTOS, obj, id])
      .then((result) => {result; console.log(result)})
      .catch((e) => console.log(e));

//Eliminar compra
const eliminarCompraProd = (id) =>
    pool
      .query("DELETE FROM ?? WHERE id = ?", [T_COMPRA_PRODUCTOS, id])
      .then((result) => result)
      .catch((e) => console.log(e));

module.exports = {crearCompraProd, actualizarCompraProd, eliminarCompraProd}