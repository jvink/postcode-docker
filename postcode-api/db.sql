CREATE DATABASE  IF NOT EXISTS `postcodeapi` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `postcodeapi`;
-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: postcodeapi
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `huisnummer`
--

DROP TABLE IF EXISTS `huisnummer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `huisnummer` (
  `huisnummer` int(11) NOT NULL,
  `FK_postcode` varchar(6) DEFAULT NULL,
  PRIMARY KEY (`huisnummer`),
  KEY `postcode_idx` (`FK_postcode`),
  CONSTRAINT `postcode` FOREIGN KEY (`FK_postcode`) REFERENCES `postcode` (`postcode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `huisnummer`
--

LOCK TABLES `huisnummer` WRITE;
/*!40000 ALTER TABLE `huisnummer` DISABLE KEYS */;
INSERT INTO `huisnummer` VALUES (101,'3311JJ'),(163,'3319AP'),(5,'3355BN');
/*!40000 ALTER TABLE `huisnummer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plaats`
--

DROP TABLE IF EXISTS `plaats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `plaats` (
  `idplaats` int(11) NOT NULL AUTO_INCREMENT,
  `plaats` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`idplaats`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plaats`
--

LOCK TABLES `plaats` WRITE;
/*!40000 ALTER TABLE `plaats` DISABLE KEYS */;
INSERT INTO `plaats` VALUES (1,'Dordrecht'),(2,'Papendrecht');
/*!40000 ALTER TABLE `plaats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `postcode`
--

DROP TABLE IF EXISTS `postcode`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `postcode` (
  `postcode` varchar(6) NOT NULL,
  `straat` varchar(120) DEFAULT NULL,
  `FK_idplaats` int(11) DEFAULT NULL,
  PRIMARY KEY (`postcode`),
  UNIQUE KEY `idpostcode_UNIQUE` (`postcode`),
  KEY `idplaats_idx` (`FK_idplaats`),
  CONSTRAINT `idplaats` FOREIGN KEY (`FK_idplaats`) REFERENCES `plaats` (`idplaats`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postcode`
--

LOCK TABLES `postcode` WRITE;
/*!40000 ALTER TABLE `postcode` DISABLE KEYS */;
INSERT INTO `postcode` VALUES ('3311JJ','Draai',1),('3319AP','Burgemeester Beelaertspark',1),('3355BN','Kamillehof',2);
/*!40000 ALTER TABLE `postcode` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-23 17:38:23
