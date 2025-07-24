const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
};

//const nombre = producto.nombre;
//console.log(nombre);
// Destructuracion de un objeto "Destructuring"
const { nombre, precio, disponible } = producto;
// const { precio} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);