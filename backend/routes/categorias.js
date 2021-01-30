const express = require("express");
const router = express.Router();
const model = require('./../models/categorias');

//Obtener categorias existentes
const traerTodas = async(req, res) => {
    try{
        const categorias = await model.traer();
        res.json(categorias);
        res.status(200).json({
            estado:"exitoso",
            mensaje: "Categorias obtenidas!"
        })
    } catch (e) {
        res.send(e)
    }
}

router.get('/', traerTodas);
module.exports = router