-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2020 at 11:50 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sportspoll`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `objectId` varchar(20) DEFAULT NULL,
  `sport` varchar(20) DEFAULT NULL,
  `country` varchar(20) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  `groupName` varchar(50) DEFAULT NULL,
  `homeName` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `awayName` varchar(50) DEFAULT NULL,
  `createdAt` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `objectId`, `sport`, `country`, `state`, `groupName`, `homeName`, `name`, `awayName`, `createdAt`) VALUES
(1002916450, '1UaQjc7lIb', 'FOOTBALL', 'ENGLAND', 'STARTED', 'Greek Cup', 'Chania FC', 'Chania FC - Panthrakikos Komotini', 'Panthrakikos Komotini', '2015-12-18T12:30:39.228Z'),
(1002916451, 'UPJ240T2Qj', 'FOOTBALL', 'FRANCE', 'STARTED', 'Greek Cup', 'Olympiakos Volos', 'Olympiakos Volos - PAOK Thessaloniki', 'PAOK Thessaloniki', '2015-12-18T12:30:39.234Z'),
(1002988754, '7HWfuCIMlp', 'ICE_HOCKEY', 'ENGLAND', 'STARTED', 'VHL', 'Zauralie Kurgan', 'Zauralie Kurgan - THK Tver', 'THK Tver', '2015-12-18T12:30:39.283Z'),
(1003015194, 'Bf52z7GIut', 'FOOTBALL', 'SWEDEN', 'STARTED', 'Ligue 1', 'CA Bizertin', 'CA Bizertin - Stade Gabesien', 'Stade Gabesien', '2015-12-18T12:30:39.249Z'),
(1003015197, 'sFjPkmljKv', 'FOOTBALL', 'ENGLAND', 'STARTED', 'Ligue 1', 'Club Africain', 'Club Africain - AS de la Marsa', 'AS de la Marsa', '2015-12-18T12:30:39.255Z'),
(1003016331, 'cRqV2RTmsu', 'FOOTBALL', 'FRANCE', 'FINISHED', 'Türkyie Kupasi', 'Kar??yaka', 'Kar??yaka - Kastamonuspor', 'Kastamonuspor', '2015-12-18T12:30:39.261Z'),
(1003018186, 'CSJn3kZhdx', 'SNOOKER', 'ENGLAND', 'NOT_STARTED', 'German Masters Qualifiers', 'Trump, Judd', 'Trump, Judd - Lines, Peter', 'Lines, Peter', '2015-12-18T12:30:39.272Z'),
(1003018193, 'nPuz011p0W', 'SNOOKER', 'SWEDEN', 'NOT_STARTED', 'German Masters Qualifiers', 'Ding Junhui', 'Ding Junhui - Allen, Gareth', 'Allen, Gareth', '2015-12-18T12:30:39.266Z'),
(1003022920, 'fZZUhitsVt', 'FOOTBALL', 'SWEDEN', 'STARTED', 'Under 18', 'Israel U18', 'Israel U18 - Ukraine U18', 'Ukraine U18', '2015-12-18T12:30:39.244Z'),
(1003026214, 'gldlV9xhi2', 'TENNIS', 'SWEDEN', 'STARTED', 'El Kantaoui', 'Stoilkovska, M', 'Stoilkovska, M - Njoze, M', 'Njoze, M', '2015-12-18T12:30:39.322Z'),
(1003026234, 'mTVUIuYdbF', 'TENNIS', 'SWEDEN', 'NOT_STARTED', 'Ankara', 'Buyukakcay, C/Krunic, A', 'Buyukakcay, C/Krunic, A - Kania, P/Kerkhove, L', 'Kania, P/Kerkhove, L', '2015-12-18T12:30:39.311Z'),
(1003026299, 'V6Qsm2Wlms', 'TENNIS', 'ENGLAND', 'FINISHED', 'Navi Mumbai', 'Jia-Jing Lu', 'Jia-Jing Lu - Haas, Barbara', 'Haas, Barbara', '2015-12-18T12:30:39.328Z'),
(1003026313, 'JxrZyQKTrw', 'TENNIS', 'FRANCE', 'STARTED', 'Nigeria', 'Harris, L G M/Maamoun, K M', 'Harris, L G M/Maamoun, K M - Doumbia, S/Reboul, F', 'Doumbia, S/Reboul, F', '2015-12-18T12:30:39.289Z'),
(1003026476, 'utc63de1Fl', 'TENNIS', 'FRANCE', 'STARTED', 'Qatar', 'Clayton, Scott', 'Clayton, Scott - Mridha, J', 'Mridha, J', '2015-12-18T12:30:39.306Z'),
(1003026666, 'KGA9nqYAJl', 'TENNIS', 'ENGLAND', 'FINISHED', 'Dominican Republic', 'Pla Malfeito, Jaume', 'Pla Malfeito, Jaume - Roberts, Justin', 'Roberts, Justin', '2015-12-18T12:30:39.300Z'),
(1003026667, 'tALMRNqAxD', 'TENNIS', 'SWEDEN', 'NOT_STARTED', 'Dominican Republic', 'Bangoura, Sekou', 'Bangoura, Sekou - Halebian, Alexios', 'Halebian, Alexios', '2015-12-18T12:30:39.294Z'),
(1003026673, 'heL53W56d2', 'TENNIS', 'FRANCE', 'STARTED', 'El Kantaoui', 'Baskova, D/Podlinska, M', 'Baskova, D/Podlinska, M - Chernetsova, D/Perper, A', 'Chernetsova, D/Perper, A', '2015-12-18T12:30:39.317Z'),
(1003027200, 'enCbqOuRLr', 'HANDBALL', 'SWEDEN', 'STARTED', 'Cup', 'Dinamo Astrakhan', 'Dinamo Astrakhan - SKIF-Krasnodar', 'SKIF-Krasnodar', '2015-12-18T12:30:39.278Z');

-- --------------------------------------------------------

--
-- Table structure for table `sports`
--

CREATE TABLE `sports` (
  `id` int(6) UNSIGNED NOT NULL,
  `name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sports`
--

INSERT INTO `sports` (`id`, `name`) VALUES
(5, 'FOOTBALL'),
(6, 'SNOOKER'),
(7, 'HANDBALL'),
(8, 'ICE_HOCKEY'),
(9, 'TENNIS');

-- --------------------------------------------------------

--
-- Table structure for table `votes`
--

CREATE TABLE `votes` (
  `id` int(6) UNSIGNED NOT NULL,
  `event` int(11) DEFAULT NULL,
  `vote` tinyint(3) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sports`
--
ALTER TABLE `sports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `votes`
--
ALTER TABLE `votes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sports`
--
ALTER TABLE `sports`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `votes`
--
ALTER TABLE `votes`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=720;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
