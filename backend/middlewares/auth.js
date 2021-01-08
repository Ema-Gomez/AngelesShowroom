const jwt = require('jsonwebtoken');

const adminToken = (req, res, next) => {
  const adminToken = req.headers['authorization'];
  if(adminToken.includes("adm")) {
    let adToken = adminToken.split(" ");
    let aToken = adToken.slice(1);
    let token = aToken.toString();
    console.log(token);
    jwt.verify(token, process.env.SECRET_TOKEN, (err, token) => {
      if(err) {
        res.sendStatus(403)
        res.end();
      }else{
        req.token = token
        console.log("admin autorizado!")
        next();
      }
    })
  } else {
    console.log("Error de auth!")
  }
};

const usuarioToken = (req, res, next) => {
  const webToken = req.headers['authorization'];
  if(typeof webToken !== 'undefined') {
    jwt.verify(webToken, process.env.SECRET_TOKEN, (err, webToken) => {
      if(err) {
        res.sendStatus(403)
      } else{
        req.token = webToken; 
        console.log(webToken);
        next();
      }
    })
  } else {
    res.sendStatus(403);
  }
};
module.exports = { adminToken, usuarioToken };
