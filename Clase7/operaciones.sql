SELECT people.name, points.value
FROM people
JOIN points
ON people.id = points.id_person;

SELECT people.name AS Nombre, points.value AS Puntaje
FROM people
JOIN points
ON people.id = points.id_person;

/* Crear tablas a partir de JOIN */
CREATE TABLE people_points AS
SELECT people.name, people.id, GROUP_CONCAT(points.value) AS points_values
FROM people
JOIN points
ON people.id = points.id_person
GROUP BY people.id;


CREATE TABLE people_max_min AS
SELECT people.name, MAX(points.value) AS points_max, MIN(points.value) AS points_min
FROM people
JOIN points
ON people.id = points.id_person
GROUP BY people.id;

