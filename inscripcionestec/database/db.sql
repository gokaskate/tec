CREATE DATABASE tec;

USE tec;

CREATE TABLE inscrip(
    id INT(2) NOT NULL auto_increment,
    documento varchar(10) NOT NULL,
    nombre varchar(40) NOT NULL,
    email varchar(40) NOT NULL,
    curso varchar(5) NOT NULL,
    jornada varchar(15) NOT NULL,
    centro varchar (40) NOT NULL
);

ALTER TABLE inscrip
    ADD PRIMARY KEY (id);