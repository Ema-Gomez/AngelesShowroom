const express = require('express');
const router = express.Router();
const model = require('../../models/categorias');

//Crear categoria
const nuevaCategoria = async (req, res) => {
    try{
        const body = JSON.parse(JSON.stringify(req.body));
        await model.crear(body);
        res.status(200).json({
            estado:"exitoso",
            mensaje: "Categoria agregada!"
        })
    } catch(e) {
        console.log(e);
    };
}; 
//Eliminar categoria
const eliminar = async (req, response) => {
    try{
        const {id} = req.params;
        await model.eliminar(id);
        res.status(200).json({
            estado:"exitoso",
            mensaje: "Categoria eliminada!"
        })
    } catch(e) {
        res.send(e);
    }
};

//Obtener todas las categorias
const traer = async (req, res) => {
    try{
        const categorias = await model.traer();
        res.json(categorias)
        res.status(200).json({
            estado:"exitoso",
            mensaje: "Categorias obtenidas!"
        })
    } catch(e) {
        res.send(e)
    }
};
router.get('/', traer)
router.post('/crear', nuevaCategoria);
router.delete('/eliminar', eliminar);
module.exports = router;