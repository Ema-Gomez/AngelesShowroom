// SUPER GLOBALES
const express = require("express");
const router = express.Router();
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");
const { validateLogin } = require("./../middlewares/users");
//var getIP = require("ipware")().get_ip;
const { traerUsuario } = require("./../models/usuarios");

const view = (req, res) => res.render('login');
const login = async (req, res) => {
  try {
    req.body.password = sha1(req.body["password"]);
    const data = req.body;
    const [{id}] = await traerUsuario(data);
    const token = jwt.sign(id, process.env.SECRET_TOKEN);
    req.headers.authorization = token;
    req.session.carrito = []; 
    console.log(req.session);
    res.end();
  } catch (e) {
    console.log(e)
    // res.sendStatus(500);
    // res.render('error')
  }
};

// req.cookie
/*
router.get("/", (req, res) => {
  const ipInfo = getIP(req);
  console.log(ipInfo);
  res.render("login", {});
});
*/
router.get('/', view);
router.post("/in", validateLogin, login);

module.exports = router;
