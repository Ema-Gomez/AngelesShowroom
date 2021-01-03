const pool = require("./../utils/bd");
const T_CATEGORIAS = "categorias";

const crear = (obj) => 
    pool
       .query("INSERT INTO ?? SET ?", [T_CATEGORIAS, obj])
       .then((response) => response)
       .catch((e) => console.log(e));

const eliminar = (id) =>
    pool
       .query("DELETE FROM ?? WHERE id = ?", [T_CATEGORIAS, id])
       .then((response) => response)
       .catch((e) => console.log(e));

const traer = () =>
    pool
       .query("SELECT id, nombreCategoria FROM ?? WHERE habilitado = ?", [T_CATEGORIAS, 1])
       .then((response) => response)
       .catch((e) => console.log(e));

module.exports = {crear, eliminar, traer};