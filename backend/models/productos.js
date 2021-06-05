const { response } = require("express");
const pool = require("./../utils/bd");
const T_PRODUCTOS = "productos";
const T_CATEGORIAS = "categorias";
const T_PRODUCTOS_IMAGENES = "productos_imagenes"
// INSERTAR producto
const crearProducto = (producto) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_PRODUCTOS, producto])
    .then((response) => response)
    .catch((e) => console.log(e));

// Obtener TODOS los productos y sus imagenes
const traerProductosImagenes = () =>  
pool
  .query('SELECT i.id AS idImagen, i.idProducto, i.uid AS imagen, p.idCategorias, p.nombre, p.descripcion, p.precio, p.talle, p.color, c.nombreCategoria FROM ?? AS i JOIN ?? AS p ON i.idProducto = p.id JOIN ?? AS c ON p.idCategorias = c.id WHERE i.habilitado = 1 ', [T_PRODUCTOS_IMAGENES, T_PRODUCTOS, T_CATEGORIAS])
  .then((response) => response)
  .catch((e) => console.log(e))

//Obtener productos y sus imagenes segun CATEGORIA 
const traerProductoImagen = (categoria) =>  
pool
  .query('SELECT i.id AS idImagen, i.idProducto, i.uid AS imagen, p.idCategorias, p.nombre, p.descripcion, p.precio, p.talle, p.color, c.nombreCategoria FROM ?? AS i JOIN ?? AS p ON i.idProducto = p.id JOIN ?? AS c ON p.idCategorias = c.id WHERE i.habilitado = 1 AND c.nombreCategoria = ?', [T_PRODUCTOS_IMAGENES, T_PRODUCTOS, T_CATEGORIAS, categoria])
  .then((response) => response)
  .catch((e) => console.log(e))

//Obtener producto segun ID
const traerPorId = (id) =>
pool  
  .query("SELECT i.id AS idImagen, i.idProducto, i.uid AS imagen, p.idCategorias, p.nombre, p.descripcion, p.precio, p.talle, p.color FROM ?? AS i JOIN ?? AS p ON i.idProducto = p.id WHERE p.habilitado = ? AND p.id = ?", [T_PRODUCTOS_IMAGENES, T_PRODUCTOS, 1, id])
  .then((response) => response)
  .catch((e) => console.log(e))


//Obtener producto segun nombre
const traerPorNombre = async (nombreProducto) => {
  const query = "SELECT p.id, c.nombreCategoria AS categoria, p.nombre, p.descripcion, p.precio, p.talle, p.color FROM ?? AS p JOIN ?? AS c ON p.idCategorias = c.id WHERE p.habilitado = ? AND p.nombre = ?"
  const params = [T_PRODUCTOS, T_CATEGORIAS, 1, id];
  return await pool.query(query, params);
};

//Modificar producto
const actualizarProducto = (obj, id) =>
    pool
      .query("UPDATE ?? SET ? WHERE id = ?",[T_PRODUCTOS, obj, id])
      .then((result) => {result; console.log(result)})
      .catch((e) => console.log(e))

//Eliminar producto
const eliminarProducto = (idProducto) =>
    pool
      .query("DELETE FROM ?? WHERE id = ?", [T_PRODUCTOS, idProducto])
      .then((result) => result)
      .catch((e) => console.log(e))

module.exports = { traerPorId, traerProductoImagen, traerProductosImagenes, crearProducto, actualizarProducto, eliminarProducto};