
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


// Tiempo = segundos

const songs = [
    {   id:1 , name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"Rock", tiempo: 228   },
    {   id:2 , name: "En cuatro", autor: "Amigos Invisibles", genero:"Rock", tiempo: 240   },
    {   id:3 , name: "Toxic", autor: "Britney Spears", genero:"Pop", tiempo: 190      },
    {   id:4 , name: "The Feels", autor: "TWICE", genero:"KPOP", tiempo: 190      },
    {   id:5 , name: "Patiently Waiting (ft Eminem)", autor: "50 Cent", genero:"Rap", tiempo: 270  },
    {   id:6 , name: "Sunny Afternoon", autor: "Drake Bell", genero:"Rock", tiempo: 198     },
    {   id:7 , name: "Till I Collapse", autor: "Eminem", genero:"Rap", tiempo: 298    },
    {   id:8 , name: "Bad Habits", autor: "Ed Sheeran", genero:"Pop", tiempo: 234  },
    {   id:9 , name: "Lie", autor: "BTS", genero:"KPOP", tiempo: 144   },
    {   id:10 , name: "I Will Survive", autor: "Hermes House Band", genero:"Pop", tiempo: 318   },
    {   id:11 , name: "Still D.R.E. (ft. Snoop Dog)", autor: "Dr. Dre", genero:"Rap", tiempo: 201  },
    {   id:12 , name: "Love Again", autor: "Dua Lipa", genero:"Pop", tiempo: 168    },
    {   id:13 , name: "Come With Me Now", autor: "Kongos", genero:"Rock", tiempo: 204   },
    {   id:14 , name: "Bellacoso", autor: "Residente", genero:"Rap", tiempo: 246    },
    {   id:15 , name: "Close Up On Your Lips", autor: "Kay Vs the Moon", genero:"Rock", tiempo: 144    },
    {   id:16 , name: "Torero", autor: "Chayanne", genero:"Pop", tiempo: 225     },
    {   id:17 , name: "How u like that", autor: "BLACKPINK", genero:"KPOP", tiempo: 246     },
    {   id:18 , name: "Energetic", autor: "Wanna One", genero:"KPOP", tiempo: 222    },
    {   id:19 , name: "Ko Ko Bop", autor: "EXO", genero:"KPOP", tiempo: 288    },
    {   id:20 , name: "The Bidding", autor: "Tally Hall", genero:"Rock", tiempo: 192   },
]

/* {   id:21 , name: "Crystal Dolphin", autor: "Engelwood", genero:"Pop", tiempo: 216    },
{   id:22 , name: "Enemy", autor: "Imagine Dragons", genero:"Pop", tiempo: 288    },
{   id:23 , name: "Everyday Normal Guy 2", autor: "Jon Lajoie", genero:"Rap", tiempo: 220    },
{   id:24 , name: "Shekebon!", autor: "Vickeblanka", genero:"KPOP", tiempo: 186    },
{   id:25 , name: "Gangsta Paradise", autor: "Coolio", genero:"Rap", tiempo: 252    },
{   id:26 , name: "edemame", autor: "bbno$", genero:"Rap", tiempo: 177    },
{   id:27 , name: "Oh My God", autor: "Guns N' Roses", genero:"Rock", tiempo: 324   },
{   id:28 , name: "Flux", autor: "Poppy", genero:"Rock", tiempo: 204    },
{   id:29 , name: "Bezos 1", autor: "Bo Burnham", genero:"Pop", tiempo: 107    },
{   id:30 , name: "Kill This Love", autor: "BLACKPINK", genero:"salsa", tiempo: 246    }, */

const finalPlaylist = [];

const songMenu = [];
let printedMenu;
function printingMenu () {
    songMenu.splice(0, songMenu.length);
    for (const item of songs ) {
        let selector = 0
        // newArray recolecta los valores de los objetos en el array
        const newArray = [item.id, item.name, item.autor, item.genero, item.tiempo ];
        
        // Luego uso .push para unirlos todos en una string dentro de menu, los valores de los objetos son recolectados y guardados como strings.
        songMenu.push(item.id + " - " + item.name + " by " + item.autor + " - Genero: " + item.genero + " Duración: " + item.tiempo);
        
    } 
    // Luego los strings de arriba, se unen, separados por un \n y ahora es mucho mas facil presentarlos de una manera facil y visual al usuario. 
    printedMenu = songMenu.join("\n");
    console.log(printedMenu)
}
printingMenu();
// Falta cambio de tiempo a formato de 00:00


// FLUJO DEL USUARIO

alert("Bienvenido a radio CH-Jack, la unica radio enfocada 100% en musica para castores.");
alert("Por favor ayudanos a crear una playlist ideal para nuestros castorescuchas. \n" + "Esta es nuestra playlist actual: \n\n" + printedMenu)

let userGenre = prompt("A los castores no les gusta que mezclemos generos, podrías seleccionar un genero para ellos?\n\n" + "Ej. Rock, Pop, KPOP, Rap");
// Falta validación de input

const songFilter = songs.filter(   (el) => el.genero.includes(userGenre));
console.log(songFilter);

let userTimeAdd = prompt("Los castores detestan cuando una canción termina y empieza la siguiente inmediatamente.\n\n ¿Cuantos segundos deberiamos esperar entre canción y canción?");

const timeAddition = songFilter.map(  (el) => el.tiempo + parseInt(userTimeAdd));
console.log(timeAddition);