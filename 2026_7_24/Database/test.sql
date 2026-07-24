CREATE TABLE member (
  member_id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL,
  age INTEGER 
--   money INTEGER NOT NULL,
--   gender TEXT,
--   job TEXT,
--   address TEXT NOT NULL
);



INSERT INTO member (username, age) VALUES ('조니', 40);
INSERT INTO member (username, age) VALUES ('실비', 20);
INSERT INTO member (username) VALUES ('나나');

UPDATE member
  SET username = '민호', age = 10
  WHERE member_id = 1;
