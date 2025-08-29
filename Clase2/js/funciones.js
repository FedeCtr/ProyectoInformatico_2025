function crearPersona(){
    console.log("Funcion crearPersona");  
    
    // Recuperar datos del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;
    const email = document.getElementById("email").value;

    // Lógica de control y validación
    if (dni === ""){
        alert("El dni no puede estar vacío");
        return
    }


    // Crear objeto con la estructura establecida para comunicarse con el servidor
    const datos = {
        name : nombre,
        surname : apellido,
        dni: dni,
        email: email
    }

    console.log(datos);

    // Comunicación con el servidor...
}