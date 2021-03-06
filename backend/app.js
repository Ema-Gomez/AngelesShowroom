var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require("dotenv");
const cors = require('cors');
const {usuarioToken, adminToken} = require('./middlewares/auth');
dotenv.config();

const loginRouter = require('./routes/login');
const productosRouter = require('./routes/productos');
const registroRouter = require('./routes/registro');
const categoriasRouter = require('./routes/categorias');
const pagosRouter = require('./routes/pagos')
const adminProductosRouter = require('./routes/admin/productos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//Rutas usuarios
app.use('/login', loginRouter);
app.use('/productos', productosRouter);
app.use('/registro', registroRouter);
app.use('/categorias', categoriasRouter);
app.use('/pagos', pagosRouter);

//Rutas admin
app.use('/admin', adminToken, adminProductosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
