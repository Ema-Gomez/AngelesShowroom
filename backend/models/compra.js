const pool = require("./../utils/bd");

//Insertar compra 
const crearCompra = (obj) => 
    pool
        .query("INSERT INTO ?? SET ?", [T_COMPRA_PRODUCTOS, obj])
        .then((response) => response)
        .catch((e) => console.log(e));

//Modificar la compra (cantidad)
const actualizarCompra = (obj, id) =>
    pool
      .query("UPDATE ?? SET ? WHERE id = ?",[T_COMPRA_PRODUCTOS, obj, id])
      .then((result) => {result; console.log(result)})
      .catch((e) => console.log(e));

//Eliminar compra
const eliminarCompra = (id) =>
    pool
      .query("DELETE FROM ?? WHERE id = ?", [T_COMPRA_PRODUCTOS, id])
      .then((result) => result)
      .catch((e) => console.log(e));
    
module.exports = {crearCompra, actualizarCompra, eliminarCompra}