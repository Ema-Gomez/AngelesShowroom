const express = require('express');
const router = express.Router();
const model = require('./../models/usuarios');
const {registrar} = require("./../services/registro");

const crear = async (req, res) => {
  try {
    const registro = req.body;
    await registrar(registro);
    console.log(registro);
    res.status(201).send({mensaje: "Has sido registrado"})
  } catch (e) {
    res.status(500).send({mensaje: "Ocurrio un error, no pudimos registrarte."})
  }
}; 

const verificarEmail = async (req, res, next) => {
  try{  
    const {uid} = req.params;
    const data = {habilitado: 1, deshabilitado: 0};
    const obj = {data, uid}
    await model.confirmarEmail(obj);
    res.status(200).send({mensaje:"Email verificado!"})
  } catch (e) {
    res.error(e);
    console.log(e);
  };
};

router.post('/crear', crear);
router.get('/verify/:uid', verificarEmail);
module.exports = router;