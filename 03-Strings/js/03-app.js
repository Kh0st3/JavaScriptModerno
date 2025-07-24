const producto = 'Monitor 24 Pulgadas ';
const precio  = '30 USD ';

// Metodo para concatenar dos constantes
console.log(producto.concat (precio));

// Tambien se puede cambiar lo que se muestre especificamente
console.log(producto.concat ('En descuento'));

console.log( producto + "Con un precio de: " + precio );

console.log("El producto " + producto + "tiene un precio de: " + precio);

console.log(`El producto ${producto} tiene un precio de $${precio}`);