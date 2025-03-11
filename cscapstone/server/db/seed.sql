INSERT INTO users (user_id, rating) VALUES
('0001', 5.00),
('0002', 4.00),
('0003', 3.00),
('0004', 5.00),
('0005', 4.00);

INSERT INTO items (title, description, price, isWant, user_id) VALUES
('Tablet', 'Used tablet in good condition', 300.00, FALSE, '0001'),
('Headphones', 'Noise-canceling over-ear headphones', 150.00, FALSE, '0001'),
('Gaming Console', 'Next-gen console for gaming', 500.00, TRUE, '0002'),
('VR Headset', 'High-resolution virtual reality headset', 600.00, TRUE, '0002'),
('Bike', 'Mountain bike for outdoor adventures', 700.00, TRUE, '0003'),
('Helmet', 'Safety-certified helmet', 100.00, TRUE, '0003'),
('Skateboard', 'Custom deck with smooth wheels', 120.00, FALSE, '0003'),
('Backpack', 'Durable travel backpack', 80.00, FALSE, '0003'),
('Camera', 'DSLR camera with 4K recording', 900.00, TRUE, '0004'),
('Tripod', 'Lightweight and adjustable tripod', 150.00, TRUE, '0004'),
('Laptop', 'Business laptop with SSD storage', 1100.00, FALSE, '0004'),
('Microphone', 'USB microphone for recording', 200.00, FALSE, '0004'),
('Smartwatch', 'Fitness tracker with heart rate monitoring', 250.00, TRUE, '0005'),
('Wireless Earbuds', 'Noise-canceling Bluetooth earbuds', 180.00, TRUE, '0005'),
('Fitness Tracker', 'Basic step counter and heart rate monitor', 100.00, FALSE, '0005'),
('Old Phone', 'Functional smartphone with minor scratches', 200.00, FALSE, '0005');

INSERT INTO user_scores (user_id, role, SR, DR, TV, CA) VALUES
('0001', buyer, .32, .53, .33, .12),
('0001', seller, .42, .83, .13, .22),
('0002', buyer, .02, .93, .53, .42),
('0002', seller, .56, .33, .24, .66);