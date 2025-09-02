/*const texto = '{"name":"Juan","surname":"Perez","dni": 12345678 ,"email":"fede@gmail.com"}';

const objeto = JSON.parse(texto);

console.log(objeto);

// Crear un objeto con hora y fecha actuales
const fecha = new Date();

//toString
console.log("toString: ", fecha.toString());

//toLocaleString
console.log("toLocalestring: ", fecha.toLocaleString());

//toISOString
console.log("toISOString: ", fecha.toISOString());

//toUTCString
console.log("toUTCString: ", fecha.toUTCString());

//toDateString
console.log("toDateString: ", fecha.toDateString());

//ToTimeString
console.log("toTimeString: ", fecha.toTimeString());

const opciones = {
    weekday: "long",
    year: "2-digit",
    month: "long",
    day: "numeric"
}
console.log("Con opciones: ", fecha.toLocaleDateString("es-AR", opciones)); //*/

// const usuario = '{"name" : "Ana", "registro" : "2024-06-18", "id" : 2}';

// var objetoUsuario = null;
// try{
//     objetoUsuario = JSON.parse(usuario, function(clave, valor){
//     if (clave === "registro"){
//         return new Date(valor);
//     }
//     else{
//         return valor;
//     }

// });
// }
// catch(error){
//     console.log("No se puede convertit por: ", error);
// }

// if (objetoUsuario !== null){
//     console.log(objetoUsuario);
// }

const usuario = {
    nombre : "Mauro",
    edad : 25,
    apellido : "Gomez",
    fecha_nacimiento : new Date("1998-04-12"),
}

const textoUsuario = JSON.stringify(usuario, ["nombre", "apellido"]);

console.log(textoUsuario);

console.log("Nombre: ", usuario.nombre);
console.log("Apellido del usuario: ", usuario.apellido);

usuario.edad = 26;
console.log("Nueva edad: ", usuario);

usuario.color = "Azul";
console.log("Usuario nuevo atributo: ", usuario);

delete usuario.edad;
console.log("Usuario sin edad: ", usuario);   