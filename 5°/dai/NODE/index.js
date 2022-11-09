console.log("primera aplicacion")

// INSTALANDO MODULOS EXTERNOS

//npm i cowsay

/*
const cowsay = require("cowsay");
 
console.log(cowsay.say({
    text : "HOLA",
    e : "oO",
    T : "U "
}));

*/


// ARMANDO MODULOS INTERNOS

// importamos nuestro módulo y lo guardamos en una variable
const obtenerPrecio = require('./calcular');
                     
// lo que importamos es la función que exportamos en el anterior archivo
// la ejecutamos y obtenemos el precio final con IVA
// mostrando en la consola el precio
console.log(obtenerPrecio(200));


