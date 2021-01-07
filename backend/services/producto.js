const {crearProducto, crearImagen} = require('./../models/productos');
const { imgFile } = require("./../utils/fileHandler");

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
};

module.exports = {crearProductoImagen};
