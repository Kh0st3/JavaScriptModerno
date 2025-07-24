const producto = '                 Monitor 24 Pulgadas                     ';

console.log(producto);
console.log(producto.length);


// Eliminar del inicio...
console.log(producto.trimStart());
// Eliminar del final...
console.log(producto.trimEnd());

// Eliminar del inicio y del final...
console.log(producto.trimStart().trimEnd());

// Eliminar del inicio y final...
console.log(producto.trim())