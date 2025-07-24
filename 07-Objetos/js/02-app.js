const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
};

console.log(producto);

// Esta es la forma de acceder a un componente de un objeto
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Esta es la segunada forma menos conocida para acceder a un componente de un objeto
console.log(producto["nombre"]);
console.log(producto["precio"]);
console.log(producto["disponible"]);