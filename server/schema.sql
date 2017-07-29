USE chat;

CREATE TABLE messages (
  userId integer FOREIGN KEY NOT NULL,
  messages text, 
  id integer PRIMARY KEY AUTO_INCREMENT,
  roomId integer FOREIGN KEY   
  /* Describe your table here.*/
);

CREATE TABLE users (
  id integer PRIMARY KEY AUTO_INCREMENT,
  username text
);

CREATE TABLE rooms (
  id integer PRIMARY KEY AUTO_INCREMENT,
  roomname text
);

/* Create other tables and define schemas for them here! */

CREATE TABLE RooMess AS (
  id integer PRIMARY KEY AUTO_INCREMENT, 
  messID integer,
  roomID integer  
);


-- SELECT rooms.id, messages.id FROM rooms INNER JOIN messages
--   ON RooMess.roomsId = rooms.id AND 
--   RooMess.messagesId = messages.id,
  -- roomsId integer, 
-- ?  messagesId intege
SELECT rooms.id, messages.id, RooMess.MessageID FROM rooms, messages WHERE messages.roomId = rooms.id;


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

