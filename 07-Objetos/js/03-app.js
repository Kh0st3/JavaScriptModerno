const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
};

// Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

// Cuando se desea eliminar un atributo del objeto
delete producto.disponible;

console.log(producto);