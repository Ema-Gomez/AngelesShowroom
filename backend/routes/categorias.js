const express = require("express");
const router = express.Router();
const model = require('./../models/categorias');

const traerTodas = async(req, res) => {
    const categorias = await model.traer();
    res.json(categorias);
    console.log(categorias);
}

router.get('/', traerTodas);
module.exports = router