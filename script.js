
// Variables, funciones (funciones flecha), funciones en conjunción con arrays, objetos, objetos dentro de arrays, metodos de busqueda y filtrado en arrays.


// Crea una playlist

// Lista de canciones, array de objetos titulos, autores, album, tiempo

// Agrega nuevas canciones

// Total de tiempo de reproducción

// Metodos de busqueda y filtrado: 

/* 
function porCadaUno (arr, fun) {
    for (const el of arr) {
        fn(el);
    }
}
*/

// ### find() - retorna el primer elemento de un array que cumpla con la condición
// Encuentra una canción por generos

// Filtro por genero
// ### filter() -  recibe (al igual que find() ), una funcion comparadora por parametro, y retorna un nuevo array con todos los elementos que cumplan esa condicion. Si no hay coincidencias retornará un array vacío.

// Para la nueva playlist
// ### map() - El método crea un nuevo array con todos los elementos del original transformados según las operaciones de la función enviada por paramento.
// Tiene la misma cantidad de elementos pero almacenados son el return de la función.

// Para el total de tiempo
// reduce () - Nos permite obtener un unico valor tras iterar sorbre el array. Funciona como un metodo que resume el array a un único valor de retorno. 
// A diferencia de los metodos anteriores, método "reduce" recibe dos parametros:
    // El primero es la funcion que ordena qué queremos resumir del array. Recube un parametro que funciona como acumulador y el elemento del array que iteramos. 
    // El segundo es el valor inicial del acumulador.
    // numeros.reduce(XX, XX) -> numeros.reduce(XX, 0) -> 👇🏼

// Agregar un constructor de canciones que lo agregue al array

// funcion de conversión de decimales a tiempo
        // 60 = 1


// Bienvenido! A radio CH Jack!

const songs = [
    {ID: 1, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"Rock", tiempo: 1.5 },
    {ID: 2, name: "En cuatro", autor: "Amigos Invisibles", genero:"Rock", tiempo: 1.5 },
    {ID: 3, name: "Toxic", autor: "Britney Spears", genero:"Pop", tiempo: 1.5 },
    {ID: 4, name: "The Feels", autor: "TWICE", genero:"KPOP", tiempo: 3.3 },
    {ID: 5, name: "Patiently Waiting (ft Eminem)", autor: "50 Cent", genero:"Rap", tiempo: 4.5 },
    {ID: 6, name: "Sunny Afternoon", autor: "Drake Bell", genero:"Rock", tiempo: 3.3 },
    {ID: 7, name: "Till I Collapse", autor: "Eminem", genero:"Rap", tiempo: 1.5 },
    {ID: 8, name: "Bad Habits", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 9, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 10, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 11, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 12, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 13, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 14, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 15, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 16, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 17, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 18, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 19, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 20, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 21, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 22, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 23, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 24, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 25, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 26, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 27, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 28, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 29, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },
    {ID: 30, name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"salsa", tiempo: 1.5 },

]