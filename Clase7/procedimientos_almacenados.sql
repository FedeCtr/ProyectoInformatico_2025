/* Procedimiento sin parámetros*/
DELIMITER //

CREATE PROCEDURE obtener_personas()
BEGIN
    SELECT * FROM people;
END // 

DELIMITER ;


/*Procedimiento con un parámetro de entrada*/
DELIMITER //

CREATE PROCEDURE obtener_puntajes_por_persona(IN id_p INT)
BEGIN
    SELECT * FROM points WHERE id_person = id_p;
END //
DELIMITER ;