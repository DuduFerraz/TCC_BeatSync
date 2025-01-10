create database beatsync;
use beatsync;

create table usuarios (
	id int auto_increment primary key,
	nome varchar(255) not null,
	email varchar(255) not null,
	data_nasc date not null,
	peso varchar(255) not null,
	altura varchar(255) not null,
	genero varchar(255) not null,
	senha int not null
);
