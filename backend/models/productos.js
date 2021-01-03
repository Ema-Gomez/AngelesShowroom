const pool = require("./../utils/bd");
const T_PRODUCTOS = "productos";
const T_CATEGORIAS = "categorias";
const T_PRODUCTOS_IMAGENES = "productos_imagenes"
// INSERTAR producto
const crearProducto = (producto) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_PRODUCTOS, producto])
    .then((response) => response)
    .catch((e) => e);

//Insertar imagen
const crearImagen = (obj) =>
pool
  .query("INSERT INTO ?? SET ?", [T_PRODUCTOS_IMAGENES, obj])
  .then((response) => response)
  .catch((e) => console.log(e));

// Obtener TODOS los productos
const traerTodos = async () => {
    const query = "SELECT p.id, c.id AS idCategoria, c.nombreCategoria AS categoria ,p.nombre, p.descripcion, p.precio, p.talle, p.color FROM ?? AS p JOIN ?? AS c ON p.idCategorias = c.id WHERE p.habilitado = ?"
    const params = [T_PRODUCTOS, T_CATEGORIAS, 1];
    return await pool.query(query, params)
};

//Obtener productos segun CATEGORIA
const TraerPorCat = async (categoria) => {
    const query = "SELECT p.id, c.nombreCategoria AS categoria, p.nombre, p.descripcion, p.precio, p.talle, p.color FROM ?? AS p JOIN ?? AS c ON p.idCategorias = c.id WHERE p.habilitado = ? AND c.nombre = ?"
    const params = [T_PRODUCTOS, T_CATEGORIAS, 1, categoria];
    return await pool.query(query, params);
};

//Obtener producto segun ID
const traerPorId = async (id) => {
    const query = "SELECT p.id, c.nombreCategoria AS categoria, p.nombre, p.descripcion, p.precio, p.talle, p.color FROM ?? AS p JOIN ?? AS c ON p.idCategorias = c.id WHERE p.habilitado = ? AND p.id = ?"
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
const eliminarProducto = (id) =>
    pool
      .query("DELETE FROM ?? WHERE id = ?", [T_PRODUCTOS, id])
      .then((result) => result)
      .catch((e) => console.log(e))

module.exports = {traerTodos, traerPorId, TraerPorCat, crearProducto, crearImagen, actualizarProducto, eliminarProducto};