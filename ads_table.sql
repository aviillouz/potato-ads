ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY '1234';
flush privileges;
create database potato;
create table potato.ads (
	id int,
	role text,
	location text,
	description text,
	created_at datetime,
	updated_at datetime
); 