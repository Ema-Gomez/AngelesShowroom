const {crearProducto, crearImagen, actualizarImagen, actualizarProducto} = require('./../models/productos');
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
}

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
      console.log("salio else!")
    } 
  } catch (e) {
    console.error(e);
  }

}


module.exports = {crearProductoImagen, editarProductoImagen};
