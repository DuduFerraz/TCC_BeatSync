CREATE DATABASE BeatSync;

USE BeatSync;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(35) NOT NULL,
    email VARCHAR(35) NOT NULL,
    dataNasc DATE,
    genero VARCHAR(35) NOT NULL,
    senha VARCHAR(20) NOT NULL
);

CREATE TABLE treino (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo ENUM('PeitoTriceps','CostasBiceps','OmbroAbdomen','Perna','Cardio',) NOT NULL
);

