




CREATE TABLE users 
(
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
);

CREATE TABLE tasks
(
    id SERIAL PRIMARY KEY,
    user
)