CREATE TABLE users (
  user_id INT PRIMARY KEY,
  rating DECIMAL(3, 2) DEFAULT 0.00
);

CREATE TABLE items (
  item_id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  isWant BOOLEAN DEFAULT FALSE,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE user_history (
  history_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  action_type ENUM('offer', 'post_want', 'post_have'),
  item_id INT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (item_id) REFERENCES items(item_id)
);

ALTER TABLE users MODIFY rating INT NOT NULL DEFAULT 0;
ALTER TABLE user_history MODIFY action_type ENUM('offer', 'offer_success', 'offer_failure', 'post_want', 'post_have');