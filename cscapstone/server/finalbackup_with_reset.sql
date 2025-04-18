-- MySQL dump 10.13  Distrib 8.0.41, for Linux (x86_64)
--
-- Host: localhost    Database: market-db
-- ------------------------------------------------------
-- Server version	8.0.41-0ubuntu0.20.04.1

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
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `item_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  `isWant` tinyint(1) DEFAULT '0',
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`item_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `items_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,'Tablet','Used tablet in good condition',300.00,0,1),(2,'Headphones','Noise-canceling over-ear headphones',150.00,0,1),(3,'Gaming Console','Next-gen console for gaming',500.00,1,2),(4,'VR Headset','High-resolution virtual reality headset',600.00,1,2),(5,'Bike','Mountain bike for outdoor adventures',700.00,1,3),(6,'Helmet','Safety-certified helmet',100.00,1,3),(7,'Skateboard','Custom deck with smooth wheels',120.00,0,3),(8,'Backpack','Durable travel backpack',80.00,0,3),(9,'Camera','DSLR camera with 4K recording',900.00,1,4),(10,'Tripod','Lightweight and adjustable tripod',150.00,1,4),(11,'Laptop','Business laptop with SSD storage',1100.00,0,4),(12,'Microphone','USB microphone for recording',200.00,0,4),(13,'Smartwatch','Fitness tracker with heart rate monitoring',250.00,1,5),(14,'Wireless Earbuds','Noise-canceling Bluetooth earbuds',180.00,1,5),(15,'Fitness Tracker','Basic step counter and heart rate monitor',100.00,0,5),(16,'Old Phone','Functional smartphone with minor scratches',200.00,0,5),(25,'Generic Want Item','A generic want item description',100.00,1,3),(26,'Generic Want Item','A generic want item description',100.00,1,3),(27,'Generic Want Item','A generic want item description',100.00,1,3),(28,'Generic Want Item','A generic want item description',100.00,1,3),(29,'Generic Have Item','A generic have item description',200.00,0,3),(30,'Generic Have Item','A generic have item description',200.00,0,3),(31,'Generic Want Item','A generic want item description',100.00,1,3),(32,'Generic Want Item','A generic want item description',100.00,1,3),(33,'Generic Want Item','A generic want item description',100.00,1,3),(34,'Generic Want Item','A generic want item description',100.00,1,3),(35,'Generic Have Item','A generic have item description',200.00,0,3),(36,'Generic Have Item','A generic have item description',200.00,0,3),(37,'Generic Want Item','A generic want item description',100.00,1,3),(38,'Generic Want Item','A generic want item description',100.00,1,3),(39,'Generic Want Item','A generic want item description',100.00,1,3),(40,'Generic Have Item','A generic have item description',200.00,0,3),(41,'Generic Have Item','A generic have item description',200.00,0,3),(42,'Generic Want Item','A generic want item description',100.00,1,3),(43,'Generic Want Item','A generic want item description',100.00,1,3),(44,'Generic Want Item','A generic want item description',100.00,1,3),(45,'Generic Want Item','A generic want item description',100.00,1,1),(46,'Generic Have Item','A generic have item description',200.00,0,1),(47,'Generic Want Item','A generic want item description',100.00,1,2),(48,'Generic Have Item','A generic have item description',200.00,0,2),(49,'Generic Want Item','A generic want item description',100.00,1,2),(50,'Generic Want Item','A generic want item description',100.00,1,4),(51,'Generic Want Item','A generic want item description',100.00,1,4),(52,'Generic Have Item','A generic have item description',200.00,0,4),(53,'Generic Want Item','A generic want item description',100.00,1,3),(54,'Generic Have Item','A generic have item description',200.00,0,3),(55,'Generic Want Item','A generic want item description',100.00,1,4),(56,'Generic Have Item','A generic have item description',200.00,0,4),(57,'Generic Want Item','A generic want item description',100.00,1,4),(58,'Generic Want Item','A generic want item description',100.00,1,4);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating_history`
--

DROP TABLE IF EXISTS `rating_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating_history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `rating` int NOT NULL,
  `timestamp` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `rating_history_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating_history`
--

LOCK TABLES `rating_history` WRITE;
/*!40000 ALTER TABLE `rating_history` DISABLE KEYS */;
INSERT INTO `rating_history` VALUES (48,1,63,'2025-04-08 17:04:26'),(49,1,62,'2025-04-08 17:04:29'),(50,1,62,'2025-04-08 17:04:31'),(51,1,61,'2025-04-08 17:04:37'),(52,1,60,'2025-04-08 17:04:41'),(53,1,60,'2025-04-08 17:04:46'),(54,1,62,'2025-04-08 17:47:23'),(55,1,63,'2025-04-08 17:47:32'),(56,1,59,'2025-04-08 17:47:55'),(57,1,75,'2025-04-08 17:55:36'),(58,1,63,'2025-04-08 17:55:44'),(59,3,76,'2025-04-08 17:55:54'),(109,4,91,'2025-04-08 18:20:40'),(110,4,91,'2025-04-08 18:20:54'),(111,4,91,'2025-04-08 18:20:56'),(112,4,94,'2025-04-08 18:21:00'),(113,4,95,'2025-04-08 18:21:06'),(114,2,95,'2025-04-08 18:21:37'),(115,2,86,'2025-04-08 18:21:42'),(116,2,86,'2025-04-08 18:21:43'),(117,2,86,'2025-04-08 18:21:45'),(118,2,86,'2025-04-08 18:21:46'),(119,2,80,'2025-04-08 18:21:50'),(120,2,75,'2025-04-08 18:21:51'),(121,2,71,'2025-04-08 18:21:52'),(122,5,66,'2025-04-08 18:21:57'),(123,5,65,'2025-04-08 18:21:59'),(124,5,64,'2025-04-08 18:22:01'),(125,5,63,'2025-04-08 18:22:02'),(126,5,64,'2025-04-08 18:22:04'),(127,1,63,'2025-04-08 18:22:08'),(128,1,64,'2025-04-08 18:22:10');
/*!40000 ALTER TABLE `rating_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_history`
--

DROP TABLE IF EXISTS `user_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_history` (
  `history_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `action_type` enum('offer','offer_success','offer_failure','post_want','post_have') DEFAULT NULL,
  `item_id` int DEFAULT NULL,
  `timestamp` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`history_id`),
  KEY `user_id` (`user_id`),
  KEY `item_id` (`item_id`),
  CONSTRAINT `user_history_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `user_history_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `items` (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=224 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_history`
--

LOCK TABLES `user_history` WRITE;
/*!40000 ALTER TABLE `user_history` DISABLE KEYS */;
INSERT INTO `user_history` VALUES (1,3,'post_want',25,'2025-03-30 16:39:51'),(2,3,'post_want',26,'2025-03-30 16:39:52'),(3,3,'post_want',27,'2025-03-30 16:39:52'),(4,3,'post_want',28,'2025-03-30 16:39:53'),(5,3,'offer',2,'2025-03-30 16:39:54'),(6,3,'offer',1,'2025-03-30 16:39:56'),(7,3,'offer',4,'2025-03-30 16:40:03'),(8,3,'offer',11,'2025-03-30 16:40:28'),(9,3,'offer',10,'2025-03-30 16:40:30'),(10,3,'post_have',29,'2025-03-30 16:40:32'),(11,3,'post_have',30,'2025-03-30 16:40:33'),(12,3,'post_want',31,'2025-03-30 16:40:33'),(13,3,'post_want',32,'2025-03-30 16:40:34'),(14,3,'post_want',33,'2025-03-30 16:43:28'),(15,3,'post_want',34,'2025-03-30 16:43:29'),(16,3,'post_have',35,'2025-03-30 16:43:30'),(17,3,'post_have',36,'2025-03-30 16:43:30'),(18,3,'offer',16,'2025-03-30 16:43:39'),(19,3,'offer',10,'2025-03-30 16:43:42'),(20,3,'offer',9,'2025-03-30 16:43:44'),(21,3,'offer',1,'2025-03-30 16:47:47'),(22,3,'offer',2,'2025-03-30 16:47:53'),(23,3,'post_want',37,'2025-03-30 16:50:29'),(24,3,'post_want',38,'2025-03-30 16:50:30'),(25,3,'post_want',39,'2025-03-30 16:50:31'),(26,3,'post_have',40,'2025-03-30 16:50:33'),(27,3,'post_have',41,'2025-03-30 16:50:34'),(28,3,'offer',3,'2025-03-30 16:50:36'),(29,3,'post_want',42,'2025-03-30 16:50:45'),(30,3,'post_want',43,'2025-03-30 16:50:46'),(31,3,'post_want',44,'2025-03-30 16:50:47'),(32,1,'offer',30,'2025-03-30 16:51:54'),(33,1,'post_want',45,'2025-03-30 16:51:58'),(34,1,'post_have',46,'2025-03-30 16:52:00'),(35,2,'post_want',47,'2025-03-30 16:52:32'),(36,2,'post_have',48,'2025-03-30 16:52:38'),(37,2,'post_want',49,'2025-03-30 16:52:39'),(38,4,'offer',1,'2025-03-30 17:02:37'),(39,4,'offer',4,'2025-03-30 17:02:41'),(40,4,'offer_success',1,'2025-03-30 17:02:44'),(41,4,'offer_success',1,'2025-03-30 17:02:48'),(42,4,'offer_failure',1,'2025-03-30 17:02:50'),(43,4,'offer_failure',1,'2025-03-30 17:02:51'),(44,4,'offer_failure',1,'2025-03-30 17:02:52'),(45,4,'offer_failure',1,'2025-03-30 17:02:52'),(46,4,'offer_failure',1,'2025-03-30 17:02:53'),(47,4,'offer',1,'2025-03-30 17:06:52'),(48,4,'offer',1,'2025-03-30 17:07:00'),(49,4,'offer',2,'2025-03-30 17:07:15'),(50,4,'offer',2,'2025-03-30 17:07:20'),(51,4,'offer_success',45,'2025-03-30 17:11:52'),(52,4,'offer_success',46,'2025-03-30 17:11:56'),(53,4,'offer_success',4,'2025-03-30 17:12:00'),(54,4,'offer_success',3,'2025-03-30 17:12:03'),(55,4,'offer_failure',48,'2025-03-30 17:12:06'),(56,4,'offer_failure',46,'2025-03-30 17:12:08'),(57,4,'offer_failure',2,'2025-03-30 17:12:10'),(58,4,'post_want',50,'2025-03-30 17:12:16'),(59,4,'post_want',51,'2025-03-30 17:12:18'),(60,4,'post_have',52,'2025-03-30 17:12:20'),(61,5,'offer_failure',11,'2025-03-30 17:14:43'),(62,5,'offer_failure',11,'2025-03-30 17:14:45'),(63,5,'offer_success',11,'2025-03-30 17:14:48'),(64,5,'offer_success',52,'2025-03-30 17:14:53'),(65,5,'offer_success',52,'2025-03-30 17:14:54'),(66,5,'offer_success',52,'2025-03-30 17:14:55'),(67,5,'offer_success',46,'2025-03-30 17:25:33'),(68,5,'offer_success',47,'2025-03-30 17:25:36'),(69,3,'offer_success',47,'2025-03-30 17:25:42'),(70,3,'offer_failure',46,'2025-03-30 17:25:45'),(71,1,'offer_success',5,'2025-03-30 17:46:56'),(72,1,'offer_failure',48,'2025-03-30 17:47:05'),(73,1,'offer_failure',48,'2025-03-30 17:47:06'),(74,1,'offer_failure',48,'2025-03-30 17:47:10'),(75,1,'offer_failure',48,'2025-03-30 17:47:11'),(76,1,'offer_failure',48,'2025-03-30 17:47:12'),(77,1,'offer_failure',48,'2025-03-30 17:47:12'),(78,1,'offer_failure',47,'2025-03-30 17:47:14'),(79,1,'offer_failure',47,'2025-03-30 17:47:14'),(80,3,'offer_success',3,'2025-04-06 22:30:20'),(81,3,'post_want',53,'2025-04-06 22:33:20'),(82,3,'post_have',54,'2025-04-06 22:33:41'),(83,3,'offer_failure',11,'2025-04-06 22:37:15'),(84,1,'offer_success',3,'2025-04-08 16:50:22'),(85,1,'offer_success',25,'2025-04-08 16:50:28'),(86,1,'offer_success',26,'2025-04-08 16:50:31'),(87,3,'offer_success',3,'2025-04-08 16:52:18'),(88,3,'offer_success',4,'2025-04-08 16:52:20'),(89,5,'offer_success',28,'2025-04-08 16:52:26'),(90,5,'offer_success',29,'2025-04-08 16:52:28'),(91,5,'offer_failure',12,'2025-04-08 16:52:35'),(92,5,'offer_failure',11,'2025-04-08 16:52:36'),(93,5,'offer_failure',34,'2025-04-08 16:52:40'),(94,5,'offer_failure',49,'2025-04-08 16:52:42'),(95,5,'offer_failure',13,'2025-04-08 16:52:47'),(96,4,'offer_failure',53,'2025-04-08 16:53:02'),(97,4,'offer_success',49,'2025-04-08 16:54:08'),(98,4,'offer_success',5,'2025-04-08 16:54:10'),(99,4,'offer_success',28,'2025-04-08 16:55:44'),(100,4,'offer_success',29,'2025-04-08 16:55:46'),(101,4,'offer_success',13,'2025-04-08 16:55:56'),(102,4,'offer_success',2,'2025-04-08 16:56:01'),(103,4,'offer_success',1,'2025-04-08 16:56:02'),(104,4,'offer_success',1,'2025-04-08 17:03:01'),(105,4,'offer_success',2,'2025-04-08 17:03:02'),(106,4,'offer_success',45,'2025-04-08 17:03:05'),(107,4,'offer_success',46,'2025-04-08 17:03:07'),(108,4,'offer_success',3,'2025-04-08 17:03:11'),(109,4,'offer_success',4,'2025-04-08 17:03:13'),(110,4,'offer_success',47,'2025-04-08 17:03:15'),(111,4,'post_want',55,'2025-04-08 17:03:23'),(112,4,'post_have',56,'2025-04-08 17:03:28'),(113,4,'post_want',57,'2025-04-08 17:03:30'),(114,4,'post_want',58,'2025-04-08 17:03:31'),(115,4,'offer_success',48,'2025-04-08 17:03:33'),(116,4,'offer_success',48,'2025-04-08 17:03:35'),(117,4,'offer_success',48,'2025-04-08 17:03:43'),(118,4,'offer_failure',29,'2025-04-08 17:03:51'),(119,4,'offer_failure',29,'2025-04-08 17:03:52'),(120,4,'offer_failure',29,'2025-04-08 17:03:54'),(121,4,'offer_failure',29,'2025-04-08 17:03:56'),(122,4,'offer_failure',29,'2025-04-08 17:03:57'),(123,4,'offer_failure',29,'2025-04-08 17:03:58'),(124,4,'offer_failure',29,'2025-04-08 17:03:59'),(125,4,'offer_failure',29,'2025-04-08 17:04:00'),(126,4,'offer_failure',29,'2025-04-08 17:04:01'),(127,4,'offer_failure',29,'2025-04-08 17:04:02'),(128,4,'offer_failure',29,'2025-04-08 17:04:03'),(129,4,'offer_failure',32,'2025-04-08 17:04:05'),(130,4,'offer_failure',32,'2025-04-08 17:04:06'),(131,4,'offer_failure',32,'2025-04-08 17:04:07'),(132,4,'offer_failure',32,'2025-04-08 17:04:08'),(133,4,'offer_failure',32,'2025-04-08 17:04:09'),(134,4,'offer_failure',32,'2025-04-08 17:04:10'),(135,4,'offer_failure',32,'2025-04-08 17:04:11'),(136,4,'offer_failure',32,'2025-04-08 17:04:12'),(137,4,'offer_failure',32,'2025-04-08 17:04:13'),(138,4,'offer_failure',32,'2025-04-08 17:04:13'),(139,4,'offer_failure',32,'2025-04-08 17:04:14'),(140,4,'offer_failure',38,'2025-04-08 17:04:16'),(141,4,'offer_failure',38,'2025-04-08 17:04:17'),(142,4,'offer_failure',38,'2025-04-08 17:04:18'),(143,4,'offer_failure',40,'2025-04-08 17:04:20'),(144,1,'offer_failure',32,'2025-04-08 17:04:26'),(145,1,'offer_failure',32,'2025-04-08 17:04:29'),(146,1,'offer_failure',32,'2025-04-08 17:04:31'),(147,1,'offer_failure',37,'2025-04-08 17:04:37'),(148,1,'offer_failure',42,'2025-04-08 17:04:41'),(149,1,'offer_failure',36,'2025-04-08 17:04:46'),(150,1,'offer_success',3,'2025-04-08 17:47:22'),(151,1,'offer_success',3,'2025-04-08 17:47:32'),(152,1,'offer_success',4,'2025-04-08 17:47:55'),(153,1,'offer_success',3,'2025-04-08 17:55:36'),(154,1,'offer_success',4,'2025-04-08 17:55:44'),(155,3,'offer_success',3,'2025-04-08 17:55:54'),(156,4,'offer_success',1,'2025-04-08 17:56:26'),(157,4,'offer_success',3,'2025-04-08 17:58:54'),(158,4,'offer_success',3,'2025-04-08 17:58:55'),(159,4,'offer_success',3,'2025-04-08 17:58:57'),(160,4,'offer_success',1,'2025-04-08 18:01:46'),(161,4,'offer_success',1,'2025-04-08 18:01:47'),(162,4,'offer_success',1,'2025-04-08 18:01:49'),(163,4,'offer_success',1,'2025-04-08 18:01:51'),(164,4,'offer_success',1,'2025-04-08 18:02:02'),(165,4,'offer_success',1,'2025-04-08 18:03:49'),(166,4,'offer_success',1,'2025-04-08 18:06:14'),(167,4,'offer_success',1,'2025-04-08 18:06:20'),(168,4,'offer_success',1,'2025-04-08 18:08:26'),(169,4,'offer_success',1,'2025-04-08 18:08:29'),(170,4,'offer_success',1,'2025-04-08 18:08:32'),(171,4,'offer_success',1,'2025-04-08 18:08:34'),(172,4,'offer_success',1,'2025-04-08 18:10:43'),(173,4,'offer_success',1,'2025-04-08 18:10:46'),(174,4,'offer_success',1,'2025-04-08 18:10:48'),(175,4,'offer_success',1,'2025-04-08 18:10:54'),(176,4,'offer_success',2,'2025-04-08 18:10:56'),(177,4,'offer_success',3,'2025-04-08 18:11:01'),(178,4,'offer_success',1,'2025-04-08 18:12:37'),(179,4,'offer_success',1,'2025-04-08 18:12:42'),(180,4,'offer_success',2,'2025-04-08 18:12:44'),(181,4,'offer_success',45,'2025-04-08 18:12:47'),(182,4,'offer_success',45,'2025-04-08 18:12:48'),(183,4,'offer_success',4,'2025-04-08 18:12:55'),(184,4,'offer_success',1,'2025-04-08 18:16:01'),(185,4,'offer_success',1,'2025-04-08 18:17:34'),(186,4,'offer_success',1,'2025-04-08 18:17:36'),(187,4,'offer_success',1,'2025-04-08 18:17:37'),(188,4,'offer_success',1,'2025-04-08 18:17:38'),(189,4,'offer_success',1,'2025-04-08 18:17:43'),(190,4,'offer_success',1,'2025-04-08 18:17:47'),(191,4,'offer_success',1,'2025-04-08 18:17:48'),(192,4,'offer_success',1,'2025-04-08 18:17:49'),(193,4,'offer_success',1,'2025-04-08 18:17:49'),(194,4,'offer_success',1,'2025-04-08 18:17:50'),(195,4,'offer_success',1,'2025-04-08 18:17:51'),(196,4,'offer_success',1,'2025-04-08 18:17:52'),(197,4,'offer_success',1,'2025-04-08 18:17:53'),(198,4,'offer_success',1,'2025-04-08 18:17:54'),(199,4,'offer_success',1,'2025-04-08 18:17:55'),(200,4,'offer_success',1,'2025-04-08 18:17:55'),(201,4,'offer_failure',1,'2025-04-08 18:17:58'),(202,4,'offer_success',1,'2025-04-08 18:18:03'),(203,4,'offer_success',1,'2025-04-08 18:18:04'),(204,4,'offer_success',2,'2025-04-08 18:20:40'),(205,4,'offer_success',4,'2025-04-08 18:20:54'),(206,4,'offer_success',4,'2025-04-08 18:20:55'),(207,4,'offer_success',4,'2025-04-08 18:20:59'),(208,4,'offer_success',4,'2025-04-08 18:21:06'),(209,2,'offer_success',1,'2025-04-08 18:21:37'),(210,2,'offer_success',2,'2025-04-08 18:21:42'),(211,2,'offer_success',2,'2025-04-08 18:21:43'),(212,2,'offer_success',2,'2025-04-08 18:21:45'),(213,2,'offer_success',2,'2025-04-08 18:21:46'),(214,2,'offer_failure',45,'2025-04-08 18:21:50'),(215,2,'offer_failure',45,'2025-04-08 18:21:51'),(216,2,'offer_failure',45,'2025-04-08 18:21:52'),(217,5,'offer_failure',1,'2025-04-08 18:21:57'),(218,5,'offer_failure',1,'2025-04-08 18:21:59'),(219,5,'offer_failure',1,'2025-04-08 18:22:01'),(220,5,'offer_failure',1,'2025-04-08 18:22:02'),(221,5,'offer_success',2,'2025-04-08 18:22:04'),(222,1,'offer_success',1,'2025-04-08 18:22:08'),(223,1,'offer_success',1,'2025-04-08 18:22:10');
/*!40000 ALTER TABLE `user_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL,
  `rating` int NOT NULL DEFAULT '0',
  `last_reset` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,64,NULL),(2,71,NULL),(3,76,NULL),(4,95,'2025-04-08 18:18:29'),(5,64,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-08 18:23:48
