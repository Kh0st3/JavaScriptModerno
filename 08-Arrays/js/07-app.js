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

const producto4 = {
    nombre: 'Celular2',
    precio: 100
}

// .push agrega al final de un arreglo
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);

const producto3 = {
    nombre: 'Teclado',
    precio:50
}

carrito.unshift(producto3);
console.table(carrito);
/*
// Eliminar el ultimo elemento de un arreglo...
carrito.pop();
console.table(carrito);

// Eliminar del inicio del arreglo...
carrito.shift();
console.table(carrito);
*/

//.splice se utiliza para eliminar un elemento en especifico del arreglo, solicita dos variable, 1era la posicion donde deseo que arranque, y 2da cuantos elementos deseo eliminar ".splice(1, 1)"
carrito.splice(1, 1);
console.table(carrito);