-- phpMyAdmin SQL Dump
-- version 5.0.4deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Creato il: Apr 30, 2022 alle 13:17
-- Versione del server: 10.5.15-MariaDB-0+deb11u1
-- Versione PHP: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `richieste`
--
CREATE DATABASE IF NOT EXISTS `richieste` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `richieste`;

-- --------------------------------------------------------

--
-- Struttura della tabella `fasi`
--
-- Creazione: Apr 29, 2022 alle 16:00
--

DROP TABLE IF EXISTS `fasi`;
CREATE TABLE IF NOT EXISTS `fasi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descrizione` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `fasi`
--

INSERT INTO `fasi` (`id`, `descrizione`) VALUES
(1, 'FASE 1'),
(2, 'FASE 2');

-- --------------------------------------------------------

--
-- Struttura della tabella `richieste`
--
-- Creazione: Apr 30, 2022 alle 10:47
-- Ultimo aggiornamento: Apr 30, 2022 alle 10:49
--

DROP TABLE IF EXISTS `richieste`;
CREATE TABLE IF NOT EXISTS `richieste` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `cognome` varchar(30) NOT NULL,
  `codicefiscale` varchar(16) NOT NULL,
  `email` varchar(50) NOT NULL,
  `numero` varchar(30) NOT NULL,
  `data_ric` datetime NOT NULL,
  `fase` int(11) NOT NULL,
  `motivo` varchar(50) NOT NULL,
  `note` text NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) NOT NULL,
  `last_update` timestamp NULL DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `is_active` tinyint(4) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `fase` (`fase`),
  KEY `updated_by` (`updated_by`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `richieste`
--

INSERT INTO `richieste` (`id`, `nome`, `cognome`, `codicefiscale`, `email`, `numero`, `data_ric`, `fase`, `motivo`, `note`, `created`, `created_by`, `last_update`, `updated_by`, `is_active`) VALUES
(1, 'Nome del tizio', 'Cognome del tizio', '', '', '', '0000-00-00 00:00:00', 1, '', '', '2022-04-30 09:46:48', 0, NULL, NULL, 1),
(2, 'Nome del tizio', 'Cognome del tizio', '', '', '', '0000-00-00 00:00:00', 1, '', '', '2022-04-30 09:46:48', 0, NULL, NULL, 1),
(3, 'Nome del tizio', 'Cognome del tizio', 'CF del tizio', 'email@tizio.net', '12345', '2022-04-26 12:43:56', 1, 'Boh', 'Note varie ed eventuali', '2022-04-30 10:45:09', 1, '2022-04-30 10:49:03', 1, 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `roles`
--
-- Creazione: Apr 29, 2022 alle 16:21
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descrizione` varchar(20) NOT NULL,
  `can_read` tinyint(1) NOT NULL,
  `can_write` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `roles`
--

INSERT INTO `roles` (`id`, `descrizione`, `can_read`, `can_write`) VALUES
(1, 'Admin', 1, 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `users`
--
-- Creazione: Apr 29, 2022 alle 16:20
-- Ultimo aggiornamento: Apr 30, 2022 alle 09:42
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(25) NOT NULL,
  `password` varchar(64) NOT NULL,
  `nome` varchar(25) NOT NULL,
  `cognome` varchar(25) NOT NULL,
  `role_id` int(11) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `role_id` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `nome`, `cognome`, `role_id`, `is_active`) VALUES
(1, 'iwok', '27b1c75f7de9997ec5a2ac654e8a7c85cfab3d6221b2ed1b5bf80a2c708c9e4e', 'Ivo', 'Pugliese', 1, 1);

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `richieste`
--
ALTER TABLE `richieste`
  ADD CONSTRAINT `richieste_ibfk_1` FOREIGN KEY (`fase`) REFERENCES `fasi` (`id`);

--
-- Limiti per la tabella `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
