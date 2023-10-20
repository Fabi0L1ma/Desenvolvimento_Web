create database usuarios;

use usuarios;

create table clientes(
	id int not null auto_increment primary key,
    nome varchar(255),
    email varchar(255),
    telefone varchar(255),
    senha varchar(255)
);

select * from clientes;
