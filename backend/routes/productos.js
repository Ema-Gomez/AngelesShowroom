const express = require('express');
const router = express.Router();
const model = require('../models/productos')
const {agregarProducto} = require('../services/carrito');

//Obtener TODOS los productos
const traerTodos = async (req, res) => {
    try{
        const productos = await model.traerTodos();
        const imagenes = await model.traerImagenes();
        res.json({productos, imagenes});
        console.log(productos, imagenes);
    } catch (e) {
        res.sendStatus(403);
        console.log(e);
    };
};

//Obtener productos segun CATEGORIA
const traerPorCat = async (req, res) => {
    try{
        const {categoria} = req.params;
        const productos = await model.TraerPorCat(categoria);
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

//Agregar producto a carrito
const agregarAlCarrito = async (req,res) => {
    try{/*
        const {id} = req.params;
        const [producto] = await model.traerPorId(id);
        */
        console.log(req.session);
        //const {carrito} = req.session;
        
    } catch(e) {
        console.log(e);
    }


}
router.get('/todos', traerTodos);
router.get('/:categoria', traerPorCat);
router.get('/:categoria/:id',traerPorID);
router.get('/:categoria/:id/agregar', agregarAlCarrito);
module.exports = router;