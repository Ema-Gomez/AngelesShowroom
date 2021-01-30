const {crearProducto, actualizarProducto} = require('./../models/productos');
const { crearImagen, actualizarImagen} = require('./../models/productos_imagenes')
const { imgFile } = require("./../utils/fileHandler");

//Servicio para insertar producto e imagen en sus respectivas tablas
const crearProductoImagen = async (producto, file) => {
  try {
    const {insertId: idProducto} = await crearProducto(producto); // retorna el insertId 
    const uid = imgFile(file); // retorna el name de la imagen
    const obj = { idProducto, uid };
    const {insertId : idFile} = await crearImagen(obj);
    return idFile
  } catch (e) {
    console.error(e);
  }
}

//Servicio para editar producto e imagen por separado o en simultaneo
const editarProductoImagen = async (producto, file, idProducto) => {
  try {
    if(file == undefined){
      await actualizarProducto(producto, idProducto);
    }
    if (producto == undefined) {
      await actualizarImagen(imagen, idProducto );
    } else {
      const uid = imgFile(file); // retorna el name de la imagen
      imagen = {uid : uid}
      await actualizarImagen(imagen, idProducto );
      await actualizarProducto(producto, idProducto); // retorna el insertId
    } 
  } catch (e) {
    console.error(e);
  }

}


module.exports = {crearProductoImagen, editarProductoImagen};
