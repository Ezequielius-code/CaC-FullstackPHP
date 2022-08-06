-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-08-2022 a las 06:58:49
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `desafiodb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `nro_dpto` int(2) NOT NULL,
  `nombre_dpto` varchar(25) NOT NULL,
  `presupuesto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`nro_dpto`, `nombre_dpto`, `presupuesto`) VALUES
(14, 'Informática', 80000),
(15, 'Gestión', 95000),
(16, 'Comunicación', 75000),
(37, 'Desarrollo', 65000),
(77, 'Investigación', 40000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id_empleado` int(11) NOT NULL,
  `dni` int(12) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `nro_departamento` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_empleado`, `dni`, `nombre`, `apellido`, `nro_departamento`) VALUES
(1, 31096678, 'Juan', 'López', 14),
(2, 31096675, 'Martín', 'Zarabia', 77),
(3, 34269854, 'José', 'Vélez', 77),
(4, 41369852, 'Paula', 'Madariaga', 77),
(5, 33698521, 'Pedro', 'Pérez', 14),
(6, 32698547, 'Mariana', 'López', 15),
(7, 42369854, 'Abril', 'Sánchez', 37),
(8, 36125896, 'Martín', 'Julia', 14),
(9, 36985471, 'Omar', 'Díaz', 15),
(10, 32145698, 'Guadalupe', 'Pérez', 77),
(11, 35369854, 'Bernardo', 'Pantera', 37),
(12, 36125965, 'Lucía', 'Pesaro', 14),
(13, 312369858, 'María', 'Diamante', 14),
(14, 32688546, 'Carmen', 'Barbieri', 16);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`nro_dpto`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id_empleado`),
  ADD UNIQUE KEY `dni` (`dni`),
  ADD KEY `nro_departamento` (`nro_departamento`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id_empleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `empleados_ibfk_1` FOREIGN KEY (`nro_departamento`) REFERENCES `departamentos` (`nro_dpto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
