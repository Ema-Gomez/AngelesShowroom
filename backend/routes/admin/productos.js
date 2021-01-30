const express = require('express');
const router = express.Router();
const model = require('../../models/productos');
const {eliminarImagen} = require('../../models/productos_imagenes')
const {traer} = require('../../models/categorias');
const multer = require("multer"); // npm i multer
const config = { dest: `./public/tmp` };
const upload = multer(config);
const service = require("../../services/producto");

//Traer productos
const traerTodos = async (req, res) => {
    try{
        const productos = await model.traerProductoImagen();
        res.json(productos);
        console.log(productos);
    } catch (e) {
        console.log("Error en routes!")
        res.sendStatus(403);
    };
};

//INSERTAR producto e imagen
const crear = async (req, res) => {
    try{
        const producto = req.body;
        const file = req.file;
        await service.crearProductoImagen(producto, file);
        res.status(200).json({
            estado:"exitoso",
            mensaje: "Producto agregado!"
        })
    } catch (e) {
        res.send(e)

    }
}


//Modificar producto
const actualizar = async (req, res) => {
    try {
        const {id: idProducto} = req.params;
        const producto = req.body;
        const file = req.file;
        await service.editarProductoImagen(producto, file, idProducto);
        res.status(200).json({
            estado:"exitoso",
            mensaje: "Producto editado!"
        })
    } catch (error) {
        res.send(error)
    }
}

//Eliminar producto
const eliminar = async (req, res) => {
    try{
        const {id:idProducto} = req.params;
        await eliminarImagen(idProducto);
        await model.eliminarProducto(idProducto);
        res.status(200).json({
            estado:"exitoso",
            mensaje: "Producto eliminado!"
        })
    } catch (error) {
        console.log(error)
    }
}

router.get("/productos", traerTodos);
router.post("/productos/crear", upload.single("imagen"), crear);
router.put('/productos/:id/editar', upload.single('imagen'), actualizar);
router.delete('/productos/:id/eliminar', eliminar);

module.exports = router;