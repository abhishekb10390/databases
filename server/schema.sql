-- CREATE DATABASE chat;
-- USE chat;

-- CREATE TABLE messages (
--   id integer PRIMARY KEY AUTO_INCREMENT,
--   userId integer NOT NULL,
--   messages text, 
--   roomId integer NOT NULL, 
--   FOREIGN KEY (userId) REFERENCES users(id),  
--   FOREIGN KEY (roomId) REFERENCES rooms(id)  
-- );

-- CREATE TABLE users (
--   id integer PRIMARY KEY AUTO_INCREMENT,
--   username text
-- );

-- CREATE TABLE rooms (
--   id integer PRIMARY KEY AUTO_INCREMENT,
--   roomname text
-- );

-- /* Create other tables and define schemas for them here! */

-- CREATE TABLE RooMess AS (
--   id integer PRIMARY KEY AUTO_INCREMENT, 
--   messID integer,
--   roomID integer  
-- );


-- -- SELECT rooms.id, messages.id FROM rooms INNER JOIN messages
-- --   ON RooMess.roomsId = rooms.id AND 
-- --   RooMess.messagesId = messages.id,
--   -- roomsId integer, 
-- -- ?  messagesId intege
-- SELECT rooms.id, messages.id, RooMess.MessageID FROM rooms, messages WHERE messages.roomId = rooms.id;


-- /*  Execute this file from the command line by typing:
--  *    mysql -u root < server/schema.sql
--  *  to create the database and the tables.*/

-- gary , room A, 'hi' ;

-- INSERT INTO rooms (roomname) VALUES ('A');
-- INSERT INTO users (username) VALUES ('gary');
-- INSERT INTO messages (userId messages roomId) VALUES (1 'hi' 1);

CREATE TABLE messages (
  id integer NOT NULL AUTO_INCREMENT,
  userid integer NOT NULL,
  text varchar(200) NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (id)
);
CREATE TABLE users (
  id integer NOT NULL AUTO_INCREMENT,
  username varchar(40) NOT NULL,
  PRIMARY KEY (id)
);
