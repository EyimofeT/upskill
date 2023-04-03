-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 30, 2023 at 09:00 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bu_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `enrolled_course`
--

CREATE TABLE `enrolled_course` (
  `id` int(11) UNSIGNED NOT NULL,
  `course_id` varchar(150) NOT NULL,
  `student_id` varchar(100) NOT NULL,
  `course_shot_code` varchar(100) NOT NULL,
  `course_name` varchar(250) NOT NULL,
  `course_lecturer` varchar(200) NOT NULL,
  `course_group` varchar(100) NOT NULL,
  `added` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `profile_id`
--

CREATE TABLE `profile_id` (
  `id` int(11) UNSIGNED NOT NULL,
  `firstName` varchar(250) NOT NULL,
  `lastName` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `role` varchar(100) NOT NULL,
  `student_id` varchar(250) NOT NULL,
  `student_point` varchar(100) NOT NULL,
  `study_course` varchar(250) NOT NULL,
  `student_level` varchar(100) NOT NULL,
  `student_progress` varchar(100) NOT NULL,
  `merit_bandage` varchar(100) NOT NULL,
  `group_id` varchar(200) NOT NULL,
  `password` varchar(250) NOT NULL,
  `added` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profile_id`
--

INSERT INTO `profile_id` (`id`, `firstName`, `lastName`, `email`, `role`, `student_id`, `student_point`, `study_course`, `student_level`, `student_progress`, `merit_bandage`, `group_id`, `password`, `added`) VALUES
(12, 'Nna', 'Benjamin', 'nnabenjamin@student.babcock.edu.ng', 'student', 'Nna_3', '0', 'Computer Science', '400', '0', 'novies', 'Nna_3', '$2b$10$RTCmzr7pDX4YlISorwZRnOEwl.LlRUnEfLAJV7dwRbo..aC4MT3Yu', '2023-03-25 22:55:56'),
(13, 'admin', 'admin', 'admin@student.babcock.edu.ng', 'admin', 'admin_5', '', '', '', '', '', 'admin_5', '$2b$10$9DJ55sgRjqdyHE5xQMUEhuwwKWU3PfkQWdULmQSW60uyQvftGZwmW', '2023-03-24 19:48:34'),
(14, 'Owolabi', 'Samuel', 'Owolabi@student.babcock.edu.ng', 'student', 'Owolabi_7', '0', 'Computer Science ', '200l', '0', 'novice', 'Owolabi_7', '$2b$10$ZlpBM6Fa4M4AHUTl73vSle8MHGXTLbSxxwifXg2jFrr8dxLe7r1C6', '2023-03-26 00:25:26'),
(15, 'CHIKA', 'CHIKA', 'CHIKA@student.babcock.edu.ng', 'student', 'CHIKA_5', '0', 'CHIKA', '200', '0', 'novice', 'CHIKA_5', '$2b$10$vSOcltO9ehoknH7/K5EzfOcUZeBxH/bH18ErvGp0ttRy9qVZNDipm', '2023-03-26 00:35:28'),
(16, 'blessing', 'blessing', 'blessing@student.babcock.edu.ng', 'student', 'blessing_8', '0', 'blessing', '100', '0', 'novice', 'blessing_8', '$2b$10$rOjQogLLKvqNxlVcjHv6PObSTIO8eaClY7Mxe2G8yST4UTElCPV.m', '2023-03-26 01:03:53'),
(17, 'tochi', 'tochi', 'tochi@student.babcock.edu.ng', 'student', 'tochi_5', '0', 'tochi', '100', '0', 'novice', 'tochi_5', '$2b$10$07iRoLYWE9TCawf1X6n2keNdDcJV7TThYZOEwdTHxJV52vOm0.2ki', '2023-03-26 01:06:25'),
(18, 'bianca', 'bianca', 'bianca@student.babcock.edu.ng', 'student', 'bianca_6', '0', 'bianca', '100', '0', 'novice', 'bianca_6', '$2b$10$vgU0QD2oTa7hhjnwC2X5muRd9bwxJh3ePq.UY0P27vKtrLOfkhBuW', '2023-03-26 01:08:28'),
(19, 'biancas', 'biancas', 'biancas@student.babcock.edu.ng', 'student', 'biancas_7', '0', 'biancas', '100', '0', 'novice', 'biancas_7', '$2b$10$YlZIo4nWdJSKPFrklDNIxOjWz1Rmp.wY3XiFcuXvo5ojHk0qrb0gm', '2023-03-26 01:10:19'),
(20, 'samson', 'samson', 'samson@student.babcock.edu.ng', 'student', 'samson_6', '0', 'samson', '100', '0', 'novice', 'samson_6', '$2b$10$aVvzFcQA1hmnB/vLahWwLub8zHrnQdVo6Wlwgx26aZtBkHEojCfRK', '2023-03-26 01:11:37'),
(21, 'zach', 'zach', 'zach@student.babcock.edu.ng', 'student', 'zach_4', '0', 'zach', '100', '0', 'novice', 'zach_4', '$2b$10$UEspoZgIjEh6v03BtQi88eK1NgWBxvYdlLGsZWQZ0PMnXk1rozMYy', '2023-03-26 20:46:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `enrolled_course`
--
ALTER TABLE `enrolled_course`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profile_id`
--
ALTER TABLE `profile_id`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `enrolled_course`
--
ALTER TABLE `enrolled_course`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `profile_id`
--
ALTER TABLE `profile_id`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
