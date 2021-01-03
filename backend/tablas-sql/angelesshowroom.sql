-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-12-2020 a las 20:18:47
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
  `nombre` varchar(30) NOT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `deshabilitado` int(11) NOT NULL DEFAULT 0,
  `tsCreate` timestamp NOT NULL DEFAULT current_timestamp(),
  `tsUpdate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `habilitado`, `deshabilitado`, `tsCreate`, `tsUpdate`) VALUES
(1, 'Jeans', 1, 0, '2020-11-19 22:32:52', '2020-11-19 22:32:52'),
(2, 'Tops', 1, 0, '2020-11-19 22:32:52', '2020-11-19 22:32:52');

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
(1, NULL, 'Belen', 'Ferreira', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-11 20:00:48', '2020-12-11 20:00:48'),
(2, NULL, 'Belen', 'Ferreira', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-11 20:12:00', '2020-12-11 20:12:00'),
(3, NULL, 'Belen', 'Ferreira', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-12 14:53:57', '2020-12-12 14:53:57'),
(4, NULL, 'Belen', 'Ferreira', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-12 15:06:52', '2020-12-12 15:06:52'),
(5, NULL, 'Belen', 'Ferreira', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-12 15:55:15', '2020-12-12 15:55:15'),
(6, NULL, 'Emanuel', 'Gomez', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-14 15:15:38', '2020-12-14 15:15:38'),
(7, NULL, 'Emanuel', 'Gomez', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-14 15:17:49', '2020-12-14 15:17:49'),
(8, NULL, 'Emanuel', 'Gomez', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-15 02:02:49', '2020-12-15 02:02:49'),
(9, NULL, 'Emanuel', 'Gomez', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-15 02:03:14', '2020-12-15 02:03:14'),
(10, NULL, 'Emanuel', 'Gomez', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-15 16:11:32', '2020-12-15 16:11:32'),
(11, NULL, 'Emanuel', 'Gomez', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-15 16:14:54', '2020-12-15 16:14:54'),
(12, NULL, 'Emanuel', 'Gomez', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-15 16:25:26', '2020-12-15 16:25:26'),
(13, NULL, 'Emanuel', 'Gomez', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-15 16:44:33', '2020-12-15 16:44:33'),
(14, NULL, 'Emanuel', 'Gomez', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-15 16:48:50', '2020-12-15 16:48:50'),
(15, NULL, 'Emanuel', 'Gomez', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-15 16:50:17', '2020-12-15 16:50:17'),
(16, NULL, 'Emanuel', 'Gomez', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-15 18:48:13', '2020-12-15 18:48:13'),
(17, NULL, 'Emanuel', 'Gomez', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-15 19:10:43', '2020-12-15 19:10:43'),
(18, NULL, 'Emanuel', 'Gomez', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-15 19:12:44', '2020-12-15 19:12:44'),
(19, NULL, 'Emanuel', 'Gomez', NULL, 'emaigomezz@gmail.com', 2147483647, 1, 0, '2020-12-15 19:12:46', '2020-12-15 19:12:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compraproducto`
--

CREATE TABLE `compraproducto` (
  `id` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `deshabilitado` int(11) NOT NULL DEFAULT 0,
  `tsCreate` timestamp NOT NULL DEFAULT current_timestamp(),
  `tsUpdate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idCompraProducto` int(11) NOT NULL,
  `idFormaPago` int(11) NOT NULL,
  `idEstadoPago` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `total` float(10,2) NOT NULL,
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
  `IdProductosImagenes` int(11) NOT NULL,
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

INSERT INTO `productos` (`id`, `idCategorias`, `IdProductosImagenes`, `nombre`, `descripcion`, `precio`, `talle`, `color`, `habilitado`, `deshabilitado`, `tsCreate`, `tsUpdate`) VALUES
(3, 1, 1, 'Jeans mom', 'regrtvbunkjbtsrbhvbyjvrg', 3600.00, 40, 'Celeste', 1, 0, '2020-11-19 22:39:50', '2020-11-19 22:39:50'),
(4, 2, 2, 'Tops Algodon', 'fdfdffwrferagerfuyhfvetbgrtvhg', 1200.00, 6, 'verde', 1, 0, '2020-11-19 22:39:50', '2020-11-19 22:39:50'),
(5, 1, 1, 'jean largo', 'efawsrtcwfuge6hb4g646', 4000.00, 30, 'rojo', 1, 0, '2020-11-20 04:05:10', '2020-11-20 04:05:10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_imagenes`
--

CREATE TABLE `productos_imagenes` (
  `id` int(11) NOT NULL,
  `uid` varchar(30) NOT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `deshabilitado` int(11) NOT NULL DEFAULT 0,
  `tsCreate` timestamp NOT NULL DEFAULT current_timestamp(),
  `tsUpdate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos_imagenes`
--

INSERT INTO `productos_imagenes` (`id`, `uid`, `habilitado`, `deshabilitado`, `tsCreate`, `tsUpdate`) VALUES
(1, 'egr343eg46y4g4', 1, 0, '2020-11-19 22:37:45', '2020-11-19 22:37:45'),
(2, 'ffr6tr6yh56hrhrg4', 1, 0, '2020-11-19 22:37:45', '2020-11-19 22:37:45');

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
  `confirmacionCorreo` varchar(30) NOT NULL,
  `nombreUsuario` varchar(30) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 0,
  `deshabilitado` int(11) NOT NULL DEFAULT 1,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `idCliente`, `admin`, `confirmacionCorreo`, `nombreUsuario`, `password`, `habilitado`, `deshabilitado`, `ts_create`, `ts_update`) VALUES
(7, 7, 0, '663f2005-2ba5-4a14-925a-783ec8', 'Emanuel', '620ece6ff0b43864e8f84813cf8ed1', 0, 1, '2020-12-14 15:17:49', '2020-12-14 15:17:49'),
(8, 8, 0, 'b5e2b6e8-be70-4084-a6d4-431bd8', 'Emanuel', '620ece6ff0b43864e8f84813cf8ed1', 0, 1, '2020-12-15 02:02:49', '2020-12-15 02:02:49'),
(9, 9, 0, 'f1d3df52-a935-4fd3-8604-be7093', 'Emanuel', 'da39a3ee5e6b4b0d3255bfef956018', 0, 1, '2020-12-15 02:03:14', '2020-12-15 02:03:14'),
(10, 10, 0, '42ca4096-6482-4659-955a-dd395a', 'Emanuel', '620ece6ff0b43864e8f84813cf8ed1', 0, 1, '2020-12-15 16:11:32', '2020-12-15 16:11:32'),
(11, 11, 0, '83a77713-d97b-41f4-8ce1-b15290', 'Emanuel', '620ece6ff0b43864e8f84813cf8ed1', 0, 1, '2020-12-15 16:14:54', '2020-12-15 16:14:54'),
(12, 12, 0, 'e15420f3-078c-4d6a-a9ec-559385', 'Emanuel', '620ece6ff0b43864e8f84813cf8ed1', 0, 1, '2020-12-15 16:25:26', '2020-12-15 16:25:26'),
(13, 13, 0, '0b5b80b8-ae55-488b-a549-50275b', 'Emanuel', '5d112abaa0174245ffcdc5f1440bf4', 0, 1, '2020-12-15 16:44:33', '2020-12-15 16:44:33'),
(14, 14, 0, '4b345ac5-06aa-4b64-b8fa-39ffd9', 'Emanuel', '620ece6ff0b43864e8f84813cf8ed1', 0, 1, '2020-12-15 16:48:50', '2020-12-15 16:48:50'),
(15, 15, 0, '596d41f3-327f-4e8d-9e20-d8f452', 'Emanuel', '620ece6ff0b43864e8f84813cf8ed1', 0, 1, '2020-12-15 16:50:17', '2020-12-15 16:50:17'),
(16, 16, 0, 'c675ffb8-d14a-47ca-9a67-325165', 'Emanuel', '087fe3e10b13d707369c56031f872d', 1, 1, '2020-12-15 18:48:13', '2020-12-15 18:48:13'),
(17, 17, 0, 'f2892f64-b8c0-43f4-b3ed-f8e7cb', 'Emanuel', '2b585a9732ac819956942b6c496c91', 0, 1, '2020-12-15 19:10:43', '2020-12-15 19:10:43'),
(18, 18, 0, '6a871fe9-19a9-4e18-911f-9fd055', 'Emanuel', '24b14fb308e0440a85b007c9f51b8f', 0, 1, '2020-12-15 19:12:44', '2020-12-15 19:12:44'),
(19, 19, 0, 'e3000472-9ae2-4cd5-b576-73c1bb', 'Emanuel', '24b14fb308e0440a85b007c9f51b8f', 0, 1, '2020-12-15 19:12:46', '2020-12-15 19:12:46');

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
-- Indices de la tabla `compraproducto`
--
ALTER TABLE `compraproducto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idProducto` (`idProducto`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `idCompraProducto` (`idCompraProducto`),
  ADD KEY `idFormaPago` (`idFormaPago`),
  ADD KEY `idEstadoPago` (`idEstadoPago`);

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
  ADD KEY `idCompra` (`idCompra`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCategorias` (`idCategorias`),
  ADD KEY `IdProductosImagenes` (`IdProductosImagenes`);

--
-- Indices de la tabla `productos_imagenes`
--
ALTER TABLE `productos_imagenes`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `compraproducto`
--
ALTER TABLE `compraproducto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `productos_imagenes`
--
ALTER TABLE `productos_imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`idDireccionEnvio`) REFERENCES `direccionenvio` (`id`);

--
-- Filtros para la tabla `compraproducto`
--
ALTER TABLE `compraproducto`
  ADD CONSTRAINT `compraproducto_ibfk_1` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `compraproducto_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `compras`
--
ALTER TABLE `compras`
  ADD CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `compras_ibfk_2` FOREIGN KEY (`idCompraProducto`) REFERENCES `compraproducto` (`id`),
  ADD CONSTRAINT `compras_ibfk_3` FOREIGN KEY (`idEstadoPago`) REFERENCES `estado_pago` (`id`);

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
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`idCompra`) REFERENCES `compras` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`IdProductosImagenes`) REFERENCES `productos_imagenes` (`id`),
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
