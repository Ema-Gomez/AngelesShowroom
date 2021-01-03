const express = require('express');
const router = express.Router();
const model = require('../../models/categorias');

//Crear categoria
const nuevaCategoria = async (req, res) => {
    try{
        const body = JSON.parse(JSON.stringify(req.body));
        await model.crear(body);
        res.end();
    } catch(e) {
        console.log(e);
    };
}; 
//Eliminar categoria
const eliminar = async (req, response) => {
    try{
        const {id} = req.params;
        await model.eliminar(id);
    } catch(e) {
        console.log(e);
    }
};

//Obtener todas las categorias
const traer = async (req, res) => {
    try{
        const categorias = await model.traer();
        res.json(categorias)
    } catch(e) {
        console.log(e)
    }
};
router.get('/', traer)
router.post('/crear', nuevaCategoria);
router.delete('/eliminar', eliminar);
module.exports = router;