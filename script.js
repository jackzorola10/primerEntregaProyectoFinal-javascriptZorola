
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

const finalPlaylist = [];

const songMenu = [];
let printedMenu;
function printingMenu (valor) {
    songMenu.splice(0, songMenu.length);
    for (const item of valor ) {
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
printingMenu(songs);
// Falta cambio de tiempo a formato de 00:00


// FLUJO DEL USUARIO

alert("Bienvenido a radio CH-Jack, la unica radio enfocada 100% en musica para castores.");
alert("Por favor ayudanos a crear una playlist ideal para nuestros castorescuchas. \n" + "Esta es nuestra playlist actual: \n\n" + printedMenu)

let userGenre = prompt("A los castores no les gusta que mezclemos generos, podrías seleccionar un genero para ellos?\n\n" + "Ej. Rock, Pop, KPOP, Rap");
// Falta validación de input

let songFilter = songs.filter(   (el) => el.genero.includes(userGenre));
console.log(songFilter);

let userTimeAdd = prompt("Los castores detestan cuando una canción termina y empieza la siguiente inmediatamente.\n\n ¿Cuantos segundos deberiamos esperar entre canción y canción?");


songFilter = songFilter.map( (el) => {
    return {
        id: (el.id*0) + i,
        name: el.name,
        autor: el.autor,
        genero: el.genero,
        tiempo: el.tiempo + parseInt(userTimeAdd),
    }
} );
console.log(songFilter);
// Si no agregas los demas valores los borra a la shingada

printingMenu(songFilter);
alert("¡Excelente! por ahora contamos con esta playlist:\n\n" + printedMenu);
