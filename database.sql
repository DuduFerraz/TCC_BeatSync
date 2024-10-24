CREATE DATABASE BeatSync;
USE BeatSync;

CREATE TABLE Usuarios (
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	data_nasc DATE NOT NULL,
	genero VARCHAR(255) NOT NULL,
	senha INT NOT NULL
);
CREATE TABLE Exercicio (
	id INT AUTO_INCREMENT PRIMARY KEY,
	exercicios VARCHAR(255) NOT NULL,
	series INT NOT NULL,
	repetição INT NOT NULL,
	tipoexercicio INT NOT NULL,
	FOREIGN KEY (tipoexercicio) REFERENCES TipoExercicio(id)
);
CREATE TABLE TipoExercicio (
	Id INT AUTO_INCREMENT PRIMARY KEY,
	tipo ENUM('musculacao','cardio','funcional','crossfit') NOT NULL,
    id_exercicio INT,
	FOREIGN KEY (id_exercicio) REFERENCES Exercicio(id)
);
CREATE TABLE Plano (
	id INT AUTO_INCREMENT PRIMARY KEY,
	idusuario INT NOT NULL,
	idexercicio INT NOT NULL,
	idtipoExercicio INT NOT NULL,
	FOREIGN KEY (idusuario) REFERENCES Usuarios(id),
	FOREIGN KEY (idexercicio) REFERENCES Exercicio(id),
	FOREIGN KEY (idtipoExercicio) REFERENCES TipoExercicio(id)
);
