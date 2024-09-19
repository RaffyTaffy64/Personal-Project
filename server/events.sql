CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    event_title VARCHAR,
    price INTEGER,
    start_time VARCHAR,
    end_time VARCHAR
);

INSERT INTO events
VALUES(1, 'Women in Tech Luncheon', 80, 'Friday 1pm', 'Friday 3pm')

INSERT INTO events
VALUES(2, 'Special Guest Speakers', 100, 'Thursday 6pm', 'Thursday 8:30pm')

INSERT INTO events
VALUES(3, 'Recognition Dinner', 50, 'Friday 7pm', 'Friday 9:30pm')