-- Users Table
CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50),
    password VARCHAR(50),
    email VARCHAR(100),
    user_level_id INT,
    created_at DATETIME
);

-- MediaItems Table
CREATE TABLE MediaItems (
    media_id INT PRIMARY KEY AUTO_INCREMENT,
    filename VARCHAR(100),
    filesize INT,
    title VARCHAR(100),
    description TEXT,
    user_id INT,
    media_type VARCHAR(50),
    created_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Comments Table
CREATE TABLE Comments (
    comment_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    media_id INT,
    comment TEXT,
    created_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (media_id) REFERENCES MediaItems(media_id)
);

-- Likes Table
CREATE TABLE Likes (
    like_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    media_id INT,
    created_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (media_id) REFERENCES MediaItems(media_id)
);

-- Insert Example Data into Users
INSERT INTO Users (username, password, email, user_level_id, created_at) VALUES
('VCHar', 'secret123', 'vchar@example.com', 1, '2020-09-12T06:56:41.000Z'),
('Donatello', 'secret234', 'dona@example.com', 1, '2021-12-11T06:00:41.000Z'),
('Anon5468', 'secret345', 'x58df@example.com', 3, '2023-04-02T05:56:41.000Z');

-- Insert Example Data into MediaItems
INSERT INTO MediaItems (filename, filesize, title, description, user_id, media_type, created_at) VALUES
('ffd8.jpg', 887574, 'Favorite drink', NULL, 305, 'image/jpeg', '2023-10-16T19:00:09.000Z'),
('dbbd.jpg', 60703, 'Miika', 'My Photo', 305, 'image/jpeg', '2023-10-13T12:14:26.000Z'),
('2f9b.jpg', 30635, 'Aksux and Jane', 'friends', 260, 'image/jpeg', '2023-10-12T20:03:08.000Z');

-- Insert Example Data into Comments
INSERT INTO Comments (user_id, media_id, comment, created_at) VALUES
(305, 9632, 'Great photo!', NOW()),
(260, 9626, 'Lovely!', NOW());

-- Insert Example Data into Likes
INSERT INTO Likes (user_id, media_id, created_at) VALUES
(305, 9625, NOW()),
(260, 9632, NOW());

-- Example Query: Find all comments on a specific media item
SELECT * FROM Comments WHERE media_id = 9632;

-- Example Update: Update a user's comment
UPDATE Comments SET comment = 'Awesome photo!' WHERE comment_id = 1;

-- Example Delete: Remove a user's like from a media item
DELETE FROM Likes WHERE user_id = 305 AND media_id = 9632;
