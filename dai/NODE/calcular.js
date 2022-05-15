
// guardamos en una constante el % de IVA
const IVA = 0.21;
                     
// la función recibe por parámetro un precio y le sumamos el IVA
const calcularPrecio = (precio) => precio + (precio * IVA);
                       
// finalmente, exportamos la función
module.exports = calcularPrecio;
