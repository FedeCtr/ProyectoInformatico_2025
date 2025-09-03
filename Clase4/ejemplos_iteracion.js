const user = '{"name": "Ana", "id" : "8", "points": [10, 20, 30, 40], "register": "2025-08-21"}';

// Conversion a objeto
var userObject = null;

function freviver(clave, valor){
    if (clave === "register"){
        return new Date(valor)
    }
    return valor;
}

try{
    userObject = JSON.parse(user, freviver);
}
catch(error){
    console.log("No es un JSON válido");
}

if (userObject != null){
    console.log(userObject);

    // Ejemplo de iteracion sobre las claves
    Object.keys(userObject).forEach(key => {
        if (key != "id"){
            console.log(key ,":", userObject[key]);
        }        
    });

    // Ejemplo de iteracion sobre los elementos
    Object.entries(userObject).forEach(elemento => {
        console.log(elemento);
    });

    // Ejemplo de aplicación: control de tipo de dato
    const tiposEsperados = {
        name: "string",
        id: "number",
        points: "array",
        register: "date"
    };

    let contadorPropiedades = 0;
    let contadorCorrectas = 0;

    // funcion auxiliar para obtener tipo de dato correcto
    // porque typeof no detecta bien date y array
    function obtenerTipo(valor){
        if (Array.isArray(valor)) return "array";
        if (valor instanceof Date) return "date";
        return typeof valor; // cubre los casos: number, string, boolean
    }

    for (let key in tiposEsperados){
        contadorPropiedades++;
        //const tipoReal = typeof userObject[key]; // error: uso de typeof -> reemplazamos por obtenerTipo
        const tipoReal = obtenerTipo(userObject[key]);
        const tipoEsperado = tiposEsperados[key];

        if (tipoReal === tipoEsperado){
            contadorCorrectas++;
        }
        else{
            // La propiedad -- debe ser ---, pero se recibió ---
            console.log(`La propiedad ${key} debe ser ${tipoEsperado}, pero se recibió ${tipoReal}`);
        }
    };

    console.log("Cantidad de propiedades:", contadorPropiedades);
    console.log("Cantidad de propiedades de tipo correcto:", contadorCorrectas);

    // Operador de pertenencia
    if ("age" in userObject){
        console.log(`La edad del usuario es ${userObject.age}`);
    }
    else{
        console.log("El objeto no contiene la clave age");
    }

    // Otra forma
    if (userObject.hasOwnProperty("age")){
        console.log(`La edad del usuario es ${userObject.age}`);
    }
    else{
        console.log("El objeto no contiene la clave age");
    }
}

const arrayObject = [
    {name: "Ana", id: 1, points: [1, 2]},
    {name: "Juan", id: 2, points: [1, 5]},
    {name: "María", id: 3, points: [3, 6]},
    {name: "Pedro", id: 4, points: [2, 4]},
];

// Filtrado
const usuarioIdmenor3 = arrayObject.filter(user => user.id < 3);
console.log("Usuarios con id < 3:", usuarioIdmenor3);

// Mapeo
const mapeado = arrayObject.map(user => {
    return {name_id: user.name + "-" +String(user.id), points: user.points};
});
console.log("Usuarios mapeados:", mapeado);

const mapeoInverso = mapeado.map( user =>{
    let arreglo = user.name_id.split('-');
    return {name: arreglo[0], id: Number(arreglo[1]), points: user.points};
})
console.log("Arreglo recuperado:", mapeoInverso);

const reducido = arrayObject.map( user => {
    const total = user.points.reduce((suma, puntaje) => suma + puntaje, 0);
    /*let suma = 0;
    for (let puntaje in user.points){
        suma = suma + puntaje;
    }*/
   return {name: user.name, totalPoints : total};
});
console.log("Usuarios con puntaje total:", reducido);