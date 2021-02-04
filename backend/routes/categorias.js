const express = require("express");
const router = express.Router();
const model = require('./../models/categorias');

//Obtener categorias existentes
const traerTodas = async(req, res) => {
    try{
        const categorias = await model.traer();
        res.json(categorias);

    } catch (e) {
        res.send(e)
    }
}

router.get('/', traerTodas);
module.exports = router