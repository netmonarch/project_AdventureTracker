create table userlist (
userid int not null auto_increment primary key,
username varchar(25) not null unique,
password varchar(255) not null,
email varchar(255) not null
);

create table adventures (
adventureid int not null auto_increment primary key,
adventureauthor int not null,
adventurefile varchar(255) not null
);

create table PC (
PCid int not null auto_increment primary key,
PCauthor int not null,
PCfile varchar(255) not null
);

create table NPC (
NPCid int not null auto_increment primary key,
NPCauthor int not null,
NPCfile varchar(255) not null
);