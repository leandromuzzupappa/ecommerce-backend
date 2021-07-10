CREATE DATABASE IF NOT EXISTS heladitos;

CREATE TABLE IF NOT EXISTS products(
    id INT auto_increment NOT NULL,
    name VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    priceSpecial INT,
    image VARCHAR(255),
    isActive INT NOT NULL,
    stock INT NOT NULL,
    categoriesId INT,
    CONSTRAINT pk_productid PRIMARY KEY(id),
    CONSTRAINT fk_categoryid FOREIGN KEY(categoriesId) REFERENCES categories(id)
)

CREATE TABLE IF NOT EXISTS categories(
    id INT auto_increment NOT NULL UNIQUE,
    name VARCHAR(50) NOT NULL,
    CONSTRAINT pk_categoriesid PRIMARY KEY(id)
)