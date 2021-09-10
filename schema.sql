DROP DATABASE IF EXISTS homes;
CREATE DATABASE homes;

USE homes;

CREATE TABLE homes (
  id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  url VARCHAR(255),
  price INT,
  beds DECIMAL,
  baths DECIMAL,
  square_feet INT,
  lot_size INTEGER,
  year_built INT,
  $_square_feet INT,
  HOA INT,
  sale_type VARCHAR(255),
  sold_date VARCHAR(50),
  days_on_market TINYINT,
  status VARCHAR(50),
  open_house_start VARCHAR(50),
  open_house_end VARCHAR(50),
  source VARCHAR(50),
  mls VARCHAR(50),
  favorite ENUM ('Y', 'N'),
  interested ENUM ('Y', 'N'),
  property_types VARCHAR(50)
);

CREATE TABLE addresses (
  id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  address VARCHAR(255),
  city VARCHAR(50),
  state VARCHAR(10),
  zip INT DEFAULT NULL,
  location VARCHAR(50),
  latitude VARCHAR(50),
  longitude VARCHAR(50)
);

CREATE TABLE addresses_homes (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  id_addresses INT NOT NULL,
  id_homes INT NOT NULL,
  FOREIGN KEY (id_addresses) REFERENCES addresses(id),
  FOREIGN KEY (id_homes) REFERENCES homes(id)
)
