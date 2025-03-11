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

CREATE TABLE user_scores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    role ENUM('buyer', 'seller') NOT NULL,
    SR FLOAT,
    DR FLOAT,
    TV FLOAT,
    CA FLOAT,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    UNIQUE (user_id, role)
);