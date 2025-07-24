const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},

]

// .map crea un nuevo arreglo, mientras el forEach no, se declara un undefined en consola "Arreglo2"
const nuevoArreglo = carrito.map( function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

// Array Method
const nuevoArreglo2 = carrito.forEach( function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);