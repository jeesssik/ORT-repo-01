let auto = {
  patente: 'AA 123 YZ',
  anio: 2020,
  color: 'azul',
  esUsado: true,
  dueniosAnteriores: [
    'Zommer',
    'Flecha',
    'Cata',
    'Yael',
    "Paste",
  ],
  cantidadDePuertas: 5,
  kilometros: 40000,
};

let moto = {
  patente: 'AF 123 YZ',
  anio: 2022,
  color: 'verde',
  esUsado: true,
  dueniosAnteriores: [
    {
      nombre: "Colo",
      edad: 17,
      tieneRegistro: false,
    }
  ],
  cantidadDePuertas: 0,
  kilometros: 1000,
};


console.log(`La patente es: ${auto.patente}`);
console.log(`La cantidad de km es: ${auto.kilometros}`);
console.log(`La cantidad de km es: ${moto.kilometros}`);
console.log(`El nombre del primer dueño de la moto es: ${moto.dueniosAnteriores[0].nombre}`);

moto.dueniosAnteriores.push({
  nombre: 'Tito',
  edad: 17,
});

console.log(moto.dueniosAnteriores);


moto.dueniosAnteriores[1].edad = 18;

console.log(moto.dueniosAnteriores);

let otraMoto = moto;

let otraMotoDistinta = Object.assign({}, moto);

otraMoto.anio = 1990;

console.log(moto);
console.log(otraMotoDistinta);



let listaDeElementos = document.getElementById("lista");

let unElemento = document.createElement("li");
unElemento.innerText = "Tijera";

listaDeElementos.appendChild(unElemento);


// Listo todos los dueños del auto


function agregarDuenio(){
  let nombreDuenio =document.getElementById('agregar').value;
  auto.dueniosAnteriores.push(nombreDuenio);
  mostrarLista();
  document.getElementById('agregar').value = "";
 
}

function mostrarLista(){
  let listaDuenios = document.getElementById("duenios");
  listaDuenios.innerHTML="";

  for (let i = 0; i < auto.dueniosAnteriores.length; i++){
    let unDuenio = document.createElement("li");
    unDuenio.innerText = auto.dueniosAnteriores[i];
    listaDuenios.appendChild(unDuenio);
  
  }
}

mostrarLista();