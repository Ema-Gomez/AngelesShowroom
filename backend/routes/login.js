const express = require("express");
const router = express.Router();
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");
const { validateLogin } = require("./../middlewares/users");
const { traerUsuario } = require("./../models/usuarios");

const login = async (req, res) => {
  try {
    req.body.password = sha1(req.body["password"]);
    const data = req.body;
    const [{id, admin}] = await traerUsuario(data);
    if(admin == 1) {
      const adminToken = jwt.sign(id, process.env.SECRET_TOKEN);
      console.log(adminToken);
      req.headers.authorization = `adm ${adminToken}`
      const {authorization} = req.headers;
      console.log(authorization);
      res.json(authorization);
    } else {
      const token = jwt.sign(id, process.env.SECRET_TOKEN);
      req.headers.authorization = token;
      const {authorization} = req.headers; 
      console.log(authorization);
      res.json(authorization);
    }
  } catch (e) {
    console.log(e);
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
router.post("/in", validateLogin, login);

module.exports = router;
