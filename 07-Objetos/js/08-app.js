"use strict";
// use strict se implementa al comienzo del codigo para usar los metodos estrictos de javascript
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
};
// Object.freeze se utiliza para congelar una variable del objeto
Object.freeze( producto );

//producto.disponible = false;
//producto.imagen = "imagen.jpg";

console.log(producto);
// Metodo para identificar si alguna variable se encuentra congelada
console.log(Object.isFrozen(producto));