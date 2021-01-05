const jwt = require('jsonwebtoken');

const adminToken = (req, res, next) => {
  const webToken = req.headers['authorization'];

  jwt.verify(webToken, process.env.SECRET_TOKEN, (err, webToken) => {
    if(err) {
      res.sendStatus(403)
    } else{
      req.token = webToken; 
      console.log(webToken);
      next();
    }
  })
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
