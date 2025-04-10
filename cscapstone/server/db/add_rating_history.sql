CREATE TABLE rating_history (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  rating INT NOT NULL,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);