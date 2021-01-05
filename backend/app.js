var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require("dotenv");
const cors = require('cors')
const {usuarioToken, authAdmin, adminToken} = require('./middlewares/auth');
dotenv.config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const compraRouter = require('./routes/compra');
const loginRouter = require('./routes/login');
const misDatosRouter = require('./routes/mis_datos');
const productosRouter = require('./routes/productos');
const registroRouter = require('./routes/registro');
const adminProductosRouter = require('./routes/admin/productos');
const adminCategoriasRouter = require('./routes/admin/categorias');
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

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/compra', compraRouter);
app.use('/login', loginRouter);
app.use('/mis_datos', usuarioToken, misDatosRouter);
app.use('/productos', usuarioToken, productosRouter);
app.use('/registro', registroRouter);

//Rutas admin
app.use('/admin/productos', adminToken ,adminProductosRouter);
app.use('/admin/categorias', adminToken, adminCategoriasRouter);

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
