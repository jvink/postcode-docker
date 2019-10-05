CREATE DATABASE  IF NOT EXISTS `postcodeapi`;
USE `postcodeapi`;

DROP TABLE IF EXISTS `plaats`;
CREATE TABLE `plaats` (
  `idplaats` int(11) NOT NULL AUTO_INCREMENT,
  `plaats` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`idplaats`)
);

DROP TABLE IF EXISTS `postcode`;
CREATE TABLE `postcode` (
  `postcode` varchar(6) NOT NULL,
  `straat` varchar(120) DEFAULT NULL,
  `FK_idplaats` int(11) DEFAULT NULL,
  PRIMARY KEY (`postcode`),
  UNIQUE KEY `idpostcode_UNIQUE` (`postcode`),
  KEY `idplaats_idx` (`FK_idplaats`),
  CONSTRAINT `idplaats` FOREIGN KEY (`FK_idplaats`) REFERENCES `plaats` (`idplaats`)
);

DROP TABLE IF EXISTS `huisnummer`;

CREATE TABLE `huisnummer` (
  `huisnummer` int(11) NOT NULL,
  `toevoeging` varchar(2),
  `FK_postcode` varchar(6) DEFAULT NULL,
  PRIMARY KEY (`huisnummer`),
  KEY `postcode_idx` (`FK_postcode`),
  CONSTRAINT `postcode` FOREIGN KEY (`FK_postcode`) REFERENCES `postcode` (`postcode`)
);

LOCK TABLES `plaats` WRITE;
/*!40000 ALTER TABLE `plaats` DISABLE KEYS */;
INSERT INTO `plaats` VALUES (1,'Dordrecht'),(2,'Papendrecht');
/*!40000 ALTER TABLE `plaats` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `postcode` WRITE;
/*!40000 ALTER TABLE `postcode` DISABLE KEYS */;
INSERT INTO `postcode` VALUES ('3311JJ','Draai',1),('3319AP','Burgemeester Beelaertspark',1),('3355BN','Kamillehof',2);
/*!40000 ALTER TABLE `postcode` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `huisnummer` WRITE;
/*!40000 ALTER TABLE `huisnummer` DISABLE KEYS */;
INSERT INTO `huisnummer` VALUES (101,'3311JJ'),(163,'3319AP'),(5,'3355BN');
/*!40000 ALTER TABLE `huisnummer` ENABLE KEYS */;
UNLOCK TABLES;
