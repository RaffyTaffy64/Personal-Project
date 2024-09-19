CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(15),
    last_name VARCHAR(15),
    password VARCHAR,
    email VARCHAR,
    address VARCHAR,
    birthdate DATE
);

INSERT INTO users
VALUES(1, 'Sean', 'Fagan', 'borimir', 'seanf@gmail.com', '1632 North Appletree Lane, Lehi UT 84563', '05/13/1999');

INSERT INTO users
VALUES(2, 'Rafael', 'Raeder', 'raffytaffy', 'rraeder@gmail.com', '1589 Grizzly Way, Elk Ridge UT 84651', '11/11/1982');

INSERT INTO users
VALUES(3, 'Chelsea', 'Allen', 'tr4v3l', 'byuchels@gmail.com', '583 Indina Hills Road, Provo UT 84661', '10/31/1983');