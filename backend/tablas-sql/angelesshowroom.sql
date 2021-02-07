-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-02-2021 a las 19:01:04
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `angelesshowroom`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombreCategoria` varchar(30) NOT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `deshabilitado` int(11) NOT NULL DEFAULT 0,
  `tsCreate` timestamp NOT NULL DEFAULT current_timestamp(),
  `tsUpdate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombreCategoria`, `habilitado`, `deshabilitado`, `tsCreate`, `tsUpdate`) VALUES
(1, 'Jeans', 1, 0, '2020-12-16 21:14:41', '2020-12-16 21:14:41'),
(2, 'Tops', 1, 0, '2020-12-16 21:35:50', '2020-12-16 21:35:50'),
(3, 'Shorts', 1, 0, '2020-12-16 21:36:26', '2020-12-16 21:36:26'),
(4, 'Sweaters Y cardigan', 1, 0, '2020-12-16 21:36:53', '2020-12-16 21:36:53'),
(5, 'Bodys', 1, 0, '2021-01-12 22:24:51', '2021-01-12 22:24:51');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `idDireccionEnvio` int(11) DEFAULT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `DNI` int(11) DEFAULT NULL,
  `email` varchar(30) NOT NULL,
  `telefono` int(30) NOT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `deshabilitado` int(11) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `idDireccionEnvio`, `nombre`, `apellido`, `DNI`, `email`, `telefono`, `habilitado`, `deshabilitado`, `ts_create`, `ts_update`) VALUES
(2, NULL, 'Emanuel', 'Gomez', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-19 18:18:22', '2020-12-19 18:18:22'),
(3, NULL, 'Belen', 'Ferreira', NULL, 'belenferreira38792@gmail.com', 2147483647, 1, 0, '2020-12-29 19:22:02', '2020-12-29 19:22:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idFormaPago` int(11) NOT NULL,
  `idEstadoPago` int(11) NOT NULL,
  `fecha` date NOT NULL DEFAULT current_timestamp(),
  `total` float(10,2) NOT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `deshabilitado` int(11) NOT NULL DEFAULT 0,
  `tsCreate` timestamp NOT NULL DEFAULT current_timestamp(),
  `tsUpdate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra_producto`
--

CREATE TABLE `compra_producto` (
  `id` int(11) NOT NULL,
  `idCompra` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `subtotal` double NOT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `deshabilitado` int(11) NOT NULL DEFAULT 0,
  `tsCreate` timestamp NOT NULL DEFAULT current_timestamp(),
  `tsUpdate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direccionenvio`
--

CREATE TABLE `direccionenvio` (
  `id` int(11) NOT NULL,
  `provincia` varchar(30) NOT NULL,
  `ciudad` varchar(30) NOT NULL,
  `codigoPostal` varchar(30) NOT NULL,
  `calleNombre` varchar(30) NOT NULL,
  `calleNumero` varchar(7) NOT NULL,
  `piso` varchar(3) DEFAULT NULL,
  `puerta` varchar(3) DEFAULT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `deshabilitado` int(11) NOT NULL DEFAULT 0,
  `tsCreate` timestamp NOT NULL DEFAULT current_timestamp(),
  `tsUpdate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_pago`
--

CREATE TABLE `estado_pago` (
  `id` int(11) NOT NULL,
  `idCompra` int(11) NOT NULL,
  `idFormaPago` int(11) NOT NULL,
  `estado` varchar(30) NOT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `deshabilitado` int(11) NOT NULL DEFAULT 0,
  `tsCreate` timestamp NOT NULL DEFAULT current_timestamp(),
  `tsUpdate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formapago`
--

CREATE TABLE `formapago` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `deshabilitado` int(11) NOT NULL DEFAULT 0,
  `tsCreate` timestamp NOT NULL DEFAULT current_timestamp(),
  `tsUpdate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `idCompra` int(11) NOT NULL,
  `idDireccionEnvio` int(11) NOT NULL,
  `envio` varchar(30) NOT NULL,
  `fecha` int(11) NOT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `deshabilitado` int(11) NOT NULL DEFAULT 0,
  `tsCreate` timestamp NOT NULL DEFAULT current_timestamp(),
  `tsUpdate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `idCategorias` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` float(10,2) NOT NULL,
  `talle` int(10) NOT NULL,
  `color` varchar(30) NOT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `deshabilitado` int(11) NOT NULL DEFAULT 0,
  `tsCreate` timestamp NOT NULL DEFAULT current_timestamp(),
  `tsUpdate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `idCategorias`, `nombre`, `descripcion`, `precio`, `talle`, `color`, `habilitado`, `deshabilitado`, `tsCreate`, `tsUpdate`) VALUES
(26, 1, 'Jean Jenner', 'Jean mom tiro alto 100% algodón', 2200.00, 40, 'undefined', 1, 0, '2021-01-12 22:54:13', '2021-01-12 22:54:13'),
(30, 5, 'Body black', 'sgscrjfcos9ofifndfklj\'dfsd;fjsoiufa;lncka', 3600.00, 43, 'celeste', 1, 0, '2021-02-01 21:11:03', '2021-02-01 21:11:03'),
(31, 4, 'Cardigan bluelight', 'sgscrjfcos9ofifndfklj\'dfsd;fjsoiufa;lncka', 1700.00, 43, 'celeste', 1, 0, '2021-02-01 21:12:08', '2021-02-01 21:12:08'),
(33, 5, 'Body skin', 'sgscrjfcos9ofifndfklj\'dfsd;fjsoiufa;lncka', 1700.00, 36, 'skin', 1, 0, '2021-02-02 18:45:02', '2021-02-02 18:45:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_imagenes`
--

CREATE TABLE `productos_imagenes` (
  `id` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `uid` varchar(50) NOT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `deshabilitado` int(11) NOT NULL DEFAULT 0,
  `tsCreate` timestamp NOT NULL DEFAULT current_timestamp(),
  `tsUpdate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos_imagenes`
--

INSERT INTO `productos_imagenes` (`id`, `idProducto`, `uid`, `habilitado`, `deshabilitado`, `tsCreate`, `tsUpdate`) VALUES
(22, 26, 'ca7361ff-60a7-43d4-8b90-0e80d982e07d.jpeg', 1, 0, '2021-01-12 22:54:13', '2021-01-12 22:54:13'),
(26, 30, '58f149c8-0f62-45c2-a710-2391ea706ee9.jpeg', 1, 0, '2021-02-01 21:11:03', '2021-02-01 21:11:03'),
(27, 31, '44e026d4-4325-432e-b387-78b99b3d86d5.jpeg', 1, 0, '2021-02-01 21:12:08', '2021-02-01 21:12:08'),
(28, 33, 'fec57c68-8546-4edd-be17-5d392e685478.jpeg', 1, 0, '2021-02-02 18:45:02', '2021-02-02 18:45:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock`
--

CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `deshabilitado` int(11) NOT NULL DEFAULT 0,
  `tsCreate` timestamp NOT NULL DEFAULT current_timestamp(),
  `tsUpdate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `idCliente` int(11) DEFAULT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `uuid` varchar(40) NOT NULL,
  `nombreUsuario` varchar(30) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 0,
  `deshabilitado` int(11) NOT NULL DEFAULT 1,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `idCliente`, `admin`, `uuid`, `nombreUsuario`, `password`, `habilitado`, `deshabilitado`, `ts_create`, `ts_update`) VALUES
(2, 2, 1, 'b013f7d2-cd72-489e-9453-7fc2c6de8799', 'Emanuel', '7c222fb2927d828af22f592134e8932480637c0d', 1, 0, '2020-12-19 18:18:22', '2020-12-19 18:18:22'),
(3, 3, 0, '1fd9f717-2ee3-46a5-b46a-9eafe316c947', 'Beluandf', '7c4a8d09ca3762af61e59520943dc26494f8941b', 1, 0, '2020-12-29 19:22:02', '2020-12-29 19:22:02');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idDireccionEnvio` (`idDireccionEnvio`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `idFormaPago` (`idFormaPago`),
  ADD KEY `idEstadoPago` (`idEstadoPago`);

--
-- Indices de la tabla `compra_producto`
--
ALTER TABLE `compra_producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idProducto` (`idProducto`),
  ADD KEY `idCompra` (`idCompra`);

--
-- Indices de la tabla `direccionenvio`
--
ALTER TABLE `direccionenvio`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estado_pago`
--
ALTER TABLE `estado_pago`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCompra` (`idCompra`),
  ADD KEY `idFormaPago` (`idFormaPago`);

--
-- Indices de la tabla `formapago`
--
ALTER TABLE `formapago`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCompra` (`idCompra`),
  ADD KEY `idDireccionEnvio` (`idDireccionEnvio`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCategorias` (`idCategorias`);

--
-- Indices de la tabla `productos_imagenes`
--
ALTER TABLE `productos_imagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idProducto` (`idProducto`);

--
-- Indices de la tabla `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idProducto` (`idProducto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCliente` (`idCliente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `compra_producto`
--
ALTER TABLE `compra_producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `direccionenvio`
--
ALTER TABLE `direccionenvio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estado_pago`
--
ALTER TABLE `estado_pago`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `formapago`
--
ALTER TABLE `formapago`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `productos_imagenes`
--
ALTER TABLE `productos_imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`idDireccionEnvio`) REFERENCES `direccionenvio` (`id`);

--
-- Filtros para la tabla `compras`
--
ALTER TABLE `compras`
  ADD CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `compras_ibfk_3` FOREIGN KEY (`idEstadoPago`) REFERENCES `estado_pago` (`id`);

--
-- Filtros para la tabla `compra_producto`
--
ALTER TABLE `compra_producto`
  ADD CONSTRAINT `compra_producto_ibfk_1` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `compra_producto_ibfk_3` FOREIGN KEY (`idCompra`) REFERENCES `compras` (`id`);

--
-- Filtros para la tabla `estado_pago`
--
ALTER TABLE `estado_pago`
  ADD CONSTRAINT `estado_pago_ibfk_1` FOREIGN KEY (`idCompra`) REFERENCES `compras` (`id`),
  ADD CONSTRAINT `estado_pago_ibfk_2` FOREIGN KEY (`idFormaPago`) REFERENCES `formapago` (`id`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`idCompra`) REFERENCES `compras` (`id`),
  ADD CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`idDireccionEnvio`) REFERENCES `direccionenvio` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`idCategorias`) REFERENCES `categorias` (`id`);

--
-- Filtros para la tabla `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`idCliente`) REFERENCES `clientes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
