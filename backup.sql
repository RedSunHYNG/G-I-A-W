-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: use_server
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `byway_1206`
--

DROP TABLE IF EXISTS `byway_1206`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `byway_1206` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codeid` varchar(255) NOT NULL,
  `info` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `byway_1206`
--

LOCK TABLES `byway_1206` WRITE;
/*!40000 ALTER TABLE `byway_1206` DISABLE KEYS */;
INSERT INTO `byway_1206` VALUES (1,'odgeK6yDTVPHG8yFBy6bXHQmHMRI','23'),(2,'odgeK6yDTVPHG8yFBy6bXHQmHMRI','23'),(3,'odgeK6yDTVPHG8yFBy6bXHQmHMRI','鍦ㄨ繖閲屾垜灏嗘鏃犱繚鐣欑殑涓庝綘鍒嗕韩鑷繁璺笂鐨勮涓庢唱锛屾姏寮€鎶€鏈紝鏉ヨ皥璋堜笌鎶€鏈悓鏍烽噸瑕佺殑鎴愰暱鏂规硶璁?),(4,'odgeK6yDTVPHG8yFBy6bXHQmHMRI','杩欎釜浠ｈ倽鐪熺殑寰堜究瀹滃緢妫掞紝绉嶈崏鏀寔锛侊紒'),(7,'123','娴嬭瘯娴嬭瘯');
/*!40000 ALTER TABLE `byway_1206` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coupon_1206`
--

DROP TABLE IF EXISTS `coupon_1206`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coupon_1206` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codeid` varchar(255) NOT NULL,
  `shopid` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupon_1206`
--

LOCK TABLES `coupon_1206` WRITE;
/*!40000 ALTER TABLE `coupon_1206` DISABLE KEYS */;
INSERT INTO `coupon_1206` VALUES (1,'odgeK6yDTVPHG8yFBy6bXHQmHMRI','1'),(2,'odgeK6yDTVPHG8yFBy6bXHQmHMRI','4'),(3,'odgeK6yDTVPHG8yFBy6bXHQmHMRI','1'),(4,'odgeK6yDTVPHG8yFBy6bXHQmHMRI','1');
/*!40000 ALTER TABLE `coupon_1206` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_1206`
--

DROP TABLE IF EXISTS `user_1206`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_1206` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codeid` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(225) DEFAULT NULL,
  `admin` char(2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `user_1206_chk_1` CHECK (((`admin` = _utf8mb4'1') or (`admin` = _utf8mb4'0')))
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_1206`
--

LOCK TABLES `user_1206` WRITE;
/*!40000 ALTER TABLE `user_1206` DISABLE KEYS */;
INSERT INTO `user_1206` VALUES (13,'odgeK6yDTVPHG8yFBy6bXHQmHMRI','鑰侀【','http://localhost:3000/upfile/34ccb3959d666965d8b098800.png',NULL),(14,'123','233',NULL,NULL);
/*!40000 ALTER TABLE `user_1206` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-23 10:06:12
