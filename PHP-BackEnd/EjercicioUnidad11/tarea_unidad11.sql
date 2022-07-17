-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-07-2022 a las 08:58:56
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
-- Base de datos: `unidad11`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarea_unidad11`
--

CREATE TABLE `tarea_unidad11` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `apellido` varchar(40) NOT NULL,
  `edad` tinyint(2) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `provincia` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tarea_unidad11`
--

INSERT INTO `tarea_unidad11` (`id`, `nombre`, `apellido`, `edad`, `fecha`, `provincia`) VALUES
(1, 'Juan Manuel', 'de Rosas', 83, '2022-07-17 06:56:49', 'Buenos Aires'),
(2, 'Martín Miguel', 'de Güemes', 36, '2022-07-17 06:56:49', 'Salta'),
(3, 'Facundo', 'Quiroga', 46, '2022-07-17 06:56:49', 'La Rioja'),
(4, 'Estanislao', 'López', 51, '2022-07-17 06:56:49', 'Santa Fe'),
(5, 'Francisco', 'Ramírez', 35, '2022-07-17 06:56:49', 'Entre Ríos');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tarea_unidad11`
--
ALTER TABLE `tarea_unidad11`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tarea_unidad11`
--
ALTER TABLE `tarea_unidad11`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
