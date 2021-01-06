const express = require('express');
const router = express.Router();
const model = require('../../models/productos');
const {traer} = require('../../models/categorias');
const multer = require("multer"); // npm i multer
const config = { dest: `./public/tmp` };
const upload = multer(config);
const service = require("../../services/producto");

const ver = (req, res) => res.render('producto');

//Traer productos y categorias(para form de nuevo producto)
const traerTodos = async (req, res) => {
    try{
        const productos = await model.traerTodos();
        res.json(productos);
        console.log(productos);
    } catch (e) {
        res.sendStatus(403);
    };
};

//INSERTAR producto e imagen
const crear = async (req, res) => {
    const body = req.body;
    const file = req.file;
    console.log(obj);
    await service.crearProductoImagen(body, file);
    res.end();
}


//Modificar producto
const actualizar = async (req, res) => {
    try {
        const {id} = req.params;
        const obj = req.body;
        return await model.update(obj, id)
    } catch (error) {
        console.log(error)
    }
}

//Eliminar producto
const eliminar = async (req, res) => {
    try{
        const {id:idProducto} = req.params;
        const {id} = await model.traerImagen(idProducto)
        await model.eliminarImagen(id);
        await model.eliminarProducto(idProducto);
    } catch (error) {
        console.log(error)
    }
}
router.get('/', ver)
router.get("/productos", traerTodos);
router.post("/productos/crear", upload.single("imagen"), crear);
router.put('/productos/:id/editar', actualizar);
router.delete('/productos/:id/eliminar', eliminar);

module.exports = router;