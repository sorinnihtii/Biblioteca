-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2025 at 11:29 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `biblioteca`
--

-- --------------------------------------------------------

--
-- Table structure for table `carti`
--

CREATE TABLE `carti` (
  `id` int(11) NOT NULL,
  `titlu` varchar(50) NOT NULL,
  `autor` varchar(50) NOT NULL,
  `editura` varchar(50) NOT NULL,
  `pret` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `carti`
--

INSERT INTO `carti` (`id`, `titlu`, `autor`, `editura`, `pret`) VALUES
(1, '1984', 'George Orwell', 'Polirom', 45),
(2, 'Mândrie și Prejudecată', 'Jane Austen', 'Humanitas', 55),
(3, 'Sapiens: Scurtă istorie a omenirii', 'Yuval Noah Harari', 'RAO', 70),
(4, 'Harry Potter și Piatra Filozofală', 'J.K. Rowling', 'Arthur', 60),
(5, 'To Kill a Mockingbird', 'Harper Lee', 'Nemira', 50),
(6, 'Cel care nu trebuie numit', 'Stephen King', 'Trei', 65),
(7, 'Alchimistul', 'Paulo Coelho', 'RAO', 40),
(8, 'Frankenstein', 'Mary Shelley', 'Litera', 35),
(9, 'Anna Karenina', 'Lev Tolstoi', 'Nemira', 75),
(10, 'Micul Prinț', 'Antoine de Saint-Exupéry', 'RAO', 30),
(11, 'Dracula', 'Bram Stoker', 'Humanitas', 50),
(12, 'Fahrenheit 451', 'Ray Bradbury', 'Polirom', 45),
(13, 'Jane Eyre', 'Charlotte Brontë', 'Nemira', 55),
(14, 'The Hobbit', 'J.R.R. Tolkien', 'Arthur', 60),
(15, 'Procesul', 'Franz Kafka', 'RAO', 40),
(16, 'Lolita', 'Vladimir Nabokov', 'Litera', 65),
(17, 'Crimă și pedeapsă', 'Fiodor Dostoievski', 'Nemira', 70),
(18, 'Pădurea norvegiană', 'Haruki Murakami', 'Humanitas', 55),
(19, 'Mizerabilii', 'Victor Hugo', 'Polirom', 80),
(20, 'Alice în Țara Minunilor', 'Lewis Carroll', 'RAO', 35),
(21, 'Catch-22', 'Joseph Heller', 'Trei', 60),
(22, 'Stăpânul inelelor: Frăția inelului', 'J.R.R. Tolkien', 'Arthur', 85),
(23, 'Amintiri din copilărie', 'Ion Creangă', 'Nemira', 40),
(24, 'Cartea junglei', 'Rudyard Kipling', 'RAO', 30),
(25, 'Hobbitul', 'J.R.R. Tolkien', 'Arthur', 60),
(26, '1984. Ed. aniversară', 'George Orwell', 'Polirom', 50),
(27, 'Poveste despre două orașe', 'Charles Dickens', 'Humanitas', 55),
(28, 'O mie nouă sute optzeci și patru', 'George Orwell', 'Polirom', 45),
(29, 'Shogun', 'James Clavell', 'Trei', 70),
(30, 'Don Quijote', 'Miguel de Cervantes', 'RAO', 65);

-- --------------------------------------------------------

--
-- Table structure for table `cititori`
--

CREATE TABLE `cititori` (
  `id` int(11) NOT NULL,
  `nume` varchar(50) NOT NULL,
  `prenume` varchar(50) NOT NULL,
  `adresa` varchar(50) NOT NULL,
  `telefon` varchar(20) NOT NULL,
  `id_carte` int(11) NOT NULL,
  `data_imprumut` date NOT NULL,
  `data_return` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cititori`
--

INSERT INTO `cititori` (`id`, `nume`, `prenume`, `adresa`, `telefon`, `id_carte`, `data_imprumut`, `data_return`) VALUES
(1, 'Popescu', 'Ion', 'Str. A, Nr. 1', '0712345678', 1, '2025-11-01', '2025-11-15'),
(2, 'Ionescu', 'Maria', 'Str. B, Nr. 2', '0723456789', 2, '2025-12-02', '2025-12-05'),
(3, 'Georgescu', 'Ana', 'Str. C, Nr. 3', '0734567890', 3, '2025-12-03', '2025-12-06'),
(4, 'Dumitrescu', 'Mihai', 'Str. D, Nr. 4', '0745678901', 4, '2025-12-04', '2025-12-07'),
(5, 'Vasilescu', 'Elena', 'Str. E, Nr. 5', '0756789012', 5, '2025-12-05', '2025-12-06'),
(6, 'Radu', 'Andrei', 'Str. F, Nr. 6', '0767890123', 6, '2025-12-06', '2025-12-07'),
(7, 'Petrescu', 'Ioana', 'Str. G, Nr. 7', '0778901234', 7, '2025-12-01', '2025-12-02'),
(8, 'Stoica', 'Vlad', 'Str. H, Nr. 8', '0789012345', 8, '2025-11-25', NULL),
(9, 'Marinescu', 'Alina', 'Str. I, Nr. 9', '0790123456', 9, '2025-12-03', '2025-12-06'),
(10, 'Enescu', 'Radu', 'Str. J, Nr. 10', '0701234567', 10, '2025-12-04', '2025-12-06'),
(11, 'Iacob', 'Cristina', 'Str. K, Nr. 11', '0711111111', 11, '2025-12-05', '2025-12-06'),
(12, 'Neagu', 'Florin', 'Str. L, Nr. 12', '0722222222', 12, '2025-12-06', NULL),
(13, 'Toma', 'Adriana', 'Str. M, Nr. 13', '0733333333', 13, '2025-12-06', '2025-12-07'),
(14, 'Anghel', 'Sorin', 'Str. N, Nr. 14', '0744444444', 14, '2025-12-07', '2025-12-07'),
(15, 'Dinu', 'Raluca', 'Str. O, Nr. 15', '0755555555', 15, '2025-12-07', '2025-12-07'),
(16, 'Grigorescu', 'Alex', 'Str. P, Nr. 16', '0766666666', 16, '2025-12-01', '2025-12-06'),
(17, 'Badea', 'Irina', 'Str. Q, Nr. 17', '0777777777', 17, '2025-12-02', NULL),
(18, 'Vladu', 'Marius', 'Str. R, Nr. 18', '0788888888', 18, '2025-12-03', '2025-12-06'),
(19, 'Coșman', 'Elisa', 'Str. S, Nr. 19', '0799999999', 19, '2025-12-04', '2025-12-06'),
(20, 'Barbu', 'Gabriel', 'Str. T, Nr. 20', '0709876543', 20, '2025-12-05', '2025-12-06'),
(21, 'Cazan', 'Alina', 'Str. U, Nr. 21', '0712349876', 21, '2025-12-05', '2025-12-06'),
(22, 'Filip', 'Mihnea', 'Str. V, Nr. 22', '0723458765', 22, '2025-12-06', NULL),
(23, 'Cristea', 'Camelia', 'Str. W, Nr. 23', '0734567654', 23, '2025-12-06', NULL),
(24, 'Iliescu', 'Paul', 'Str. X, Nr. 24', '0745676543', 24, '2025-12-06', '2025-12-07'),
(25, 'Manole', 'Sorina', 'Str. Y, Nr. 25', '0756785432', 25, '2025-12-07', '2025-12-07'),
(26, 'Negraru', 'Victor', 'Str. Z, Nr. 26', '0767894321', 26, '2025-12-06', '2025-12-07'),
(27, 'Stanciu', 'Daniela', 'Str. AA, Nr. 27', '0778903210', 27, '2025-12-06', '2025-12-07'),
(28, 'Costin', 'Mihai', 'Str. AB, Nr. 28', '0789012109', 28, '2025-12-06', '2025-12-07'),
(29, 'Istrate', 'Anca', 'Str. AC, Nr. 29', '0790121098', 29, '2025-12-06', '2025-12-07'),
(30, 'Tănase', 'Răzvan', 'Str. AD, Nr. 30', '0701230987', 30, '2025-12-06', '2025-12-07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carti`
--
ALTER TABLE `carti`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cititori`
--
ALTER TABLE `cititori`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_carte` (`id_carte`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carti`
--
ALTER TABLE `carti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `cititori`
--
ALTER TABLE `cititori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=183;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cititori`
--
ALTER TABLE `cititori`
  ADD CONSTRAINT `imprumut` FOREIGN KEY (`id_carte`) REFERENCES `carti` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
