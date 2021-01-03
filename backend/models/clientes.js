const { response } = require("express");
const pool = require("./../utils/bd");
const T_CLIENTES = "clientes";

//Insertar cliente
const crearCliente = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_CLIENTES, obj])
    .then((response) => response)
    .catch((e) => e);

//Actualizar datos
const actualizarCliente = (obj, id) => 
  pool
    .query("UPDATE ?? SET ? WHERE id = ?", [T_CLIENTES, obj, id])
    .then((response) => response)
    .catch((e) => console.log(e));

module.exports = { crearCliente, actualizarCliente };
