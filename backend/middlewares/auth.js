const jwt = require('jsonwebtoken');

const authAdmin = (req, res, next) => {
  req.session.idUser
    ? ((req.id = req.session.idUser), next())
    : res.redirect("/login");
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
module.exports = { authAdmin, usuarioToken };
