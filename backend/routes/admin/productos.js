const express = require('express');
const router = express.Router();
const model = require('../../models/productos');
const {traer} = require('../../models/categorias');
const multer = require("multer"); // npm i multer
const config = { dest: `./public/tmp` };
const upload = multer(config);
const service = require("../../services/producto");

//Traer categorias el form de nuevo producto
const traerCategorias = async (req, res) => {
    try{
        const categorias = await traer();
        res.render('productos', {categorias});
    } catch(e) {
        console.log(e);
    }
}

//INSERTAR producto e imagen
const crear = async (req, res) => {
    const body = JSON.parse(JSON.stringify(req.body));
    const file = JSON.parse(JSON.stringify(req.file));
    const obj = {body, file}
    console.log(obj);
    await service.createProducto(obj);
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
        const {id} = req.params;
        return await model.eliminar(id);
    } catch (error) {
        console.log(error)
    }
}

router.get("/", traerCategorias);
router.post("/crear", upload.single("imagen"), crear); // request -> file : {}
router.put('/editar/:id', actualizar);
router.delete('/:categoria/:id/eliminar', eliminar);

module.exports = router;