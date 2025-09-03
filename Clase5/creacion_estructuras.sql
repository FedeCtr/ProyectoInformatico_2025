-- Creación de la base de datos
CREATE DATABASE IF NOT EXISTS ejemplo1
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Indicamos que se va a usar esa base de datos
USE ejemplo1;

-- Crear una tabla
CREATE TABLE IF NOT EXISTS people(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    dni INT(8) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE
);