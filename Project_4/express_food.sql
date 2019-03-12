-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 12, 2019 at 12:13 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_food`
--

-- --------------------------------------------------------

--
-- Table structure for table `chef`
--

CREATE TABLE `chef` (
  `chef_id` int(11) NOT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `chef`
--

INSERT INTO `chef` (`chef_id`, `first_name`, `last_name`) VALUES
(1, 'Gordon', 'Ramsay'),
(2, 'Jamie', 'Oliver'),
(3, 'Rachel', 'Ray'),
(4, 'Bobby', 'Flay'),
(5, 'Emeril', 'Lagasse');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `first_name`, `last_name`, `address`, `phone`, `email`) VALUES
(1, 'David', 'Jones', '5488 W 34th St', '8668639863', 'david@mail.com'),
(2, 'Nick', 'Flanders', '3486 Happy Trails Dr', '4159350598', 'nick@mail.com'),
(3, 'Lisa', 'Washington', '3490 Dearborn Ave', '4083713565', 'lisa@mail.com'),
(4, 'Paul', 'Brown', '3290 Pennsylvania Ave', '4239350764', 'paul@mail.com'),
(5, 'Sara', 'Rehm', '7746 Wysong Ave', '8728639867', 'sara@mail.com');

-- --------------------------------------------------------

--
-- Table structure for table `delivery_person`
--

CREATE TABLE `delivery_person` (
  `delivery_person_id` int(11) NOT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `delivery_person`
--

INSERT INTO `delivery_person` (`delivery_person_id`, `first_name`, `last_name`, `phone`, `email`) VALUES
(1, 'Christopher', 'Layton', '8428639866', 'christopher@expressfood.com'),
(2, 'Devon', 'Myers', '4829350643', 'devon@expressfood.com'),
(3, 'Peter', 'Johnson', '4639350748', 'peter@expressfood.com'),
(4, 'Desmond', 'Rafferty', '8668639882', 'desmod@expressfood.com'),
(5, 'Harry', 'Brown', '4179350578', 'harry@expressfood.com');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `menu_id` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`menu_id`, `date`) VALUES
(1, '2019-03-09'),
(2, '2019-03-10'),
(3, '2019-03-11'),
(4, '2019-03-12'),
(5, '2019-03-13'),
(6, '2019-03-14'),
(7, '2019-03-15'),
(8, '2019-03-16'),
(9, '2019-03-17'),
(10, '2019-03-18'),
(11, '2019-03-19'),
(12, '2019-03-20'),
(13, '2019-03-21'),
(14, '2019-03-22'),
(15, '2019-03-23'),
(16, '2019-03-24'),
(17, '2019-03-25'),
(18, '2019-03-26'),
(19, '2019-03-27'),
(20, '2019-03-28'),
(21, '2019-03-29'),
(22, '2019-03-30'),
(23, '2019-03-31');

-- --------------------------------------------------------

--
-- Table structure for table `menu_item`
--

CREATE TABLE `menu_item` (
  `menu_item_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `price` smallint(4) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menu_item`
--

INSERT INTO `menu_item` (`menu_item_id`, `menu_id`, `price`, `name`, `description`) VALUES
(1, 1, 35, 'Beef Rendang', 'Main Dishes'),
(2, 1, 38, 'Surf & Turf', 'Main Dishes'),
(3, 1, 10, 'Waffle with Ice Cream', 'Desserts '),
(4, 1, 10, 'Waffle with Maple Syrup', 'Desserts '),
(5, 2, 31, 'Sizzling Roast Beef', 'Main Dishes'),
(6, 2, 39, 'T-Bone Steak', 'Main Dishes'),
(7, 2, 11, 'Passion Fruit Cheesecake', 'Desserts '),
(8, 2, 11, 'Strawberry Cheesecake', 'Desserts '),
(9, 3, 36, 'Satay Chicken', 'Main Dishes'),
(10, 3, 37, 'Sirloin Steak', 'Main Dishes'),
(11, 3, 11, 'Apple Pie', 'Desserts'),
(12, 3, 11, 'Bread n Butter Pudding', 'Desserts '),
(13, 4, 32, 'Apricot Chicken', 'Main Dishes'),
(14, 4, 33, 'Honey Chicken', 'Main Dishes'),
(15, 4, 12, 'Chocolate Lave Cake', 'Desserts '),
(16, 4, 10, 'Chocolate Steam Pudding', 'Desserts '),
(17, 5, 31, 'Garlic & Herb Chicken', 'Main Dishes'),
(18, 5, 33, 'Prawn Skewers', 'Main Dishes'),
(19, 5, 11, 'Brownie a la Mode', 'Desserts '),
(20, 5, 10, 'Pancake a la Mode', 'Desserts ');

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE `order_detail` (
  `order_history_id` int(11) NOT NULL,
  `menu_item_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`order_history_id`, `menu_item_id`, `quantity`) VALUES
(1, 1, 2),
(2, 2, 2),
(3, 3, 2),
(4, 4, 2),
(5, 5, 3),
(6, 6, 3),
(7, 7, 3),
(8, 8, 3),
(9, 9, 4),
(10, 10, 4),
(11, 11, 4),
(12, 12, 4),
(13, 13, 2),
(14, 14, 2),
(15, 15, 2),
(16, 16, 2),
(17, 17, 3),
(18, 18, 3),
(19, 19, 3),
(20, 20, 3);

-- --------------------------------------------------------

--
-- Table structure for table `order_history`
--

CREATE TABLE `order_history` (
  `order_history_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `delivery_person_id` int(11) NOT NULL,
  `total_price` int(11) NOT NULL,
  `date` date NOT NULL,
  `order_time` time NOT NULL,
  `delivery_pickup_time` time NOT NULL,
  `arrival_estimation_time` time NOT NULL,
  `arrival_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_history`
--

INSERT INTO `order_history` (`order_history_id`, `customer_id`, `delivery_person_id`, `total_price`, `date`, `order_time`, `delivery_pickup_time`, `arrival_estimation_time`, `arrival_time`) VALUES
(1, 1, 1, 186, '2019-03-09', '11:00:00', '11:05:00', '11:14:00', '11:15:00'),
(2, 2, 2, 276, '2019-03-10', '11:05:00', '11:10:00', '11:20:00', '11:21:00'),
(3, 3, 3, 380, '2019-03-11', '11:10:00', '11:15:00', '11:25:00', '11:27:00'),
(4, 4, 4, 174, '2019-03-12', '11:30:00', '11:35:00', '11:45:00', '11:48:00'),
(5, 5, 5, 255, '2019-03-13', '11:40:00', '11:45:00', '11:56:00', '11:59:00');

-- --------------------------------------------------------

--
-- Table structure for table `restaurant`
--

CREATE TABLE `restaurant` (
  `restaurant_id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `restaurant`
--

INSERT INTO `restaurant` (`restaurant_id`, `name`, `address`, `phone`, `email`) VALUES
(1, 'Express Food', 'Menlo Park, California', '833272077', 'hello@expressfood.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chef`
--
ALTER TABLE `chef`
  ADD PRIMARY KEY (`chef_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `delivery_person`
--
ALTER TABLE `delivery_person`
  ADD PRIMARY KEY (`delivery_person_id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`menu_id`);

--
-- Indexes for table `menu_item`
--
ALTER TABLE `menu_item`
  ADD PRIMARY KEY (`menu_item_id`),
  ADD KEY `menu_id` (`menu_id`);

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`order_history_id`,`menu_item_id`);

--
-- Indexes for table `order_history`
--
ALTER TABLE `order_history`
  ADD PRIMARY KEY (`order_history_id`),
  ADD KEY `customer_id` (`customer_id`,`delivery_person_id`),
  ADD KEY `delivery_person_id` (`delivery_person_id`);

--
-- Indexes for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`restaurant_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chef`
--
ALTER TABLE `chef`
  MODIFY `chef_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `delivery_person`
--
ALTER TABLE `delivery_person`
  MODIFY `delivery_person_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `menu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `menu_item`
--
ALTER TABLE `menu_item`
  MODIFY `menu_item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `order_history`
--
ALTER TABLE `order_history`
  MODIFY `order_history_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `restaurant_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `menu_item`
--
ALTER TABLE `menu_item`
  ADD CONSTRAINT `menu_item_ibfk_1` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`menu_id`);

--
-- Constraints for table `order_history`
--
ALTER TABLE `order_history`
  ADD CONSTRAINT `order_history_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`),
  ADD CONSTRAINT `order_history_ibfk_2` FOREIGN KEY (`delivery_person_id`) REFERENCES `delivery_person` (`delivery_person_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
