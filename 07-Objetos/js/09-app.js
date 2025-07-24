"use strict";
// use strict se implementa al comienzo del codigo para usar los metodos estrictos de javascript
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
};
// Object.seal se utiliza para sellar una variable del objeto, es decir, no permite eliminar o agregar variables al objeto pero si modificar
Object.seal( producto );

producto.disponible = false;
//producto.imagen = "imagen.jpg";
//delete producto.precio;

console.log(producto);
// Para comprobar si un objeto esta sellado
console.log(Object.isSealed(producto));
