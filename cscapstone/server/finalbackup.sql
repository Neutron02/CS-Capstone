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
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,'Tablet','Used tablet in good condition',300.00,0,1),(2,'Headphones','Noise-canceling over-ear headphones',150.00,0,1),(3,'Gaming Console','Next-gen console for gaming',500.00,1,2),(4,'VR Headset','High-resolution virtual reality headset',600.00,1,2),(5,'Bike','Mountain bike for outdoor adventures',700.00,1,3),(6,'Helmet','Safety-certified helmet',100.00,1,3),(7,'Skateboard','Custom deck with smooth wheels',120.00,0,3),(8,'Backpack','Durable travel backpack',80.00,0,3),(9,'Camera','DSLR camera with 4K recording',900.00,1,4),(10,'Tripod','Lightweight and adjustable tripod',150.00,1,4),(11,'Laptop','Business laptop with SSD storage',1100.00,0,4),(12,'Microphone','USB microphone for recording',200.00,0,4),(13,'Smartwatch','Fitness tracker with heart rate monitoring',250.00,1,5),(14,'Wireless Earbuds','Noise-canceling Bluetooth earbuds',180.00,1,5),(15,'Fitness Tracker','Basic step counter and heart rate monitor',100.00,0,5),(16,'Old Phone','Functional smartphone with minor scratches',200.00,0,5),(25,'Generic Want Item','A generic want item description',100.00,1,3),(26,'Generic Want Item','A generic want item description',100.00,1,3),(27,'Generic Want Item','A generic want item description',100.00,1,3),(28,'Generic Want Item','A generic want item description',100.00,1,3),(29,'Generic Have Item','A generic have item description',200.00,0,3),(30,'Generic Have Item','A generic have item description',200.00,0,3),(31,'Generic Want Item','A generic want item description',100.00,1,3),(32,'Generic Want Item','A generic want item description',100.00,1,3),(33,'Generic Want Item','A generic want item description',100.00,1,3),(34,'Generic Want Item','A generic want item description',100.00,1,3),(35,'Generic Have Item','A generic have item description',200.00,0,3),(36,'Generic Have Item','A generic have item description',200.00,0,3),(37,'Generic Want Item','A generic want item description',100.00,1,3),(38,'Generic Want Item','A generic want item description',100.00,1,3),(39,'Generic Want Item','A generic want item description',100.00,1,3),(40,'Generic Have Item','A generic have item description',200.00,0,3),(41,'Generic Have Item','A generic have item description',200.00,0,3),(42,'Generic Want Item','A generic want item description',100.00,1,3),(43,'Generic Want Item','A generic want item description',100.00,1,3),(44,'Generic Want Item','A generic want item description',100.00,1,3),(45,'Generic Want Item','A generic want item description',100.00,1,1),(46,'Generic Have Item','A generic have item description',200.00,0,1),(47,'Generic Want Item','A generic want item description',100.00,1,2),(48,'Generic Have Item','A generic have item description',200.00,0,2),(49,'Generic Want Item','A generic want item description',100.00,1,2),(50,'Generic Want Item','A generic want item description',100.00,1,4),(51,'Generic Want Item','A generic want item description',100.00,1,4),(52,'Generic Have Item','A generic have item description',200.00,0,4);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_history`
--

LOCK TABLES `user_history` WRITE;
/*!40000 ALTER TABLE `user_history` DISABLE KEYS */;
INSERT INTO `user_history` VALUES (1,3,'post_want',25,'2025-03-30 16:39:51'),(2,3,'post_want',26,'2025-03-30 16:39:52'),(3,3,'post_want',27,'2025-03-30 16:39:52'),(4,3,'post_want',28,'2025-03-30 16:39:53'),(5,3,'offer',2,'2025-03-30 16:39:54'),(6,3,'offer',1,'2025-03-30 16:39:56'),(7,3,'offer',4,'2025-03-30 16:40:03'),(8,3,'offer',11,'2025-03-30 16:40:28'),(9,3,'offer',10,'2025-03-30 16:40:30'),(10,3,'post_have',29,'2025-03-30 16:40:32'),(11,3,'post_have',30,'2025-03-30 16:40:33'),(12,3,'post_want',31,'2025-03-30 16:40:33'),(13,3,'post_want',32,'2025-03-30 16:40:34'),(14,3,'post_want',33,'2025-03-30 16:43:28'),(15,3,'post_want',34,'2025-03-30 16:43:29'),(16,3,'post_have',35,'2025-03-30 16:43:30'),(17,3,'post_have',36,'2025-03-30 16:43:30'),(18,3,'offer',16,'2025-03-30 16:43:39'),(19,3,'offer',10,'2025-03-30 16:43:42'),(20,3,'offer',9,'2025-03-30 16:43:44'),(21,3,'offer',1,'2025-03-30 16:47:47'),(22,3,'offer',2,'2025-03-30 16:47:53'),(23,3,'post_want',37,'2025-03-30 16:50:29'),(24,3,'post_want',38,'2025-03-30 16:50:30'),(25,3,'post_want',39,'2025-03-30 16:50:31'),(26,3,'post_have',40,'2025-03-30 16:50:33'),(27,3,'post_have',41,'2025-03-30 16:50:34'),(28,3,'offer',3,'2025-03-30 16:50:36'),(29,3,'post_want',42,'2025-03-30 16:50:45'),(30,3,'post_want',43,'2025-03-30 16:50:46'),(31,3,'post_want',44,'2025-03-30 16:50:47'),(32,1,'offer',30,'2025-03-30 16:51:54'),(33,1,'post_want',45,'2025-03-30 16:51:58'),(34,1,'post_have',46,'2025-03-30 16:52:00'),(35,2,'post_want',47,'2025-03-30 16:52:32'),(36,2,'post_have',48,'2025-03-30 16:52:38'),(37,2,'post_want',49,'2025-03-30 16:52:39'),(38,4,'offer',1,'2025-03-30 17:02:37'),(39,4,'offer',4,'2025-03-30 17:02:41'),(40,4,'offer_success',1,'2025-03-30 17:02:44'),(41,4,'offer_success',1,'2025-03-30 17:02:48'),(42,4,'offer_failure',1,'2025-03-30 17:02:50'),(43,4,'offer_failure',1,'2025-03-30 17:02:51'),(44,4,'offer_failure',1,'2025-03-30 17:02:52'),(45,4,'offer_failure',1,'2025-03-30 17:02:52'),(46,4,'offer_failure',1,'2025-03-30 17:02:53'),(47,4,'offer',1,'2025-03-30 17:06:52'),(48,4,'offer',1,'2025-03-30 17:07:00'),(49,4,'offer',2,'2025-03-30 17:07:15'),(50,4,'offer',2,'2025-03-30 17:07:20'),(51,4,'offer_success',45,'2025-03-30 17:11:52'),(52,4,'offer_success',46,'2025-03-30 17:11:56'),(53,4,'offer_success',4,'2025-03-30 17:12:00'),(54,4,'offer_success',3,'2025-03-30 17:12:03'),(55,4,'offer_failure',48,'2025-03-30 17:12:06'),(56,4,'offer_failure',46,'2025-03-30 17:12:08'),(57,4,'offer_failure',2,'2025-03-30 17:12:10'),(58,4,'post_want',50,'2025-03-30 17:12:16'),(59,4,'post_want',51,'2025-03-30 17:12:18'),(60,4,'post_have',52,'2025-03-30 17:12:20'),(61,5,'offer_failure',11,'2025-03-30 17:14:43'),(62,5,'offer_failure',11,'2025-03-30 17:14:45'),(63,5,'offer_success',11,'2025-03-30 17:14:48'),(64,5,'offer_success',52,'2025-03-30 17:14:53'),(65,5,'offer_success',52,'2025-03-30 17:14:54'),(66,5,'offer_success',52,'2025-03-30 17:14:55');
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
INSERT INTO `users` VALUES (1,87,NULL),(2,71,NULL),(3,87,NULL),(4,68,NULL),(5,78,NULL);
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

-- Dump completed on 2025-03-30 17:17:18
