-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 15, 2024 at 04:43 PM
-- Server version: 10.11.2-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `CDRRMD`
--

-- --------------------------------------------------------

--
-- Table structure for table `address_barangays`
--

CREATE TABLE `address_barangays` (
  `barangay_id` int(11) NOT NULL,
  `fk_city_id` int(11) NOT NULL,
  `barangay` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `address_barangays`
--

INSERT INTO `address_barangays` (`barangay_id`, `fk_city_id`, `barangay`, `created_at`, `updated_at`) VALUES
(1, 1, '01', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(2, 1, '02', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(3, 1, '03', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(4, 1, '04', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(5, 1, '05', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(6, 1, '06', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(7, 1, '07', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(8, 1, '08', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(9, 1, '09', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(10, 1, '10', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(11, 1, '11', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(12, 1, '12', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(13, 1, '13', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(14, 1, '14', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(15, 1, '15', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(16, 1, '16', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(17, 1, '17', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(18, 1, '18', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(19, 1, '19', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(20, 1, '20', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(21, 1, '21', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(22, 1, '22', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(23, 1, '23', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(24, 1, '24', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(25, 1, '25', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(26, 1, '26', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(27, 1, '27', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(28, 1, '28', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(29, 1, '29', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(30, 1, '30', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(31, 1, '31', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(32, 1, '32', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(33, 1, '33', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(34, 1, '34', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(35, 1, '35', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(36, 1, '36', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(37, 1, '37', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(38, 1, '38', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(39, 1, '39', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(40, 1, '40', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(41, 1, 'AGUSAN', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(42, 1, 'BAIKINGON', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(43, 1, 'BALUBAL', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(44, 1, 'BALULANG', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(45, 1, 'BAYABAS', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(46, 1, 'BAYANGA', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(47, 1, 'BESIGAN', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(48, 1, 'BONBON', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(49, 1, 'BUGO', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(50, 1, 'BULUA', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(51, 1, 'CAMAMAN-AN', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(52, 1, 'CANITOAN', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(53, 1, 'CARMEN', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(54, 1, 'CONSOLACION', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(55, 1, 'CUGMAN', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(56, 1, 'DANSOLIHON', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(57, 1, 'FS CATANICO', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(58, 1, 'GUSA', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(59, 1, 'INDAHAG', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(60, 1, 'IPONAN', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(61, 1, 'KAUSWAGAN', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(62, 1, 'LAPASAN', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(63, 1, 'LUMBIA', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(64, 1, 'MACABALAN', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(65, 1, 'MACASANDIG', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(66, 1, 'MAMBUAYA', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(67, 1, 'NAZARETH', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(68, 1, 'PAGALUNGAN', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(69, 1, 'PAGATPAT', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(70, 1, 'PATAG', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(71, 1, 'PIGSAG-AN', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(72, 1, 'PUERTO', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(73, 1, 'PUNTOD', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(74, 1, 'SAN SIMON', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(75, 1, 'TABLON', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(76, 1, 'TAGLIMAO', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(77, 1, 'TAGPANGI', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(78, 1, 'TIGNAPOLOAN', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(79, 1, 'TUBURAN', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(80, 1, 'TUMPAGON', '2024-01-15 05:22:36', '2024-01-15 05:22:36');

-- --------------------------------------------------------

--
-- Table structure for table `address_cities`
--

CREATE TABLE `address_cities` (
  `city_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `zip_code` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `address_cities`
--

INSERT INTO `address_cities` (`city_id`, `name`, `zip_code`, `created_at`, `updated_at`) VALUES
(1, 'Cagayan de Oro City', '9000', '2024-01-15 05:22:36', '2024-01-16 04:58:10');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `category_type` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `category_type`, `created_at`, `updated_at`) VALUES
(1, 'Government', 'Office', '2024-03-07 03:46:03', '2024-03-07 03:46:03'),
(2, 'Civil Society Organizations', 'Office', '2024-03-07 03:46:22', '2024-03-07 05:52:06'),
(3, 'Semi-Government', 'Office', '2024-03-07 03:48:18', '2024-03-07 03:48:18');

-- --------------------------------------------------------

--
-- Table structure for table `email_addresses`
--

CREATE TABLE `email_addresses` (
  `email_address_id` int(11) NOT NULL,
  `email_address` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `email_addresses`
--

INSERT INTO `email_addresses` (`email_address_id`, `email_address`, `created_at`, `updated_at`) VALUES
(1, 'asd', '2024-02-07 08:30:03', '2024-02-07 08:30:03'),
(2, 'johndoe@doemail.com', '2024-02-07 08:36:31', '2024-02-07 08:36:31'),
(3, 'ralphanthonyabao@gmail.com', '2024-02-07 08:43:55', '2024-02-07 08:43:55'),
(4, 'klok', '2024-02-14 05:36:10', '2024-02-14 05:36:10'),
(5, 'klok', '2024-02-14 05:36:10', '2024-02-14 05:36:10'),
(6, 'klok', '2024-02-14 05:42:02', '2024-02-14 05:42:02'),
(7, 'klok', '2024-02-14 05:44:23', '2024-02-14 05:44:23'),
(8, 'kek', '2024-02-14 05:46:32', '2024-02-14 05:46:32'),
(9, 'qwerty', '2024-02-14 05:47:31', '2024-02-14 05:47:31'),
(10, 'asdfg', '2024-02-14 05:48:52', '2024-02-14 05:48:52'),
(11, 'kolokoy', '2024-02-14 06:09:49', '2024-02-14 06:09:49'),
(12, 'kwek', '2024-02-14 06:21:12', '2024-02-14 06:21:12'),
(13, 'owak', '2024-02-14 06:22:25', '2024-02-14 06:22:25'),
(14, 'buhoknabastos@gmail.com', '2024-02-14 06:26:19', '2024-02-14 06:26:19'),
(15, 'sample', '2024-02-14 08:35:34', '2024-02-14 08:35:34'),
(16, 'ralphanthonyabao@gmail.com', '2024-02-23 08:49:25', '2024-02-23 08:49:25'),
(17, 'sample', '2024-02-23 08:51:23', '2024-02-23 08:51:23'),
(18, 'sample', '2024-02-23 08:52:19', '2024-02-23 08:52:19'),
(19, 'sample', '2024-02-23 08:52:19', '2024-02-23 08:52:19'),
(20, 'ralphanthonyabao@gmail.com', '2024-03-01 08:29:10', '2024-03-01 08:29:10'),
(21, 'asd', '2024-03-05 06:12:15', '2024-03-05 06:12:15'),
(22, 'asd', '2024-03-05 06:14:07', '2024-03-05 06:14:07'),
(23, 'asd', '2024-03-05 07:20:36', '2024-03-05 07:20:36'),
(24, 'asd', '2024-03-05 07:21:39', '2024-03-05 07:21:39'),
(25, 'asd', '2024-03-05 07:22:31', '2024-03-05 07:22:31'),
(26, 'asd', '2024-03-05 07:22:54', '2024-03-05 07:22:54'),
(27, 'sample', '2024-03-05 07:54:39', '2024-03-05 07:54:39'),
(28, 'sample', '2024-03-05 07:58:51', '2024-03-05 07:58:51'),
(29, 'sample', '2024-03-05 08:02:04', '2024-03-05 08:02:04'),
(30, 'sample', '2024-03-05 08:02:37', '2024-03-05 08:02:37'),
(31, 'ralph@gmail.com', '2024-03-05 09:01:02', '2024-03-05 09:01:02'),
(32, 'sample', '2024-03-05 09:04:20', '2024-03-05 09:04:20'),
(33, '237', '2024-03-08 07:34:14', '2024-03-08 07:34:14'),
(34, 'asd', '2024-03-08 07:57:45', '2024-03-08 07:57:45'),
(35, 'dsa', '2024-03-08 08:01:33', '2024-03-08 08:01:33'),
(36, 'sample 3', '2024-03-11 04:02:34', '2024-03-11 04:02:34'),
(37, 'ralphanthonyabao@gmail.com', '2024-03-11 08:57:15', '2024-03-11 08:57:15'),
(38, 'ralphanthonyabao@gmail.com', '2024-03-12 07:13:13', '2024-03-12 07:13:13'),
(39, 'asd', '2024-03-13 04:13:10', '2024-03-13 04:13:10'),
(40, 'qwe', '2024-03-13 04:28:15', '2024-03-13 04:28:15'),
(41, 'zxc', '2024-03-13 04:34:47', '2024-03-13 04:34:47'),
(42, 'sdf', '2024-03-13 04:42:01', '2024-03-13 04:42:01'),
(43, 'ralphanthonyabao@gmail.com', '2024-03-13 08:37:23', '2024-03-13 08:37:23'),
(44, 'ralphanthonyabao@gmail.com', '2024-03-13 08:45:25', '2024-03-13 08:45:25'),
(45, 'ralphanthonyabao@gmail.com', '2024-03-13 08:47:24', '2024-03-13 08:47:24');

-- --------------------------------------------------------

--
-- Table structure for table `LDRRMP`
--

CREATE TABLE `LDRRMP` (
  `LDRRMP_id` int(11) NOT NULL,
  `fk_pillar_id` int(11) NOT NULL,
  `fk_objective_id` int(11) NOT NULL,
  `fk_outcome_id` int(11) NOT NULL,
  `fk_program_project_id` int(11) NOT NULL,
  `term` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `LDRRMP`
--

INSERT INTO `LDRRMP` (`LDRRMP_id`, `fk_pillar_id`, `fk_objective_id`, `fk_outcome_id`, `fk_program_project_id`, `term`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 1, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(2, 1, 1, 1, 2, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(3, 1, 2, 2, 3, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(4, 1, 2, 2, 4, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(5, 1, 2, 2, 5, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(6, 1, 2, 2, 6, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(7, 1, 2, 2, 7, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(8, 1, 2, 2, 8, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(9, 1, 2, 2, 9, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(10, 1, 2, 2, 10, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(11, 1, 2, 2, 11, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(12, 1, 3, 3, 12, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(13, 1, 3, 3, 13, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(14, 1, 3, 3, 14, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(15, 1, 4, 4, 15, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(16, 1, 4, 4, 16, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(17, 1, 4, 4, 17, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(18, 1, 4, 4, 18, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(19, 1, 4, 4, 19, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(20, 1, 4, 4, 20, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(21, 1, 4, 4, 21, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(22, 1, 4, 4, 22, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(23, 1, 4, 4, 23, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(24, 1, 4, 4, 24, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(25, 1, 4, 4, 25, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(26, 1, 4, 4, 26, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(27, 1, 5, 5, 27, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(28, 1, 5, 5, 28, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(29, 1, 5, 5, 29, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(30, 1, 6, 6, 30, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(31, 1, 6, 6, 31, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(32, 1, 6, 6, 32, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(33, 1, 6, 6, 33, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(34, 1, 6, 6, 34, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(35, 1, 6, 6, 35, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(36, 1, 6, 6, 36, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(37, 1, 6, 6, 37, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(38, 1, 6, 6, 38, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(39, 1, 7, 7, 39, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(40, 1, 7, 7, 40, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(41, 1, 7, 7, 41, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(42, 1, 7, 7, 42, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(43, 2, 1, 1, 43, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(44, 2, 1, 1, 44, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(45, 2, 1, 1, 45, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(46, 2, 1, 1, 46, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(47, 2, 1, 1, 47, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(48, 2, 1, 1, 48, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(49, 2, 1, 1, 49, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(50, 2, 1, 1, 50, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(51, 2, 1, 1, 51, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(52, 2, 1, 1, 52, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(53, 2, 1, 1, 53, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(54, 2, 1, 1, 54, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(55, 2, 1, 1, 55, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(56, 2, 1, 1, 56, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(57, 2, 1, 1, 57, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(58, 2, 1, 1, 58, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(59, 2, 1, 1, 59, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(60, 2, 1, 1, 60, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(61, 2, 1, 1, 61, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(62, 2, 1, 1, 62, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(63, 2, 1, 1, 63, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(64, 2, 1, 1, 64, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(65, 2, 1, 1, 65, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(66, 2, 1, 1, 66, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(67, 2, 1, 1, 67, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(68, 2, 2, 2, 68, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(69, 2, 2, 2, 69, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(70, 2, 2, 2, 70, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(71, 2, 2, 2, 71, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(72, 2, 2, 2, 72, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(73, 2, 3, 3, 73, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(74, 2, 3, 3, 74, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(75, 2, 3, 3, 75, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(76, 2, 3, 3, 76, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(77, 2, 3, 3, 77, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(78, 2, 3, 3, 78, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(79, 2, 4, 4, 79, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(80, 2, 4, 4, 80, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(81, 2, 4, 4, 81, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(82, 2, 4, 4, 82, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(83, 2, 5, 5, 83, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(84, 2, 5, 5, 84, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(85, 2, 5, 5, 85, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(86, 2, 5, 5, 86, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(87, 2, 5, 5, 87, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(88, 2, 6, 6, 88, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(89, 2, 6, 6, 89, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(90, 2, 6, 6, 90, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(91, 2, 7, 7, 91, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(92, 3, 1, 1, 92, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(93, 3, 1, 1, 93, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(94, 3, 1, 1, 94, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(95, 3, 1, 1, 95, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(96, 3, 1, 1, 96, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(97, 3, 2, 2, 97, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(98, 3, 2, 2, 98, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(99, 3, 2, 2, 99, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(100, 3, 2, 2, 100, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(101, 3, 3, 3, 101, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(102, 3, 3, 3, 102, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(103, 3, 3, 3, 103, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(104, 3, 3, 3, 104, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(105, 3, 3, 3, 105, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(106, 3, 3, 3, 106, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(107, 3, 4, 4, 107, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(108, 3, 4, 4, 108, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(109, 3, 4, 4, 109, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(110, 3, 4, 4, 110, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(111, 3, 4, 4, 111, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(112, 3, 4, 4, 112, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(113, 3, 4, 4, 113, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(114, 3, 4, 4, 114, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(115, 3, 4, 4, 115, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(116, 3, 4, 4, 116, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(117, 3, 4, 4, 117, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(118, 3, 5, 5, 118, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(119, 3, 6, 6, 119, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(120, 3, 6, 6, 120, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(121, 3, 6, 6, 121, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(122, 3, 6, 6, 122, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(123, 3, 6, 6, 123, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(124, 4, 1, 1, 124, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(125, 4, 1, 1, 125, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(126, 4, 2, 2, 126, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(127, 4, 2, 2, 127, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(128, 4, 2, 2, 128, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(129, 4, 2, 2, 129, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(130, 4, 2, 2, 130, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(131, 4, 2, 2, 131, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(132, 4, 2, 2, 132, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(133, 4, 3, 3, 133, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(134, 4, 3, 3, 134, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(135, 4, 3, 3, 135, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(136, 4, 3, 3, 136, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(137, 4, 3, 3, 137, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(138, 4, 3, 3, 138, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(139, 4, 3, 3, 139, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(140, 4, 3, 3, 140, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(141, 4, 4, 4, 141, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(142, 4, 4, 4, 142, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(143, 4, 4, 4, 143, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(144, 4, 4, 4, 144, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(145, 4, 4, 4, 145, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(146, 4, 5, 5, 146, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(147, 4, 5, 5, 147, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(148, 4, 5, 5, 148, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(149, 4, 6, 6, 149, '2022 - 2030', '2024-02-16 08:56:53', '2024-03-07 04:06:12'),
(150, 4, 6, 6, 150, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(151, 4, 6, 6, 151, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(152, 4, 6, 6, 152, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(153, 4, 6, 6, 153, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(154, 4, 6, 6, 154, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12'),
(155, 4, 6, 6, 155, '2022 - 2030', '2024-01-15 05:22:36', '2024-03-07 04:06:12');

-- --------------------------------------------------------

--
-- Table structure for table `LDRRMP_objectives`
--

CREATE TABLE `LDRRMP_objectives` (
  `objective_id` int(11) NOT NULL,
  `objective_number` int(11) NOT NULL,
  `objective` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `LDRRMP_objectives`
--

INSERT INTO `LDRRMP_objectives` (`objective_id`, `objective_number`, `objective`, `created_at`, `updated_at`) VALUES
(1, 1, 'To institutionalize timely, responsive, context- and culture-specific early warning systems', '2024-01-15 05:22:36', '2024-02-19 03:29:00'),
(2, 2, 'To improve access, understanding, and use of updated risk information, DRR-related statistics, and research', '2024-01-15 05:22:36', '2024-02-19 03:29:05'),
(3, 3, 'To mainstream DRRM-CCA into the policies, plans and budgeting process', '2024-01-15 05:22:36', '2024-02-19 03:29:07'),
(4, 4, 'To reduce vulnerable households and establishments in hazard-prone areas and land use regulated zone', '2024-01-15 05:22:36', '2024-02-19 03:29:09'),
(5, 5, 'Access to effective, responsive and inclusive risk financing and insurance mechanisms', '2024-01-15 05:22:36', '2024-02-19 03:29:11'),
(6, 6, 'Improve and protect ecosystem integrity', '2024-01-15 05:22:36', '2024-02-19 03:29:15'),
(7, 7, 'Build resilience of livelihoods and businesses', '2024-01-15 05:22:36', '2024-02-19 03:29:24'),
(8, 1, 'To equip the community stakeholders with the necessary skills to cope with the negative impacts of a disaster and/or emergencies\nTo strengthen the institutional and DRRM-CCA capacity of BDRRMC and other organizations and systems of CDRRMC', '2024-01-15 05:22:36', '2024-02-19 03:29:26'),
(9, 2, 'To establish harmonized partnership among all stakeholders.', '2024-01-15 05:22:36', '2024-02-19 03:29:30'),
(10, 3, 'To develop and implement comprehensive and mutually reinforcing DRRM-related plans and systems.', '2024-01-15 05:22:36', '2024-02-19 03:29:32'),
(11, 4, 'To provide basic needs for all affected individuals (including children, infant, lactating mothers, WEDC, PWDs, senior citizens, and people with special needs) in case of disaster/emergency', '2024-01-15 05:22:36', '2024-02-19 03:29:34'),
(12, 5, 'To recognize the good DRRM practices of barangays and motivate the sustainability of their efforts.', '2024-01-15 05:22:36', '2024-02-19 03:29:36'),
(13, 6, 'To build, repair and maintain safe and secure DRRM office, facilities and infrastructures at strategic areas that are gender-sensitive, child-friendly, PWD-friendly, and Disaster Resilient.', '2024-01-15 05:22:36', '2024-02-19 03:29:38'),
(14, 7, 'To benchmark, develop and integrate DRRM-CCA best practices through knowledge sharing with other top performing cities/places', '2024-01-15 05:22:36', '2024-02-19 03:29:40'),
(15, 8, 'To establish database for equipment, machineries and vehicles affected by disaster', '2024-01-15 05:22:36', '2024-02-19 03:29:42'),
(16, 1, 'To activate emergency operations center equipped with response workforce and volunteers', '2024-01-15 05:22:36', '2024-02-19 03:29:44'),
(17, 2, 'To evacuate safely, preemptively, and immediately for affected communities and ensure their safety', '2024-01-15 05:22:36', '2024-02-19 03:29:46'),
(18, 3, 'To ensure adequate, prompt, and well-coordinated assessment of needs and damages', '2024-01-15 05:22:36', '2024-02-19 03:29:47'),
(19, 4, 'To immediately and temporarily address basic needs', '2024-01-15 05:22:36', '2024-02-19 03:29:50'),
(20, 5, 'To prevent the development of post-traumatic stress disorder and other negative impact', '2024-01-15 05:22:36', '2024-02-19 03:29:53'),
(21, 6, 'To safeguard access of communities to health services after a disaster', '2024-01-15 05:22:36', '2024-02-19 03:29:55'),
(22, 1, 'Assess damage, losses, and needs after disasters as basis for the formulation of rehabilitation and recovery program', '2024-01-15 05:22:36', '2024-02-19 03:30:00'),
(23, 2, 'To provide financial assistance and income generating interventions to families affected by disasters/calamities', '2024-01-15 05:22:36', '2024-02-19 03:30:05'),
(24, 3, 'To provide disaster-resilient housing that are located in safe zones with social services and public facilities', '2024-01-15 05:22:36', '2024-02-19 03:30:08'),
(25, 4, 'To provide adequate health services to affected communities after a disaster', '2024-01-15 05:22:36', '2024-02-19 03:30:10'),
(26, 5, 'To ensure unhampered delivery of education to students at all levels', '2024-01-15 05:22:36', '2024-02-19 03:30:12'),
(27, 6, 'To rehabilitate and repair damaged facilities and infrastructure', '2024-01-15 05:22:36', '2024-02-19 03:30:14');

-- --------------------------------------------------------

--
-- Table structure for table `LDRRMP_outcomes`
--

CREATE TABLE `LDRRMP_outcomes` (
  `outcome_id` int(11) NOT NULL,
  `outcome` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `LDRRMP_outcomes`
--

INSERT INTO `LDRRMP_outcomes` (`outcome_id`, `outcome`, `created_at`, `updated_at`) VALUES
(1, 'Standardized and functional Early Warning System (EWS) and other Prevention & Mitigation mechanisms (city to barangay/s and vice versa)', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(2, 'Availability, accessibility and use of risk-information, DRR-related', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(3, 'Implemented DRRM-CCA policies, plans and budgets', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(4, 'Increased disaster and climate resiliency of housing, building and critical infrastructure', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(5, 'Communities have access to effective, responsive and inclusive social protection, risk financing and insurance mechanisms', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(6, 'Natural resources and ecosystem integrity are improved and sustained', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(7, 'Disaster-resilient livelihoods and businesses', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(8, 'Community stakeholders are equipped with the necessary skills and capabilities to cope with the impact of disasters and/or emergencies\nImproved institutional and DRRM-CCA capacities of BDRRM Councils and organizations and operations centers at all levels', '2024-01-15 05:22:36', '2024-02-16 08:09:09'),
(9, 'Strengthened partnership and coordination among all stakeholders', '2024-01-15 05:22:36', '2024-02-16 08:09:35'),
(10, 'Implemented comprehensive and mutually reinforcing national and local preparedness and response plans, policies, and system', '2024-01-15 05:22:36', '2024-02-16 08:09:37'),
(11, 'Provision of basic needs for all affected individuals are gender-sensitive, child-friendly, PWD-friendly, and elderly friendly', '2024-01-15 05:22:36', '2024-02-16 08:09:39'),
(12, 'Barangays monitored and evaluated in implementing their DRRM-CCA initiatives.\n>Participation of previously inactive Barangays in DRRM efforts.\n>Better motivated barangays who have been previously active.', '2024-01-15 05:22:36', '2024-02-16 08:13:31'),
(13, 'Disaster resilient DRRM office and facilities constructed, upgraded, repaired, and maintained', '2024-01-15 05:22:36', '2024-02-16 08:09:44'),
(14, 'Learned and acquired ideas/skills to develop and integrate DRRM-CCA programs, projects, and activities (PPAs)', '2024-01-15 05:22:36', '2024-02-16 08:09:46'),
(15, 'Inventory of disaster-affected equipment, machineries, and vehicles', '2024-01-15 05:22:36', '2024-02-16 08:09:48'),
(16, 'Well-established disaster response operations with well-equipped workforce and volunteers', '2024-01-15 05:22:36', '2024-02-16 08:09:58'),
(17, 'Appropriate early actions are provided to communities', '2024-01-15 05:22:36', '2024-02-16 08:10:01'),
(18, 'Accurate, reliable, and timely information management', '2024-01-15 05:22:36', '2024-02-16 08:10:04'),
(19, 'Affected communities are provided with gender and conflict sensitive basic needs', '2024-01-15 05:22:36', '2024-02-16 08:10:06'),
(20, 'Responders and/or affected individuals can move-on and/or return to normalcy', '2024-01-15 05:22:36', '2024-02-16 08:10:08'),
(21, 'Health services are adequately provided to community members even after disaster', '2024-01-15 05:22:36', '2024-02-16 08:10:10'),
(22, 'Identified post disaster needs and further rehabilitation and recovery interventions', '2024-01-15 05:22:36', '2024-02-16 08:10:12'),
(23, 'Sustainable and socially inclusive income sources for households and restored stable economic activities', '2024-01-15 05:22:36', '2024-02-16 08:10:15'),
(24, 'Affected families or individuals relocated to affordable disaster-resilient housing', '2024-01-15 05:22:36', '2024-02-16 08:10:17'),
(25, 'Affected community members have accessed and availed the health services offered after a disaster/calamity', '2024-01-15 05:22:36', '2024-02-16 08:10:20'),
(26, 'Sustained and accessible education for children and youth', '2024-01-15 05:22:36', '2024-02-16 08:10:22'),
(27, 'Continuity of critical services with functional facilities and infrastructures', '2024-01-15 05:22:36', '2024-02-16 08:10:24');

-- --------------------------------------------------------

--
-- Table structure for table `LDRRMP_pillars`
--

CREATE TABLE `LDRRMP_pillars` (
  `pillar_id` int(11) NOT NULL,
  `pillar` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `LDRRMP_pillars`
--

INSERT INTO `LDRRMP_pillars` (`pillar_id`, `pillar`, `created_at`, `updated_at`) VALUES
(1, 'Disaster Prevention and Mitigation', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(2, 'Disaster Preparedness', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(3, 'Disaster Response and Early Recovery', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(4, 'Disaster Rehabilitation and Recovery', '2024-01-15 05:22:36', '2024-01-15 05:22:36');

-- --------------------------------------------------------

--
-- Table structure for table `LDRRMP_programs_projects`
--

CREATE TABLE `LDRRMP_programs_projects` (
  `program_project_id` int(11) NOT NULL,
  `pp_number` int(11) NOT NULL,
  `program_project` text NOT NULL,
  `term` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `LDRRMP_programs_projects`
--

INSERT INTO `LDRRMP_programs_projects` (`program_project_id`, `pp_number`, `program_project`, `term`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'Enhance/Develop SOPs and guidelines for multi-hazard early warning and/or early action systems.', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(2, 2, 'Procurement, installation, and/or innovation of additional EWS (advance/ indigenous) devices or equipment and maintenance of existing EWS', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(3, 1, 'DRR-CCA Data Standardization Plan and Protocol ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(4, 2, 'Strengthen Community- Based Monitoring System (CBMS)', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(5, 3, 'Update the Climate and Disaster Risk Assessment (CDRA)', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(6, 4, 'Establish Localized Maps through Geographic Information System (GIS)', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(7, 5, 'DRRM-CCA Information System', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(8, 6, 'Hapsay CDO: A DRRM Mobile App for Disaster and Emergency Information', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(9, 7, 'Operational Testing for Bio-Hazard Attacks', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(10, 8, 'Conduct DRRM-CCA related research/es', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(11, 9, 'Develop procedure/policy on the Information Security Management System', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(12, 1, 'Ensure integration/ mainstreaming and implementation of DRRM-CCA in related policies, plans and budgets (city and barangay levels)', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(13, 2, 'Public-Private Partnerships (PPP)', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(14, 3, 'Establishment of Enabling Policy to Support Climate Resiliency', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(15, 1, 'Creation of Localized Green Building Code', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(16, 2, 'Design, retrofit or modify government infrastructures as disaster/climate resilient', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(17, 3, 'Construct disaster-resilient housing units', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(18, 4, 'Relocation of households dwelling in areas identified as No Build Zone and within Legal Easement ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(19, 5, 'Development and extraction of water resources', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(20, 6, 'Construction of Flood Mitigation Structures', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(21, 7, 'Construction/ Retrofitting of Climate and Disaster Resilient Building in Schools', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(22, 8, 'Construction of Bank Protection/Slope Protection', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(23, 9, 'Construction/Retrofitting of Drainage System', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(24, 10, 'Conduct of Infrastructure Audit', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(25, 11, 'Policy on renovation of resettlement houses at city-owned Resettlement Sites in Brgy. Canitoan, Balubal, Indahag, and Pagatpat', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(26, 12, 'Establishment of urban green spaces with facilities', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(27, 1, 'City Risk Financing Schemes', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(28, 2, 'Disaster Risk Financing and Insurance Program (DRFIP) for DRRM vehicles, facilities, and equipment', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(29, 3, 'Develop a risk and forecast-based financing plan for provision of insurance coverage on crops and livestock', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(30, 1, 'Mainstream ecosystem values into local development planning, including ecosystem services indicators, monitoring systems and databases', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(31, 2, 'Implementation the Ecological Solid Waste Management (SWM)', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(32, 3, 'Improve urban green spaces and protect ecosystems/habitats (e.g., mangroves, wetlands, forest, coral reefs)', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(33, 4, 'Greenhouse Gas (GHG) Emissions Reduction Program', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(34, 5, 'De-clogging/Desilting of Existing Major Waterways and its Tributaries', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(35, 6, 'Management of Communal Forest Reforestation Project', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(36, 7, 'Septage and Sewerage Management', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(37, 8, 'Watershed Resiliency and Sustainability Program for Cagayan de Oro River Basin', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(38, 9, 'Regulation on Extraction of Minerals', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(39, 1, 'Establish an LGU-led livelihood resource/asset mapping in the barangays to determine shock-resilient and sustainable livelihoods', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(40, 2, 'Integrate disaster resilience in the Occupational Safety and Health Standards of establishments', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(41, 3, 'Improve business environment through streamlined and simplified rules and procedures of doing business, and broaden access to markets', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(42, 4, 'Provide diversified sources of financing, and develop credit enhancement mechanisms (e.g., guarantees, insurance) especially for MSMEs', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(43, 1, 'Approval and adoption of the E.O. reorganizing all DRRMC members with integration of Resiliency Pillars', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(44, 2, 'Creation and approval of permanent plantilla positions for the DRRMO employees', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(45, 3, 'Create criteria and list of requirements for the accreditation of CSOs as members in the CDRRMC', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(46, 4, 'Establish CBRN Quick Response Team (QRT) at city level', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(47, 5, 'Develop and promote inclusive, gender-responsive, PWD-friendly, conflict, and culture-sensitive IEC materials on disaster resiliency to Multi-hazard ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(48, 6, 'Institutionalize ICS at city and barangay level', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(49, 7, 'Conduct of Training Needs Assessment (TNA) in all BDRRMCs', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(50, 8, 'Conduct of DRRM-CCA related orientations and training (ex. First-Aid, Basic Life Support, WASAR, Barangay Defense System, Crime Response, RA 10121/ Disaster Preparedness, CBDRRM, Psychosocial Support, PDRA, RDANA, PDNA, MDM, etc.) ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(51, 9, 'Conduct of regular drills and simulation exercises ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(52, 10, 'Provision of specialized training to LGU personnel and its stakeholders relevant to DRRM-CCA (ex. Camp Coordination, Cyber Security, etc.', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(53, 11, 'Capacity Building for Business Continuity Planning for MSME', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(54, 12, 'Scholarships for undergraduate and After-graduate course on DRRM-CCA', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(55, 13, 'Technical and Vocational Education and Training to communities living in high-risk areas', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(56, 14, 'Procurement of Emergency response PPEs; medical supplies; and specialized tools and equipment', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(57, 15, 'Provision of Emergency response vehicles and equipment to the barangay', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(58, 16, 'Procurement, maintenance and repair of emergency response equipment and vehicles for DRR, including its operational supplies ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(59, 17, 'Establishment of disaster resilient communication system ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(60, 18, 'Formulate and integrate DRRM-CCA Manual in school curricula at pre-school and primary level', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(61, 19, 'Provision of overtime pay to personnel for DRR-related activities; and hazard pay to personnel whose work pose occupational risks ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(62, 20, 'Establishment of additional Animal Shelter', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(63, 21, 'Conduct Pre-Disaster Risk Assessment (PDRA) at all levels for preparedness for response', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(64, 22, 'Purchase of CBRN PPE, tools and equipment ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(65, 23, 'CBRN-related Training ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(66, 24, 'Scholarships for Madrasah and Indigenous People ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(67, 25, 'Sustainable DRRMO operations and services', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(68, 1, 'Create and maintain a directory or database of stakeholders and its programs and initiatives (e.g. Accredited Community Disaster Volunteers, Humanitarian Assistance Actors)', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(69, 2, 'Develop, implement, and monitor guidelines for coordination and partnership arrangements', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(70, 3, 'Coalition-building with the private sector, develop partners, and community-based organizations for resource provision and technical assistance', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(71, 4, 'Develop and/or strengthen twinning program at the city and barangay levels for efficient and timely response', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(72, 5, 'Conduct of regular DRRM-related trainings, fora, and conferences among stakeholders and partners', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(73, 1, 'Formulation and updating of DRRM-CCA related policies, plans and budgets at city and barangay level ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(74, 2, 'Formulate Public Service Continuity Plan (PSCP) for the continuity of the delivery of essential functions and services', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(75, 3, 'Develop or amend legislation and mechanisms on budget allocation to support DRRM implementation', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(76, 4, 'Enhance existing standard manual of operations for Operations Centers and emergency response teams', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(77, 5, 'Provision of insurance to the DRRMO personnel and volunteers', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(78, 6, 'Establishment and improvement of Evacuation and Communication Protocols', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(79, 1, 'Procurement, storage, and provision of specialized equipment (child and women sensitive ATS, etc.) and supplies both food and non-food items ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(80, 2, 'Establishment of Social Protection Plan specific to DRR', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(81, 3, 'Identification of groundwater resources', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(82, 4, 'Establishment/Procurement of water filter machinery in the city (ex. Mobile water filtering machine) ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(83, 1, 'Creation of a City “Gawad Kalasag” Committee', '', 'Unimplemented', '2024-02-16 06:22:13', '2024-02-16 06:22:13'),
(84, 2, 'Establish mechanisms and incentives for the barangay to ensure high level of compliance with the existing provisions of DRRM-related laws and regulations', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(85, 3, 'Search for the Most Resilient Barangay', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(86, 4, 'Rescue Olympics', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(87, 5, 'Search for the Most Outstanding Fire Station ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(88, 1, 'Establishment, improvement and maintenance, including operational requirements, of CDRRMD Emergency Operations Center (EOC) and Disaster Resilience Center ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(89, 2, 'Construction, upgrade, repair, or maintenance of facilities used for DRR (ex. Storage facility for crops, warehouse for stockpile, evacuation centers, CDRRMD satellite offices, motorpool etc.)', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(90, 3, 'Establishment of secure remote storage to back-up digitized data', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(91, 1, 'Field Exposure and Learning Exchange ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(92, 1, 'Activate the Incident Management Team (IMT) and Emergency Operation Center (EOC) to implement the Incident Command System (ICS), as necessary for response ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(93, 2, 'Implement approved and adopted DRR-CCA related plans and guidelines (ex. Local Disaster Response Plan, Barangay Disaster Risk Reduction and Management Plan (BDRRMP), ICT Contingency (Cyber Attack and Network Loss) Response Plan, Contingency and Continuity Plan) ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(94, 3, 'Availability of resting materials for responders to rest in between rescue operations (like hammocks, temporary shelters)', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(95, 4, 'Activation of Barangay Defense System (BDS) and Integrated Territorial Defense System (ITDS)', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(96, 5, 'Activation and deployment of Search and Rescue Team (SAR) from different agencies and offices (ex. PNP, BFP, PCG, CDRRMD) with 24/7 monitoring during the disasters and calamities', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(97, 1, 'Conduct safe and pre-emptive evacuation of affected families/individuals, livestock, pets and other livelihood assets, as indicated in the risk assessment results, hazard maps, and other disaster preparedness information and/or documents', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(98, 2, 'Conduct safe and immediate evacuation of affected families/individuals to safer grounds and pre-identified evacuation centers ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(99, 3, 'Conduct of early crop harvest and/or actions, based on heightened risks, indicated by forecasts', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(100, 4, 'Mobilize the strengthened public and private sector partnership for humanitarian response ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(101, 1, 'Utilize data sharing on loss and damage among stakeholders.', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(102, 2, 'Report existing loss and damage using official templates with disaggregated data of gender, sex, age and disability-specific', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(103, 3, 'Deployment of assessment teams at all levels to conduct Rapid Damage and Needs Assessment (RDANA)', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(104, 4, 'Deployment of contact tracers for EREID', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(105, 5, 'Issue timely, accurate and reliable information and advisories during response operations to all barangays ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(106, 6, 'Consolidate DANA reports to facilitate the declaration of State of Calamity', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(107, 1, 'Provision and monitoring for gender-responsive, culture and conflict- sensitive camp management and protection service to affected individuals', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(108, 2, 'Delivery of essential medical and public health services (ex. WASH, nutrition, MHPSS, MISP-SRH29)', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(109, 3, 'Use of alternative temporary shelters (ATS) for families, and mobilize referral system for orphaned, unaccompanied, and separated children', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(110, 4, 'Prompt resumption of educational services for children (Lifelong learning for children in evacuation centers)', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(111, 5, 'Ensure immediate heightened safety and security measures and monitoring to prevent abuses and violence in Evacuation Centers', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(112, 6, 'Ensure safety, security and \ncontinuity of business \noperations of MSMEs \ninvolved in provision of \nbasic needs', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(113, 7, 'Clear road access', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(114, 8, 'Restore energy, telecommunication and other lifeline service as indicated in the public service continuity plan', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(115, 9, 'Conduct intensified price and supply monitoring and enforcement activities (through PMC)\n- Issue price freeze list in areas declared under State of Calamity', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(116, 10, 'Provide emergency relief assistance (ERA) to affected families (Senior Citizens, Person with Disability, Children, Gender and Development)', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(117, 11, 'Activate relief distribution and rescue points/center', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(118, 1, 'Psychosocial Programs that are gender-sensitive, child-friendly, and PWD-friendly (ex. Stress Debriefing)', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(119, 1, 'Activate Identified alternative water sources in affected areas', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(120, 2, 'Provision of water purification equipment to affected communities', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(121, 3, 'Provision of water bladders storage and deployment of water tankers in affected areas', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(122, 4, 'Deployment of Disease Surveillance Team ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(123, 5, 'Activation of Donation Tracker System ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(124, 1, 'Activation and deployment of teams to conduct Post-Disaster Needs Assessment (PDNA) ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(125, 2, 'Formulation of Comprehensive Rehabilitation and Recovery Plan based on the result of PDNA', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(126, 1, 'Provision of Food/Cash for Work ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(127, 2, 'Provide Emergency Shelter Assistance (ESA) to affected families', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(128, 3, 'Provide support services/recovery assistance, including financing programs (loans), to enable MSMEs and other businesses resume their operations', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(129, 4, 'Provide temporary employment, skills training, and alternative sources of livelihood/ income to affected families and unemployed individuals due to disasters', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(130, 5, 'Provision of financial services and various production inputs for crops, livestock and poultry, and fisheries of farmers, fisher folks, and agricultural workers/laborers', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(131, 6, 'Improve logistics to ensure continuous delivery of agriculture products after disasters', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(132, 7, 'Conduct Business Recovery Program for MSMEs including mentoring per sector', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(133, 1, 'Implementation of resilient socialized housing program', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(134, 2, 'Provide housing rental subsidies or delayed payment scheme', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(135, 3, 'Integrate provision of risk-informed and responsive social services, including essential infrastructure and utilities, livelihoods, and job opportunities in building new resettlement communities', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(136, 4, 'Strengthening of process & mechanisms related to relocation & resettlement', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(137, 5, 'Establishment of relocation sites and services', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(138, 6, 'Implementation of Transitory Shelter Facilities (TSF) ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(139, 7, 'Maintenance of City Housing and Urban Development Information System (CHUDIS)', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(140, 8, 'Establish timetable from occupancy to awarding of ownership', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(141, 1, 'Provide adequate mental health and psychosocial support to aid individuals restore their normal functioning', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(142, 2, 'Functionality of localized water, sanitation, and hygiene (WASH) committee to provide WASH needs', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(143, 3, 'Provide medical care, assistance and/or services to affected population', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(144, 4, 'Implementation of the Universal Health Care ', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(145, 5, 'Rehabilitation of health facilities and structures that are gender-sensitive, child-friendly, and PWD-friendly in severely affected areas', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(146, 1, 'Adapt Alternative Delivery Modes to disaster/emergency-affected schools', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(147, 2, 'Provision of alternative venues for classes', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(148, 3, 'DRRM Program for Evacuees in Evacuation Centers', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(149, 1, 'Repair of damaged infrastructures incorporating ‘Green Building’ technology', '', 'Unimplemented', '2024-02-16 08:56:47', '2024-02-16 08:56:47'),
(150, 2, 'Repair of production, post-production, and small-scale irrigation facilities after the disaster', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(151, 3, 'Repair of affected agricultural machineries after the disaster', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(152, 4, 'Conduct clearing operations, repair and rehabilitation of infrastructures, facilities, and utilities (communication lines, water system, drainage system, electric poles, and power lines)', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(153, 5, 'Provide guidelines in incorporating GBT and other technologies in new structures', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(154, 6, 'Community Vegetable Gardening (Vegetable Gardening Production Project) in barangay community and resettlement areas', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(155, 7, 'Restore and rehabilitate degraded ecosystems/ habitats (e.g.: mangroves, wetlands, forest, coral reefs)', '', 'Unimplemented', '2024-01-15 05:22:36', '2024-01-15 05:22:36');

-- --------------------------------------------------------

--
-- Table structure for table `offices`
--

CREATE TABLE `offices` (
  `office_id` int(11) NOT NULL,
  `acronym` varchar(255) NOT NULL,
  `office_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `offices`
--

INSERT INTO `offices` (`office_id`, `acronym`, `office_name`, `created_at`, `updated_at`) VALUES
(1, 'DILG', 'Department of the Interior and Local Government - CDO', '2024-01-15 05:22:36', '2024-02-06 02:07:41'),
(2, 'DOST', 'Department of Science and Technology Region 10', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(3, 'CSWDD', 'City Social Welfare and Development Department', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(4, 'CPDO', 'City Planning and Development Office', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(5, 'CDRRMD', 'City Disaster Risk Reduction and Management Department', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(6, 'CVMO', 'City Vice Mayor Office', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(7, 'City Admin', 'City Administrator\'s Office ', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(8, 'AFP', 'Philippine Army, 4th Infantry Division', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(9, 'PAF', 'Philippine Air Force, Tactical Operations Group 10', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(10, 'PNP', 'Philippine National Police - Cagayan de Oro City  Police Office', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(11, 'BFP', 'Bureau of Fire Protection - Cagayan de Oro City', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(12, 'PCG', 'Coast Guard Station Western Misamis Oriental, Philippine Coast Guard', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(13, 'DepEd', 'Department of Education - Division of Cagayan de Oro City', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(14, 'PAGASA', 'Philippine Atmospheric, Geophysical and Astronomical Services Administration Region 10', '2024-01-17 02:46:32', '2024-01-31 01:47:42'),
(15, 'PHIVOLCS', 'Philippine Institute of Volcanology and Seismology', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(16, 'DPWH', 'Department of Public Works and High Ways - Region 10', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(17, 'MARINA', 'Maritime Industry Authority 10', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(18, 'PCUP', 'Presidential Commission for the Urban Poor', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(19, 'SP', 'Sangguniang Panlunsod - CDO', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(20, 'CMO', 'City Mayor\'s Office', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(21, 'RTA', 'Roads and Traffic Administration', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(22, 'CEO', 'City Engineer\'s Office', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(23, 'Oro - TIPC', 'Oro Trade and Investment Promotion Center', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(24, 'CHUDD', 'City Housing and Urban Development Department', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(25, 'CLENRO', 'City Local Environment Office', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(26, 'CTCAO', 'City Tourism and Cultural Affairs Office', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(27, 'APOO', 'Agriculture Productivity and Operations Office', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(28, 'CIO', 'City Information Office', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(29, 'CHO', 'City Health Office', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(30, 'CHIO', 'City Health Insurance Office', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(31, 'JRBGH', 'J.R. Borja General Hospital', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(32, 'CVO', 'City Veterinary Office', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(33, 'CGSD', 'City General Services Department', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(34, 'CBO', 'City Budget Office', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(35, 'CAO', 'City Accounting Office', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(36, 'CLO', 'City Legal Office', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(37, 'CMISID', 'City Management Information Systems and Innovation Department', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(38, 'CCRO', 'City Civil Registry Office', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(39, 'CCAD', 'City Community Affairs and Development Department', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(40, 'ABC', 'Liga ng mga Barangay ', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(41, 'OBO', 'Office of the City Building Official', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(42, 'Hapsay Sapa', 'Hapsay Sapa ', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(43, 'PRC', 'Philippine Red Cross, Cagayan de Oro Chapter', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(44, 'PAYAP', 'Pag-Asa Youth Association of the Philippines', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(45, 'Gawad Kalinga', 'Gawad Kalinga', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(46, 'BMFI', 'Balay Mindanaw Foundation Inc', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(47, 'CDO Horsemen', 'Cagayan de Oro Horsemen Association, Inc', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(48, 'Group Foundation', 'Group Foundation', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(49, 'Oro Chamber', 'Oro Chamber of Commerce', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(50, 'Oro Rafters', 'Oro Association of Rafters', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(51, 'VERT K9', 'Volunteers for Emergency Response Team - K9', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(52, 'PIEP', 'Philippine Institute of Environmental Planners', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(53, 'COWD', 'Cagayan de Oro Water District', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(54, 'CEPALCO', 'Cagayan Electric Power and Light Company', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(55, 'MORESCO-1', 'Misamis Oriental-1 Rural Electric Service Cooperative, Inc.', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(56, 'GLOBE', 'GLOBE Telecom, Inc.', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(57, 'SMART', 'SMART Telecommunications', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(58, 'PARASAT', 'PARASAT', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(59, 'XU', 'Xavier University - Ateneo de Cagayan', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(60, 'USTP', 'University of Science and Technology of Southern Philippines - CDO', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(61, 'LDCU', 'Safer River, Life Saver Foundation, Inc.', '2024-01-15 05:22:36', '2024-01-31 01:47:42'),
(62, 'sample', 'sample', '2024-03-11 02:54:54', '2024-03-11 02:54:54'),
(63, 'sample 3', 'sample 3', '2024-03-11 04:02:34', '2024-03-11 04:02:34'),
(64, 'KAKING', 'KAKING', '2024-03-11 08:57:14', '2024-03-11 08:57:14'),
(65, 'KAPA 2x', 'KAPA KAPA', '2024-03-12 07:13:12', '2024-03-12 07:13:12'),
(66, 'asd', 'asd', '2024-03-13 04:13:10', '2024-03-13 04:13:10'),
(67, 'qwe', 'qwe', '2024-03-13 04:28:14', '2024-03-13 04:28:14'),
(68, 'zxc', 'zxc', '2024-03-13 04:34:46', '2024-03-13 04:34:46'),
(69, 'sdf', 'sdf', '2024-03-13 04:42:00', '2024-03-13 04:42:00'),
(70, 'wawak', 'Waka wak', '2024-03-13 08:37:23', '2024-03-13 08:37:23'),
(71, 'kwek', 'kwekkwek', '2024-03-13 08:45:18', '2024-03-13 08:45:18');

-- --------------------------------------------------------

--
-- Table structure for table `offices_addresses`
--

CREATE TABLE `offices_addresses` (
  `office_address_id` int(11) NOT NULL,
  `fk_office_id` int(11) NOT NULL,
  `full_address` varchar(255) NOT NULL,
  `sitio` varchar(255) NOT NULL,
  `fk_barangay_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `offices_addresses`
--

INSERT INTO `offices_addresses` (`office_address_id`, `fk_office_id`, `full_address`, `sitio`, `fk_barangay_id`) VALUES
(1, 62, 'sample', 'sample', 2),
(2, 63, 'sample 3', 'sample 3', 1),
(3, 64, 'Cogon', '', 53),
(4, 65, '#057 Villarin St., Carmen', '', 55),
(5, 66, 'asd', 'asd', 2),
(6, 67, 'qwe', 'qwe', 6),
(7, 68, 'zxc', 'zxc', 5),
(8, 69, 'sdf', 'sdf', 5),
(9, 70, 'Villarin', '', 69),
(10, 71, '#057 Villarin St., Carmen', 'Purok 2', 55);

-- --------------------------------------------------------

--
-- Table structure for table `offices_categories`
--

CREATE TABLE `offices_categories` (
  `office_category_id` int(11) NOT NULL,
  `fk_office_id` int(11) NOT NULL,
  `fk_category_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `offices_categories`
--

INSERT INTO `offices_categories` (`office_category_id`, `fk_office_id`, `fk_category_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2024-03-07 05:55:05', '2024-03-07 05:55:05'),
(2, 2, 1, '2024-03-07 05:55:59', '2024-03-07 05:55:59'),
(3, 63, 3, '2024-03-11 04:02:34', '2024-03-11 04:02:34'),
(4, 64, 2, '2024-03-11 08:57:15', '2024-03-11 08:57:15'),
(5, 65, 2, '2024-03-12 07:13:13', '2024-03-12 07:13:13'),
(6, 66, 1, '2024-03-13 04:13:10', '2024-03-13 04:13:10'),
(7, 67, 1, '2024-03-13 04:28:15', '2024-03-13 04:28:15'),
(8, 68, 3, '2024-03-13 04:34:47', '2024-03-13 04:34:47'),
(9, 69, 2, '2024-03-13 04:42:01', '2024-03-13 04:42:01'),
(10, 70, 2, '2024-03-13 08:37:23', '2024-03-13 08:37:23'),
(11, 71, 2, '2024-03-13 08:45:22', '2024-03-13 08:45:22');

-- --------------------------------------------------------

--
-- Table structure for table `offices_email_addresses`
--

CREATE TABLE `offices_email_addresses` (
  `office_email_address_id` int(11) NOT NULL,
  `fk_office_id` int(11) NOT NULL,
  `fk_email_address_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `offices_email_addresses`
--

INSERT INTO `offices_email_addresses` (`office_email_address_id`, `fk_office_id`, `fk_email_address_id`, `created_at`, `updated_at`) VALUES
(1, 63, 36, '2024-03-11 04:02:34', '2024-03-11 04:02:34'),
(2, 64, 37, '2024-03-11 08:57:15', '2024-03-11 08:57:15'),
(3, 65, 38, '2024-03-12 07:13:13', '2024-03-12 07:13:13'),
(4, 66, 39, '2024-03-13 04:13:10', '2024-03-13 04:13:10'),
(5, 67, 40, '2024-03-13 04:28:16', '2024-03-13 04:28:16'),
(6, 68, 41, '2024-03-13 04:34:47', '2024-03-13 04:34:47'),
(7, 69, 42, '2024-03-13 04:42:01', '2024-03-13 04:42:01'),
(8, 70, 43, '2024-03-13 08:37:23', '2024-03-13 08:37:23'),
(9, 71, 44, '2024-03-13 08:45:26', '2024-03-13 08:45:26');

-- --------------------------------------------------------

--
-- Table structure for table `offices_phone_numbers`
--

CREATE TABLE `offices_phone_numbers` (
  `office_phone_number_id` int(11) NOT NULL,
  `fk_office_id` int(11) NOT NULL,
  `fk_phone_number_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `offices_phone_numbers`
--

INSERT INTO `offices_phone_numbers` (`office_phone_number_id`, `fk_office_id`, `fk_phone_number_id`, `created_at`, `updated_at`) VALUES
(1, 63, 198, '2024-03-11 04:02:34', '2024-03-11 04:02:34'),
(2, 64, 199, '2024-03-11 08:57:15', '2024-03-11 08:57:15'),
(3, 65, 200, '2024-03-12 07:13:13', '2024-03-12 07:13:13'),
(4, 66, 201, '2024-03-13 04:13:11', '2024-03-13 04:13:11'),
(5, 67, 202, '2024-03-13 04:28:16', '2024-03-13 04:28:16'),
(6, 68, 203, '2024-03-13 04:34:47', '2024-03-13 04:34:47'),
(7, 69, 204, '2024-03-13 04:42:01', '2024-03-13 04:42:01'),
(8, 70, 205, '2024-03-13 08:37:23', '2024-03-13 08:37:23'),
(9, 71, 206, '2024-03-13 08:45:30', '2024-03-13 08:45:30');

-- --------------------------------------------------------

--
-- Table structure for table `persons`
--

CREATE TABLE `persons` (
  `person_id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `middle_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `extension_name` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `isLGBTQ` varchar(255) NOT NULL,
  `isPWD` varchar(255) NOT NULL,
  `civil_status` varchar(255) NOT NULL,
  `birth_date` varchar(255) NOT NULL,
  `birth_place` varchar(255) NOT NULL,
  `occupation` varchar(255) NOT NULL,
  `blood_type` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `persons`
--

INSERT INTO `persons` (`person_id`, `first_name`, `middle_name`, `last_name`, `extension_name`, `nickname`, `gender`, `isLGBTQ`, `isPWD`, `civil_status`, `birth_date`, `birth_place`, `occupation`, `blood_type`, `created_at`, `updated_at`) VALUES
(2, 'Jane', 'J.', 'Docallos', ' ', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(3, 'Dib\'n', 'B.', 'Nanol', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(4, 'Romela', 'N.', 'Ratilla', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(5, 'Bonita', 'B.', 'Manguilimotan', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(6, 'Bethel Armor', 'S.', 'Bullecer', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(7, 'Anecia', 'C.', 'Tongson', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(8, 'Nida ', '   ', 'Paña', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(9, 'Frances Jann Sofia', 'C.', 'Tongson', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(10, 'Ramir', 'M.', 'Balquin', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(11, 'Nick', 'A.', 'Jabagat', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(12, 'Jocelyn', 'B.', 'Rodriguez', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(13, 'Shah Jahan ', 'A.', 'Dayop', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(14, 'Rosario', '', 'Daguzo', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(15, 'Roy Hilario', 'P.', 'Raagas', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(16, 'Bebel', '', '', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(17, 'Roberto', 'E.', 'Villaluz', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(18, 'Rodrigo', '', 'Ladao', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(19, 'Jose Maria ', '', 'Cuerpo', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(20, 'Admin', '', '', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(21, 'Armen ', '', '', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(22, 'Mc Lloyd', '', 'Latris', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(23, 'Michael', 'C.', 'Salonga', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(24, 'Harold', 'V.', 'Hernando', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(25, 'Sylvester', 'V.', 'Salvari', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(26, 'Ronel', 'L.', 'Salas', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(27, 'Salvador', 'N.', 'Radam', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(28, 'Aaron', 'M.', 'Mandia', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(29, 'Surki', 'A.', 'Sereñas', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(30, 'Duphar Cris', 'A.', 'Cuaresman', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(31, 'Maryjoy', 'T.', 'Rosalejos', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(32, 'Kenneth ', '', 'Montano', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(33, 'Roel', 'G.', 'Bacasnot', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(34, 'Arnulfo', 'G.', 'Nabua', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(35, ' ', '', '', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(36, 'Benie', '', 'Jaudan', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(37, 'Winona Mae\r\n', 'M.\r\n', 'Naïve\r\n', ' ', '', '', 'false', '', '', '1901-01-01', '', '', ' ', '2024-01-16 08:46:58', '2024-03-07 03:54:45'),
(38, 'Katherine Gift ', 'M.', 'Indog', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(39, 'Katherine Gift ', 'M.', 'Indog', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(40, 'Gelmore ', '', 'Laguador', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(41, 'Robert', '', 'Romero', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(42, 'Roy Angelo', 'E.', 'Gazo', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(43, 'Audie', 'S.', 'Borres', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(44, 'Roy', 'H.', 'Lumban', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(45, 'Ryan', 'Q.', 'Blanco', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(46, 'Ryan', 'Q.', 'Blanco', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(47, 'Anthony Joseph', 'R.', 'Lucero', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(48, 'Admin', '', '', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(49, 'Anianita ', '', 'Fortich', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(50, 'Hannah Lorraine ', '', 'Salvador', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(51, 'Hannah Lorraine ', '', 'Salvador', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(52, 'Marcial ', '', 'Labininay', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(53, 'Zenaida', '', 'Tan', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(54, 'Junellen', '', 'Seriosa', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(55, 'Annabell', 'P.', 'Lagas', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(56, 'Kimberly Joy S. Avila', '', '', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(57, 'Charlene', 'E.', 'Oras', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(58, 'Malvern', '', 'Esparcia', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(59, 'Shiela', 'B.', 'Lumbatan', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(60, 'Nonito', 'A.', 'Oclarit', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(61, 'Nonito', 'A.', 'Oclarit', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(62, 'Sherwin ', '', 'Cabactulan', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(63, 'Joel', 'V.', 'Momongan', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(64, 'Brandon ', '', 'Pinto', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(65, 'Kenneth', 'Y.', 'Valde', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(66, 'John ', '', 'Asuncion', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(67, 'Simonette', 'F.', 'Sagaral', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(68, 'Samuel', 'E.', 'Rollo', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(69, 'Cesar', 'A.', 'Pagapulaan', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(70, 'Wendell', '', 'Abejo', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(71, 'Armen', 'A.', 'Cuenca', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(72, 'Rico ', '', 'Libre', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(73, 'Dennis Bryan', '', 'Villarin', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(74, 'Paterno', 'L.', 'Gonzales', 'Jr.', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(75, 'Pablo', 'T.', 'Rojas', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(76, 'Christine', '', 'Alagon', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(77, 'Marie Natalie', '', 'Dulla', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(78, 'Ivy', 'C.', 'Guantero', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(79, 'Abegail', '', 'Malalis', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(80, 'Roel', '', 'Felicitas', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(81, 'Admin', '', '', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(82, 'Jan Sherwin', '', 'Samong', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(83, 'Ria', '', '', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(84, 'Kevin James', '', 'Ruiz', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(85, 'Efren', 'G.', 'Celeste', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(86, 'Marga', 'M.', 'Reyes', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(87, 'Ferdinand ', '', 'Miranda', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(88, 'Marco ', '', 'Lumba', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(89, 'Ginalyn', '', 'Harwart', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(90, 'Perla', 'T.', 'Asis', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(91, 'Rey', '', 'Dapanas', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(92, 'Joeffrey', 'D.', 'Namalata', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(93, 'Charlene Therese', '', 'Bacang', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(94, 'Roxanne Mae', 'A.', 'Ravidas', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(95, 'Elmer', 'N.', 'Wabe', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(96, 'Mei', 'V.', 'Gomez', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(97, 'Czyrn', '', 'Bastatas', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(98, 'Thelma', 'G.', 'Lumacang', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(99, 'Kenneth', 'O.', 'Tamala', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(100, 'Victor', '', 'Alvarez', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(101, 'Zelfred Anthony', 'T.', 'Cocon', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(102, 'Evangeline', 'C.', 'Tapangan', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(103, 'Leendli', '', '', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(104, 'Oliver', '', 'Egypto', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(105, 'Yan Lam', 'S.', 'Lim', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(106, 'Marlo', 'L.', 'Tabac', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(107, 'Rosanna', 'D.', 'Rodriguez', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(108, 'Luiben', 'N.', 'Magto', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(109, 'Honorio', 'G.', 'Diputado', 'Jr.', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(110, 'Marites', '', 'Balaong', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(111, 'Kirby', '', 'Bade', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(112, 'Oliver', 'V.', 'Egypto', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(113, 'April Joy', '', 'Rica', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(114, 'Alain Roy', '', 'Romero', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(115, 'Patrick', '', 'Gabutina', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(116, 'Christopher Dale', '', 'Vallejos', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(117, 'Nelson', 'H.', 'Anggamay', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(118, 'Tito Alex', '', 'Besinga', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(119, 'Charmain Mae', 'D.', 'Baconga', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(120, 'Leonardo', 'H.', 'Bautista', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(121, 'Dexter Lyn', 'M.', 'Sumingit', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(122, 'Mierro', 'L.', 'Castrillo', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(123, 'Messie Love', 'J.', 'Lura', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(124, 'Cristina', 'W.', 'Gamos', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(125, 'Raymundo', 'G.', 'Talimio', 'Jr.', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(126, 'Dennis', 'T.', 'Mackun', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(127, 'Chisum Christopher ', '', 'Factura', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(128, 'Dioniso Montemayor', '', '', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(129, 'Harvey', 'A.', 'Villegas', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(130, 'Yvonne', '', 'Valencia', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(131, 'Antonio', 'B.', 'Young', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(132, 'Bienvenido', 'V.', 'Batar', 'Jr.', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(133, 'John Emeer', 'D.', 'Taglucop', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(134, 'Chiquita', 'C.', 'Capili', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(135, 'Ramil Merlas ', '', 'Abamonga', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(136, 'Paul', 'E.', 'Labis', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(137, 'Paul', 'E.', 'Labis', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(138, 'Elmer', '', 'Labis', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(139, 'Jessie', '', 'Estrosas', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(140, 'Carlito', 'L.', 'Hembrador', 'Jr.', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(142, 'Rudy', 'F.', 'Mijares', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(143, 'Jovel', 'B.', 'Ubayubay', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(144, 'Marlon ', '', 'Guinita', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(145, 'Cindy May', 'M.', 'Obsioma-Bacadon', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(146, 'Marebec', 'O.', 'Cagalawan', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(147, 'Carsel ', '', 'Amerkhan', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(148, 'Jom Paulo', '', 'Bucu', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(149, 'Danilo Raboy', '', '', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(150, 'Enar', '', 'Licayan', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(151, 'Judee Caroline', '', 'Chaves', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(152, 'Lorna', '', 'Benedictos', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(153, 'Edgar', '', 'Serino', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(154, 'Mars', 'P.', 'Tan', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(155, 'Dexter', '', 'Lo', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(156, 'Cherry Mae', 'L.', 'Selma', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(157, 'Ambrosio', '', 'Cultura II', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(158, 'Maria Teresa', 'M.', 'Fajardo', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(159, 'Rosalina', '', 'Huerbana', '', '', '', 'false', '', '', '1901-01-01', '', '', '   ', '2024-01-16 06:46:15', '2024-03-07 03:54:45'),
(170, 'asd', '', 'asd', '', 'asd', 'Male', 'false', '', 'Single', '2024-02-06', '', 'asd', 'A+', '2024-02-06 04:42:36', '2024-03-07 03:54:45'),
(171, 'asd', 'asd', 'asd', 'asd', 'asd', 'Male', 'false', '', 'Single', '2024-02-06', 'asd', 'asd', 'A+', '2024-02-06 08:26:46', '2024-03-07 03:54:45'),
(181, 'dsa', 'dsa', 'dsa', 'dsa', 'dsa', 'Male', 'false', '', 'Single', '2024-02-07', 'dsa', 'dsa', 'A+', '2024-02-07 07:30:47', '2024-03-07 03:54:45'),
(182, 'aw', '', 'aw', '', 'aw', 'Male', 'false', '', 'Single', '2024-02-07', 'aw', 'aw', 'A+', '2024-02-07 07:39:58', '2024-03-07 03:54:45'),
(183, 'dsa', 'asd', 'haha', '', 'Rap', 'Male', 'false', '', 'Single', '2024-01-10', 'asd', 'asd', 'A+', '2024-02-07 07:51:32', '2024-03-07 03:54:45'),
(184, 'zxc', '', 'zxc', '', 'zxc', 'Male', 'false', '', 'Single', '2024-02-07', 'zxc', 'zxc', 'A+', '2024-02-07 08:00:52', '2024-03-07 03:54:45'),
(185, 'lewl', 'lewl', 'lewl', 'lewl', 'lewl', 'Male', 'false', '', 'Single', '2024-02-07', 'lewl', 'lewl', 'A+', '2024-02-07 08:02:30', '2024-03-07 03:54:45'),
(186, 'Diane', 'asd', 'Corporal', 'asd', 'asd', 'Male', 'false', '', 'Single', '2024-02-07', 'ad', 'asd', 'A+', '2024-02-07 08:07:36', '2024-03-07 03:54:45'),
(187, 'John', 'The', 'Doe', '', 'John Doe', 'Male', 'false', '', 'Single', '2024-02-07', 'John\'s Place', 'Professional Tester', 'A+', '2024-02-07 08:35:29', '2024-03-07 03:54:45'),
(188, 'Ralph Anthony', 'Paraguya', 'Abao', '', 'Rap-Rap', 'Male', 'false', '', 'Single', '2024-01-10', 'Kinoguitan', 'LGU-CDO', 'B+', '2024-02-07 08:40:25', '2024-03-07 03:54:45'),
(189, 'klok', 'klok', 'klok', 'klok', 'klok', 'Male', 'false', '', 'Single', '2024-02-14', 'klok', 'klok', 'A+', '2024-02-14 04:21:54', '2024-03-07 03:54:45'),
(190, 'klok', 'klok', 'klok', 'klok', 'klok', 'Male', 'false', '', 'Single', '2024-02-14', 'klok', 'klok', 'A+', '2024-02-14 04:21:54', '2024-03-07 03:54:45'),
(191, 'klok', 'klok', 'klok', 'klok', 'klok', 'Male', 'false', '', 'Single', '2024-02-14', 'klok', 'klok', 'A+', '2024-02-14 04:22:43', '2024-03-07 03:54:45'),
(192, 'klok', 'klok', 'klok', 'klok', 'klok', 'Male', 'false', '', 'Single', '2024-02-14', 'klok', 'klok', 'A+', '2024-02-14 04:22:44', '2024-03-07 03:54:45'),
(193, 'klok', 'klok', 'klok', 'klok', 'klok', 'Male', 'false', '', 'Single', '2024-02-14', 'klok', 'klok', 'A+', '2024-02-14 04:22:53', '2024-03-07 03:54:45'),
(194, 'klok', 'klok', 'klok', 'klok', 'klok', 'Male', 'false', '', 'Single', '2024-02-14', 'klok', 'klok', 'A+', '2024-02-14 04:22:53', '2024-03-07 03:54:45'),
(195, 'klok', 'klok', 'klok', 'klok', 'klok', 'Male', 'false', '', 'Single', '2024-02-14', 'klok', 'klok', 'A+', '2024-02-14 05:33:09', '2024-03-07 03:54:45'),
(196, 'klok', 'klok', 'klok', 'klok', 'klok', 'Male', 'false', '', 'Single', '2024-02-14', 'klok', 'klok', 'A+', '2024-02-14 05:33:53', '2024-03-07 03:54:45'),
(197, 'klok', 'klok', 'klok', 'klok', 'klok', 'Male', 'false', '', 'Single', '2024-02-14', 'klok', 'klok', 'A+', '2024-02-14 05:33:53', '2024-03-07 03:54:45'),
(198, 'klok', 'klok', 'klok', 'klok', 'klok', 'Male', 'false', '', 'Single', '2024-02-14', 'klok', 'klok', 'A+', '2024-02-14 05:36:10', '2024-03-07 03:54:45'),
(199, 'klok', 'klok', 'klok', 'klok', 'klok', 'Male', 'false', '', 'Single', '2024-02-14', 'klok', 'klok', 'A+', '2024-02-14 05:36:10', '2024-03-07 03:54:45'),
(200, 'klok', 'klok', 'klok', 'klok', 'klok', 'Male', 'false', '', 'Single', '2024-02-14', 'klok', 'klok', 'A+', '2024-02-14 05:42:02', '2024-03-07 03:54:45'),
(201, 'klok', 'klok', 'klok', 'klok', 'klok', 'Male', 'false', '', 'Single', '2024-02-14', 'klok', 'klok', 'A+', '2024-02-14 05:44:22', '2024-03-07 03:54:45'),
(202, 'kek', 'kek', 'kek', 'kek', 'kek', 'Male', 'false', '', 'Single', '2024-02-14', 'kek', 'kek', 'A+', '2024-02-14 05:46:32', '2024-03-07 03:54:45'),
(203, 'qwerty', 'qwerty', 'qwerty', 'qwerty', 'qwerty', 'Male', 'false', '', 'Single', '2024-02-14', 'qwerty', 'qwerty', 'A+', '2024-02-14 05:47:31', '2024-03-07 03:54:45'),
(204, 'asdfg', 'asdfg', 'asdfg', 'asdfg', 'asdfg', 'Female', 'false', '', 'Single', '2024-02-14', 'asdfg', 'asdfg', 'AB+', '2024-02-14 05:48:52', '2024-03-07 03:54:45'),
(205, 'kolokoy', 'kolokoy', 'kolokoy', 'kolokoy', 'kolokoy', 'Female', 'false', '', 'Annuled', '2024-01-19', 'kolokoy', 'kolokoy', 'A-', '2024-02-14 06:09:49', '2024-03-07 03:54:45'),
(206, 'kwek', 'kwek', 'kwek', 'kwek', 'kwek', 'Male', 'false', '', 'Married', '2024-02-29', 'kwek', 'kwek', 'A', '2024-02-14 06:21:12', '2024-03-07 03:54:45'),
(207, 'owak', 'owak', 'owak', 'owak', 'owak', 'Male', 'false', '', 'Widowed', '2024-01-27', 'owak', 'owak', 'AB-', '2024-02-14 06:22:25', '2024-03-07 03:54:45'),
(208, 'Diana', 'Bastos', 'Kolot', '', 'Bastos ug Buhok', 'Female', 'false', '', 'Married', '2024-02-14', 'Kingsfield', 'Magtutudlo', 'O+', '2024-02-14 06:26:19', '2024-03-07 03:54:45'),
(209, 'Ralph', 'Paraguya', 'Abao', '', 'raprap', 'Male', 'false', '', 'Single', '1/1/1901', 'Kinoguitan', 'Geographic Information System', 'B', '2024-02-14 08:35:34', '2024-03-07 03:54:45'),
(210, 'John Die', 'sadasd', 'asdasd', 'JR', 'rap rap', 'Male', 'false', '', 'Single', '2024-02-23', 'Kinoguitan', 'GIS', 'B-', '2024-02-23 08:49:25', '2024-03-07 03:54:45'),
(211, 'Ralph', 'Paraguya', 'Abao', '', 'raprap', 'Male', 'false', '', 'Single', '1/1/1901', 'Kinoguitan', 'Geographic Information System', 'B', '2024-02-23 08:51:23', '2024-03-07 03:54:45'),
(212, 'Ralph', 'Paraguya', 'Abao', '', 'raprap', 'Male', 'false', '', 'Single', '1/1/1901', 'Kinoguitan', 'Geographic Information System', 'B', '2024-02-23 08:52:19', '2024-03-07 03:54:45'),
(213, 'Ralph', 'Paraguya', 'Abao', '', 'raprap', 'Male', 'false', '', 'Single', '1/1/1901', 'Kinoguitan', 'Geographic Information System', 'B', '2024-02-23 08:52:19', '2024-03-07 03:54:45'),
(214, 'Ralph Anthony', 'Paraguya', 'Abao', '', 'rap rap', 'Male', 'false', '', 'Single', '1993-02-03', 'Kinoguitan', 'GIS', 'A+', '2024-03-01 08:29:10', '2024-03-07 03:54:45'),
(215, 'asd', '', 'asd', '', 'asd', 'Male', 'false', '', 'Widowed', '2024-03-05', 'asd', 'asd', 'A-', '2024-03-05 06:12:15', '2024-03-07 03:54:45'),
(216, 'asd', '', 'asd', '', 'asd', 'Female', 'false', '', 'Annuled', '2024-03-20', 'asd', 'asd', 'AB-', '2024-03-05 06:14:07', '2024-03-07 03:54:45'),
(217, 'asd', '', 'asd', '', 'asd', 'Male', 'false', '', 'Annuled', '2024-03-13', 'asd', 'asd', 'AB+', '2024-03-05 07:20:36', '2024-03-07 03:54:45'),
(218, 'asd', '', 'asd', '', 'asd', 'Male', 'false', '', 'Married', '2024-03-20', 'asd', 'asd', 'A-', '2024-03-05 07:21:39', '2024-03-07 03:54:45'),
(219, 'asd', '', 'asd', '', 'asd', 'Female', 'false', '', 'Married', '2024-03-20', 'asd', 'asd', 'AB+', '2024-03-05 07:22:31', '2024-03-07 03:54:45'),
(220, 'asd', '', 'asd', '', 'asd', 'Female', 'false', '', 'Annuled', '2024-03-20', 'asd', 'asd', 'A-', '2024-03-05 07:22:53', '2024-03-07 03:54:45'),
(221, 'Ralph', 'Paraguya', 'Abao', '', 'raprap', 'Male', 'false', '', 'Single', '1/1/1901', 'Kinoguitan', 'Geographic Information System', 'B', '2024-03-05 07:54:39', '2024-03-07 03:54:45'),
(222, 'Ralph', 'Paraguya', 'Abao', '', 'raprap', 'Male', 'false', '', 'Single', '1/1/1901', 'Kinoguitan', 'Geographic Information System', 'B', '2024-03-05 07:58:51', '2024-03-07 03:54:45'),
(223, 'Ralph', 'Paraguya', 'Abao', '', 'raprap', 'Male', 'false', '', 'Single', '1/1/1901', 'Kinoguitan', 'Geographic Information System', 'B', '2024-03-05 08:02:04', '2024-03-07 03:54:45'),
(224, 'Ralph', 'Paraguya', 'Abao', '', 'raprap', 'Male', 'false', '', 'Single', '1/1/1901', 'Kinoguitan', 'Geographic Information System', 'B', '2024-03-05 08:02:37', '2024-03-07 03:54:45'),
(225, 'Quicky', '', 'wawa', '', 'Quick', 'Male', 'false', '', 'Single', '2024-03-05', 'Kinoguitan', 'Doctor', 'AB+', '2024-03-05 09:01:02', '2024-03-07 03:54:45'),
(226, 'qwaqwa', 'Paraguya', 'Abao', '', 'raprap', 'Male', 'false', '', 'Single', '1/1/1901', 'Kinoguitan', 'Geographic Information System', 'B', '2024-03-05 09:04:20', '2024-03-07 03:54:45'),
(227, 'Jhudiel', 'Sabuero', 'Abrogar', '', 'Ash', 'Male', 'false', 'false', 'Single', '1999-11-05', 'Cagayan de Oro City', 'Full Stack Developer', 'A+', '2024-03-08 07:29:34', '2024-03-08 07:29:34'),
(228, 'Jhudiel', 'Sabuero', 'Abrogar', '', 'Ash', 'Male', 'false', 'false', 'Single', '1999-11-05', 'Cagayan de Oro City', 'Full Stack Developer', 'A+', '2024-03-08 07:29:34', '2024-03-08 07:29:34'),
(229, 'Jhudiel', 'Sabuero', 'Abrogar', '', 'Ash', 'Male', 'false', 'false', 'Single', '1999-11-05', 'Cagayan de Oro City', 'Full Stack Developer', 'A+', '2024-03-08 07:29:34', '2024-03-08 07:29:34'),
(230, 'Jhudiel', 'Sabuero', 'Abrogar', '', 'Ash', 'Male', 'false', 'false', 'Single', '1999-11-05', 'Cagayan de Oro City', 'Full Stack Developer', 'A+', '2024-03-08 07:29:34', '2024-03-08 07:29:34'),
(231, 'Jhudiel', 'Sabuero', 'Abrogar', '', 'Ash', 'Male', 'false', 'false', 'Single', '1999-11-05', 'Cagayan de Oro City', 'Full Stack Developer', 'A+', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(232, 'Jhudiel', 'Sabuero', 'Abrogar', '', 'Ash', 'Male', 'false', 'false', 'Single', '1999-11-05', 'Cagayan de Oro City', 'Full Stack Developer', 'A+', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(233, 'Jhudiel', 'Sabuero', 'Abrogar', '', 'Ash', 'Male', 'false', 'false', 'Single', '1999-11-05', 'Cagayan de Oro City', 'Full Stack Developer', 'A+', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(234, 'Jhudiel', 'Sabuero', 'Abrogar', '', 'Ash', 'Male', 'false', 'false', 'Single', '1999-11-05', 'Cagayan de Oro City', 'Full Stack Developer', 'A+', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(235, 'Jhudiel', 'Sabuero', 'Abrogar', '', 'Ash', 'Male', 'false', 'false', 'Single', '1999-11-05', 'Cagayan de Oro City', 'Full Stack Developer', 'A+', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(236, 'Jhudiel', 'Sabuero', 'Abrogar', '', 'Ash', 'Male', 'false', 'false', 'Single', '1999-11-05', 'Cagayan de Oro City', 'Full Stack Developer', 'A+', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(237, 'Jhudiel', 'Sabuero', 'Abrogar', 'Jr', 'Ash', 'Male', 'false', 'false', 'Single', '1999-11-05', 'Cagayan de Oro City', 'Full Stack Developer', 'A+', '2024-03-08 07:34:13', '2024-03-08 07:34:13'),
(238, 'asd', 'asd', 'asd', 'asd', 'asd', 'Male', 'false', 'false', 'Single', '2024-03-11', 'asd', 'asd', 'A', '2024-03-08 07:57:45', '2024-03-08 07:57:45'),
(239, 'dsa', 'dsa', 'dsa', 'dsa', 'dsa', 'Female', 'false', 'false', 'Married', '2024-03-04', 'dsa', '', 'A', '2024-03-08 08:01:32', '2024-03-08 08:01:32'),
(240, 'John', 'D', 'Olok', '', 'JohnD', 'Female', 'true', 'true', 'Annuled', '2024-03-13', 'Carmen', 'GIS', 'A', '2024-03-13 08:47:24', '2024-03-13 08:47:24');

-- --------------------------------------------------------

--
-- Table structure for table `persons_address`
--

CREATE TABLE `persons_address` (
  `person_address_id` int(11) NOT NULL,
  `fk_person_id` int(11) NOT NULL,
  `fk_barangay_id` int(11) NOT NULL,
  `street` varchar(255) NOT NULL,
  `sitio` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `persons_address`
--

INSERT INTO `persons_address` (`person_address_id`, `fk_person_id`, `fk_barangay_id`, `street`, `sitio`, `created_at`, `updated_at`) VALUES
(2, 170, 1, 'asd', 'asd', '2024-02-06 09:06:15', '2024-02-06 09:06:15'),
(8, 185, 1, 'lewl', 'lewl', '2024-02-07 08:02:31', '2024-02-07 08:02:31'),
(9, 186, 1, 'asd', 'asd', '2024-02-07 08:07:36', '2024-02-07 08:07:36'),
(10, 187, 1, 'John\'s Street', 'John\'s Sitio', '2024-02-07 08:35:49', '2024-02-07 08:35:49'),
(11, 188, 53, 'Villarin', 'Zone-8', '2024-02-07 08:43:55', '2024-02-07 08:43:55'),
(12, 198, 1, 'klok', 'klok', '2024-02-14 05:36:10', '2024-02-14 05:36:10'),
(13, 199, 1, 'klok', 'klok', '2024-02-14 05:36:10', '2024-02-14 05:36:10'),
(14, 200, 1, 'klok', 'klok', '2024-02-14 05:42:02', '2024-02-14 05:42:02'),
(15, 201, 1, 'klok', 'klok', '2024-02-14 05:44:22', '2024-02-14 05:44:22'),
(16, 202, 1, 'kek', 'kek', '2024-02-14 05:46:32', '2024-02-14 05:46:32'),
(17, 203, 1, 'qwerty', 'qwerty', '2024-02-14 05:47:31', '2024-02-14 05:47:31'),
(18, 204, 3, 'asdfg', 'asdfg', '2024-02-14 05:48:52', '2024-02-14 05:48:52'),
(19, 205, 5, 'kolokoy', 'kolokoy', '2024-02-14 06:09:49', '2024-02-14 06:09:49'),
(20, 206, 3, 'kwek', 'kwek', '2024-02-14 06:21:12', '2024-02-14 06:21:12'),
(21, 207, 6, 'owak', 'owak', '2024-02-14 06:22:25', '2024-02-14 06:22:25'),
(22, 208, 43, '', '', '2024-02-14 06:26:19', '2024-02-14 06:26:19'),
(23, 209, 41, '', '', '2024-02-14 08:35:34', '2024-02-14 08:35:34'),
(24, 210, 52, 'sad', 'asd', '2024-02-23 08:49:25', '2024-02-23 08:49:25'),
(25, 211, 41, '', '', '2024-02-23 08:51:23', '2024-02-23 08:51:23'),
(26, 212, 41, '', '', '2024-02-23 08:52:19', '2024-02-23 08:52:19'),
(27, 213, 41, '', '', '2024-02-23 08:52:19', '2024-02-23 08:52:19'),
(28, 214, 1, '#057 Villarin St., Carmen', '', '2024-03-01 08:29:10', '2024-03-01 08:29:10'),
(29, 215, 2, '', '', '2024-03-05 06:12:15', '2024-03-05 06:12:15'),
(30, 216, 5, '', '', '2024-03-05 06:14:07', '2024-03-05 06:14:07'),
(31, 217, 43, '', '', '2024-03-05 07:20:36', '2024-03-05 07:20:36'),
(32, 218, 4, '', '', '2024-03-05 07:21:39', '2024-03-05 07:21:39'),
(33, 219, 44, '', '', '2024-03-05 07:22:31', '2024-03-05 07:22:31'),
(34, 220, 4, '', '', '2024-03-05 07:22:53', '2024-03-05 07:22:53'),
(35, 221, 41, '', '', '2024-03-05 07:54:39', '2024-03-05 07:54:39'),
(36, 222, 41, '', '', '2024-03-05 07:58:51', '2024-03-05 07:58:51'),
(37, 223, 41, '', '', '2024-03-05 08:02:04', '2024-03-05 08:02:04'),
(38, 224, 41, '', '', '2024-03-05 08:02:37', '2024-03-05 08:02:37'),
(39, 225, 52, '', '', '2024-03-05 09:01:02', '2024-03-05 09:01:02'),
(40, 226, 41, '', '', '2024-03-05 09:04:20', '2024-03-05 09:04:20'),
(41, 227, 30, '', '', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(42, 229, 30, '', '', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(43, 230, 30, '', '', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(44, 228, 30, '', '', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(45, 232, 30, '', '', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(46, 231, 30, '', '', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(47, 235, 30, '', '', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(48, 234, 30, '', '', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(49, 233, 30, '', '', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(50, 236, 30, '', '', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(51, 237, 30, '', '', '2024-03-08 07:34:13', '2024-03-08 07:34:13'),
(52, 238, 2, '', 'sd', '2024-03-08 07:57:45', '2024-03-08 07:57:45'),
(53, 239, 3, '', 'dsa', '2024-03-08 08:01:33', '2024-03-08 08:01:33'),
(54, 240, 58, '', 'Purok 2', '2024-03-13 08:47:24', '2024-03-13 08:47:24');

-- --------------------------------------------------------

--
-- Table structure for table `persons_email_addresses`
--

CREATE TABLE `persons_email_addresses` (
  `person_email_address_id` int(11) NOT NULL,
  `fk_person_id` int(11) NOT NULL,
  `fk_email_address_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `persons_email_addresses`
--

INSERT INTO `persons_email_addresses` (`person_email_address_id`, `fk_person_id`, `fk_email_address_id`, `created_at`, `updated_at`) VALUES
(1, 237, 33, '2024-03-08 07:34:14', '2024-03-08 07:34:14'),
(2, 238, 34, '2024-03-08 07:57:46', '2024-03-08 07:57:46'),
(3, 239, 35, '2024-03-08 08:01:33', '2024-03-08 08:01:33'),
(4, 240, 45, '2024-03-13 08:47:24', '2024-03-13 08:47:24');

-- --------------------------------------------------------

--
-- Table structure for table `persons_offices`
--

CREATE TABLE `persons_offices` (
  `person_office_id` int(11) NOT NULL,
  `fk_person_id` int(11) NOT NULL,
  `fk_office_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `persons_offices`
--

INSERT INTO `persons_offices` (`person_office_id`, `fk_person_id`, `fk_office_id`, `created_at`, `updated_at`) VALUES
(1, 2, 1, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(2, 3, 1, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(3, 4, 2, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(4, 5, 2, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(5, 6, 2, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(6, 7, 3, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(7, 8, 3, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(8, 9, 3, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(9, 10, 4, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(10, 11, 5, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(11, 12, 6, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(12, 13, 6, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(13, 14, 6, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(14, 15, 7, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(15, 16, 7, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(16, 17, 7, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(17, 18, 7, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(18, 19, 8, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(19, 20, 8, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(20, 21, 8, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(21, 22, 8, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(22, 23, 8, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(23, 24, 9, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(24, 25, 9, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(25, 26, 9, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(26, 27, 10, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(27, 28, 10, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(28, 29, 10, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(29, 30, 10, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(30, 31, 10, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(31, 32, 10, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(32, 33, 11, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(33, 34, 11, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(34, 35, 11, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(35, 36, 11, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(36, 37, 11, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(37, 38, 12, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(38, 39, 12, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(39, 40, 12, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(40, 41, 12, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(41, 42, 13, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(42, 43, 13, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(43, 44, 13, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(44, 45, 13, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(45, 46, 13, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(46, 47, 14, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(47, 48, 14, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(48, 49, 14, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(49, 50, 14, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(50, 51, 14, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(51, 52, 15, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(52, 53, 16, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(53, 54, 16, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(54, 55, 17, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(55, 56, 17, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(56, 57, 18, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(57, 58, 19, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(58, 59, 20, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(59, 60, 21, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(60, 61, 21, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(61, 62, 21, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(62, 63, 22, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(63, 64, 22, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(64, 65, 22, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(65, 66, 23, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(66, 67, 23, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(67, 68, 24, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(68, 69, 24, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(69, 70, 24, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(70, 71, 25, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(71, 72, 26, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(72, 73, 26, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(73, 74, 27, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(74, 75, 27, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(75, 76, 27, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(76, 77, 27, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(77, 78, 28, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(78, 79, 28, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(79, 80, 28, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(80, 81, 29, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(81, 82, 29, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(82, 83, 29, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(83, 84, 29, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(84, 85, 30, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(85, 86, 30, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(86, 87, 31, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(87, 88, 31, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(88, 89, 31, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(89, 90, 32, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(90, 91, 32, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(91, 92, 33, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(92, 93, 33, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(93, 94, 34, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(94, 95, 34, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(95, 96, 35, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(96, 97, 35, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(97, 98, 35, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(98, 99, 36, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(99, 100, 36, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(100, 101, 37, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(101, 102, 38, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(102, 103, 38, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(103, 104, 39, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(104, 105, 40, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(105, 106, 40, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(106, 107, 41, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(107, 108, 41, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(108, 109, 20, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(109, 110, 20, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(110, 111, 20, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(111, 112, 39, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(112, 113, 39, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(113, 114, 39, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(114, 115, 42, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(115, 116, 43, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(116, 117, 44, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(117, 118, 45, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(118, 119, 46, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(119, 120, 46, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(120, 121, 46, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(121, 122, 47, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(122, 123, 47, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(123, 124, 48, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(124, 125, 49, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(125, 126, 49, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(126, 127, 50, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(127, 128, 51, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(128, 129, 52, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(129, 130, 52, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(130, 131, 53, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(131, 132, 53, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(132, 133, 53, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(133, 134, 54, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(134, 135, 54, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(135, 136, 54, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(136, 137, 54, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(137, 138, 54, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(138, 139, 54, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(139, 140, 54, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(141, 142, 54, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(142, 143, 55, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(143, 144, 55, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(144, 145, 55, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(145, 146, 55, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(146, 147, 56, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(147, 148, 56, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(148, 149, 56, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(149, 150, 56, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(150, 151, 57, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(151, 152, 58, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(152, 153, 58, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(153, 154, 59, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(154, 155, 59, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(155, 156, 59, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(156, 157, 60, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(157, 158, 60, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(158, 159, 61, '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(159, 237, 5, '2024-03-08 07:34:14', '2024-03-08 07:34:14'),
(160, 238, 11, '2024-03-08 07:57:46', '2024-03-08 07:57:46'),
(161, 240, 71, '2024-03-13 08:47:24', '2024-03-13 08:47:24');

-- --------------------------------------------------------

--
-- Table structure for table `persons_phone_numbers`
--

CREATE TABLE `persons_phone_numbers` (
  `person_contact_number_id` int(11) NOT NULL,
  `fk_person_id` int(11) NOT NULL,
  `fk_phone_number_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `persons_phone_numbers`
--

INSERT INTO `persons_phone_numbers` (`person_contact_number_id`, `fk_person_id`, `fk_phone_number_id`, `created_at`, `updated_at`) VALUES
(1, 230, 186, '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(2, 228, 188, '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(3, 227, 185, '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(4, 229, 187, '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(5, 232, 189, '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(6, 231, 190, '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(7, 235, 191, '2024-03-08 07:29:36', '2024-03-08 07:29:36'),
(8, 233, 192, '2024-03-08 07:29:36', '2024-03-08 07:29:36'),
(9, 234, 193, '2024-03-08 07:29:36', '2024-03-08 07:29:36'),
(10, 236, 194, '2024-03-08 07:29:36', '2024-03-08 07:29:36'),
(11, 237, 195, '2024-03-08 07:34:14', '2024-03-08 07:34:14'),
(12, 238, 196, '2024-03-08 07:57:45', '2024-03-08 07:57:45'),
(13, 239, 197, '2024-03-08 08:01:33', '2024-03-08 08:01:33'),
(14, 240, 207, '2024-03-13 08:47:24', '2024-03-13 08:47:24');

-- --------------------------------------------------------

--
-- Table structure for table `persons_trainings`
--

CREATE TABLE `persons_trainings` (
  `person_training_id` int(11) NOT NULL,
  `fk_person_id` int(11) NOT NULL,
  `fk_training_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `phone_numbers`
--

CREATE TABLE `phone_numbers` (
  `phone_number_id` int(11) NOT NULL,
  `contact_number` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `phone_numbers`
--

INSERT INTO `phone_numbers` (`phone_number_id`, `contact_number`, `created_at`, `updated_at`) VALUES
(3, '9173279731', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(4, '9177034670', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(5, '9178579160', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(6, '9178579233', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(7, '0917 156 1288', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(8, '9360743107', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(9, '9171525796', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(10, '9263989211', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(11, '9177060480', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(12, '9177099105', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(13, '9062301387', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(14, '9186184081', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(15, '9266682474', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(16, '9166440271', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(17, '9669351378', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(18, '9204935580', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(19, '9177063906', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(20, '9176886658', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(21, '9153417433', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(22, '9171522503', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(23, '9177051491', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(24, '9162400010', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(25, '9354595270', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(26, '9178293418', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(27, '9177713663', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(28, '9153216167', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(29, '9177033224', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(30, '9171459643', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(31, '9179120252', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(32, '9267520623', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(33, '9166271967', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(34, '9173079374', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(35, '9177018290\r\n', '2024-01-16 08:48:10', '2024-01-16 08:48:10'),
(36, '9365468019', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(37, '9066574426', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(38, '936546809', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(39, '936546809', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(40, '9551664480', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(41, '9173204127', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(42, '9171545421', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(43, '9777428360', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(44, '9161508542', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(45, '9977969197', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(46, '9190797198', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(47, '9989991954', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(48, '9052868070', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(49, '9951134794', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(50, '856-9105', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(51, '9184976818', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(52, '9976851722', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(53, '9565344611', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(54, '9175633300', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(55, '9069641092', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(56, '9352264077', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(57, '9177095433', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(58, '9057704960', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(59, '9173096854', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(60, '9177919090', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(61, '9551531630', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(62, '9176274225', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(63, '9152704738', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(64, '9177204226', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(65, '9457965416', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(66, '9171337499', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(67, '9359156350', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(68, '9177949328', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(69, '9650472769', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(70, '9272692183', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(71, '9267094911', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(72, '9268361271', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(73, '9176799273', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(74, '9177708906', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(75, '9171237171', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(76, '9173021483', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(77, '9264208227', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(78, '9174939743', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(79, '9177725139', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(80, '9165690879', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(81, '9971487356', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(82, '9976181863', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(83, '9973818470', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(84, '9176273583', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(85, '9177191762', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(86, '9064622474', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(87, '881-8767', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(88, '9366246777', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(89, '9177061988', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(90, '9261277653', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(91, '9751098175', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(92, '9173128071', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(93, '9177061778', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(94, '9166657662', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(95, '9975237876', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(96, '9530028776', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(97, '9774739368', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(98, '9755306414', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(99, '9173128071', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(100, '9068711947', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(101, '926473476', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(102, '9177961800', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(103, '9266198308', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(104, '9151699283', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(105, '9177262659', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(106, '9399154716', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(107, '95660879478', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(108, '9166878570', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(109, '9173231577', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(110, '9177052274', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(111, '9177171888', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(112, '9177121990', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(113, '9056511573', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(114, '9175944213', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(115, '9177737449', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(116, '9177068853', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(117, '9173012261', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(118, '9173184385', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(119, '9209095652', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(120, '9209747266', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(121, '9209681726', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(122, '9171070944', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(124, '9399372589', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(125, '9177051163', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(126, '9272582725', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(127, '9177948650', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(128, '885860167', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(129, '9176882952', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(130, '9176882341', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(131, '9192204518', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(132, '9177726751', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(133, '9267700082', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(134, '9932722722', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(135, '9177069250', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(136, '9195126632', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(137, '9175588759', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(138, '9173026633', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(139, '9177705396', '2024-01-16 06:46:56', '2024-01-16 06:46:56'),
(141, 'asd', '2024-02-06 09:06:16', '2024-02-06 09:06:16'),
(146, 'dsa', '2024-02-07 07:33:18', '2024-02-07 07:33:18'),
(148, 'aw', '2024-02-07 07:41:30', '2024-02-07 07:41:30'),
(150, '123123124', '2024-02-07 07:52:20', '2024-02-07 07:52:20'),
(151, 'zxc', '2024-02-07 08:00:54', '2024-02-07 08:00:54'),
(152, 'lewl', '2024-02-07 08:02:31', '2024-02-07 08:02:31'),
(153, 'asd', '2024-02-07 08:07:37', '2024-02-07 08:07:37'),
(154, '09123456789', '2024-02-07 08:36:31', '2024-02-07 08:36:31'),
(155, '09123456789', '2024-02-07 08:43:55', '2024-02-07 08:43:55'),
(156, 'klok', '2024-02-14 05:36:10', '2024-02-14 05:36:10'),
(157, 'klok', '2024-02-14 05:36:10', '2024-02-14 05:36:10'),
(158, 'klok', '2024-02-14 05:42:02', '2024-02-14 05:42:02'),
(159, 'klok', '2024-02-14 05:44:22', '2024-02-14 05:44:22'),
(160, 'kek', '2024-02-14 05:46:32', '2024-02-14 05:46:32'),
(161, 'qwerty', '2024-02-14 05:47:31', '2024-02-14 05:47:31'),
(162, 'asdfg', '2024-02-14 05:48:52', '2024-02-14 05:48:52'),
(163, 'kolokoy', '2024-02-14 06:09:49', '2024-02-14 06:09:49'),
(164, 'kwek', '2024-02-14 06:21:12', '2024-02-14 06:21:12'),
(165, 'owak', '2024-02-14 06:22:25', '2024-02-14 06:22:25'),
(166, '235324234', '2024-02-14 06:26:19', '2024-02-14 06:26:19'),
(167, '123123', '2024-02-14 08:35:34', '2024-02-14 08:35:34'),
(168, '9359097565', '2024-02-23 08:49:25', '2024-02-23 08:49:25'),
(169, '123123', '2024-02-23 08:51:23', '2024-02-23 08:51:23'),
(170, '123123', '2024-02-23 08:52:19', '2024-02-23 08:52:19'),
(171, '123123', '2024-02-23 08:52:19', '2024-02-23 08:52:19'),
(172, '+639359097565', '2024-03-01 08:29:10', '2024-03-01 08:29:10'),
(173, 'asd', '2024-03-05 06:12:15', '2024-03-05 06:12:15'),
(174, 'asd', '2024-03-05 06:14:07', '2024-03-05 06:14:07'),
(175, 'asd', '2024-03-05 07:20:36', '2024-03-05 07:20:36'),
(176, 'asd', '2024-03-05 07:21:39', '2024-03-05 07:21:39'),
(177, 'asd', '2024-03-05 07:22:31', '2024-03-05 07:22:31'),
(178, 'asd', '2024-03-05 07:22:53', '2024-03-05 07:22:53'),
(179, '123123', '2024-03-05 07:54:39', '2024-03-05 07:54:39'),
(180, '123123', '2024-03-05 07:58:51', '2024-03-05 07:58:51'),
(181, '123123', '2024-03-05 08:02:04', '2024-03-05 08:02:04'),
(182, '123123', '2024-03-05 08:02:37', '2024-03-05 08:02:37'),
(183, '9359097565', '2024-03-05 09:01:02', '2024-03-05 09:01:02'),
(184, '123123', '2024-03-05 09:04:20', '2024-03-05 09:04:20'),
(185, '227', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(186, '230', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(187, '229', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(188, '228', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(189, '232', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(190, '231', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(191, '235', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(192, '233', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(193, '234', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(194, '236', '2024-03-08 07:29:35', '2024-03-08 07:29:35'),
(195, '237', '2024-03-08 07:34:14', '2024-03-08 07:34:14'),
(196, 'asd', '2024-03-08 07:57:45', '2024-03-08 07:57:45'),
(197, 'dsa', '2024-03-08 08:01:33', '2024-03-08 08:01:33'),
(198, 'sample 3', '2024-03-11 04:02:34', '2024-03-11 04:02:34'),
(199, '09359097565', '2024-03-11 08:57:15', '2024-03-11 08:57:15'),
(200, '09359097565', '2024-03-12 07:13:13', '2024-03-12 07:13:13'),
(201, 'asd', '2024-03-13 04:13:10', '2024-03-13 04:13:10'),
(202, 'qwe', '2024-03-13 04:28:16', '2024-03-13 04:28:16'),
(203, 'zxc', '2024-03-13 04:34:47', '2024-03-13 04:34:47'),
(204, 'sdf', '2024-03-13 04:42:01', '2024-03-13 04:42:01'),
(205, '09359097565', '2024-03-13 08:37:23', '2024-03-13 08:37:23'),
(206, '+639359097565', '2024-03-13 08:45:27', '2024-03-13 08:45:27'),
(207, '09359097565', '2024-03-13 08:47:24', '2024-03-13 08:47:24');

-- --------------------------------------------------------

--
-- Table structure for table `policies`
--

CREATE TABLE `policies` (
  `policies_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `date_approved` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `policy_number` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `policies`
--

INSERT INTO `policies` (`policies_id`, `name`, `date_approved`, `category`, `type`, `policy_number`, `created_at`, `updated_at`) VALUES
(1, 'RESOLUTION FOR THE APPROVAL AND ADOPTION OF THE FIVE (5) YEAR DISASTER RISK REDUCTION AND MANAGEMENT  (DRRM) PLAN (2013-2017) OF CAGAYAN DE ORO CITY BY THE CITY DISASTER RISK REDUCTION AND MANAGEMENT COUNCIL', '2013-09-09', 'CDRRMC', 'Resolution', '001-13 ', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(2, 'RESOLUTION FOR THE AMENDMENT OF THE 2015 ANNUAL INVESTMENT PLAN UNDER THE DISASTER RISK REDUCTION AND MANAGEMENT  FUND TRUST FUND AND ALLOCATING THEREFROM THE AMOUNT OF 37.5M FOR THE CLOSURE AND REHABILITATION OF THE CAGAYAN DE ORO OPEN DUMPSITE', '2016-03-10', 'CDRRMC', 'Resolution', '001-2016', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(3, 'RESOLUTION REQUESTING THE LOCAL CHIEF EXECUTIVE (LCE) OF CAGAYAN DE ORO TO RECOMMEND TO THE SANGGUNIANG PANLUNSOD THAT A STATE OF CALAMITY BE DECLARED IN HINTERLAND BARANGAYS SEVERELY AFFECTED BY THE CURRENT DROUGHT IN THEIR RESPECTIVE AREAS, NAMELY, BARANGAYS FS CATANICO, TABLON, DANSOLIHON, BAYANGA, INDAHAG,TIGNAPOLOAN, BUGO, PAGATPAT, BALUBAL, CUGMAN, CANITOAN, MAMBUAYA, AND AGUSAN', '2016-03-16', 'CDRRMC', 'Resolution', '01-2016', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(4, 'RESOLUTION FOR THE APPROVAL AND ADOPTION OF THE CDRRMC ALERT PROTOCOL AND HYDROMET (FLOODING) EVACUATION AND COMMUNICATION PROTOCOL', '2016-06-29', 'CDRRMC', 'Resolution', '0003-16', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(5, 'RESOLUTION DECLARING THE CITY UNDER A STATE OF CALAMITY DUE TO WIDESPREAD FLOODING THRU THE RECOMMENDATION OF THE CITY DISASTER RISK REDUCTION AND MANAGEMENT COUNCIL (CDRRMC) TO THE CITY MAYOR, HON. OSCAR S. MORENO AND THEREFROM ENDORSING TO THE CITY COUNCIL OF CAGAYAN DE ORO', '2017-01-17', 'CDRRMC', 'Resolution', '01-2017', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(6, 'RESOLUTION FOR THE APPROVAL AND ADOPTION OF THE LOCAL DISASTER RISK REDUCTION AND MANAGEMENT PLAN (LDRRMP) 2017-2021', '2017-03-10', 'CDRRMC', 'Resolution', '0002-17', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(7, 'RESOLUTION FOR THE ACCREDITATION OF CIVILIAN DISASTER VOLUNTEERS', '2018-03-27', 'CDRRMC', 'Resolution', '001-2018', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(8, 'RESOLUTION FOR THE CREATION OF A SUB-COMMITTEE UNDER EARTHQUAKE PREPAREDNESS', '2018-03-27', 'CDRRMC', 'Resolution', '002-2018', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(9, 'RESOLUTION FOR THE CITY COUNCIL TO LEGISLATE A MANDATE FOR THE PRIVATE SECTORS TO COORDINATE AND COOPERATE WITH CDRRMC SUB-COMMITTEE IN DATA GATHERING', '2018-03-27', 'CDRRMC', 'Resolution', '003-2018', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(10, 'RESOLUTION REQUESTING  PRIVATE  AND PUBLIC INSTITUTIONS OPERATING FIRETRUCKS IN SUPPLYING WATER TO BARANGAY INDAHAG AND BARANGAY BALUBAL', '2019-03-20', 'CDRRMC', 'Resolution', '001-2019', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(11, 'RESOLUTION ENJOINING THE DPWH TO SPEED UP THE COMPLETION OF THE PROJECTS IN THE AREAS TO BE IDENTIFIED BY THE ROADS AND TRAFFIC ADMINISTRATION (RTA) THAT AFFECTS THE CITY TRAFFIC', '2019-03-20', 'CDRRMC', 'Resolution', '002- 2019', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(13, 'RESOLUTION APPROVING THE SUB-PROJECT PROPOSAL OF ROAD CONCRETING OF 0.1351KM BARANGAY ACCESS ROAD AT ZONE 2 BARANGAY LUMBIA, CDOC AND ENDORSING THE SAME TO REGIONAL PROGRAM MANAGEMENT OFFICE OF KALAHI-CIDSS: KAPANGYARIHAN AT KAUNLARAN SA BARANGAY (KC:KBB) OF DSWD FUNDING', '2020-12-10', 'CDRRMC', 'Resolution', '0001-20', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(14, 'RESOLUTION APPROVING AND/OR ADOPTING THE CAGAYAN DE ORO CITY CONTINGENCY PLAN FOR FLOOD', '2020-10-29', 'CDRRMC', 'Resolution', '0002-20', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(15, 'RESOLUTION APPROVING AND/OR ADOPTING THE CAGAYAN DE ORO CITY CONTINGENCY PLAN FOR COVID- 19', '2020-10-29', 'CDRRMC', 'Resolution', '0003-20', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(16, 'RESOLUTION APPROVING THE SUB-PROJECT PROPOSAL OF CASH FOR WORK AT BARANGAY CARMEN, CDOC AND ENDORSING THE SAME TO REGIONAL PROGRAM MANAGEMENT OFFICE OF KALAHI-CIDSS: KAPANGYARIHAN AT KAUNLARAN SA BARANGAY (KC:KKB) OF DSWD FOR FUNDING', '2021-06-08', 'CDRRMC', 'Resolution', '001-2021', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(17, 'RESOLUTION FOR THE APPROVAL AND ADOPTION OF THE LOCAL DISASTER RISK REDUCTION AND MANAGEMENT PLAN (LDRRMP) 2022-2030 ', '2022-04-27', 'CDRRMC', 'Resolution', '0001-22', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(19, 'RESOLUTION FOR THE APPROVAL OF THE CITY DISASTER RISK REDUCTION AND MANAGEMENT COUNCIL (CDRRMC) MEMBERSHIP GUIDELINES', '2022-09-14', 'CDRRMC', 'Resolution', '0003-22', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(20, 'RESOLUTION FOR THE ESTABLISHMENT OF A CITY DISASTER REDUCTION AND MANAGEMENT DEPARTMENT (CDRRMC) ORO RESCUE 911 SATELLITE OFFICES IN BARANGAY AGUSAN AND LUMBIA ', '2023-03-30', 'CDRRMC', 'Resolution', '001-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(21, 'RESOLUTION APPROVING AND/OR ADOPTING THE CAGAYAN DE ORO CITY CONTINGENCY PLAN ON FLOODING', '2023-05-31', 'CDRRMC', 'Resolution', '002-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(22, 'RESOLUTION APPROVING AND/OR ADOPTING THE CAGAYAN DE ORO CITY CONTINGENCY PLAN ON COVID-19', '2023-05-31', 'CDRRMC', 'Resolution', '003-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(23, 'RESOLUTION ADOPTING THE QUALIFICATION CRITERIA FOR THE ACCREDITATION OF VOLUNTEER MOBILIZING ORGANIZATION (VMOS)', '2023-06-29', 'CDRRMC', 'Resolution', '004-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(24, 'RESOLUTION APPROVING AND/OR ADOPTING THE CAGAYAN DE ORO CITY CONTINGENCY PLAN ON DROUGHT', '2023-05-31', 'CDRRMC', 'Resolution', '005-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(25, 'RESOLUTION CREATING THE BARANGAY DISASTER RISK REDUCTION AND MANAGEMENT PLAN (BDRRMP) REVIEW TEAM', '2023-09-28', 'CDRRMC', 'Resolution', '006-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(26, 'RESOLUTION CREATING THE CAMP MANAGEMENT COMMITTEE', '2023-09-28', 'CDRRMC', 'Resolution', '007-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(27, 'RESOLUTION FOR THE APPROVAL AND ADOPTION OF THE UPDATED CITY DISASTER RISK REDUCTION AND MANAGEMENT COUNCIL (CDRRMC) ALERT PROTOCOL AND HYDROMET (FLOOODING) EVACUATION AND COMMUNICATION PROTOCOL', '2023-09-28', 'CDRRMC', 'Resolution', '008-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(28, 'RESOLUTION APPROVING/ADOPTING THE STANDARD OPERATING PROCEDURE OF THE CAGAYAN DE ORO CITY DISASTER RISK REDUCTION AND MANAGEMENT DEPARTMENT OPERATION CENTER (OPCEN)', '2023-09-28', 'CDRRMC', 'Resolution', '009-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(29, 'RESOLUTION INSTITUTIONALIZING INTER-LGU COLLABORATION ON DISASTER RESPONSE, INFORMATION SHARING, AND WATERSHED MANAGEMENT BETWEEN THE CITY GOVERNMENT OF CAGAYAN DE ORO AND MUNICIPALITIES OF TALAKAG, BAUNGON, LIBONA, AND MANOLO FORTICH IN BUKIDNON; TAGOLOAN AND OPOL IN MISAMIS ORIENTAL', '2023-09-28', 'CDRRMC', 'Resolution', '010-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(30, 'RESOLUTION INSTITUTIONALIZING THE COLLABORATION BETWEEN THE CITY GOVERNMENT OF CAGAYAN DE ORO AND EL OBSERVATORIO DE MANILA TO STRENGTHEN THE CITY\'S WEATHER MONITORING CAPABILITY AND ENSURE FUNCTIONALITY OF AUTOMATED WEATHER STATIONS', '2023-09-28', 'CDRRMC', 'Resolution', '011-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(31, 'RESOLUTION COMMITTING THE ORO RESCUE 911 EMS AND USAR AS VOLUNTEER MOBILIZING ORGANIZATION IN CAGAYAN DE ORO CITY', '2023-09-28', 'CDRRMC', 'Resolution', '012-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(32, 'RESOLUTION APPROVING AND/OR ADOPTING THE UPDATED CAGAYAN DE ORO CITY CONTINGENCY PLAN ON DROUGHT IN THE AGRICULTURE SECTOR', '2023-10-24', 'CDRRMC', 'Resolution', '013-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(33, 'RESOLUTION APPROVING AND/OR ADOPTING THE CAGAYAN DE ORO CITY PUBLIC SERVICE CONTINUITY PLAN (PSCP)', '2023-12-06', 'CDRRMC', 'Resolution', '014-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(34, 'RESOLUTION APPROVING AND/OR ADOPTING THE CAGAYAN DE ORO CITY CAMP MANAGEMENT PLAN 2023-2025', '2023-12-06', 'CDRRMC', 'Resolution', '015-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(35, 'RESOLUTION INSTITUTIONALIZING THE USE OF THE 54 EVACUATION CENTERS IN CAGAYAN DE ORO CITY', '2023-12-06', 'CDRRMC', 'Resolution', '016-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(36, 'RESOLUTION INSTITUTIONALIZING THE COLLABORATION BETWEEN THE CITY GOVERNMENT OF CAGAYAN DE ORO AND BALAY MINDANAW FOUNDATION INCORPORATED IN STRENGTHENING THE CITY\'S DISASTER RISK REDUCTION, PREPAREDNESS, AND POST-DISASTER ADAPTION', '2023-12-06', 'CDRRMC', 'Resolution', '017-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(37, 'RESOLUTION INSTITUTIONALIZING THE COLLABORATION BETWEEN THE CITY GOVERNMENT OF CAGAYAN DE ORO AND KAGAY-AN EVANGELICAL DISASTER RESPONSE NETWORK (KEDRN) DURING DISASTER RESPONSE', '2023-12-06', 'CDRRMC', 'Resolution', '018-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(38, 'RESOLUTION APPROVING AND/OR ADOPTING THE COMPREHENSIVE DEVELOPMENT PLAN (CDP) OF CAGAYAN DE ORO', '2014-12-15', 'Sangguniang Panlungsod', 'Resolution', '11883 - 2014', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(39, 'RESOLUTION ADOPTING THE CAGAYAN DE ORO CITY COMPREHENSIVE LAND USE PLAN FOR CY 2013 - 2022', '2015-01-26', 'Sangguniang Panlungsod', 'Resolution', '11914 - 2015', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(40, 'RESOLUTION DECLARING A PORTION OF SITIO PINIKITAN, BARANGAY CAMAMAN-AN, THIS CITY, UNDER THE STATE OF CALAMITY DUE TO THE CONFLAGRATION THAT OCCURRED THEREAT ON FEBRUARY 14, 2016, AND FOR THIS PURPOSE, AUTHORIZING THE BARANGAY TO UTILIZE ITS BARANGAY RISK REDUCTION FUND', '2016-02-15', 'Sangguniang Panlungsod', 'Resolution', '12282 - 2016', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(41, 'RESOLUTION URGING THE DIFFERENT BARANGAY COUNCILS IN THE CITY THROUGH THEIR RESPECTIVE PUNONG BARANGAYS TO STRICTLY ENFORCE THE PROVISIONS OF ORDINANCE NO. 6864-99, ENTITLED: AN ORDINANCE REGULATING THE CONSTRUCTION OR ERECTION OF ANY BUILDING, HOUSE, POST, OR OTHER STRUCTURES IN THE CITY, PROVIDING PENALTY FOR VIOLATION THEREOF AND FOR OTHER PURPOSES, PURSUANT TO SECTION 3 OF SAID ORDINANCE', '2017-03-13', 'Sangguniang Panlungsod', 'Resolution', '12644 - 2017', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(42, 'RESOLUTION APPROVING AND/OR ADOPTING THE FLOOD CONTINGENCY PLAN OF CAGAYAN DE ORO CITY', '2017-05-22', 'Sangguniang Panlungsod', 'Resolution', '12700 - 2017', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(43, 'RESOLUTION APPROVING AND/OR ADOPTING THE LOCAL CLIMATE CHANGE ACTION PLAN FOR CY 2017 TO 2019 OF CAGAYAN DE ORO CITY', '2017-05-22', 'Sangguniang Panlungsod', 'Resolution', '12701 - 2017', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(44, 'RESOLUTION APPROVING AND/OR ADOPTING THE 5-YEAR CAGAYAN DE ORO CITY DISASTER RISK REDUCTION AND MANAGEMENT (DRRM) PLAN', '2017-05-22', 'Sangguniang Panlungsod', 'Resolution', '12702 - 2017', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(45, 'RESOLUTION APPROVING AND/OR ADOPTING THE CAGAYAN DE ORO CITY LOCAL SHELTER PLAN FOR CY 2014 TO CY 2022', '2017-05-22', 'Sangguniang Panlungsod', 'Resolution', '12703 - 2017', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(46, 'RESOLUTION DECLARING THE CITY OF CAGAYAN DE ORO UNDER A STATE OF CALAMITY DUE TO TROPICAL STORM VINTA THAT HIT THE CITY ON DECEMBER 22, 2017', '2017-12-23', 'Sangguniang Panlungsod', 'Resolution', '12861 - 2017', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(47, 'RESOLUTION ADOPTING THE MACAJALAR BAY INTEGRATED COASTAL MANAGEMENT PLAN', '2018-12-17', 'Sangguniang Panlungsod', 'Resolution', '13182 - 2018', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(48, 'RESOLUTION EXTENDING THE PLANNING PERIOD OF THE COMPREHENSIVE LAND USE PLAN (CLUP) OF CAGAYAN DE ORO CITY FROM \"2013-2022\" TO THE CURRENT \"2019-2027\", A 9 - YEAR/TERM-BASED PROJECTION BY A CHIEF EXECUTIVE', '2019-03-04', 'Sangguniang Panlungsod', 'Resolution', '13255 - 2019', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(49, 'RESOLUTION ADOPTING THE PROPOSED COMPREHENSIVE DEVELOPMENT PLAN (CDP) AND CITY DEVELOPMENT INVESTMENT PROGRAP (CDIP) 2020 - 2025 AND ENDORSING THE SAME TO THE CITY COUNCIL FOR ITS APPROPRIATE ACTION', '2019-06-19', 'Sangguniang Panlungsod', 'Resolution', '03 - s 2019', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(50, 'RESOLUTION APPROVING AND/OR ADOPTING THE COMPREHENSIVE DEVELOPMENT PLAN (CDP) AND THE CITY DEVELOPMENT INVESTMENT PROGRAM (CDIP) OF CAGAYAN DE ORO, BOTH FOR 2020 - 2025', '2019-11-11', 'Sangguniang Panlungsod', 'Resolution', '13451 - 2019', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(51, 'RESOLUTION CREATING THE COMMITTEE ON CLIMATE CHANGE ADAPTION AND MITIGATION AND DISASTER RISK REDUCTION; PROVIDING FOR ITS DUTIES AND FUNCTIONS; AMENDING FOR THE PURPOSE RESOLUTION NO. 13322 - 2019, OTHERWISE KNOWN AS THE 19TH CITY COUNCIL HOUSE RULES', '2019-11-25', 'Sangguniang Panlungsod', 'Resolution', '13473 - 2019', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(52, 'RESOLUTION ENDORSING THE REGISTRATION AND CONFIRMATION OF THE 911 LOCAL CALL CENTER OF THE CITY OF CAGAYAN DE ORO BY THE EMERGENCY 911 COMMISSION, PURSUANT TO RULE VI, SECTION 4(A) OF THE IMPLEMENTATING RULES AND REGULATIONS (IRR) EXECUTIVE ORDER NO. 56', '2020-02-17', 'Sangguniang Panlungsod', 'Resolution', '13541 - 2020', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(53, 'RESOLUTION ADOPTING THE CAGAYAN DE ORO CITY CONTINGENCY PLAN FOR COVID-19, AS ONE OF THE REQUIREMENTS OF THE GAWAD (KALAMIDAD AT SAKUNA LABAN, SARILING GALING ANG KALIGTASAN) KALASAG SEAL AND SPECIAL AWARDS FOR EXCELLENCE IN DISASTER RISK REDUCTION AND MANAGEMENT AND HUMANITARIAN ASSISTANCE FOR CY 2021', '2021-03-22', 'Sangguniang Panlungsod', 'Resolution', '13834 - 2021', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(54, 'RESOLUTION APPROVING AND/OR ADOPTING THE UPDATED COMPREHENSIVE DEVELOPMENT PLAN (CDP) AND THE COMPREHENSIVE DEVELOPMENT INVESTMEND PROGRAM (CDIP) OF CAGAYAN DE ORO CITY, BOTH FOR 2020 - 2025', '2021-08-16', 'Sangguniang Panlungsod', 'Resolution', '13935 - 2021', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(55, 'RESOLUTION ACCREDITING/RE-ACCREDITING THE HEREIN ENUMERATINGD CIVIL SOCIETY ORGANIZATION (CSOS) FOR PURPOSES OF THEIR MEMBERSHIP IN THE LOCAL SPECIAL BODIES, PURSUANT TO DILG MEMORANDUM CIRCULAR NO. 2022 - 083 AND ARTICLE 64, RULE XIII OF THE RULES AND REGULATION IMPLEMENTING THE 1991 LOCAL GOVERNMENT CODE, OR FUNDING ITSPROJECT FROM THE CITY OR OTHER SOURCES AS REQUIRED UNDER THE COA CIRCULAR PERTINENT THERETO', '2022-09-12', 'Sangguniang Panlungsod', 'Resolution', '14271 - 2022', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(56, 'RESOLUTION APPROVING AND/OR ADOPTING THE ANNUAL INVESTMENT PROGRAM (AIP) FOR CY 2023 OF THE CITY GOVERNMENT OF CAGAYAN DE ORO', '2022-11-07', 'Sangguniang Panlungsod', 'Resolution', '14345 - 2022', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(57, 'RESOLUTION APPROVING AND/OR ADOPTING THE SUPPLEMENTAL ANNUAL INVESTMENT PROGRAM (SAIP) NO. 3 FOR CY 2022 OF THE CITY GOVERNMENT OF CAGAYAN', '2022-11-21', 'Sangguniang Panlungsod', 'Resolution', '14369 - 2022', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(58, 'RESOLUTION ADOPTING AND/OR APPROVING THE CAGAYAN DE ORO CITY CONTINGENCY PLAN ON FLOODING', '2023-06-15', 'Sangguniang Panlungsod', 'Resolution', '14613-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(59, 'RESOLUTION ADOPTING AND/OR APPROVING THE ENHANCED LOCAL CLIMATE CHANGE ACTION PLAN (ELCCAP) FOR 2022-2031', '2023-06-15', 'Sangguniang Panlungsod', 'Resolution', '14614-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(60, 'RESOLUTION APPROVING AND/OR ADOPTING THE REVISED ANNUAL INVESTMENT PROGRAM (AIP) FOR CY 2024 OF THE CITY GOVERNMENT OF CAGAYAN DE ORO', '2023-10-09', 'Sangguniang Panlungsod', 'Resolution', '14722-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(61, 'RESOLUTION APPROVING AND/OR ADOPTING THE CAGAYAN DE ORO CITY CONTINGENCY PLAN ON COVID-19', '2023-12-21', 'Sangguniang Panlungsod', 'Resolution', '14767-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(62, 'RESOLUTION CONFIRMING THE QUALIFICATION CRITERIA FOR THE ACCREDITATION OF VOLUNTEER MOBILIZING ORGANIZATIONS (VMOS) AS ADOPTED BY THE CITY DISASTER RISK REDUCTION AND MANAGEMENT COUNCIL (CDRRMC)', '2023-12-21', 'Sangguniang Panlungsod', 'Resolution', '14768-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(63, 'RESOLUTION CONFIRMING THE CREATION OF THE BARANGAY DISASTER RISK REDUCTION AND MANAGEMENT PLAN (BDRRMP) REVIEW TEAM BY THE CITY DISASTER RISK REDUCTION AND MANAGEMENT COUNCIL (CDRRMC)', '2023-12-21', 'Sangguniang Panlungsod', 'Resolution', '14769-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(64, 'RESOLUTION CONFIRMING THE CREATION OF THE CAMP MANAGEMENT COMMITTEE BY THE CITY DISASTER RISK REDUCTION AND MANAGEMENT COUNCIL (CDRRMC)', '2023-12-21', 'Sangguniang Panlungsod', 'Resolution', '14770-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(65, 'RESOLUTION APPROVING AND/OR ADOPTING THE UPDATED CITY DISASTER RISK REDUCTION AND MANAGEMENT COUNCIL (CDRRMC) ALERT PROTOCOL AND HYDROMET (FLOODING) EVACUATION AND COMMUNICATION PROTOCOL', '2023-12-21', 'Sangguniang Panlungsod', 'Resolution', '14771-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(66, 'RESOLUTION APPROVING AND/OR ADOPTING THE STANDARD OPERATING PROCEDURE OF THE CAGAYAN DE ORO CITY DISASTER RISK REDUCTION AND MANAGEMENT DEPARTMENT OPERATION CENTER (OPCEN)', '2023-12-21', 'Sangguniang Panlungsod', 'Resolution', '14772-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(67, 'RESOLUTION DECLARING THE ORO RESCUE 911 EMS AND USAR AS THE VOLUNTEER MOBILIZING ORGANIZATION IN CAGAYAN DE ORO CITY', '2023-12-21', 'Sangguniang Panlungsod', 'Resolution', '14773-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(68, 'RESOLUTION APPROVING AND/OR ADOPTING THE UPDATED CAGAYAN DE ORO CITY CONTINGENCY PLAN ON DROUGHT', '2023-12-21', 'Sangguniang Panlungsod', 'Resolution', '14774-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(69, 'RESOLUTION APPROVING AND/OR ADOPTING THE CAGAYAN DE ORO CITY PUBLIC SERVICE CONTINUITY PLAN (PSCP)', '2023-12-21', 'Sangguniang Panlungsod', 'Resolution', '14775-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(70, 'RESOLUTION APPROVING AND/OR ADOPTING THE CAGAYAN DE ORO CITY CAMP MANAGEMENT PLAN 2023-2025', '2023-12-21', 'Sangguniang Panlungsod', 'Resolution', '14776-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(71, 'RESOLUTION DESIGNATING THE HEREIN SPECIFIED FIFTY-FOUR (54) FACILITIES AS THE OFFICIAL EVACUATION CENTERS OF CAGAYAN DE ORO CITY', '2023-12-21', 'Sangguniang Panlungsod', 'Resolution', '14777-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(72, 'AN ORDINANCE ADOPTING THE INTEGRATED ZONING REGULATIONS OF THE CITY OF CAGAYAN DE ORO AND PROVIDING FOR THE ADMINISTRATION, ENFORCEMENT AND AMENDMENT THEREOF AND FOR THE REPEAL OF ALL ORDINANCES IN CONFLICT THEREWITH', '2016-02-01', 'Sangguniang Panlungsod', 'Ordinance', '13032-2016', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(73, 'AN ORDINANCE INCREASING THE RATES OF FINANCIAL ASSISTANCE TO VICTIMS OF CALAMITIES, AMENDING FOR THE PURPOSE ORDINANCE NO. 7783-2001', '2016-12-12', 'Sangguniang Panlungsod', 'Ordinance', '13163-2016', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(74, 'AN ORDINANCE CREATING THE CAGAYAN DE ORO CITY DISASTER RISK REDUCTION AND MANAGEMENT OFFICE (CDRRMO) AS A DISTINCT AND SEPARATE DEPARTMENT, PROVIDING FOR ITS FUNCTIONS AND ORGANIZATIONAL STRUCTURE, SUBJECT TO ALL LAWS AND EXISTING LEGAL RULES AND REGULATIONS; AND FOR OTHER PURPOSES', '2016-12-19', 'Sangguniang Panlungsod', 'Ordinance', '13176-2016', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(75, 'AN ORDINANCE CREATING THE HEREUNDER SPECIFIED REGULAR POSITIONS IN THE PLANTILLA OF PERSONNEL OF THE HEREIN MENTIONED OFFICES/DEPARTMENTS, THIS CITY; THE FUNDS NECESSARY FOR THE PAYMENT OF THE SALARIES, PERA, GSIS/PAG-IBIG/PHILHEALTH AND OTHER BENEFITS APPURTENANT THERETO SHALL BE TAKEN FRO THE ITEM: LUMPSUM FOR NEWLY CREATED POSITIONS OR LUMPSUM CREATION OF NEW POSITIONS IN THEIR RESPECTIVE ANNUAL BUDGETS FOR CY 2017', 'N/A', 'Sangguniang Panlungsod', 'Ordinance', '13283-2017', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(76, 'AN ORDINANCE AUTHORIZING THE HONORABLE CITY MAYOR OSCAR S. MORENO TO ENTER INTO A MEMORANDUM OF UNDERSTANDING (MOU) WITH THE DEPARTMENT OF SCIENCE AND TECHNOLOGY (DOST) - REGION 10, REPRESENTED BY REGIONAL DIRECTOR ALFONSO P. ALAMBAN, COVERING THE IMPLEMENTATION OF THE PROJECT, ENTITLED: \"DEPLOYMENT OF EARLY WARNING SYSTEM (DEWS) IN FLOOD-PRONE AREAS IN THE PHILIPPINES\", UNDER THE TERMS AND CONDITIONS SPECIFIED IN THE SAID MOU', '2017-10-02', 'Sangguniang Panlungsod', 'Ordinance', '13307-2017', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(77, 'AN ORDINANCE AUTHORIZING THE HONORABLE CITY MAYOR OSCAR S. MORENO TO ENTER INTO AND SIGN THE MEMORANDUM OF AGREEMENT (MOA) WITH THE PHILIPPINE INSTITUTE OF VOLCANOLOGY AND SEISMOLOGY - DEPARTMENT OF SCIENCE AND TECHNOLOGY (PHIVOLCS-DOST), REPRESENTED BY ITS OFFICER-IN-CHARGE RENATO U. SOLIDUM, JR., COVERING THE PROVISION AND TRAINING ON THE USE OF THE RAPID EARTHQUAKE DAMAGE ASSESSMENT SOFTWARE (REDAS)TO CAGAYAN DE ORO CITY AS A TOOL FOR MAINSTREAMING DISASTER RISK REDUCTION INTO THE LOCAL DEVELOPMENT CONTINGENCY PLANNING AND EMERGENCY PREPAREDNESS, UNDER THE TERMS AND CONDITIONS SPECIFIED THEREIN', '2018-06-18', 'Sangguniang Panlungsod', 'Ordinance', '13446-2018', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(78, 'AN ORDINANCE AUTHORIZING THE HONORABLE CITY MAYOR OSCAR S. MORENO TO ENTER INTO AND SIGN THE MEMORANDUM OF UNDERSTANDING (MOU) WITH THE DEPARTMENT OF PUBLIC WORKS AND HIGHWAYS, UNIFIED PROJECT MANAGEMENT OFFICE-FLOOD CONTROL MANAGEMENT CLUSTER (UPMO-FCMC), REPRESENTED BY ITS PROJECT DIRECTOR, LUISITO V. CLAVANO, COVERING THE COLLABORATION OF THE PARTIES IN THE IMPLEMENTATION OF THE FLOOD RISK MANAGEMENT PROJECT OF CAGAYAN DE ORO (FRIMP-CDOR), INCLUDING THE CREATION OF THE RESETTLEMENT IMPLEMENTATION COMMITTEE (RIC) FOR THE PROJECT WITH ASSISTANCE OF THE JAPAN INTERNATION COOPERATION AGENCY (JICA)', '2018-12-17', 'Sangguniang Panlungsod', 'Ordinance', '13573-2018', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(79, 'AN ORDINANCE AUTHORIZING THE HONORABLE CITY MAYOR OSCAR S. MORENO TO ENTER INTO AND SIGN THE MEMORANDUM OF UNDERSTANDING (MOU) WITH THE PHILIPPINE INSTITUTE OF VOLCANOLOGY AND SEISMOLOGY (PHIVOLCS), REPRESENTED BY  RENATO U. SOLIDUM, JR., UNDERSECRETARY FOR DISASTER RISK REDUCTION AND CLIMATE CHANGE , DOST OFFICER-IN-CHARGE, COVERING THE INSTALLATION AND MAINTENANCE OF A CONTINUOUS GLOBAL POSITIONING SYSTEM (GPS) RECEIVER IN THE CITY, UNDER THE TERMS AND CONDITIONS STIPULATED THEREIN', '2019-07-22', 'Sangguniang Panlungsod', 'Ordinance', '13659-2019', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(80, 'AN ORDINANCE PROVIDING FOR THE PROMOTION OF ENVIRONMENTAL REHABILITATION AND CONSERVATION NETWORK, CREATING THE ECOLOGICAL SERVICES AND PROTECTION COMMITTEE (ESPC), AND FOR OTHER PURPOSES', '2019-09-02', 'Sangguniang Panlungsod', 'Ordinance', '13682-2019', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(81, 'AN ORDINANCE AUTHORIZING THE HONORABLE CITY MAYOR OSCAR S. MORENO TO ENTER INTO AND SIGN THE MEMORANDUM OF UNDERSTANDING (MOU) WITH THE DEPARTMENT OF ENVIRONMENT AND NATURAL RESOURCES - REGION X, REPRESENTED BY REGIONAL EXECUTIVE DIRECTOR ARLEIGH J. ADORABLE, CESO III; AND WITH THE AGUSAN NATIONAL HIGH SCHOOL, REPRESENTED BY HEAD TEACHER III WIFREDO S. COMING, COVERING THE INSTALLATION OF AUTOMATED WEATHER STATION IN RELATION TO THE IMPLEMENTATION OF SCIENCE-BASED REAL-TIME WATERSHED INSTRUMENTATION AT AGUSAN-CUGMAN CLUSTER OF WATERSHEDS IN THE PROVINCES OF BUKIDNON AND MISAMIS ORIENTAL, UNDER THE TERMS AND CONDITIONS STIPULATED THEREIN', '2019-09-23', 'Sangguniang Panlungsod', 'Ordinance', '13714-2019', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(82, 'AN ORDINANCE MANDATING THE WEARING OR USE OF FACE-MASKS TO ALL PERSONS ENTERING CAGAYAN DE ORO CITY AND ITS PUBLIC PLACES DURING PUBLIC HEALTH EMERGENCY, EPIDEMIC OR PANDEMIC AND WHEN THERE IS A DECLARATION OF COMMUNITY QUARANTINE, PROVIDING PENALTY FOR VIOLATION THEREOF, AND FOR OTHER PURPOSES', '2020-03-30', 'Sangguniang Panlungsod', 'Ordinance', '13849-2020', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(83, 'AN ORDINANCE MANDATING ALL DRIVERS, OPERATORS, PASSENGERS AND COMMUTERS OF THE ROAD TRANSPORT SECTOR IN CAGAYAN DE ORO CITY TO OBSERVE SOCIAL DISTANCING DURING PUBLIC HEALTH EMERGENCY, EPIDEMIC OR PANDEMIC AND WHEN THERE IS A DECLARATION OF COMMUNITY QUARANTINE; PROVIDING PENALTY FOR VIOLATION THEREOF, AND FOR OTHER PURPOSES', '2020-03-30', 'Sangguniang Panlungsod', 'Ordinance', '13850-2020', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(84, 'AN ORDINANCE PROVIDING FOR THE STREAMLINED GUIDELINES FOR THE ISSUANCE OF PERMITS, LICENSES AND CERTIFICATES FOR THE CONSTRUCTION OF SHARED PASSIVE TELECOMMUNICATIONS TOWER INFRASTRUCTURE (PTTI), PURSUANT TO THE JOINT MEMORANDUM CIRCULAR (JMC) NO. 01-2020, IMPLEMENTING THE RELEVANT PROVISIONS OF REPUBLIC ACT NO. 11032, OTHERWISE KNOWN AS THE \"EASE OF DOING BUSINESS AND EFFICIENT GOVERNMENT SERVICE DELIVERY ACT\", AND FOR OTHER PURPOSES', '2020-09-14', 'Sangguniang Panlungsod', 'Ordinance', '13952-2020', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(85, 'AN ORDINANCE DECLARING THE RIVER BOUDARIES (IN-BETWEEN) THE FLOOD RISK MANAGEMENT PROJECT FOR CAGAYAN DE ORO (FRIMP-CDOR) AS REGULATED LAND-USE ZONE, AND FOR OTHER PURPOSES', '2021-07-12', 'Sangguniang Panlungsod', 'Ordinance', '14125-2021', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(86, 'AN ORDINANCE REQUIRING THE USE OF THE STANDARD ELECTRICAL CIRCUIT BREAKER AS THE MINIMUM SPECIFICATIONS DESCRIBED HEREIN IN ALL RESIDENTIAL HOUSES IN CAGAYAN DE ORO CITY, AND FOR OTHER PURPOSES', '2021-10-11', 'Sangguniang Panlungsod', 'Ordinance', '14173-2021', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(87, 'AN ORDINANCE AUTHORIZING THE HONORABLE CITY MAYOR OSCAR S. MORENO, REPRESENTING THE CITY GOVERNMENT OF CAGAYAN DE ORO, TO ENTER INTO AND SIGN THE MEMORADUM OF UNDERSTANDING (MOU) WITH THE PHILIPPINES INSTITUTE OF VOLCANOLOGY AND SESISMOLOGY (PHIVOLCS), REPRESENTED BY DOST UNDERSECRETARY AND PHIVOLCS OFFICER-IN-CHARGE, DR. RENATO U. SOLIDUM, JR., COVERING THE PARTIES\' COLLABORATION IN THE IMPLEMENTATION OF PHIVOLCS GLOBAL POSITIONING SYSTEM (GPS) NETWORK PROJECT IN THE CITY OF CAGAYAN DE ORO, UNDER THE TERMS AND CONDITIONS STIPULATED IN THE MOU ATTACHED HERETO', '2021-11-15', 'Sangguniang Panlungsod', 'Ordinance', '14189-2021', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(88, 'AN ORDINANCE AUTHORIZING THE HONORABLE CITY MAYOR OSCAR S. MORENO, REPRESENTING THE CITY GOVERNMENT OF CAGAYAN DE ORO, TO ENTER INTO AND SIGN THE RESPECTIVE  MEMORADUM OF AGREEMENT (MOA) WITH THE HEREIN SPECIFIED MUNICIPAL LOCAL GOVERNMENT UNITS OF THE PROVINCES OF MISAMIS ORIENTAL AND BUKIDNON, COVERING THE COLLABORATION OF THE PARTIES IN THE ESTABLISHMENT OF AN ASSISTANCE AND NETWORK MONITORING TO ADDRESS THE NEED FOR A FUNCTIONAL EARLY WARNING SYSTEM (EWS) FOR FLOOD/FLASHFLOOD TO ALERT ALL PARTIES OF IMMINENT DANGER IN THEIR RESPECTIVE AREAS, UNDER THE TERMS AND CONDITIONS STIPULATED THEREIN', '2022-01-24', 'Sangguniang Panlungsod', 'Ordinance', '14221-2022', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(89, 'AN ORDINANCE APPROVING AND ADOPTING THE LOCAL DISASTER RISK REDUCTION AND MANAGEMENT PLAN (LDRRMP) FOR 2022-2030, SUBJECT TO ALL LAWS AND EXISTING LEGAL RULES AND REGULATIONS', '2022-06-27', 'Sangguniang Panlungsod', 'Ordinance', '14338-2022', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(90, 'AN ORDINANCE AUTHORIZING THE HONORABLE CITY MAYOR ROLANDO A. UY, REPRESENTING THE CITY GOVERNMENT OF CAGAYAN DE ORO, TO ENTER INTO AND SIGN THE MEMORANDUM OF AGREEMENT (MOA) WITH THE EL OBSERVATORIO DE MANILA (MO), REPRESENTED BY ITS DIRECTOR, FR. JOSE RAMON T. VILLARIN, SJ, COVERING THE PARTIES\' RESEARCH COLLABORATION ON TROPICAL METEOROLOGY, WEATHER FORECASTING, AND CLIMATE PROJECTIONS IN THE PHILIPPINES, UNDER THE TERMS AND CONDITIONS STIPULATED THEREIN', '2023-09-25', 'Sangguniang Panlungsod', 'Ordinance', '14646-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(91, 'AN ORDINANCE AUTHORIZING THE HONORABLE CITY MAYOR ROLANDO A. UY, REPRESENTING THE CITY GOVERNMENT OF CAGAYAN DE ORO, TO ENTER INTO AND SIGN THE MEMORANDUM OF UNDERSTANDING (MOU) WITH THE DEPARTMENT OF SCIENCE AND TECHNOLOGY-REGIONAL OFFICE X (DOST X), REPRESENTED BY ITS REGIONAL DIRECTOR , ROMELA N. RATILLA, COVERING THE IMPLEMENTATION OF THE NATIONAL DISASTER RISK REDUCTION (DRR) TECHNOLOGIES AND INNOVATIONS, UNDER THE TERMS AND CONDITIONS STIPULATED THEREIN', '2023-10-09', 'Sangguniang Panlungsod', 'Ordinance', '14652-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(92, 'AN ORDINANCE AUTHORIZING THE HONORABLE CITY MAYOR ROLANDO A. UY TO ENTER INTO AND SIGN THE MEMORANDUM OF AGREEMENT (MOA) WITH THE RESPECTIVE MUNICIPAL GOVERNMENTS OF BAUNGON, TALAKAG, LIBONA, MANOLO FORTICH, ALL OF THE PROVINCE OF BUKIDNON, AND THE RESPECTIVE MUNICIPAL GOVERNMENTS OF TAGOLOAN AND OPOL, BOTH OF THE PROVINCE OF MISAMIS ORIENTAL, COVERING THE INSTITUTIONALIZATION OF THE INTER-LGU COLLABORATION ON DISASTER RESPONSE, INFORMATION SHARING, AND WATERSHED MANAGEMENT, UNDER THE TERMS AND CONDITIONS STIPULATED THEREIN', '2023-12-21', 'Sangguniang Panlungsod', 'Ordinance', '14684-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(93, 'AN ORDINANCE AUTHORIZING THE HONORABLE CITY MAYOR ROLANDO A. UY, REPRESENTING THE CITY GOVERNMENT OF CAGAYAN DE ORO, TO ENTER INTO AND SIGN THE MEMORANDUM OF AGREEMENT (MOA) WITH THE BALAY MINDANAW FOUINDATION, INC., COVERING HE COLLABORATION OF THE PARTIES IN STRENGTHENING THE CITY\'S DISASTER RISK REDUCTION, PREPAREDNESS, AND POST-DISASTER ADAPTION', '2023-12-21', 'Sangguniang Panlungsod', 'Ordinance', '14685-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(94, 'AN ORDINANCE AUTHORIZING THE HONORABLE CITY MAYOR ROLANDO A. UY, REPRESENTING THE CITY GOVERNMETN OF CAGAYAN DE ORO, TO ENTER INTO AND SIGN THE MEMORANDUM OF AGREEMENT (MOA) WITH THE KAGAY-AN EVANGELICAL DISASTER RESPONSE NETWORK (KDERN) IN ASSISTING THE CITY DURING DISASTER RESPONSE AND THE USE OF THE KDERN MULTI-PURPOSE CENTERS IN BARANGAY CANITOAN AND BARANGAY PAGATPAT AS TEMPORARY SHELTERS TO INTERNALLY DISPLACED PERSONS(IDPS) DURING DISASTER AND CALAMITIES', '2023-12-21', 'Sangguniang Panlungsod', 'Ordinance', '14686-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(95, 'EXECUTIVE ORDER FURTHER AMENDING THE CITY DISASTER RISK REDUCTION AND MANAGEMENT COUNCIL (CRRMC)', '2011-06-21', 'City Mayor\'s Office', 'Executive Order', '050-2011', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(96, 'AN ORDER ESTABLISHING THE CITY DISASTER RISK REDUCTION MANAGEMENT OFFICE (CDRRMO) UNDER THE OFFICE OF THE CITY MAYOR', '2012', 'City Mayor\'s Office', 'Executive Order', '070-2012', '2024-01-15 05:22:36', '2024-01-29 07:15:40'),
(97, 'AN ORDER REORGANIZING THE CITY DISASTER RISK REDUCTION AND MANAGEMENT COUNCIL', '2013-08-23', 'City Mayor\'s Office', 'Executive Order', '026-2013', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(98, 'AN ORDER ESTABLISHING THE DISASTER RISK REDUCTION & MANAGEMENT OPERATION CENTER (OPCEN)', '2016-07-04', 'City Mayor\'s Office', 'Executive Order', '080A-2016', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(99, 'AN ORDER ESTABLISHING THE CAGAYAN DE ORO INCIDENT MANANGEMENT TEAM (CDO IMT) & PROVIDING FOR ITS COMPOSITION, ACTIVATION & FUNCTIONS.', '2016-07-04', 'City Mayor\'s Office', 'Executive Order', '080B-2016', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(100, 'AN ORDER REORGANIZING THE CITY DISASTER RISK REDUCTION AND MANAGEMENT COUNCIL', '2016-07-04', 'City Mayor\'s Office', 'Executive Order', '080C-2016', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(101, 'ESTABLISHING THE CITY DISASTER RISK REDUCTION AND MANAGEMENT COUNCIL (CDRRMC) ALERT PROTOCOL AND HYDROMET (FLOODING) EVACUATION AND COMMUNCATIONS PROTOCOL', '2016-07-04', 'City Mayor\'s Office', 'Executive Order', '080D-2016', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(102, 'ORGANIZING TASK GROUP FIRECRACKERS AND OTHER PYROTECHNIC DEVICES AND APPOINTING THE MEMBERS THEREOF, DEFINING ITS FUNCTIONS, DUTIES AND RESPONSIBILITIES', '2016-12-14', 'City Mayor\'s Office', 'Executive Order', '160-2016', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(103, 'ORDER DESIGNATING FIRECRACKER DISPLAY CENTER AND PYROTECHNIC ZONES AND FIREWORKS EXHIBITION ZONE', '2016-12-15', 'City Mayor\'s Office', 'Executive Order', '162A-2016', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(104, 'AN ORDER RE-COMPOSING THE CITY POVERTY REDUCTION ACTION TEAM (CPRAT) FOR BOTTOM-UP BUDGETING (BUB) FOR FY 2017', '2017-03-10', 'City Mayor\'s Office', 'Executive Order', '026-2017', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(105, 'AN ORDER AMENDING EXECUTIVE ORDER NO. 080C-2016 REORGANIZING THE CITY DISASTER RISK REDUCTION AND MANAGEMENT COUNCIL', '2019-06-14', 'City Mayor\'s Office', 'Executive Order', '107-2019', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(106, 'AN ORDER CREATING THE ORO RESCUE EMERGENCY MEDICAL SERVICES SYSTEM (ORO-EMSS)', '2019', 'City Mayor\'s Office', 'Executive Order', '144-2019', '2024-01-15 05:22:36', '2024-01-29 07:16:09'),
(107, 'AN ORDER CREATING CAGAYAN DE ORO MENTAL HEALTH COUNCIL ', '2020-01-21', 'City Mayor\'s Office', 'Executive Order', '16-2020', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(108, 'AN ORDER ESTABLISHING THE CAGAYAN DE ORO CITY RESILIENCE COUNCIL (CDOCRC), DEFINING ITS COMPOSITION AND FUNCTIONS', '2020-02-24', 'City Mayor\'s Office', 'Executive Order', '039-2020', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(109, 'AN ORDER CONSTITUTING THE LOCAL INTER-AGENCY CLUSTERS TASK FORCE LIACTF OF CDOC IN RELATION TO COVID-19 RESPONSE', '2020-03-11', 'City Mayor\'s Office', 'Executive Order', '046A-2020', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(110, 'AN ORDER PLACING THE ENTIRE CITY OF CAGAYAN DE ORO UNDER COMMUNITY QUARANTINE TO HELP PREVENT, LIMIT AND CONTROL EXPOSURE TO THE NOVEL CORONAVIRUS DISEASE 2019 (COVID-19)', '2020-03-19', 'City Mayor\'s Office', 'Executive Order', '049-2020', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(111, '\"AN ORDER AMENDING EXECUTIVE ORDER NO. 067, SERIES OF 2020, IN COMPLIANCE WITH DILG MEMORANDUM CIRCULAR NO. 2020-077, OTHERWISE KNOWN AS \"RATIONALIZING THE ESTABLISHMENT OF A LOCAL GOVERNMENT UNIT TASK FORCE AGAINST COVID-19\"', '2020-05-07', 'City Mayor\'s Office', 'Executive Order', '071-2020', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(112, 'AN ORDER CREATING THE TECHNICAL WORKING GROUP (TWG) ON RAPID DAMAGE ASSESSMENT AND NEEDS ANALYSIS AND NEEDS ANALYSIS ASSESTMENT (RDANA) OF THE CAGAYAN DE ORO CITY RESILIENCE COUNCIL (CDORC)', '2020-08-23', 'City Mayor\'s Office', 'Executive Order', '093 - 2021', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(113, 'AN ORDER PROMOTING PARTICIPATORY GOVERNANCE THROUGH EMPOWERMENT OF CIVIL SOCIETY ORGANIZATIONS (CSOS) AND THE ESTABLISHMENT OF A CSO DESK AT THE CITY PLANNING AND DEVELOPMENT OFFICE', '2022-03-23', 'City Mayor\'s Office', 'Executive Order', '041-2022', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(114, 'AN ORDER PROVIDING FOR THE GUIDELINES IN THE IMPLEMENTATION OF PREVENTIVE MEASURES DURING THE EXISTENCE OF AN EMERGENCY IN THE CITY OF CAGAYAN DE ORO DUE TO MAN-MADE AND NATURAL DISASTER AND CALAMITIES', '2022-04-18', 'City Mayor\'s Office', 'Executive Order', '076-2022', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(115, 'AN ORDER ESTABLISHING THE RISK COMMUNICATION PLAN ON COVID 19 FOR THE CITY OF CAGAYAN DE ORO', '2022-07-18', 'City Mayor\'s Office', 'Executive Order', '015B-2022', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(116, 'AN ORDER ESTABLISHING THE CITY DISASTER RISK REDUCTION AND MANAGEMENT COUNCIL (CDRRMC) DISASTER COORDINATION CENTER AND COMMUNICATION PLAN (TROPICAL CYCLONE, FLOOD AND EARTHQUAKE)', '2022-07-25', 'City Mayor\'s Office', 'Executive Order', '021A-2022', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(117, 'AMENDING EXECUTIVE ORDER NO. 080B, SERIES OF 2016 , ENTITLED \"AN ORDER ESTABLISHING THE CAGAYAN DE ORO INCIDENT MANAGEMENT TEAM (CDOIMT) AND PROVIDING FOR ITS COMPOSITION, ACTIVATION, AND FUNCTIONS', '2022-08-01', 'City Mayor\'s Office', 'Executive Order', '026A-2022', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(118, 'CREATING AND MOBILIZING THE CITY PLANNING TEAM (CPT) FOR THE PREPARATION/UPDATING OF THE COMPREHENSIVE DEVELOPMENT PLAN (CDP) AND THE CITY DEVELOPMENT INVESTMENT PROGRAM (CDIP) OF THE CITY OF CAGAYAN DE ORO, DESIGNATING ITS COMPOSITION, ROLES AND RESPONSIBILITIES AND FOR OTHER PURPOSES', '2022-08-04', 'City Mayor\'s Office', 'Executive Order', '029-2022', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(119, 'AN ORDER ESTABLISHING THE STANDARD OPERATING PROCEDURE OF THE CAGAYAN DE ORO CITY DISASTER RISK REDUCTION AND MANAGEMENT DEPARTMENT OPEARATION CENTER', '2022-08-15', 'City Mayor\'s Office', 'Executive Order', '037A-2022', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(120, 'AN ORDER AMENDING EXECUTIVE ORDE NO. 080A-16 ESTABLISHING THE DISASTER RISK REDUCTION AND MANAGEMENT OPERATION CENTER (OPCEN)', '2022-08-17', 'City Mayor\'s Office', 'Executive Order', '038A-2022', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(121, '\"AN ORDER CREATING THE CAGAYAN DE ORO CITY EVACUATION MANAGEMENT COMMITTEE, APPOINTING THE MEMBERS THEREOF, PROVIDING FOR ITS DUTIES AND FUNCTIONS, AND FOR OTHER PURPOSES', '2022-08-17', 'City Mayor\'s Office', 'Executive Order', '038B-2022', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(122, 'AN ORDER ENFORCING PRE-EMPTIVE AND FORCED EVACUATION OF FLOOD-PRONE HOUSEHOLDS IN BARANGAY TABLON', '2022-10-14', 'City Mayor\'s Office', 'Executive Order', '090A-2022 ', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(123, 'AN ORDER ENFORCING PRE-EMPTIVE AND FORCED EVACUATION OF FLOOD-PRONE HOUSEHOLDS IN BARANGAYS PUERTO AND BUGO', '2022-10-16', 'City Mayor\'s Office', 'Executive Order', '091A-2022', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(124, 'AN ORDER ESTABLISHING THE LOCAL DISASTER RISK REDUCTION AD MANAGEMENT ALTERNATIVE OPERATION CENTER (OPCEN) OF CAGAYAN DE ORO', '2022-10-24', 'City Mayor\'s Office', 'Executive Order', '104A-2022', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(125, 'AN ORDER RECONSTITUTING THE MEMERSHIP OF THE CITY DISASTER RISK REDUCTION AND MANAGEMENT COUNCIL AND PROVIDING FOR ITS FUNCTIONS', '2022-10-21', 'City Mayor\'s Office', 'Executive Order', '105-2022', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(126, 'AN ORDER AMENDING THE CITY DISASTER RISK REDUCTION AND MANAGEMENT COUNCIL (CDRRMC) ALERT PROTOCOL AND HYDROMET (FLOODING) EVACUATION AND COMMUNICATION PROTOCOL ', '2022-10-25', 'City Mayor\'s Office', 'Executive Order', '107A-2022', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(127, 'AN ORDER AMENDING EXECUTIVE ORDER NO. 105 - 2022 REORGANIZING THE CITY DISASTER RISK REDUCTION AND MANAGEMENT COUNCIL', '2022-12-05', 'City Mayor\'s Office', 'Executive Order', '130A - 2022', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(128, 'AN ORDER CREATING THE CORE TEAM FOR THE FORMULATION OF THE ENHANCED LOCAL CLIMATE CHANGE ACTION PLAN (ELCCAP) OF CAGAYAN DE ORO CITY', '2023-01-23', 'City Mayor\'s Office', 'Executive Order', '019-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(129, 'AN ORDER CREATING THE CAGAYAN DE ORO EARTHQUAKE DAMAGE ASSESSMENT AND NEEDS ANALYSIS TEAM, NAMING ITS COMPOSITION, PROVIDING FOR ITS DUTIES AND FUNCTIONS, AND FOR OTHER PURPOSES', '2023-12-04', 'City Mayor\'s Office', 'Executive Order', '400-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(130, 'AN ORDER SUSPENDING THE CLASSES FROM DECEMBER 5-6, 2023 OF BOTH ELEMENTARY AND SECONDARY PUBLIC SCHOOLS IN THE CITY OF CAGAYAN DE ORO FOR THE CONDUCT OF A RAPID POST-EARTHQUAKE DAMAGE ASSESSMENT', '2023-12-04', 'City Mayor\'s Office', 'Executive Order', '401-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(131, '\"AN ORDER SUSPENDING THE CLASSES OF BOTH PULIC AND PRIVATE PRE-SCHOOLS IN THE CITY OF CAGAYAN DE ORO DUE TO TYPHOON KABAYAN\"', '2023-12-17', 'City Mayor\'s Office', 'Executive Order', '420-2023', '2024-01-15 05:22:36', '2024-01-15 05:22:36'),
(132, 'AN ORDINANCE AUTHORIZING HONORABLE CITY MAYOR ROLANDO A. UY, REPRESENTING THE CITY GOVERNMENT OF CAGAYAN DE ORO, TO ENTER INTO AND SIGN THE MEMORANDUM OF AGREEMENT (MOA) WITH THE DEPARTMENT OF SCIENCE AND TECHNOLOGY- PHILIPPINE INSTITUTE OF VOLCANOLOGY AND SEISMOLOGY(DOST-PHILVOLCS), REPRESENTED BT UNDERSECRETARY AND OFFICER-IN-CHARGE, DR. TERESITO C. BACOLCOL, COVERING THE INSTALLATION OF AN INTENSIFY METER WITHIN THE PREMISES OF THE CITY HALL BUILDING, THIS CITY, UNDER THE TERMS AND CONDITIONS STIPULATED IN THEREIN', '2023-06-26', 'Sangguniang Panlungsod', 'Ordinance', '14583-2023', '2024-01-29 07:35:32', '2024-01-29 07:35:32');

-- --------------------------------------------------------

--
-- Table structure for table `trainings`
--

CREATE TABLE `trainings` (
  `training_id` int(11) NOT NULL,
  `fk_trainer_id` int(11) NOT NULL,
  `fk_course_id` int(11) NOT NULL,
  `venue` varchar(255) NOT NULL,
  `contact_person` varchar(255) NOT NULL,
  `contact_person_number` varchar(255) NOT NULL,
  `remarks` text NOT NULL,
  `start_date` varchar(255) NOT NULL,
  `end_date` varchar(255) NOT NULL,
  `after_activity_report` varchar(255) NOT NULL DEFAULT '',
  `documentations` varchar(255) NOT NULL DEFAULT '',
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `trainings`
--

INSERT INTO `trainings` (`training_id`, `fk_trainer_id`, `fk_course_id`, `venue`, `contact_person`, `contact_person_number`, `remarks`, `start_date`, `end_date`, `after_activity_report`, `documentations`, `status`, `created_at`, `updated_at`) VALUES
(1, 5, 1, 'Challi', 'aw', 'aw', 'aw', '2024-03-04', '2024-03-08', '', '', 4, '2024-03-07 08:36:01', '2024-03-11 01:09:25'),
(2, 5, 2, 'Challie', 'awe', 'awe', 'awe', '2024-03-04', '2024-03-08', 'true', 'true', 0, '2024-03-07 08:37:13', '2024-03-11 01:10:14'),
(3, 5, 3, '3', '3', '3', '', '2024-03-11', '2024-03-15', '', '', 2, '2024-03-07 08:39:38', '2024-03-11 01:07:19'),
(4, 5, 4, '4', '4', '4', '4', '2024-03-04', '2024-03-08', '', '', 1, '2024-03-07 08:40:22', '2024-03-07 08:40:22'),
(5, 5, 5, '5', '5', '5', '5', '2024-03-04', '2024-03-08', '', '', 1, '2024-03-07 08:42:46', '2024-03-07 08:42:46'),
(6, 5, 6, '6', '6', '6', '6', '2024-03-04', '2024-03-08', '', '', 1, '2024-03-07 08:44:32', '2024-03-07 08:44:32'),
(7, 5, 6, '7', '7', '7', '7', '2024-03-04', '2024-03-08', '', '', 1, '2024-03-07 08:45:30', '2024-03-07 08:45:30'),
(8, 5, 2, 'Chali', 'Sample', 'Sample', 'Sample Training', '2024-03-11', '2024-03-15', '', '', 1, '2024-03-11 01:25:54', '2024-03-11 01:25:54'),
(9, 5, 3, 'sample 2', 'sample 2', 'sample 2', 'sample 2', '2024-03-18', '2024-03-22', '', '', 1, '2024-03-11 01:53:24', '2024-03-11 01:53:24'),
(10, 5, 3, 'Cugman', 'John Doe', '09359097565', 'asdsad', '2024-03-11', '2024-04-19', '', '', 1, '2024-03-11 08:57:55', '2024-03-11 08:57:55'),
(11, 5, 2, 'sdf', 'sdf', 'sdf', 'sdf', '2024-03-13', '2024-03-15', 'true', 'true', 0, '2024-03-13 04:42:05', '2024-03-13 09:01:20'),
(12, 5, 2, 'Pagatpat', 'Jojo', '0935907565', 'Wakaka', '2024-03-13', '2024-03-14', 'true', 'true', 0, '2024-03-13 08:37:44', '2024-03-13 08:59:23');

-- --------------------------------------------------------

--
-- Table structure for table `trainings_courses`
--

CREATE TABLE `trainings_courses` (
  `training_course_id` int(11) NOT NULL,
  `course` text NOT NULL,
  `course_abbreviation` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `trainings_courses`
--

INSERT INTO `trainings_courses` (`training_course_id`, `course`, `course_abbreviation`, `created_at`, `updated_at`) VALUES
(1, 'First Aid', 'FA', '2024-02-22 02:08:16', '2024-02-22 02:08:16'),
(2, 'Basic Life Support', 'BLS', '2024-02-22 02:08:33', '2024-02-22 02:08:33'),
(3, 'Disaster Preparedness', 'DP', '2024-02-22 02:11:08', '2024-02-22 02:11:08'),
(4, 'Water Safety', 'WS', '2024-02-22 02:11:34', '2024-02-22 02:11:34'),
(5, 'Water Safety Search and Rescue', 'WASAR', '2024-02-22 02:13:17', '2024-02-22 02:13:17'),
(6, 'Basic Swift Water Rescue', 'BSWR', '2024-02-22 02:15:07', '2024-02-22 02:15:07'),
(7, 'Basic Ropemanship', 'BR', '2024-02-22 02:15:25', '2024-02-22 02:15:25'),
(8, 'Earthquake Drill Orientation', 'EDO', '2024-02-22 02:15:46', '2024-02-22 02:15:46'),
(9, 'Ambulance Operation', 'AO', '2024-02-22 02:15:57', '2024-02-22 02:15:57'),
(10, 'Mountain Search and Rescue', 'MOSAR', '2024-02-22 02:16:24', '2024-02-22 02:16:24'),
(11, 'High Angle Search and Rescue', 'HASAR', '2024-02-22 02:17:06', '2024-02-22 02:17:06'),
(12, 'Boat Handling', 'BH', '2024-02-22 02:17:19', '2024-02-22 02:17:19'),
(13, 'Emergency Medical Technician - Basic', 'EMTB', '2024-02-22 02:17:46', '2024-02-22 02:17:46'),
(14, 'Medical First Responder', 'MFR', '2024-02-22 02:18:05', '2024-02-22 02:18:05'),
(15, 'Community First Responder', 'CFR', '2024-02-22 02:18:43', '2024-02-22 02:18:43'),
(16, 'Collapse Structure Search and Rescue Orientaion', 'CSSR', '2024-02-22 02:19:38', '2024-02-22 02:19:49');

-- --------------------------------------------------------

--
-- Table structure for table `trainings_participants`
--

CREATE TABLE `trainings_participants` (
  `training_participant_id` int(11) NOT NULL,
  `fk_training_id` int(11) NOT NULL,
  `fk_participant_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `trainings_participants`
--

INSERT INTO `trainings_participants` (`training_participant_id`, `fk_training_id`, `fk_participant_id`, `created_at`, `updated_at`) VALUES
(1, 3, 5, '2024-03-08 02:14:04', '2024-03-08 02:14:04'),
(2, 12, 66, '2024-03-13 08:53:34', '2024-03-13 08:53:34'),
(3, 12, 188, '2024-03-13 08:57:08', '2024-03-13 08:57:08'),
(4, 12, 209, '2024-03-13 08:57:09', '2024-03-13 08:57:09'),
(5, 12, 212, '2024-03-13 08:57:09', '2024-03-13 08:57:09'),
(6, 12, 211, '2024-03-13 08:57:09', '2024-03-13 08:57:09'),
(7, 12, 213, '2024-03-13 08:57:09', '2024-03-13 08:57:09'),
(8, 12, 214, '2024-03-13 08:57:09', '2024-03-13 08:57:09'),
(9, 12, 240, '2024-03-14 02:25:11', '2024-03-14 02:25:11');

-- --------------------------------------------------------

--
-- Table structure for table `trainings_trainees`
--

CREATE TABLE `trainings_trainees` (
  `training_trainee_id` int(11) NOT NULL,
  `fk_training_id` int(11) NOT NULL,
  `fk_trainee_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `trainings_trainees`
--

INSERT INTO `trainings_trainees` (`training_trainee_id`, `fk_training_id`, `fk_trainee_id`, `created_at`, `updated_at`) VALUES
(1, 6, 6, '2024-03-07 08:44:32', '2024-03-07 08:44:32'),
(2, 8, 7, '2024-03-11 01:25:54', '2024-03-11 01:25:54'),
(3, 11, 69, '2024-03-13 04:42:05', '2024-03-13 04:42:05'),
(4, 12, 70, '2024-03-13 08:37:44', '2024-03-13 08:37:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address_barangays`
--
ALTER TABLE `address_barangays`
  ADD PRIMARY KEY (`barangay_id`),
  ADD KEY `barangay_ibfk_1` (`fk_city_id`);

--
-- Indexes for table `address_cities`
--
ALTER TABLE `address_cities`
  ADD PRIMARY KEY (`city_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `email_addresses`
--
ALTER TABLE `email_addresses`
  ADD PRIMARY KEY (`email_address_id`);

--
-- Indexes for table `LDRRMP`
--
ALTER TABLE `LDRRMP`
  ADD PRIMARY KEY (`LDRRMP_id`),
  ADD KEY `fk_pillar_id` (`fk_pillar_id`),
  ADD KEY `fk_objective_id` (`fk_objective_id`),
  ADD KEY `fk_outcome_id` (`fk_outcome_id`),
  ADD KEY `fk_program_project_id` (`fk_program_project_id`);

--
-- Indexes for table `LDRRMP_objectives`
--
ALTER TABLE `LDRRMP_objectives`
  ADD PRIMARY KEY (`objective_id`);

--
-- Indexes for table `LDRRMP_outcomes`
--
ALTER TABLE `LDRRMP_outcomes`
  ADD PRIMARY KEY (`outcome_id`);

--
-- Indexes for table `LDRRMP_pillars`
--
ALTER TABLE `LDRRMP_pillars`
  ADD PRIMARY KEY (`pillar_id`);

--
-- Indexes for table `LDRRMP_programs_projects`
--
ALTER TABLE `LDRRMP_programs_projects`
  ADD PRIMARY KEY (`program_project_id`);

--
-- Indexes for table `offices`
--
ALTER TABLE `offices`
  ADD PRIMARY KEY (`office_id`);

--
-- Indexes for table `offices_addresses`
--
ALTER TABLE `offices_addresses`
  ADD PRIMARY KEY (`office_address_id`),
  ADD KEY `fk_office_id` (`fk_office_id`),
  ADD KEY `fk_barangay_id` (`fk_barangay_id`);

--
-- Indexes for table `offices_categories`
--
ALTER TABLE `offices_categories`
  ADD PRIMARY KEY (`office_category_id`),
  ADD KEY `fk_office_id` (`fk_office_id`),
  ADD KEY `fk_category_id` (`fk_category_id`);

--
-- Indexes for table `offices_email_addresses`
--
ALTER TABLE `offices_email_addresses`
  ADD PRIMARY KEY (`office_email_address_id`),
  ADD KEY `fk_office_id` (`fk_office_id`),
  ADD KEY `fk_email_address_id` (`fk_email_address_id`);

--
-- Indexes for table `offices_phone_numbers`
--
ALTER TABLE `offices_phone_numbers`
  ADD PRIMARY KEY (`office_phone_number_id`),
  ADD KEY `fk_office_id` (`fk_office_id`),
  ADD KEY `fk_phone_number_id` (`fk_phone_number_id`);

--
-- Indexes for table `persons`
--
ALTER TABLE `persons`
  ADD PRIMARY KEY (`person_id`);

--
-- Indexes for table `persons_address`
--
ALTER TABLE `persons_address`
  ADD PRIMARY KEY (`person_address_id`),
  ADD KEY `fk_person_id` (`fk_person_id`),
  ADD KEY `fk_barangay_id` (`fk_barangay_id`);

--
-- Indexes for table `persons_email_addresses`
--
ALTER TABLE `persons_email_addresses`
  ADD PRIMARY KEY (`person_email_address_id`),
  ADD KEY `fk_person_id` (`fk_person_id`),
  ADD KEY `fk_email_address_id` (`fk_email_address_id`);

--
-- Indexes for table `persons_offices`
--
ALTER TABLE `persons_offices`
  ADD PRIMARY KEY (`person_office_id`),
  ADD KEY `fk_person_id` (`fk_person_id`),
  ADD KEY `fk_office_id` (`fk_office_id`);

--
-- Indexes for table `persons_phone_numbers`
--
ALTER TABLE `persons_phone_numbers`
  ADD PRIMARY KEY (`person_contact_number_id`);

--
-- Indexes for table `persons_trainings`
--
ALTER TABLE `persons_trainings`
  ADD PRIMARY KEY (`person_training_id`),
  ADD KEY `fk_person_id` (`fk_person_id`),
  ADD KEY `fk_training_id` (`fk_training_id`);

--
-- Indexes for table `phone_numbers`
--
ALTER TABLE `phone_numbers`
  ADD PRIMARY KEY (`phone_number_id`);

--
-- Indexes for table `policies`
--
ALTER TABLE `policies`
  ADD PRIMARY KEY (`policies_id`);

--
-- Indexes for table `trainings`
--
ALTER TABLE `trainings`
  ADD PRIMARY KEY (`training_id`),
  ADD KEY `fk_course_id` (`fk_course_id`),
  ADD KEY `fk_trainer_id` (`fk_trainer_id`);

--
-- Indexes for table `trainings_courses`
--
ALTER TABLE `trainings_courses`
  ADD PRIMARY KEY (`training_course_id`);

--
-- Indexes for table `trainings_participants`
--
ALTER TABLE `trainings_participants`
  ADD PRIMARY KEY (`training_participant_id`),
  ADD KEY `fk_training_id` (`fk_training_id`),
  ADD KEY `fk_participant_id` (`fk_participant_id`);

--
-- Indexes for table `trainings_trainees`
--
ALTER TABLE `trainings_trainees`
  ADD PRIMARY KEY (`training_trainee_id`),
  ADD KEY `fk_training_id` (`fk_training_id`),
  ADD KEY `fk_trainee_id` (`fk_trainee_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address_barangays`
--
ALTER TABLE `address_barangays`
  MODIFY `barangay_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `address_cities`
--
ALTER TABLE `address_cities`
  MODIFY `city_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `email_addresses`
--
ALTER TABLE `email_addresses`
  MODIFY `email_address_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `LDRRMP`
--
ALTER TABLE `LDRRMP`
  MODIFY `LDRRMP_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=156;

--
-- AUTO_INCREMENT for table `LDRRMP_objectives`
--
ALTER TABLE `LDRRMP_objectives`
  MODIFY `objective_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `LDRRMP_outcomes`
--
ALTER TABLE `LDRRMP_outcomes`
  MODIFY `outcome_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `LDRRMP_pillars`
--
ALTER TABLE `LDRRMP_pillars`
  MODIFY `pillar_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `LDRRMP_programs_projects`
--
ALTER TABLE `LDRRMP_programs_projects`
  MODIFY `program_project_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=156;

--
-- AUTO_INCREMENT for table `offices`
--
ALTER TABLE `offices`
  MODIFY `office_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `offices_addresses`
--
ALTER TABLE `offices_addresses`
  MODIFY `office_address_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `offices_categories`
--
ALTER TABLE `offices_categories`
  MODIFY `office_category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `offices_email_addresses`
--
ALTER TABLE `offices_email_addresses`
  MODIFY `office_email_address_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `offices_phone_numbers`
--
ALTER TABLE `offices_phone_numbers`
  MODIFY `office_phone_number_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `persons`
--
ALTER TABLE `persons`
  MODIFY `person_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=241;

--
-- AUTO_INCREMENT for table `persons_address`
--
ALTER TABLE `persons_address`
  MODIFY `person_address_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `persons_email_addresses`
--
ALTER TABLE `persons_email_addresses`
  MODIFY `person_email_address_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `persons_offices`
--
ALTER TABLE `persons_offices`
  MODIFY `person_office_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=162;

--
-- AUTO_INCREMENT for table `persons_phone_numbers`
--
ALTER TABLE `persons_phone_numbers`
  MODIFY `person_contact_number_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `persons_trainings`
--
ALTER TABLE `persons_trainings`
  MODIFY `person_training_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `phone_numbers`
--
ALTER TABLE `phone_numbers`
  MODIFY `phone_number_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=208;

--
-- AUTO_INCREMENT for table `policies`
--
ALTER TABLE `policies`
  MODIFY `policies_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=134;

--
-- AUTO_INCREMENT for table `trainings`
--
ALTER TABLE `trainings`
  MODIFY `training_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `trainings_courses`
--
ALTER TABLE `trainings_courses`
  MODIFY `training_course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `trainings_participants`
--
ALTER TABLE `trainings_participants`
  MODIFY `training_participant_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `trainings_trainees`
--
ALTER TABLE `trainings_trainees`
  MODIFY `training_trainee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address_barangays`
--
ALTER TABLE `address_barangays`
  ADD CONSTRAINT `address_barangays_ibfk_1` FOREIGN KEY (`fk_city_id`) REFERENCES `address_cities` (`city_id`);

--
-- Constraints for table `LDRRMP`
--
ALTER TABLE `LDRRMP`
  ADD CONSTRAINT `LDRRMP_ibfk_1` FOREIGN KEY (`fk_pillar_id`) REFERENCES `LDRRMP_pillars` (`pillar_id`),
  ADD CONSTRAINT `LDRRMP_ibfk_2` FOREIGN KEY (`fk_objective_id`) REFERENCES `LDRRMP_objectives` (`objective_id`),
  ADD CONSTRAINT `LDRRMP_ibfk_3` FOREIGN KEY (`fk_outcome_id`) REFERENCES `LDRRMP_outcomes` (`outcome_id`),
  ADD CONSTRAINT `LDRRMP_ibfk_4` FOREIGN KEY (`fk_program_project_id`) REFERENCES `LDRRMP_programs_projects` (`program_project_id`);

--
-- Constraints for table `offices_addresses`
--
ALTER TABLE `offices_addresses`
  ADD CONSTRAINT `offices_addresses_ibfk_1` FOREIGN KEY (`fk_office_id`) REFERENCES `offices` (`office_id`),
  ADD CONSTRAINT `offices_addresses_ibfk_2` FOREIGN KEY (`fk_barangay_id`) REFERENCES `address_barangays` (`barangay_id`);

--
-- Constraints for table `offices_categories`
--
ALTER TABLE `offices_categories`
  ADD CONSTRAINT `offices_categories_ibfk_1` FOREIGN KEY (`fk_office_id`) REFERENCES `offices` (`office_id`),
  ADD CONSTRAINT `offices_categories_ibfk_2` FOREIGN KEY (`fk_category_id`) REFERENCES `categories` (`category_id`);

--
-- Constraints for table `offices_email_addresses`
--
ALTER TABLE `offices_email_addresses`
  ADD CONSTRAINT `offices_email_addresses_ibfk_1` FOREIGN KEY (`fk_office_id`) REFERENCES `offices` (`office_id`),
  ADD CONSTRAINT `offices_email_addresses_ibfk_2` FOREIGN KEY (`fk_email_address_id`) REFERENCES `email_addresses` (`email_address_id`);

--
-- Constraints for table `offices_phone_numbers`
--
ALTER TABLE `offices_phone_numbers`
  ADD CONSTRAINT `offices_phone_numbers_ibfk_1` FOREIGN KEY (`fk_office_id`) REFERENCES `offices` (`office_id`),
  ADD CONSTRAINT `offices_phone_numbers_ibfk_2` FOREIGN KEY (`fk_phone_number_id`) REFERENCES `phone_numbers` (`phone_number_id`);

--
-- Constraints for table `persons_address`
--
ALTER TABLE `persons_address`
  ADD CONSTRAINT `persons_address_ibfk_1` FOREIGN KEY (`fk_person_id`) REFERENCES `persons` (`person_id`),
  ADD CONSTRAINT `persons_address_ibfk_2` FOREIGN KEY (`fk_barangay_id`) REFERENCES `address_barangays` (`barangay_id`);

--
-- Constraints for table `persons_email_addresses`
--
ALTER TABLE `persons_email_addresses`
  ADD CONSTRAINT `persons_email_addresses_ibfk_1` FOREIGN KEY (`fk_person_id`) REFERENCES `persons` (`person_id`),
  ADD CONSTRAINT `persons_email_addresses_ibfk_2` FOREIGN KEY (`fk_email_address_id`) REFERENCES `email_addresses` (`email_address_id`);

--
-- Constraints for table `persons_offices`
--
ALTER TABLE `persons_offices`
  ADD CONSTRAINT `persons_offices_ibfk_1` FOREIGN KEY (`fk_person_id`) REFERENCES `persons` (`person_id`),
  ADD CONSTRAINT `persons_offices_ibfk_2` FOREIGN KEY (`fk_office_id`) REFERENCES `offices` (`office_id`);

--
-- Constraints for table `persons_trainings`
--
ALTER TABLE `persons_trainings`
  ADD CONSTRAINT `persons_trainings_ibfk_1` FOREIGN KEY (`fk_person_id`) REFERENCES `persons` (`person_id`),
  ADD CONSTRAINT `persons_trainings_ibfk_2` FOREIGN KEY (`fk_training_id`) REFERENCES `trainings` (`training_id`);

--
-- Constraints for table `trainings`
--
ALTER TABLE `trainings`
  ADD CONSTRAINT `fk_course_id` FOREIGN KEY (`fk_course_id`) REFERENCES `trainings_courses` (`training_course_id`),
  ADD CONSTRAINT `fk_trainer_id` FOREIGN KEY (`fk_trainer_id`) REFERENCES `offices` (`office_id`);

--
-- Constraints for table `trainings_participants`
--
ALTER TABLE `trainings_participants`
  ADD CONSTRAINT `trainings_participants_ibfk_1` FOREIGN KEY (`fk_training_id`) REFERENCES `trainings` (`training_id`),
  ADD CONSTRAINT `trainings_participants_ibfk_2` FOREIGN KEY (`fk_participant_id`) REFERENCES `persons` (`person_id`);

--
-- Constraints for table `trainings_trainees`
--
ALTER TABLE `trainings_trainees`
  ADD CONSTRAINT `trainings_trainees_ibfk_1` FOREIGN KEY (`fk_training_id`) REFERENCES `trainings` (`training_id`),
  ADD CONSTRAINT `trainings_trainees_ibfk_2` FOREIGN KEY (`fk_trainee_id`) REFERENCES `offices` (`office_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
