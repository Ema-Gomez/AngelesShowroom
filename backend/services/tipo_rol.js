const jwt = require("jsonwebtoken");

const tipoUsuario = (id, admin) => {
    if(admin == 1) {
        const adminToken = jwt.sign(id, process.env.SECRET_TOKEN);
        req.headers.authorization = `adm ${adminToken}`
        const {authorization} = req.headers;
        console.log(authorization);
        res.json({authorization, admin});
      } else {
        const token = jwt.sign(id, process.env.SECRET_TOKEN);
        req.headers.authorization = token;
        const {authorization} = req.headers; 
        console.log(authorization);
        console.log(admin)
        res.json({authorization, admin});
      }
  }

module.exports = {tipoUsuario}
  