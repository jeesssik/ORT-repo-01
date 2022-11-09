/*function esMayorDeEdad (edad) {
    return edad >= 18;
}

let validarEdad = function (edad) {
    return edad >= 18;

}

*/

/*let validarEdad = edad => edad >= 18;



holaMundo();*/

/*
let holaMundo = () => console.log("hola mundo");
let alRecreo = () => console.log("vamos al recreo");

let decirDiezVeces = (queDecir) => {
    for (let i = 0; i < 10; i++) {
        queDecir();
    }
}

decirDiezVeces(holaMundo);
decirDiezVeces(alRecreo);*/




/*

var unaVariable = 1;
let edad = 20;
if (edad > 18) {
    var unaVariable = 2;
    alert(unaVariable);

}

alert(unaVariable);
*/
/*
let cantidadDeCucharadas = 5;

let cocinar = (ingrediente1, ingrediente2) => {
    let cantidadDeCucharadas = 3;
    if (ingrediente1 == "manteca" || ingrediente2 == "manteca") {
        alert(cantidadDeCucharadas);
        return ingrediente1 + ingrediente2;
    
    } else {
        return "no puedo cocinar sin manteca";
    }
}

console.log(cocinar("manteca", "arroz"));
alert(cantidadDeCucharadas);  

*/

/*var unNumero = 1;

const unStringLargo = `${unNumero}Hola
asdaposd

asdjaslkdj

akñlsdjlkasd
jalksdjlkasd`;


console.log(unStringLargo);*/


/*let unaVariable = document.getElementById("titulo");
let edad = 21;

if (edad > 18) {
    unaVariable.innerText = "Sos mayor de edad";
    unaVariable.style.color = "green";
    unaVariable.style.textTransform = "uppercase";
} else {
    unaVariable.innerText = "Sos menor de edad";
    unaVariable.style.color = "red";
}*/

/*function validarEdad() {
    let edadInput = document.getElementById("edad");
    let mensaje = document.getElementById("titulo");
    let laEdad = edadInput.value;

    if (laEdad >= 18) {
        mensaje.innerText = "Sos mayor de edad";
        edadInput.style.color = "green";
    } else {
        mensaje.innerText = "Sos menor de edad";
        edadInput.style.color = "red";
    }
    
}*/

let amigos = ["juan", "fabrizio", "tito"];
let unArray = [1, true, "un texto", [3,4,5], amigos];

console.log(unArray[2]);
console.log(unArray[3][2]);
console.log(unArray[4][1]);
console.log(unArray.length);

unArray.push("fede");

console.log(unArray.length);

unArray.pop();

console.log(unArray.length);

unArray.unshift("Cata");

console.log(unArray.length);

unArray.shift("Cata");

console.log(unArray.length);


for (let i = 0; i < unArray.length; i++) {
    console.log(unArray[i]);
}