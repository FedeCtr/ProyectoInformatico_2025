-- Borrar los datos existentes en la tabla
DELETE FROM people;

/* Insertar datos de prueba*/
INSERT INTO people (id, name, surname, dni, email) VALUES
(1,'Ana','García',11111111, 'ana@mail.com'),
(2,'Juan','Perez',22222222, 'juan@mail.com'),
(3,'María','Smith',33333333, 'maria@mail.com'),
(4,'Pedro','Gonzalez',44444444,'pedro@mail.com');

/*Datos de prueba para los puntajes*/
INSERT INTO points (id_person, value) VALUES
(1,1),
(1,2),
(2,1),
(2,5),
(3,3),
(3,6),
(4,2),
(4,4);
