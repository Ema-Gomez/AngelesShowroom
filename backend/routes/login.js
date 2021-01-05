const express = require("express");
const router = express.Router();
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");
const { validateLogin } = require("./../middlewares/users");
const { traerUsuario } = require("./../models/usuarios");

const view = (req, res) => res.render('login');
const login = async (req, res) => {
  try {
    req.body.password = sha1(req.body["password"]);
    const data = req.body;
    const result = await traerUsuario(data);
    const{id, admin} = result
    if(admin === 1) {
      const adminToken = jwt.sign(id, process.env.SECRET_TOKEN);
      req.headers.authorization = adminToken
      const {authorization} = req.headers;
      console.log(authorization);
      res.json(authorization);
    } else{
      const token = jwt.sign(id, process.env.SECRET_TOKEN);
      req.headers.authorization = token;
      const {authorization} = req.headers; 
      res.json(authorization);
    }
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
