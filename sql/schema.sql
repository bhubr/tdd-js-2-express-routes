CREATE TABLE IF NOT EXISTS bookmark(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR(128),
  label VARCHAR(128)
);