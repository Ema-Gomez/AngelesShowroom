const express = require('express');
const router = express.Router();
const model = require('./../models/usuarios');
const {registrar} = require("./../services/registro");

const mostrar = (req, res) => res.render("registro");

const crear = async (req, res) => {
  try {
    const registro = JSON.parse(JSON.stringify(req.body));
    await registrar(registro);
    console.log(registro);
    res.render("registro", {
      message: "Usuario registrado, se envío un mail a tu casilla ",
    });
  } catch (e) {
    console.log(e);
  }
}; 

const verificarEmail = async (req, res, next) => {
  try{  
    const {uid} = req.params;
    const data = {habilitado: 1, deshabilitado: 0};
    const obj = {data, uid}
    await model.confirmarEmail(obj);
    res.end();
  } catch (e) {
    console.log(e);
  };
};

router.get('/', mostrar);
router.post('/crear', crear);
router.get('/verify/:uid', verificarEmail);
module.exports = router;