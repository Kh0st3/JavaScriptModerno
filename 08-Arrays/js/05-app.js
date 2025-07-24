/*
Ejemplo de arreglos
const meses = ['Enero', 'Febrero', 'Marzo'];

meses[3] = 'Abril';

meses.push('Abril');
meses.push('Mayo');

console.table(meses);
*/

const carrito  = [];

// Definir un producto

const producto = {
    nombre: 'Monitor de 32 pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}
// .push agrega al final de un arreglo
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: 'Teclado',
    precio:50
}
// .unshift empuja el arreglo a la primera parte del arreglo a visualizar en consola
carrito.unshift(producto3);

console.table(carrito);