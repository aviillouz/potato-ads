ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY '1234';
flush privileges;
CREATE DATABASE IF NOT EXISTS potato;
use potato;
create table potato.ads (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	role text,
	description text,
	created_at datetime DEFAULT CURRENT_TIMESTAMP,
	updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
); 