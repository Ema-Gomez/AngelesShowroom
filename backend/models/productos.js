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

//Insertar imagen
const crearImagen = (obj) =>
pool
  .query("INSERT INTO ?? SET ?", [T_PRODUCTOS_IMAGENES, obj])
  .then((response) => response)
  .catch((e) => console.log(e));

// Traer productos e imagenes
const traerProductoImagen = () =>  
pool
  .query('SELECT i.id AS idImagen, i.idProducto, i.uid AS imagen, p.idCategorias, p.nombre, p.descripcion, p.precio, p.talle, p.color, c.nombreCategoria FROM ?? AS i JOIN ?? AS p ON i.idProducto = p.id JOIN ?? AS c ON p.idCategorias = c.id WHERE i.habilitado = 1 ', [T_PRODUCTOS_IMAGENES, T_PRODUCTOS, T_CATEGORIAS])
  .then((response) => response)
  .catch((e) => console.log(e))


//Traer imagen segun idProducto
const traerImagen = (idProducto) => 
pool
  .query("SELECT id, uid FROM ?? WHERE idProducto = ?", [T_PRODUCTOS_IMAGENES, idProducto])
  .then((result) => result)
  .catch((e) =>console.log(e));

//Eliminar imagenes por id  
const eliminarImagen = (idProducto) =>
  pool
    .query("DELETE FROM ?? WHERE idProducto = ?", [T_PRODUCTOS_IMAGENES, idProducto])
    .then((result) => result)
    .catch((e) => console.log(e))

// Obtener TODOS los productos
const traerTodos = async () => {
    const query = "SELECT p.id, c.id AS idCategoria, c.nombreCategoria AS categoria ,p.nombre, p.descripcion, p.precio, p.talle, p.color JOIN  FROM ?? AS p JOIN ?? AS c ON p.idCategorias = c.id WHERE p.habilitado = ?"
    const params = [T_PRODUCTOS, T_CATEGORIAS, 1];
    return await pool.query(query, params)
};

//Obtener productos segun CATEGORIA
const TraerPorCat = async (categoria) => {
    const query = "SELECT p.id, c.nombreCategoria AS categoria, p.nombre, p.descripcion, p.precio, p.talle, p.color FROM ?? AS p JOIN ?? AS c ON p.idCategorias = c.id WHERE p.habilitado = ? AND c.nombreCategoria = ?"
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
const eliminarProducto = (idProducto) =>
    pool
      .query("DELETE FROM ?? WHERE id = ?", [T_PRODUCTOS, idProducto])
      .then((result) => result)
      .catch((e) => console.log(e))

module.exports = {traerTodos, traerPorId, traerImagen, TraerPorCat, traerProductoImagen, crearProducto, crearImagen, actualizarProducto, eliminarProducto, eliminarImagen};