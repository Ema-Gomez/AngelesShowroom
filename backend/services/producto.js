const {crearProducto, crearImagen} = require('./../models/productos');
const { imgFile } = require("./../utils/fileHandler");

const crearProductoImagen = async (body, file) => {
    try {
      const {insertId: idProducto} = await crearProducto(body); // retorna el insertId 
      console.log(idProducto);
      const uid = imgFile(file); // retorna el name de la imagen
      const imagen = { idProducto, uid };
      await crearImagen(imagen);
    } catch (e) {
      console.error(e);
    }
};

module.exports = {crearProductoImagen};
