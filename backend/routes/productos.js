const express = require('express');
const router = express.Router();
const model = require('../models/productos')

//Obtener TODOS los productos
const traerTodos = async (req, res) => {
    try{
        const productos = await model.traerProductosImagenes();
        res.json(productos);
        console.log(productos);
    } catch (e) {
        res.sendStatus(403);
        console.log(e);
    };
};

//Obtener productos segun CATEGORIA
const traerPorCat = async (req, res) => {
    try{
        const {categoria} = req.params;
        const productos = await model.traerProductoImagen(categoria);
        res.json(productos);
    } catch (e) {
        console.log(e);
    };
};

//Obtener un producto segun ID
const traerPorID = async (req, res) => {
    try{
        const {id} = req.params;
        const [producto] = await model.traerPorId(id);
        res.json(producto);
    } catch (e) {
        console.log(e);
    };
};

router.get('/todos', traerTodos);
router.get('/:categoria', traerPorCat);
router.get('/:categoria/:id',traerPorID);

module.exports = router;