CREATE TABLE IF NOT EXISTS user_history (
  history_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  action_type ENUM('offer', 'post_want', 'post_have'),
  item_id INT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (item_id) REFERENCES items(item_id)
);