-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2023 at 01:17 PM
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
-- Database: `ict_moph`
--

-- --------------------------------------------------------

--
-- Table structure for table `bin`
--

CREATE TABLE `bin` (
  `bin_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `result_id` int(11) NOT NULL,
  `list_prefix` varchar(20) NOT NULL,
  `list_first_name` text NOT NULL,
  `list_last_name` text NOT NULL,
  `list_department` text NOT NULL,
  `list_position` varchar(100) NOT NULL,
  `list_level` varchar(100) NOT NULL,
  `list_role` varchar(100) NOT NULL,
  `list_note` text NOT NULL,
  `list_confirm_status` varchar(50) NOT NULL COMMENT 'for admin',
  `list_plan_type` text NOT NULL,
  `list_training_status` varchar(50) NOT NULL,
  `list_assessment` varchar(50) NOT NULL COMMENT 'for manager'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `plan_id` int(11) NOT NULL,
  `course_name` text NOT NULL,
  `organizer` text NOT NULL,
  `course_type` varchar(20) NOT NULL,
  `quota` int(11) NOT NULL,
  `budget` double NOT NULL,
  `course_status` varchar(20) NOT NULL,
  `course_date` date NOT NULL,
  `course_note` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `list`
--

CREATE TABLE `list` (
  `list_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `result_id` int(11) NOT NULL,
  `list_prefix` varchar(20) NOT NULL,
  `list_first_name` text NOT NULL,
  `list_last_name` text NOT NULL,
  `list_department` text NOT NULL,
  `list_position` varchar(100) NOT NULL,
  `list_level` varchar(100) NOT NULL,
  `list_role` varchar(100) NOT NULL,
  `list_note` text NOT NULL,
  `list_confirm_status` varchar(50) NOT NULL COMMENT 'for admin',
  `list_plan_type` text NOT NULL,
  `list_training_status` varchar(50) NOT NULL,
  `list_assessment` varchar(50) NOT NULL COMMENT 'for manager'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `plan`
--

CREATE TABLE `plan` (
  `plan_id` int(11) NOT NULL,
  `plan_name` text NOT NULL,
  `budget_year` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `plan`
--

INSERT INTO `plan` (`plan_id`, `plan_name`, `budget_year`) VALUES
(19, 'แผนการอบรมความปลอดภัย', 2565),
(20, 'แผนการอบรมด้านความปลอดภัย', 2565),
(21, 'แผนการอบรมด้านสิ่งแวดล้อม', 2565),
(22, 'แผนการอบรมด้านความปลอดภัย', 2565);

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE `result` (
  `result_id` int(11) NOT NULL,
  `course_description` blob NOT NULL,
  `certificate` blob NOT NULL,
  `exam_result` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `prefix` varchar(20) NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `department` text NOT NULL,
  `position` varchar(100) NOT NULL,
  `level` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `prefix`, `first_name`, `last_name`, `department`, `position`, `level`, `role`, `email`, `password`) VALUES
(1, 'นาย', 'กลวัชร', 'คธาเพ็ชร', 'กลุ่มพัฒนามาตรฐานและบริการคอมพิวเตอร์', 'เจ้าพนักงานธุรการ', 'ระดับชำนาญการพิเศษ', 'บุคลากร', 'konlawat.khathaphet@gmail.com', 'u6213121'),
(2, 'นางสาว', 'สมใจ', 'รักดี', 'กลุ่มคอมพิวเตอร์และเครือข่าย', 'เจ้าพนักงานเครื่องคอมพิวเตอร์', 'ระดับชำนาญการพิเศษ', 'หัวหน้ากลุ่ม', 'sdafsdfsdaf@ga.com', 'werwerwe'),
(3, 'นาง', 'test', 'ึคค', 'กลุ่มคอมพิวเตอร์และเครือข่าย', 'เจ้าพนักงานธุรการ', 'ระดับต้น', 'บุคลากร', 'sdafsdfsdaf@ga.com', 'werwerwe'),
(4, 'นางสาว', 'กรกนก', 'ึคค', 'กลุ่มคอมพิวเตอร์และเครือข่าย', 'นักวิเคราะห์นโยบายและแผน', 'ระดับเชี่ยวชาญ', 'บุคลากร', 'sdafsdfsdaf@ga.com', 'werwerwe'),
(5, 'นางสาว', 'กรกนก', 'มีงานทำ', 'กลุ่มบริหารเทคโนโลยีสารสนเทศและการจัดการ', 'ผู้อำนวยการ', 'ระดับสูง', 'หัวหน้ากลุ่ม', 'testemail.gg@gmail.com', 'testtest');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bin`
--
ALTER TABLE `bin`
  ADD PRIMARY KEY (`bin_id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_plan` (`plan_id`);

--
-- Indexes for table `list`
--
ALTER TABLE `list`
  ADD PRIMARY KEY (`list_id`),
  ADD KEY `list_users` (`user_id`),
  ADD KEY `list_result` (`result_id`),
  ADD KEY `list_course` (`course_id`);

--
-- Indexes for table `plan`
--
ALTER TABLE `plan`
  ADD PRIMARY KEY (`plan_id`);

--
-- Indexes for table `result`
--
ALTER TABLE `result`
  ADD PRIMARY KEY (`result_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `list`
--
ALTER TABLE `list`
  MODIFY `list_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `plan`
--
ALTER TABLE `plan`
  MODIFY `plan_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `result`
--
ALTER TABLE `result`
  MODIFY `result_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `course_plan` FOREIGN KEY (`plan_id`) REFERENCES `plan` (`plan_id`);

--
-- Constraints for table `list`
--
ALTER TABLE `list`
  ADD CONSTRAINT `list_course` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`),
  ADD CONSTRAINT `list_result` FOREIGN KEY (`result_id`) REFERENCES `result` (`result_id`),
  ADD CONSTRAINT `list_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
