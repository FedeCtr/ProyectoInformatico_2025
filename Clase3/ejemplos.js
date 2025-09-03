/*
const texto = '{"name" : "Carlos", "age": 40, "country": "AR"}';

const objeto = JSON.parse(texto);

console.log(objeto);

// Crear un objeto con fecha y hora actuales
const fecha = new Date();

// toString
console.log("toString: ", fecha.toString());

// toLocaleString
console.log("toLocaleString: ", fecha.toLocaleString());

// toISOString
console.log("toISOString: ", fecha.toISOString());

// toUTCString
console.log("toUTCString: ", fecha.toUTCString());

// toDateString
console.log("toDateString: ", fecha.toDateString());

// toTimeString
console.log("toTimeString: ", fecha.toTimeString());

const opciones = {
    weekday : "long",
    year: "2-digit"
}

console.log("Con opciones: ", fecha.toLocaleString('es-AR', opciones));
*/

// const usuario = '{ "name" : "Ana", "registro" : "2024-06-18", "id" : 2 }';


// var objetoUsuario = null;
// try{
//     objetoUsuario = JSON.parse(usuario, function(clave, valor){
//         if (clave === "registro"){
//             return new Date(valor)
//         }
//         else{
//             return valor
//         }
//     });
// }
// catch(error){
//     console.log("No se puede convertir por: " , error);
// }

// if (objetoUsuario!= null){
//     console.log(objetoUsuario);
// }

const usuario = {
    nombre: "Mario",
    edad: 25,
    apellido: "Perez",
    fecha_nacimiento: new Date("2000-01-01")
}

const textoUsuario = JSON.stringify(usuario, ["nombre", "apellido"]);

console.log(textoUsuario);

console.log("Nombre del usuario:", usuario.nombre);
console.log("Apellido del usuario:", usuario["apellido"]);

usuario.edad = 31;
console.log("Nueva edad: ", usuario);

usuario.color = "Verde";
console.log("usuario con nueva clave:", usuario);

delete usuario.edad;
console.log("Usuario sin edad:", usuario);