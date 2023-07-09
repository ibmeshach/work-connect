-- create a new user for workconnect app
CREATE USER IF NOT EXISTS 'work-connect'@'localhost' IDENTIFIED BY 'work-connect-app';

-- create database
CREATE DATABASE IF NOT EXISTS WorkConnect;

-- grant user privelleges
GRANT ALL PRIVILEGES ON WorkConnect.* TO 'work-connect'@'localhost';
FLUSH PRIVILEGES;
